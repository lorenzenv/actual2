interface BaseTemplate {
  type: string;
  priority?: number;
  directive: string;
}

interface PercentageTemplate extends BaseTemplate {
  type: 'percentage';
  percent: number;
  previous: boolean;
  category: string;
}

interface WeekTemplate extends BaseTemplate {
  type: 'week';
  amount: number;
  weeks: number | null;
  starting: string;
  limit?: {
    amount: number;
    hold: boolean;
    period?: 'daily' | 'weekly' | 'monthly';
    start?: string;
  };
}

interface ByTemplate extends BaseTemplate {
  type: 'by';
  amount: number;
  month: string;
  annual?: boolean;
  repeat?: number;
  from?: string;
}

interface SpendTemplate extends BaseTemplate {
  type: 'spend';
  amount: number;
  month: string;
  from: string;
  annual?: boolean;
  repeat?: number;
}

interface SimpleTemplate extends BaseTemplate {
  type: 'simple';
  monthly?: number;
  limit?: {
    amount: number;
    hold: boolean;
    period?: 'daily' | 'weekly' | 'monthly';
    start?: string;
  };
}

interface ScheduleTemplate extends BaseTemplate {
  type: 'schedule';
  name: string;
  full?: boolean;
  adjustment?: number;
}

interface RemainderTemplate extends BaseTemplate {
  type: 'remainder';
  weight: number;
  limit?: {
    amount: number;
    hold: boolean;
    period?: 'daily' | 'weekly' | 'monthly';
    start?: string;
  };
}

interface AverageTemplate extends BaseTemplate {
  type: 'average';
  numMonths: number;
}

interface GoalTemplate extends BaseTemplate {
  type: 'goal';
  amount: number;
}

interface CopyTemplate extends BaseTemplate {
  type: 'copy';
  lookBack: number;
}

interface ErrorTemplate extends BaseTemplate {
  type: 'error';
  line: string;
  error: string;
}

export type Template =
  | PercentageTemplate
  | WeekTemplate
  | ByTemplate
  | SpendTemplate
  | SimpleTemplate
  | ScheduleTemplate
  | RemainderTemplate
  | AverageTemplate
  | GoalTemplate
  | CopyTemplate
  | ErrorTemplate;
