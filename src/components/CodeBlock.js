import React from 'react';
import Highlight from 'react-highlight.js';

const CodeBlock = ({ language, value }) => (
  <Highlight language={language}>{value}</Highlight>
);

export default CodeBlock;
