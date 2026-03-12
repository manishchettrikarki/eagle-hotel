"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AdminLoginPage() {
  const router = useRouter();
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin");
    router.refresh();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{
        backgroundImage: "url('/images/village.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-(--navy)/85" />

      <div className="relative z-10 w-full max-w-105">
        {/* Logo */}
        <div className="text-center mb-8">
          <p className="text-[0.62rem] tracking-[0.35em] uppercase text-(--gold) mb-2">
            ✦ Admin Portal
          </p>
          <h1 className="font-display text-[2rem] text-white font-normal">
            Hotel Eagle Mountain
          </h1>
          <p className="text-white/40 text-[0.78rem] mt-1 font-light">
            Dho Tarap · Upper Dolpa · Nepal
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-sm p-8">
          <h2 className="font-display text-white text-[1.1rem] font-normal mb-6">
            Sign in to continue
          </h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[0.62rem] tracking-[0.15em] uppercase text-white/50">
                Email
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@eaglemountain.com"
                className="bg-white/8 border border-white/15 px-4 py-3 text-[0.88rem] text-white placeholder-white/25 outline-none focus:border-(--gold) transition-colors scheme-dark"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[0.62rem] tracking-[0.15em] uppercase text-white/50">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="bg-white/8 border border-white/15 px-4 py-3 text-[0.88rem] text-white placeholder-white/25 outline-none focus:border-(--gold) transition-colors"
              />
            </div>

            {error && (
              <p className="text-red-400 text-[0.8rem] border border-red-400/20 bg-red-400/8 px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-2 bg-(--gold) text-(--navy) py-3 text-[0.72rem] font-medium tracking-[0.18em] uppercase hover:bg-[#b8904f] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
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
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-white/20 text-[0.7rem] mt-6">
          Restricted access · Hotel Eagle Mountain staff only
        </p>
      </div>
    </div>
  );
}
