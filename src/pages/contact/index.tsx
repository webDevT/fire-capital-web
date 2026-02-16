import type { Component } from 'solid-js';
import { GetStarted } from '@components';
import { Show } from 'solid-js';
import { config } from '@config';
import { Head, ScheduleCall } from './components';

const { modules } = config.contact;

const ContactPage: Component = () => {
  return (
    <>
      <Show when={modules.head} keyed>
        <Head />
      </Show>
      <Show when={modules.scheduleCall} keyed>
        <ScheduleCall />
      </Show>
      <Show when={modules.getStarted} keyed>
        <GetStarted />
      </Show>
    </>
  );
};

export default ContactPage;
