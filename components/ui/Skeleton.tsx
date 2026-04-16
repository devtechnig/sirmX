'use client';

import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'circle' | 'rectangle' | 'text';
}

export default function Skeleton({ className, variant = 'rectangle', ...props }: SkeletonProps) {
  const variantClasses = {
    circle: 'rounded-full',
    rectangle: 'rounded-2xl',
    text: 'rounded-md h-4 w-full',
  };

  return (
    <div
      className={cn(
        'animate-shimmer bg-on-surface/5 dark:bg-dash-on-surface/5',
        variantClasses[variant],
        className
      )}
      {...props}
    />
  );
}
