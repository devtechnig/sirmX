'use client';

import React from 'react';
import Skeleton from '../ui/Skeleton';

export default function SkeletonActivity() {
  return (
    <div className="dash-card rounded-[3rem] p-9 flex flex-col bg-dash-surface">
      <div className="flex items-center justify-between mb-10">
        <Skeleton variant="text" className="h-8 w-40" />
        <Skeleton variant="text" className="w-12 h-6 rounded-full" />
      </div>
      
      <div className="flex-1 space-y-9">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex gap-6">
            <Skeleton variant="circle" className="w-7 h-7 shrink-0" />
            <div className="flex-1 space-y-2">
              <Skeleton variant="text" className="w-3/4" />
              <Skeleton variant="text" className="w-full opacity-60" />
              <Skeleton variant="text" className="w-16 h-4 mt-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
