import { ReactNode } from "react";
import AppLayout from "@/layouts/app.layout";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return <AppLayout>{children}</AppLayout>;
}
