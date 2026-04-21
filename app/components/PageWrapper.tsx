'use client';

import { useState, useEffect } from 'react';
import { Preloader } from '@/app/components/Preloader';

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <div className={`${
        loading ? 'opacity-0' : 'opacity-100'
      } transition-opacity duration-700 h-full`}>
        {children}
      </div>
    </>
  );
}