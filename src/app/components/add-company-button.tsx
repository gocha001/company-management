'use client';

import React from 'react';
import Button from '@/app/components/button';
import { useRouter } from 'next/navigation';

export interface AddCompanyButtonProps {
  [key: string]: unknown;
}

export default function AddCompanyButton({}: AddCompanyButtonProps) {
  const router = useRouter();
  return (
    <>
      <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
