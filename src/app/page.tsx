"use client";  

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function HomePage() {
  useEffect(() => {

    redirect('/login');
  }, []);

  return ;
}
