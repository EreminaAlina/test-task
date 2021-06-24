import { Status } from './status';
import { The1 } from './the1';

export interface MapInterface {
  data: Record<number, The1>;
  status: Status;
}
