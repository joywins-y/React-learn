import React from 'react';
import { A, B } from './components/HocComp';
import withLog from './HOC/withLog';
import Test from './components/CheckBoxGroup/Test';
import Test1 from './components/RadioBoxGroup/Test';
import Test2 from './components/Select/Test';

const ALog = withLog(A);
const BLog = withLog(B);

export default function App() {
  return (
    <div>
      <ALog />
      <BLog />
      <Test />
      <Test1 />
      <Test2 />
    </div>
  );
}
