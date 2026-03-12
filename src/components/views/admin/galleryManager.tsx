"use client";

import { useRef, useState } from "react";
import Image from "next/image";

import { createClient } from "@/lib/supabase/client";
import type { GalleryImage } from "@/lib/supabase/type";

const CATEGORIES = ["Lodge", "Landscape", "Culture", "Dining", "Wellness"];

export default function GalleryManager({
  initialImages,
}: {
  initialImages: GalleryImage[];
}) {
  const supabase = createClient();
  const fileRef = useRef<HTMLInputElement>(null);

  const [images, setImages] = useState<GalleryImage[]>(initialImages);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editImg, setEditImg] = useState<GalleryImage | null>(null);
  const [caption, setCaption] = useState("");
  const [category, setCategory] = useState("Landscape");
  const [filterCat, setFilterCat] = useState("All");
  const [dragOver, setDragOver] = useState(false);

  // ── Upload ──
  const uploadFiles = async (files: FileList | null) => {
    if (!files || files.length === 0) return;
    setUploading(true);
    setError(null);

    for (const file of Array.from(files)) {
      const ext = file.name.split(".").pop();
      const filePath = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

      const { error: upErr } = await supabase.storage
        .from("gallery")
        .upload(filePath, file, { cacheControl: "3600", upsert: false });

      if (upErr) {
        setError(upErr.message);
        continue;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("gallery").getPublicUrl(filePath);

      const { data, error: dbErr } = await supabase
        .from("gallery_images")
        .insert({
          file_path: filePath,
          public_url: publicUrl,
          caption: "",
          category: "Landscape",
          sort_order: images.length,
        })
        .select()
        .single();

      if (dbErr) {
        setError(dbErr.message);
        continue;
      }
      setImages((prev) => [...prev, data]);
    }

    setUploading(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  // ── Delete ──
  const handleDelete = async (img: GalleryImage) => {
    if (!confirm("Delete this image permanently?")) return;
    setDeleting(img.id);

    await supabase.storage.from("gallery").remove([img.file_path]);
    await supabase.from("gallery_images").delete().eq("id", img.id);

    setImages((prev) => prev.filter((i) => i.id !== img.id));
    setDeleting(null);
  };

  // ── Edit caption/category ──
  const openEdit = (img: GalleryImage) => {
    setEditImg(img);
    setCaption(img.caption ?? "");
    setCategory(img.category ?? "Landscape");
  };

  const saveEdit = async () => {
    if (!editImg) return;
    const { data } = await supabase
      .from("gallery_images")
      .update({ caption, category })
      .eq("id", editImg.id)
      .select()
      .single();
    if (data)
      setImages((prev) => prev.map((i) => (i.id === editImg.id ? data : i)));
    setEditImg(null);
  };

  const filtered =
    filterCat === "All"
      ? images
      : images.filter((i) => i.category === filterCat);

  return (
    <div className="max-w-275 mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="font-display text-(--navy) text-[1.6rem] font-normal">
            Gallery
          </h1>
          <p className="text-(--navy)/45 text-[0.8rem] font-light mt-0.5">
            {images.length} images
          </p>
        </div>
        <button
          onClick={() => fileRef.current?.click()}
          disabled={uploading}
          className="bg-(--navy) text-white px-5 py-2.5 text-[0.72rem] tracking-[0.12em] uppercase font-medium hover:bg-(--gold) hover:text-(--navy) transition-all duration-300 disabled:opacity-50 flex items-center gap-2"
        >
          {uploading ? (
            <>
              <svg
                className="animate-spin w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                />
              </svg>
              Uploading…
            </>
          ) : (
            "+ Upload images"
          )}
        </button>
        <input
          ref={fileRef}
          type="file"
          multiple
          accept="image/*"
          className="hidden"
          onChange={(e) => uploadFiles(e.target.files)}
        />
      </div>

      {/* Drop zone */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          uploadFiles(e.dataTransfer.files);
        }}
        onClick={() => fileRef.current?.click()}
        className={`border-2 border-dashed rounded-none px-6 py-8 text-center cursor-pointer transition-all duration-200 mb-6 ${
          dragOver
            ? "border-(--gold) bg-(--gold)/5"
            : "border-(--navy)/15 hover:border-(--navy)/35 bg-white"
        }`}
      >
        <p className="text-(--navy)/40 text-[0.85rem] font-light">
          {uploading
            ? "Uploading…"
            : "Drag & drop images here, or click to select"}
        </p>
        <p className="text-(--navy)/25 text-[0.72rem] mt-1">
          JPG, PNG, WEBP — multiple files supported
        </p>
      </div>

      {error && (
        <p className="text-red-500 text-[0.82rem] bg-red-50 border border-red-200 px-4 py-2 mb-4">
          {error}
        </p>
      )}

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        {["All", ...CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCat(cat)}
            className={`text-[0.65rem] tracking-[0.12em] uppercase px-3 py-1.5 transition-all duration-200 ${
              filterCat === cat
                ? "bg-(--gold) text-(--navy) font-medium"
                : "border border-(--navy)/20 text-(--navy)/50 hover:border-(--gold)"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Image grid */}
      {filtered.length === 0 ? (
        <div className="bg-white border border-(--navy)/8 py-16 text-center">
          <p className="text-(--navy)/30 text-[0.88rem] font-light">
            No images yet. Upload your first one.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {filtered.map((img) => (
            <div
              key={img.id}
              className="group relative aspect-square overflow-hidden bg-(--navy)/5"
            >
              <Image
                src={img.public_url}
                alt={img.caption ?? "Gallery image"}
                fill
                sizes="100vw"
                className="object-cover"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-(--navy)/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-2">
                <p className="text-white text-[0.65rem] text-center line-clamp-2 font-light">
                  {img.caption || "No caption"}
                </p>
                <span className="text-[0.55rem] tracking-widest uppercase text-(--gold) bg-(--gold)/15 px-2 py-0.5">
                  {img.category}
                </span>
                <div className="flex gap-2 mt-1">
                  <button
                    onClick={() => openEdit(img)}
                    className="bg-white text-(--navy) text-[0.65rem] px-2.5 py-1 hover:bg-(--gold) transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(img)}
                    disabled={deleting === img.id}
                    className="bg-red-500 text-white text-[0.65rem] px-2.5 py-1 hover:bg-red-600 transition-colors disabled:opacity-40"
                  >
                    {deleting === img.id ? "…" : "Delete"}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── Edit modal ── */}
      {editImg && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-105 shadow-2xl">
            <div className="bg-(--navy) px-6 py-4 flex items-center justify-between">
              <h2 className="font-display text-white text-[1rem] font-normal">
                Edit image
              </h2>
              <button
                onClick={() => setEditImg(null)}
                className="text-white/40 hover:text-white text-xl"
              >
                ×
              </button>
            </div>
            <div className="p-6 flex flex-col gap-4">
              <Image
                src={editImg.public_url}
                alt=""
                width={600}
                height={160}
                sizes="100vw"
                className="w-full h-40 object-cover"
              />

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                  Caption
                </label>
                <input
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Describe this image..."
                  className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[0.62rem] tracking-[0.12em] uppercase text-(--navy)/55">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="border border-(--navy)/15 px-3 py-2.5 text-[0.88rem] text-(--navy) outline-none focus:border-(--gold) transition-colors bg-white"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3 mt-1">
                <button
                  onClick={saveEdit}
                  className="flex-1 bg-(--gold) text-(--navy) py-3 text-[0.72rem] tracking-[0.15em] uppercase font-medium hover:bg-[#b8904f] transition-all"
                >
                  Save changes
                </button>
                <button
                  onClick={() => setEditImg(null)}
                  className="px-5 border border-(--navy)/20 text-(--navy)/60 text-[0.72rem] tracking-[0.12em] uppercase hover:border-(--navy) transition-all"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
