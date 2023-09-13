import React from 'react';
import { createRoot } from 'react-dom/client';
// @ts-expect-error
// import Nav from 'header-remote/Nav';
// //@ts-expect-error
// import FormsHanson from 'header-remote/FormsHanson';
// //@ts-expect-error
// import Forms3D from 'header-remote/Forms3D';

// import ThreeJSComponent from './components/Launchpad';
// import Handsontable from './components/Handsontable';
// import Card from './components/Card';

// // @ts-ignore
// const Nav = React.lazy(() => import('header-remote/Nav'));
// // @ts-ignore
// const FormsHanson = React.lazy(() => import('header-remote/FormsHanson'));
// // @ts-ignore
// const Forms3D = React.lazy(() => import('header-remote/Forms3D'));

// const ThreeJSComponent = React.lazy(() => import('./components/Launchpad'));
// const Handsontable = React.lazy(() => import('./components/Handsontable'));
// const Card = React.lazy(() => import('./components/Card'));

import { MainThread } from './components/MainThread';
import './index.scss';

const App: React.FC = () => {
  return (
    <>
      <MainThread />
    </>
  );
};

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(<App />);
