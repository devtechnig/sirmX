'use client';

import React from 'react';
import Skeleton from '../ui/Skeleton';

export default function SkeletonRisk() {
  return (
    <div className="lg:col-span-2 dash-card rounded-[3rem] p-9 flex flex-col gap-10 bg-dash-surface">
      <div className="flex justify-between items-start">
        <div>
          <Skeleton variant="text" className="h-8 w-64 mb-2" />
          <Skeleton variant="text" className="w-48 opacity-60" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between gap-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="space-y-3.5">
            <div className="flex justify-between items-end">
              <Skeleton variant="text" className="w-32" />
              <Skeleton variant="text" className="w-10 h-6 rounded-lg" />
            </div>
            <Skeleton variant="rectangle" className="h-2.5 w-full rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
