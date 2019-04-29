import * as wasm from '../../../pkg';
import { Sim } from '../constants';

export default function detectResult (type: Sim, debt: number, interest: number, perMonth: number, times: number): [boolean, any] {
  switch (type) {
  case Sim.ByPerMonth:
    return wasm.by_per_month(debt, interest, perMonth);
  case Sim.ByTimes:
    return wasm.by_times(debt, interest, times);
  default:
    return [false, null];
  }
}
