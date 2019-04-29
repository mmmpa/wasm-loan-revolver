import { default as React, FormEvent, useEffect, useState } from 'react';
import classNames from 'classnames';
import Cookie from 'js-cookie';
import Detector from './conponents/Detector';
import ErrorMessage from './conponents/ErrorMessage';
import ResultMessage from './conponents/ResultMessage';
import ResultTable from './conponents/ResultTable';
import { DefaultParams, Params, Sim } from './constants';
import detectResult from './libs/detextResult';
import setNum from './libs/setNum';
import { Result } from './types';

export default function Container ({ type: defType, debt: defDebt, interest: defInterest, perMonth: defPerMonth, times: defTimes }: DefaultParams) {
  const [type, setType] = useState<Sim>(defType);
  const [debt, setDebt] = useState(defDebt);
  const [times, setTimes] = useState(defTimes);
  const [interest, setInterest] = useState(defInterest);
  const [perMonth, setPerMonth] = useState(defPerMonth);

  const [params, setParams] = useState<null | Params>(null);
  const [result, setResult] = useState<null | Result>(null);
  const [error, setError] = useState<null | string>(null);

  const realDebt = debt * 10000;

  function resetType (next: Sim) {
    if (type === next) {
      return;
    }

    setResult(null);
    setType(next);
  }

  function Tabs () {
    const byTimesClasses = classNames(type === Sim.ByTimes ? 'tabs__item--active' : 'tabs__item');
    const byPerMonthClasses = classNames(type === Sim.ByPerMonth ? 'tabs__item--active' : 'tabs__item');

    return (
      <div className='tabs'>
        <button className={byTimesClasses} type='button' onClick={() => resetType(Sim.ByTimes)}>
          <i className='fa fa-donate mr-1' />
          ご返済金額シミュレーション
        </button>
        <button className={byPerMonthClasses} type='button' onClick={() => resetType(Sim.ByPerMonth)}>
          <i className='far fa-calendar-alt mr-1' />
          ご返済期間シミュレーション
        </button>
      </div>
    );
  }

  function success (result: Result) {
    setResult(result);
    setError(null);
  }

  function fail (result: string) {
    setResult(null);
    setError(result);
  }

  function submit (e?: FormEvent) {
    e && e.preventDefault();
    setParams({ type, realDebt, perMonth, times });
    const [succeeded, result] = detectResult(type, realDebt, interest, perMonth, times);

    succeeded ? success(result as Result) : fail(result as string);
  }

  useEffect(() => {
    Cookie.set('default', { type, debt, interest, perMonth, times });
  }, [type, debt, interest, perMonth, times]);

  return (
    <div className='app_container'>
      <h1 className='title'>
        <i className='fas fa-calculator mr-1' />
        リボ払い・消費者金融・カードローンシミュレーター (概算)
      </h1>
      <form onSubmit={submit}>
        <div className='form_container'>
          <Tabs />
          <div className='inputs'>
            <div className='inputs__item'>
              <label htmlFor='debt'>
                <i className='far fa-money-bill-alt mr-1' />
                お借入希望額
              </label>
              <div className='inputs__item__input'>
                <input id='debt' type='number' value={debt} onChange={setNum(setDebt)} />
                <div className='inputs__item__input__unit'>万円</div>
              </div>
            </div>
            <Detector {...{ type, times, setTimes, perMonth, setPerMonth }} />
            <div className='inputs__item'>
              <label htmlFor='interest'>
                <i className='fas fa-chart-line mr-1' />
                お借入金利（年率）
              </label>
              <div className='inputs__item__input'>
                <input id='interest' type='number' value={interest} onChange={setNum(setInterest)} />
                <div className='inputs__item__input__unit'>%</div>
              </div>
            </div>
          </div>
          <div className='button_area'>
            <button className='start_button' type='submit'>
              <i className='fas fa-calculator mr-1' />
              シミュレーション実行
            </button>
          </div>
          <ErrorMessage value={error} />
        </div>
      </form>
      <div className='result_container'>
        <ResultMessage value={result} params={params} />
      </div>
      <div className='result_container'>
        <ResultTable value={result} params={params} />
      </div>
    </div>
  );
}
