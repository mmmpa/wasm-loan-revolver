import React from 'react';
import { Params } from '../constants';
import { Result } from '../types';
import Delim from './Delm';
import ResultRow from './ResultRow';

export default function ResultTable ({ value, params }: { value: Result | null, params: Params | null }) {
  if (!value || !params) {
    return null;
  }

  const {
    realDebt,
  } = params;
  const {
    total_amount,
    total_interest_amount,
    rows: [{ next_rest, next_interest_amount }, ...rest],
  } = value;

  const rows = rest.map(row => <ResultRow key={row.turn} value={row} />);

  return (
    <div className='repayments'>
      <table className='total_result'>
        <thead>
          <tr>
            <th>借入額</th>
            <th>利息</th>
            <th>総返済額</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Delim className='message__debt'>{realDebt}</Delim>円</td>
            <td>
              <Delim className='message__interest'>{total_interest_amount}</Delim>円
            </td>
            <td><Delim className='message__total_amount'>{total_amount}</Delim>円
            </td>
          </tr>
        </tbody>
      </table>
      <table className='repayments__table'>
        <thead>
          <tr className='repayments__head'>
            <th className='repayments__turn'>返済回</th>
            <th className='repayments__amount'>返済額</th>
            <th className='repayments__principal'>元金</th>
            <th className='repayments__principal'>利息</th>
            <th className='repayments__rest'>残高</th>
            <th className='repayments__next_interest'>次回利息</th>
          </tr>
        </thead>
        <tbody>
          <tr className='repayments__row'>
            <td className='repayments__turn' />
            <td className='repayments__amount' />
            <td className='repayments__principal' />
            <td className='repayments__interest' />
            <td className='repayments__rest'>
              <span className='repayments__next_rest__amount'><Delim>{next_rest}</Delim></span> 円
            </td>
            <td className='repayments__next_interest'>
              <span className='repayments__next_interest__amount'><Delim>{next_interest_amount}</Delim></span> 円
            </td>
          </tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
}
