import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  [key: string]: unknown;
}

export default function Page({}: PageProps) {
  return <Header>Companies</Header>;
}
