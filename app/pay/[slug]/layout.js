'use client'

// app/pay/[slug]/layout.js
import { useEffect } from 'react';
import { loadTheme } from '@/lib/themes';
import { getShellBySlug } from '@/lib/storage';
import { useParams } from 'next/navigation';

export default function PayLayout({ children }) {
  const { slug } = useParams();

  useEffect(() => {
    getShellBySlug(slug).then(shell => {
      if (shell) loadTheme(shell.theme);
    });
  }, [slug]);

  // **DO NOT** render <html> or <body> here!
  return <>{children}</>;
}
