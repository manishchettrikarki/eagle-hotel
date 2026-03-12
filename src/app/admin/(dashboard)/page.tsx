import { createClient } from "@/lib/supabase/server";
import Link from "next/link";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [{ count: eventCount }, { count: galleryCount }] = await Promise.all([
    supabase.from("events").select("*", { count: "exact", head: true }),
    supabase.from("gallery_images").select("*", { count: "exact", head: true }),
  ]);

  const stats = [
    {
      label: "Total Events",
      value: eventCount ?? 0,
      href: "/admin/events",
      color: "bg-[var(--gold)]",
    },
    {
      label: "Gallery Images",
      value: galleryCount ?? 0,
      href: "/admin/gallery",
      color: "bg-[var(--navy)]",
    },
  ];

  return (
    <div className="max-w-225 mx-auto">
      <div className="mb-8">
        <h1 className="font-display text-(--navy) text-[1.8rem] font-normal">
          Welcome back ✦
        </h1>
        <p className="text-(--charcoal)/60 text-[0.88rem] font-light mt-1">
          Hotel Eagle Mountain · Admin Dashboard
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
        {stats.map((s) => (
          <Link
            key={s.label}
            href={s.href}
            className="bg-white border border-(--navy)/8 p-6 flex items-center gap-5 hover:border-(--gold) transition-all duration-300 group"
          >
            <div
              className={`${s.color} w-12 h-12 flex items-center justify-center shrink-0`}
            >
              <span className="font-display text-white text-[1.2rem] font-normal">
                {s.value}
              </span>
            </div>
            <div>
              <p className="text-(--navy) text-[0.88rem] font-medium">
                {s.label}
              </p>
              <p className="text-(--navy)/40 text-[0.72rem] mt-0.5 group-hover:text-(--gold) transition-colors">
                Manage →
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="bg-white border border-(--navy)/8 p-6">
        <p className="text-[0.62rem] tracking-[0.2em] uppercase text-(--gold) mb-4">
          Quick actions
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/events?new=true"
            className="bg-(--navy) text-white px-5 py-2.5 text-[0.72rem] tracking-[0.12em] uppercase font-medium hover:bg-(--gold) hover:text-(--navy) transition-all duration-300"
          >
            + New event
          </Link>
          <Link
            href="/admin/gallery"
            className="border border-(--navy)/20 text-(--navy) px-5 py-2.5 text-[0.72rem] tracking-[0.12em] uppercase font-medium hover:border-(--gold) hover:text-(--gold) transition-all duration-300"
          >
            Upload images
          </Link>
          <Link
            href="/"
            target="_blank"
            className="border border-(--navy)/20 text-(--navy) px-5 py-2.5 text-[0.72rem] tracking-[0.12em] uppercase font-medium hover:border-(--gold) hover:text-(--gold) transition-all duration-300"
          >
            View website
          </Link>
        </div>
      </div>
    </div>
  );
}
