import { createClient } from "@/lib/supabase/server";
import GalleryManager from "@/components/views/admin/galleryManager";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  const { data: images } = await supabase
    .from("gallery_images")
    .select("*")
    .order("sort_order", { ascending: true });

  return <GalleryManager initialImages={images ?? []} />;
}
