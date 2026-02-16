import type { Component } from 'solid-js';
import { lazy, Show } from 'solid-js';
import { Routes, Route, Router } from '@solidjs/router';
import { routesPath } from '@routesPath';

import GetGuidePopup from './components/getGuidePopup';
import { config } from '@config';

const Header = lazy(() => import('src/components/header'));
const Footer = lazy(() => import('src/components/footer'));
const About = lazy(() => import('src/pages/about'));
const Contact = lazy(() => import('src/pages/contact'));
const Insight = lazy(() => import('src/pages/insights'));
const Main = lazy(() => import('src/pages/main'));
const Portfolio = lazy(() => import('src/pages/portfolio'));

import './app.scss';

const App: Component = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={routesPath.main.path} component={Main} />
        <Route path={routesPath.about.path} component={About} />
        <Route path={routesPath.portfolio.path} component={Portfolio} />
        <Route path={routesPath.insights.path} component={Insight} />
        <Route path={routesPath.contact.path} component={Contact} />
      </Routes>
      <Show when={config.freeInvestmentGuide.moduleIsActive} keyed>
        <GetGuidePopup />
      </Show>
      <Footer />
    </Router>
  );
};

export default App;
