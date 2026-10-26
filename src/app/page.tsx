'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Default to English
    router.replace('/en');
  }, [router]);

  return (
    <div className="bg-white flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-secondary border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-stone-500 font-medium">Redirecting...</p>
      </div>
    </div>
  );
}
