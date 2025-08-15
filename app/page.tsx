// FR by default, with client-side redirect to /en if needed
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import MainPage from "@/app/MainPage";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    try {
      const lang = (navigator.language || "").toLowerCase();
      if (!lang.startsWith("fr")) {
        router.replace("/en");
      }
    } catch {}
  }, [router]);

  return <MainPage lang="fr" />;
}
