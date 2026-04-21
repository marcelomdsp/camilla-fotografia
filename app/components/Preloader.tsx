"use client";
import { useState, useEffect } from "react";


export function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;
  return (
    <div className="fixed inset-0 flex flex-col gap-5 items-center justify-center bg-(--branco)/80 z-50 transition-opacity duration-500">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-(--vinho) border-t-(--bege)"></div>
      <p className="animate-pulse">Carregando...</p>
    </div>
  );
}
