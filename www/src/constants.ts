export enum Sim {
  ByPerMonth = 'ByPerMonth',
  ByTimes = 'ByTimes',
}

export type Params = {
  realDebt: number
  type: Sim
  perMonth: number
  times: number
}

export const defaultParams = {
  type: Sim.ByTimes,
  debt: 50,
  interest: 17.8,
  perMonth: 15000,
  times: 60,
};

export type DefaultParams = typeof defaultParams;
