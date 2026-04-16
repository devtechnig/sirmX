export interface MetricCard {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  geos?: string[];
  status?: string;
  barValue?: number;
  segments?: string[];
}

export interface Activity {
  title: string;
  desc: string;
  time: string;
  color: string;
  ring?: string;
}

export interface CategoryRisk {
  label: string;
  value: number;
  color: string;
  text: string;
}

export interface Regulation {
  authority: string;
  short: string;
  name: string;
  desc: string;
  status: string;
  statusColor: string;
  priority: string;
  priorityClass: string;
  deadline: string;
  pulse?: boolean;
}

export interface Task {
  id: string;
  title: string;
  priority: 'high' | 'medium' | 'time' | 'done';
  users: string[];
  link: string;
  progress?: number;
  completed?: boolean;
}

export interface DashboardData {
  overviewMetrics: MetricCard[];
  categoryRisks: CategoryRisk[];
  recentActivity: Activity[];
  regulations: Regulation[];
  tasks: {
    todo: Task[];
    inProgress: Task[];
    review: Task[];
    completed: Task[];
  };
  aiInsights: {
    predictiveAlert: {
      title: string;
      tag: string;
      alertTitle: string;
      alertDesc: string;
      exposure: string;
      timeToCompliance: string;
      affectedAssets: number;
    };
    suggestedActions: { id: string; title: string; desc: string }[];
    heatmapBlocks: { geo: string; title: string; bg: string; border: string; hover: string }[];
    detailCards: { color: string; title: string; desc: string; time: string }[];
  };
}

