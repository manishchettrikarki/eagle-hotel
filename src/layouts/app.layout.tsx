import Header from "@/components/app/header";
import { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-300">
      <Header />

      <main className="min-h-screen">{children}</main>

      <footer className="border-t p-6 text-center text-sm">
        © {new Date().getFullYear()} Hotel Website
      </footer>
    </div>
  );
}
