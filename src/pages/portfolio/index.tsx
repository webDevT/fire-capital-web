import type { Component } from 'solid-js';
import { ConnectWithUs } from '@components';
import { Show } from 'solid-js';
import { config } from '@config';
import { Head, AboutPortfolio, CollectionOfInvestment } from './components';

const { modules } = config.portfolio;

const PortfolioPage: Component = () => {
  return (
    <>
      <Show when={modules.head} keyed>
        <Head />
      </Show>
      <Show when={modules.aboutPortfolio} keyed>
        <AboutPortfolio />
      </Show>
      <Show when={modules.collectionOfInvestment} keyed>
        <CollectionOfInvestment />
      </Show>
      <Show when={modules.connectWithUs} keyed>
        <ConnectWithUs />
      </Show>
    </>
  );
};

export default PortfolioPage;
