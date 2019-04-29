import React from 'react';
import withDelimiter from '../libs/withDelimiter';

export default function Delim ({ className = '', children }) {
  return (
    <span className={className}>{withDelimiter(children)}</span>
  );
}
