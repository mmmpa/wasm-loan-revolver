import React from 'react';
import { Row } from '../../../pkg';
import Delim from './Delm';

export default function ResultRow ({ value: { turn, next_rest, amount, principal, interest_amount, next_interest_amount } }: { value: Row }) {
  return (
    <tr className='repayments__row'>
      <td className='repayments__turn'><Delim>{turn}</Delim> 回目</td>
      <td className='repayments__amount'><Delim>{amount}</Delim></td>
      <td className='repayments__principal'>&nbsp;( <span className='repayments__principal__amount'><Delim>{principal}</Delim></span> +
      </td>
      <td className='repayments__interest'>&nbsp;
        <span className='repayments__interest__amount'><Delim>{interest_amount}</Delim></span> ) 円
      </td>
      <td className='repayments__rest'>
        <span className='repayments__next_rest__amount'><Delim>{next_rest}</Delim></span> 円
      </td>
      <td className='repayments__next_interest'>
        <span className='repayments__next_interest__amount'><Delim>{next_interest_amount}</Delim></span> 円
      </td>
    </tr>
  );
}
