'use client';

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { mockDashboardData } from './data/mockData';
import MotionWrapper from '@/components/ui/MotionWrapper';
import { motion } from 'framer-motion';

// Skeletons
import SkeletonMetric from '@/components/dashboard/SkeletonMetric';
import SkeletonRisk from '@/components/dashboard/SkeletonRisk';
import SkeletonActivity from '@/components/dashboard/SkeletonActivity';
import SkeletonInsight from '@/components/dashboard/SkeletonInsight';

// Dynamic Exports
const MetricGrid = dynamic(() => import('@/components/dashboard/MetricGrid'), {
  loading: () => <SkeletonMetric />,
  ssr: false
});

const RiskPanel = dynamic(() => import('@/components/dashboard/RiskPanel'), {
  loading: () => <SkeletonRisk />,
  ssr: false
});

const ActivityFeed = dynamic(() => import('@/components/dashboard/ActivityFeed'), {
  loading: () => <SkeletonActivity />,
  ssr: false
});

const AIInsight = dynamic(() => import('@/components/dashboard/AIInsight'), {
  loading: () => <SkeletonInsight />,
  ssr: false
});


export default function DashboardOverview() {
  return (
    <div className="space-y-10">
      {/* Page Header */}
      <MotionWrapper className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-4">
        <div>
          <h2 className="text-4xl font-extrabold font-headline tracking-tighter text-dash-on-surface">Overview</h2>
          <p className="text-dash-on-surface-variant/70 mt-1 font-medium max-w-lg">Real-time regulatory pulse and enterprise compliance metrics for the financial sector.</p>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02, backgroundColor: 'var(--color-dash-surface-container-highest)' }}
          whileTap={{ scale: 0.98 }}
          className="px-6 py-3 bg-dash-surface-container-high text-dash-on-surface font-bold rounded-2xl text-sm border border-dash-outline-variant/10 hover:border-dash-primary/30 hover:shadow-lg transition-all font-headline shadow-sm btn-press focus-ring"
        >
          Generate Audit Report
        </motion.button>
      </MotionWrapper>

      {/* Metric Cards (Premium Bento Grid) */}
      <Suspense fallback={<SkeletonMetric />}>
        <MetricGrid metrics={mockDashboardData.overviewMetrics} />
      </Suspense>

      {/* Main Data Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Risk Exposure Panel */}
        <Suspense fallback={<SkeletonRisk />}>
          <RiskPanel risks={mockDashboardData.categoryRisks} />
        </Suspense>

        {/* Activity Feed */}
        <Suspense fallback={<SkeletonActivity />}>
          <ActivityFeed activities={mockDashboardData.recentActivity} />
        </Suspense>
      </div>

      {/* Intelligent Insights Section */}
      <Suspense fallback={<SkeletonInsight />}>
        <AIInsight />
      </Suspense>
    </div>
  );
}
