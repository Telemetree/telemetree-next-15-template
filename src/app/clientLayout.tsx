'use client';

import type { JSX } from 'react';
import React from 'react';
import { SDKProvider } from '@telegram-apps/sdk-react';

import { QueryProvider } from '@/providers/query';
import Providers from '@/app/providers';
// init();
const ClientLayout: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
  console.log(window.location.href);
  return (
    <section className="flex-1">
      <SDKProvider acceptCustomStyles debug>
        <Providers>
          <QueryProvider>{children}</QueryProvider>
        </Providers>
      </SDKProvider>
    </section>
  );
};

export default ClientLayout;
