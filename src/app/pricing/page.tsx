"use client";
import React from 'react';
import { PricingSection } from '@/components/PricingSection';
import Navbar from '@/components/navbar';

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <div className="mt-20">
        <PricingSection />
      </div>
    </>
  );
}