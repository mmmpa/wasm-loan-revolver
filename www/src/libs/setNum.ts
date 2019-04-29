import { FormEvent } from 'react';

export default function setNum (setter: (n: number) => void) {
  return function fn (e: FormEvent) {
    setter(+(e.target as HTMLInputElement).value.replace(/^0+/g, ''));
  };
}
