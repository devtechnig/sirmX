'use client';

import React from 'react';
import Skeleton from '../ui/Skeleton';

export default function SkeletonInsight() {
  return (
    <div className="bg-dash-surface rounded-[3.5rem] p-10 border border-dash-outline-variant/10 relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        <Skeleton variant="rectangle" className="w-28 h-28 rounded-[2.5rem] shrink-0" />
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3">
            <Skeleton variant="text" className="h-8 w-48" />
            <Skeleton variant="text" className="w-20 h-6 rounded-full" />
          </div>
          <div className="space-y-3">
            <Skeleton variant="text" className="h-10 w-full" />
            <Skeleton variant="text" className="h-10 w-2/3" />
          </div>
          <div className="flex gap-4">
            <Skeleton variant="rectangle" className="h-12 w-40 rounded-2xl" />
            <Skeleton variant="rectangle" className="h-12 w-40 rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
