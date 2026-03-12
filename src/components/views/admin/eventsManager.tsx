"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { Event } from "@/lib/supabase/type";

const TAGS = [
  "Trekking",
  "Wildlife",
  "Culture",
  "Wellness",
  "Photography",
  "Festival",
  "General",
];

const EMPTY: Omit<Event, "id" | "created_at" | "updated_at"> = {
  title: "",
  slug: "",
  tag: "General",
  season: "",
  duration: "",
  capacity: "",
  description: "",
  image_url: "",
  is_active: true,
};

function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function EventsManager({
  initialEvents,
}: {
  initialEvents: Event[];
}) {
  const supabase = createClient();
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Event | null>(null);
  const [form, setForm] = useState(EMPTY);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const openNew = () => {
    setEditing(null);
    setForm(EMPTY);
    setShowForm(true);
    setError(null);
  };
  const openEdit = (e: Event) => {
    setEditing(e);
    setForm({
      title: e.title,
      slug: e.slug,
      tag: e.tag,
      season: e.season ?? "",
      duration: e.duration ?? "",
      capacity: e.capacity ?? "",
      description: e.description ?? "",
      image_url: e.image_url ?? "",
      is_active: e.is_active,
    });
    setShowForm(true);
    setError(null);
  };

  const set =
    (field: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) => {
      const value =
        e.target.type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : e.target.value;
      setForm((prev) => ({
        ...prev,
        [field]: value,
        ...(field === "title" && !editing
          ? { slug: slugify(e.target.value) }
          : {}),
      }));
    };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError(null);

    const payload = { ...form, slug: form.slug || slugify(form.title) };

    if (editing) {
      const { data, error } = await supabase
        .from("events")
        .update(payload)
        .eq("id", editing.id)
        .select()
        .single();
      if (error) {
        setError(error.message);
        setSaving(false);
        return;
      }
      setEvents((prev) => prev.map((ev) => (ev.id === editing.id ? data : ev)));
    } else {
      const { data, error } = await supabase
        .from("events")
        .insert(payload)
        .select()
        .single();
      if (error) {
        setError(error.message);
        setSaving(false);
        return;
      }
      setEvents((prev) => [data, ...prev]);
    }

    setSaving(false);
    setShowForm(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this event? This cannot be undone.")) return;
    setDeleting(id);
    await supabase.from("events").delete().eq("id", id);
    setEvents((prev) => prev.filter((e) => e.id !== id));
    setDeleting(null);
  };

  const toggleActive = async (ev: Event) => {
    const { data } = await supabase
      .from("events")
      .update({ is_active: !ev.is_active })
      .eq("id", ev.id)
      .select()
      .single();
    if (data) setEvents((prev) => prev.map((e) => (e.id === ev.id ? data : e)));
  };

  return (
    <div className="max-w-250 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-(--navy) text-[1.6rem] font-normal">
            Events
          </h1>
          <p className="text-(--navy)/45 text-[0.8rem] font-light mt-0.5">
            {events.length} total
          </p>
        </div>
        <button
          onClick={openNew}
          className="bg-(--navy) text-white px-5 py-2.5 text-[0.72rem] tracking-[0.12em] uppercase font-medium hover:bg-(--gold) hover:text-(--navy) transition-all duration-300"
        >
          + New event
        </button>
      </div>

      {/* Events table */}
      <div className="bg-white border border-(--navy)/8 overflow-hidden">
        {events.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-(--navy)/30 text-[0.88rem] font-light">
              No events yet. Create your first one.
            </p>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-(--navy)/3 border-b border-(--navy)/8">
              <tr>
                {["Title", "Tag", "Season", "Status", "Actions"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-3 text-[0.6rem] tracking-[0.15em] uppercase text-(--navy)/45 font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {events.map((ev, i) => (
                <tr
                  key={ev.id}
                  className={`border-b border-(--navy)/5 ${i % 2 === 0 ? "" : "bg-(--navy)/2"}`}
                >
                  <td className="px-5 py-3.5">
                    <p className="text-(--navy) text-[0.85rem] font-medium">
                      {ev.title}
                    </p>
                    <p className="text-(--navy)/35 text-[0.72rem] font-light">
                      {ev.slug}
                    </p>
                  </td>
                  <td className="px-5 py-3.5">
                    <span className="text-[0.62rem] tracking-widest uppercase bg-(--gold)/15 text-(--gold) px-2 py-1 font-medium">
                      {ev.tag}
                    </span>
                  </td>
                  <td className="px-5 py-3.5 text-(--navy)/55 text-[0.82rem] font-light">
                    {ev.season || "—"}
                  </td>
                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => toggleActive(ev)}
                      className={`text-[0.62rem] tracking-widest uppercase px-2.5 py-1 transition-all ${
                        ev.is_active
                          ? "bg-green-100 text-green-700"
                          : "bg-(--navy)/8 text-(--navy)/40"
                      }`}
                    >
                      {ev.is_active ? "Active" : "Hidden"}
                    </button>
                  </td>
                  <td className="px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => openEdit(ev)}
                        className="text-(--navy)/45 hover:text-(--gold) transition-colors text-[0.75rem]"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(ev.id)}
                        disabled={deleting === ev.id}
                        className="text-(--navy)/35 hover:text-red-500 transition-colors text-[0.75rem] disabled:opacity-40"
                      >
                        {deleting === ev.id ? "…" : "Delete"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* ── Form modal ── */}
      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-start justify-center overflow-y-auto py-10 px-4">
          <div className="bg-white w-full max-w-150 shadow-2xl">
            {/* Modal header */}
            <div className="bg-(--navy) px-6 py-4 flex items-center justify-between">
              <h2 className="font-display text-white text-[1rem] font-normal">
                {editing ? "Edit event" : "New event"}
              </h2>
              <button
                onClick={() => setShowForm(false)}
                className="text-white/40 hover:text-white text-xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 flex flex-col gap-4">
              {/* Title */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                  Title *
                </label>
                <input
                  required
                  value={form.title}
                  onChange={set("title")}
                  className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors"
                />
              </div>

              {/* Slug */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                  Slug *
                </label>
                <input
                  required
                  value={form.slug}
                  onChange={set("slug")}
                  className="border border-(--navy)/15 px-3 py-2.5 text-(--navy) outline-none focus:border-(--gold) transition-colors font-mono text-[0.82rem]"
                />
              </div>

              {/* Tag + Season */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                    Tag
                  </label>
                  <select
                    value={form.tag}
                    onChange={set("tag")}
                    className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors bg-white"
                  >
                    {TAGS.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                    Season
                  </label>
                  <input
                    value={form.season ?? ""}
                    onChange={set("season")}
                    placeholder="e.g. Oct – Nov"
                    className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors"
                  />
                </div>
              </div>

              {/* Duration + Capacity */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                    Duration
                  </label>
                  <input
                    value={form.duration ?? ""}
                    onChange={set("duration")}
                    placeholder="e.g. 8–14 days"
                    className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                    Capacity
                  </label>
                  <input
                    value={form.capacity ?? ""}
                    onChange={set("capacity")}
                    placeholder="e.g. Max 8 guests"
                    className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors"
                  />
                </div>
              </div>

              {/* Image URL */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                  Image URL
                </label>
                <input
                  value={form.image_url ?? ""}
                  onChange={set("image_url")}
                  placeholder="https://..."
                  className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                  Description
                </label>
                <textarea
                  rows={4}
                  value={form.description ?? ""}
                  onChange={set("description")}
                  placeholder="Describe the experience..."
                  className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors resize-none"
                />
              </div>

              {/* Active toggle */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.is_active}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, is_active: e.target.checked }))
                  }
                  className="w-4 h-4 accent-(--gold)"
                />
                <span className="text-[0.82rem] text-(--navy)/70 font-light">
                  Show on website
                </span>
              </label>

              {error && (
                <p className="text-red-500 text-[0.8rem] bg-red-50 border border-red-200 px-3 py-2">
                  {error}
                </p>
              )}

              <div className="flex gap-3 mt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 bg-(--gold) text-(--navy) py-3 text-[0.72rem] tracking-[0.15em] uppercase font-medium hover:bg-[#b8904f] transition-all disabled:opacity-50"
                >
                  {saving
                    ? "Saving…"
                    : editing
                      ? "Update event"
                      : "Create event"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 border border-(--navy)/20 text-(--navy)/60 text-[0.72rem] tracking-[0.12em] uppercase hover:border-(--navy) transition-all"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