export const mockDashboardData: DashboardData = {
  overviewMetrics: [
    { label: 'Total Regulations', value: '1,428', trend: '+12%', trendUp: true, geos: ['EU', 'US', 'UK'] },
    { label: 'Compliance Score', value: '84%', status: 'Healthy', barValue: 84 },
    { label: 'Active Tasks', value: '42', status: '8 critical' },
    { label: 'Risk Exposure', value: 'Medium', segments: ['bg-dash-primary/20', 'bg-dash-primary/20', 'bg-dash-secondary/50', 'bg-dash-surface-container-highest', 'bg-dash-surface-container-highest'] },
  ],
  categoryRisks: [
    { label: 'Data Privacy & GDPR', value: 76, color: 'bg-dash-primary', text: 'text-dash-primary' },
    { label: 'Financial Reporting (SEC)', value: 42, color: 'bg-dash-tertiary', text: 'text-dash-tertiary' },
    { label: 'Operational Resiliency', value: 61, color: 'bg-dash-primary-container', text: 'text-dash-primary-container' },
    { label: 'ESG Standards', value: 15, color: 'bg-dash-error', text: 'text-dash-error' },
  ],
  recentActivity: [
    { title: 'New Regulation Detected', desc: 'EU AI Act technical amendments published. AI Insights generating impact summary.', time: 'Just Now', color: 'bg-dash-primary', ring: 'ring-dash-primary/20' },
    { title: 'Task Completed', desc: '"Q3 Cybersecurity Audit" verified by Sarah Jenkins.', time: '2 Hours Ago', color: 'bg-dash-tertiary' },
    { title: 'Compliance Alert', desc: 'Drift detected in "Asset Liquidity" monitoring node.', time: '5 Hours Ago', color: 'bg-dash-error' },
  ],
  regulations: [
    {
      authority: 'FINRA',
      short: 'FI',
      name: 'Rule 3110 (Supervision)',
      desc: 'Updated remote inspection requirements',
      status: 'Action Required',
      statusColor: 'bg-dash-error',
      priority: 'CRITICAL',
      priorityClass: 'bg-dash-error/10 text-dash-error border-dash-error/20',
      deadline: 'Oct 24, 2024',
      pulse: true,
    },
    {
      authority: 'GDPR',
      short: 'GD',
      name: 'Cross-Border Data Flows',
      desc: 'EU-US Data Privacy Framework Compliance',
      status: 'New Update',
      statusColor: 'bg-dash-primary',
      priority: 'HIGH',
      priorityClass: 'bg-dash-primary/10 text-dash-primary border-dash-primary/20',
      deadline: 'Nov 12, 2024',
    },
    {
      authority: 'SEC',
      short: 'SE',
      name: 'Regulation T Revision',
      desc: 'Margin requirements for credit extension',
      status: 'Reviewed',
      statusColor: 'bg-dash-secondary',
      priority: 'MEDIUM',
      priorityClass: 'bg-dash-on-surface-variant/10 text-dash-on-surface-variant border-dash-outline-variant/20',
      deadline: 'Jan 05, 2025',
    },
    {
      authority: 'MiFID II',
      short: 'MI',
      name: 'Transparency Directive',
      desc: 'Revised post-trade reporting protocols',
      status: 'Reviewed',
      statusColor: 'bg-dash-secondary',
      priority: 'LOW',
      priorityClass: 'bg-dash-on-surface-variant/10 text-dash-on-surface-variant border-dash-outline-variant/20',
      deadline: 'Dec 30, 2024',
    },
  ],
  tasks: {
    todo: [
      {
        id: 'GDPR-2024',
        title: 'Quarterly Data Privacy Impact Assessment (DPIA) Review',
        priority: 'high',
        users: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBIchniJjbnABh340bFlPzPBon2RoOgLNbQ9SM_Ht6sjdRM_H127ZsjcdX6RaArwk1gl0bdI7DlblCuNFxzHi1Pd5QWGNmxVYaoJW9yHpOD3fP8_tN0PenguEqw1RDtT0EoW7OikAtpa5YRCKxhSEz7vToAk0-HVtY3X7uHFOpQLKbYY26oGhG2adevPRb2WmFeSJptL3Jbm6xBt8q2tRzDIfWItzGuY3Qgsvv8UhP-_ONcDXOrohcbBJW4BoZACD2nQWa8aw', 'https://lh3.googleusercontent.com/aida-public/AB6AXuCM25Lb6FlYf9A9xVUIh9FtAz5iJDG1Kdsh-QsLXmDbc2IQoy9cS6WcEIX3HGGsJ0M7gKVIPcS5nT73Z3DnOTdzgUL5qpwaHkBvC4WLPiXEoWpOCKwq8Zy1rsctf3pfwsdGrSb4Q_6Lhc7fAPRxw8UzgJwSiPgXtybL4tVY6uxiL33s5kjsTcAc2baMPmEi5K5mz3g-PUTCRCmTxYzgXD-ujhO8a19OVYjMchWOK3ZthPxAzac04E5QAA5vR9-Z7mFG1rCeyw'],
        link: 'Article 35',
      },
      {
        id: 'ISO-27001',
        title: 'Review Access Control Logs for Cloud Infrastructure',
        priority: 'medium',
        users: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAuXFvJE3j-mgAGJRRh3Qh9eUMThy5R_hjC3wgTgOyeUSZg_7YiHqIdxlftFSvQS6eoZjrsnbAGbNP8wplrcz_nVHZ9-sj0KH96YD4NFKjmI4E92wvZR19WXNuyBk0h9fL3umPp83udDGoqtLc0QPdyQG36hCV0U74IqH2R28ZkJioplswPdfEuwZv-nxxmcxtW0pU_V44GC8b417PDrv_JW_mR4XL4jfAOp3qY4dXrUuFgYDVJzcaxhXn5qqmvtsGJ7zSzyw'],
        link: 'Annex A.9',
      },
    ],
    inProgress: [
      {
        id: 'SOC2-TYPEII',
        title: 'Internal Vulnerability Scan & Remediation Plan',
        priority: 'high',
        progress: 65,
        users: ['https://lh3.googleusercontent.com/aida-public/AB6AXuBf9ErvaX5GXW0Vdt8Xg3Gl3sxjEmreVraVNaHR3Igj_MB1zQ0b9s6BPTE6pl85mOUX7jU2qzHrfFPOr_H0Wjaf3ncn9mF654sNi4QPYgw1aob3TyNTlCVno2nmcTWMM0WPqlF50-cayHHjvnFlLaJdFHFjlNddLL5yIwVbjFG1Yj6-JP5VXTpA0gWVE1X8n33mOl4Lki0Q10eM8W-8enbdFEOXqiSvNqukTXZxuBCPaDk3cTB3x1cu9Tg460MlDbRqvMpS2w'],
        link: 'Trust Services',
      },
    ],
    review: [
      {
        id: 'HIPAA',
        title: 'Employee Security Awareness Training Completion Audit',
        priority: 'time',
        users: ['https://lh3.googleusercontent.com/aida-public/AB6AXuD_d7Z9qma7uYU0zGwmq48cp1Ue1EOBU3IRxXFEeoed7Y7wDRbgqXaM1blZJjgzQM86aVJEbelg4h_dDBwvzF1oJU9aaoVs8CW4fgW_9HCJLHfFM9DJrEcEfGhc8tgN1kwmADoMPqJJGV3WK8pniTlKo1xlCBJgbSjWfcbX9Lc-ljKnTBmfw5c5nBW3r17jZ94bhEhtCrjJIubvcRnzZ1MnYs-SIAcntOmgwZA27HOCGZvAlxvY-GyUr1ZUc3732lzPqkXNCg'],
        link: '164.308(a)(5)',
      },
    ],
    completed: [
      {
        id: 'FINRA',
        title: 'Annual Supervisory Controls Review & Certification',
        priority: 'done',
        completed: true,
        users: ['https://lh3.googleusercontent.com/aida-public/AB6AXuAnDL2XZxCKUW7lXXkpv7cXeo8frmwH20leI9RD34G3CgPfnM9R_hG2I1AGIXEKPJUTi5KLTKzq4ZaJDtgMN27GSIt6zSHVteB2_h1P6VxYUQNti4pHj3l1cfeyblQCVpoec1J4_3PEAWJU14xaGekL3vYgaRWuUchH4WRNP2pVoXDeM4Oitf-x4nsrwGjeSMgU73x-HoSNoABN4tHb_ILNTUfaryu_kw2WB5GEkH88PokQc06HepqCiaJP62ecechGlIQzkA'],
        link: 'Rule 3120',
      },
    ],
  },
  aiInsights: {
    predictiveAlert: {
      title: 'EU AI Act Revision Alpha',
      tag: 'Predictive Compliance Alerts',
      alertTitle: 'Potential High-Risk Classification',
      alertDesc: "Current data processing flows for 'Project Sentinel' may be re-classified under Article 6 Annex III. Probability of enforcement: ",
      exposure: 'High',
      timeToCompliance: '14 Days',
      affectedAssets: 12,
    },
    suggestedActions: [
      { id: '01', title: 'Initiate Impact Assessment', desc: 'Automated workflow for Article 6.2' },
      { id: '02', title: 'Review Model Transparency', desc: 'Verify training data metadata' },
      { id: '03', title: 'Archive Legacy Logs', desc: 'Meet new data retention periods' },
    ],
    heatmapBlocks: [
      { geo: 'US', title: 'SEC Data Privacy', bg: 'bg-dash-error/30', border: 'border-dash-error/20', hover: 'hover:bg-dash-error/40' },
      { geo: 'UK', title: 'Fin Conduct', bg: 'bg-dash-primary/20', border: 'border-dash-primary/20', hover: 'hover:bg-dash-primary/30' },
      { geo: 'DE', title: 'Data Sovereignty', bg: 'bg-dash-primary/5', border: 'border-dash-outline-variant/10', hover: 'hover:bg-dash-primary/10' },
      { geo: 'SG', title: 'AI Ethics 2.0', bg: 'bg-dash-error/10', border: 'border-dash-error/10', hover: 'hover:bg-dash-error/20' },
      { geo: 'CA', title: 'Open Banking', bg: 'bg-dash-primary/40', border: 'border-dash-primary/30', hover: 'hover:bg-dash-primary/50' },
      { geo: 'EU', title: 'AI Act Revision', bg: 'bg-dash-error/50', border: 'border-dash-error/40', hover: 'hover:bg-dash-error/60' },
      { geo: 'AU', title: 'Critical Infra', bg: 'bg-dash-primary/10', border: 'border-dash-primary/10', hover: 'hover:bg-dash-primary/20' },
    ],
    detailCards: [
      { color: 'bg-dash-primary', title: 'Summary: COP28 Compliance', desc: 'AI analysis of the recent climate reporting mandates suggests a shift toward mandatory Scope 3 disclosures by Q3 2024. Your current posture is 45% prepared.', time: 'Updated 2h ago' },
      { color: 'bg-dash-error', title: 'Risk: Cross-Border Flows', desc: 'Inconsistency detected in regional data handling procedures for APAC territories. Predicted audit failure risk is rising in the Singapore corridor.', time: 'Updated 10m ago' },
    ],
  },
};
