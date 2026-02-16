import type { Component } from 'solid-js';
import { ConnectWithUs, Insights } from '@components';
import { Show } from 'solid-js';
import { config } from '@config';
import { Head } from './components';

const { modules } = config.insights;

const InsightsPage: Component = () => {
  return (
    <>
      <Show when={modules.head} keyed>
        <Head />
      </Show>
      <Show when={modules.insights} keyed>
        <Insights />
      </Show>
      <Show when={modules.connectWithUs} keyed>
        <ConnectWithUs />
      </Show>
    </>
  );
};

export default InsightsPage;
