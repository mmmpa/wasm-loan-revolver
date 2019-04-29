import { default as React } from 'react';
import { Sim } from '../constants';
import setNum from '../libs/setNum';

export default function Detector ({ type, times, setTimes, perMonth, setPerMonth }) {
  switch (type) {
  case Sim.ByTimes:
    return (
      <div className='inputs__item'>
        <label htmlFor='times'>
          <i className='far fa-calendar-alt mr-1' />
          ご返済期間
        </label>
        <div className='inputs__item__input'>
          <input id='times' type='number' value={times} onChange={setNum(setTimes)} />
          <div className='inputs__item__input__unit'>ヶ月</div>
        </div>
      </div>
    );
  case Sim.ByPerMonth:
    return (
      <div className='inputs__item'>
        <label htmlFor='debt'>
          <i className='fa fa-donate mr-1' />
          毎月のご返済金額
        </label>
        <div className='inputs__item__input'>
          <input id='debt' type='number' value={perMonth} onChange={setNum(setPerMonth)} />
          <div className='inputs__item__input__unit'>円</div>
        </div>
      </div>
    );
  default:
    return null;
  }
}
