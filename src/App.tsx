import React from 'react';
import { createRoot } from 'react-dom/client';
//@ts-expect-error
import Nav from 'header-remote/Nav';
//@ts-expect-error
import FormsHanson from 'header-remote/FormsHanson';
//@ts-expect-error
import Forms3D from 'header-remote/Forms3D';

import ThreeJSComponent from './components/Launchpad';
import Handsontable from './components/Handsontable';
import Card from './components/Card';

import './index.scss';

const App: React.FC = () => {
  return (
    <>
      <h1>Loaded from App2 Microfrontend</h1>
      <Nav></Nav>
      <Forms3D />
      <div className="mt-10 text-3xl mx-auto max-w-6xl">
        <FormsHanson />
      </div>
      <div className="bg-gray-50 mb-16">
        <h1 className="mt-10">Loaded from App1 Microfrontend</h1>
        <ThreeJSComponent />
        <div className="mt-10 text-3xl mx-auto max-w-6xl">
          <Card />
          <div className="my-6">
            <h1>Summary Table</h1>
          </div>
          <Handsontable />
        </div>
      </div>
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
