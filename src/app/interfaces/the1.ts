import { Quote } from './quote';

export interface The1 {
  id: number;
  name: string;
  symbol: string;
  last_updated: Date;
  time_open: Date;
  time_close: null;
  time_high: Date;
  time_low: Date;
  quote: Quote;
}
