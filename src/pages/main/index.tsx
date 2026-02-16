import type { Component } from 'solid-js';
import { AboutUs, CustomerReview, Head, HowToJoin, InvestmentPhilosophy, PassiveCashFlow } from './components';
import { Insights, ConnectWithUs } from '@components';
import { Show } from 'solid-js';
import { config } from '@config';

const { modules } = config.main;

const MainPage: Component = () => {
  return (
    <>
      <Show when={modules.head} keyed>
        <Head />
      </Show>
      <Show when={modules.passiveCashFlow} keyed>
        <PassiveCashFlow />
      </Show>
      <Show when={modules.aboutUs} keyed>
        <AboutUs />
      </Show>
      <Show when={modules.howToJoin} keyed>
        <HowToJoin />
      </Show>
      <Show when={modules.InvestmentPhilosophy} keyed>
        <InvestmentPhilosophy />
      </Show>
      <Show when={modules.customerReview} keyed>
        <CustomerReview />
      </Show>
      <Show when={modules.insights} keyed>
        <Insights isMainPage={true} />
      </Show>
      <Show when={modules.connectWithUs} keyed>
        <ConnectWithUs />
      </Show>
    </>
  );
};

export default MainPage;
