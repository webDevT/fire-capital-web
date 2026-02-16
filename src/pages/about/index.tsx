import type { Component } from 'solid-js';
import { ConnectWithUs } from '@components';
import { Show } from 'solid-js';
import { config } from '@config';
import { ByTheNumbers, Head, OurCompany, HowWeWork, Philosophy, OurLeader, Advisors } from './components';

const { modules } = config.about;

const AboutPage: Component = () => {
  return (
    <>
      <Show when={modules.head} keyed>
        <Head />
      </Show>
      <Show when={modules.ourCompany} keyed>
        <OurCompany />
      </Show>
      <Show when={modules.philosophy} keyed>
        <Philosophy />
      </Show>
      <Show when={modules.howWeWork} keyed>
        <HowWeWork />
      </Show>
      <Show when={modules.byTheNumbers} keyed>
        <ByTheNumbers />
      </Show>
      <Show when={modules.ourLeader} keyed>
        <OurLeader />
      </Show>
      <Show when={modules.advisors} keyed>
        <Advisors />
      </Show>
      <Show when={modules.connectWithUs} keyed>
        <ConnectWithUs />
      </Show>
    </>
  );
};

export default AboutPage;
