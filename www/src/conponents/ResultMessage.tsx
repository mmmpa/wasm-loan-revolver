import React from 'react';
import { Params, Sim } from '../constants';
import { Result } from '../types';
import Delim from './Delm';

export default function ResultMessage ({ value, params }: { value: Result | null, params: Params | null }) {
  if (!value || !params) {
    return null;
  }

  const {
    type,
    perMonth,
    times,
  } = params;
  const {
    total_interest_amount,
    total_months,
    rows: [, { amount }],
  } = value;

  function Foot () {
    return (
      <div className='message_footer'>
        <div>利息が <Delim className='message__interest'>{total_interest_amount}</Delim> 円発生します。
        </div>
      </div>
    );
  }

  if (type === Sim.ByTimes) {
    return (
      <div className='message_container'>
        <div>
          <Delim className='message__times'>{times}</Delim> ヶ月で返済するには、毎月 <Delim className='message__amount'>{amount}</Delim> 円返済する必要があります。
        </div>
        <Foot />
      </div>
    );
  }
  return (
    <div className='message_container'>
      <p>月々 <Delim className='message__per_month'>{perMonth}</Delim> 円返済すると、完済まで <span className='message__months'>{total_months}</span> ヶ月かかります。
      </p>
      <Foot />
    </div>
  );
}
