import { default as React } from 'react';
import detectErrorMessage from '../libs/detectErrorMessage';

export default function ErrorMessage ({ value }: { value: null | string }) {
  if (!value) {
    return null;
  }

  return (
    <div className='error-message'>{detectErrorMessage(value)}</div>
  );
}
