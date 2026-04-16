'use client';

import React from 'react';
import Skeleton from '../ui/Skeleton';

export default function SkeletonMetric() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="dash-card rounded-[2.5rem] p-7 relative overflow-hidden bg-dash-surface">
          <Skeleton variant="text" className="w-24 mb-4 opacity-50" />
          <div className="flex items-baseline gap-3">
            <Skeleton variant="rectangle" className="h-10 w-24" />
            <Skeleton variant="rectangle" className="h-4 w-12 rounded-lg" />
          </div>
          <div className="mt-8 w-full bg-dash-surface-container-highest/20 h-2 rounded-full overflow-hidden">
            <div className="bg-dash-surface-container-highest/30 h-full w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
