export type Role = "admin" | "staff" | "viewer";

export interface Profile {
  id: string;
  email: string;
  full_name: string | null;
  role: Role;
  created_at: string;
}

export interface Event {
  id: string;
  title: string;
  slug: string;
  tag: string;
  season: string | null;
  duration: string | null;
  capacity: string | null;
  description: string | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface GalleryImage {
  id: string;
  file_path: string;
  public_url: string;
  caption: string | null;
  category: string;
  sort_order: number;
  created_at: string;
}
