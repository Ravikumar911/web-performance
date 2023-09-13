import React from 'react';
import { createRoot } from 'react-dom/client';
//@ts-expect-error
import Nav from 'header-remote/Nav';
import { OverviewCard } from '@cleartax/mtsg-ui';
// import { MainThread } from './components/MainThread';
// import { WorkerThread } from './components/WorkerThread';

import { Tailwind } from './components/Tailwind';

import './index.scss';

const App: React.FC = () => {
  return (
    <>
      <Nav></Nav>
      <OverviewCard />
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <Tailwind />
      </div>
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
