'use client';

import type { JSX } from 'react';
import React from 'react';
import type { TelegramWebAppData } from '@tonsolutions/telemetree-react';
import {
  TrackGroups,
  TwaAnalyticsProvider,
} from '@tonsolutions/telemetree-react';
import { useLaunchParams } from '@telegram-apps/sdk-react';

const Providers: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
  const launchParams = useLaunchParams();
  
  console.log('launchParams', launchParams);

  // Handle case where we're not in Telegram environment
  if (!launchParams || !launchParams.initData) {
    console.warn('Not in Telegram Web App environment');
    return <>{children}</>;
  }

  const telegramWebAppData: TelegramWebAppData = {
    query_id: launchParams.initData.queryId,
    user: launchParams.initData.user,
    chat_type: launchParams.initData.chatType,
    chat_instance: launchParams.initData.chatInstance,
    start_param: launchParams.initData.startParam,
    auth_date: launchParams.initData.authDate,
    hash: launchParams.initData.hash,
    platform: launchParams.platform,
  };

  return (
    <TwaAnalyticsProvider
      projectId="df2ff498-ce0d-4678-91a5-bc34d1257b8d"
      apiKey="b01b341d-cf9f-4ddb-b194-cc26bc75e8ad"
      trackGroup={TrackGroups.HIGH}
      telegramWebAppData={telegramWebAppData as TelegramWebAppData}
    >
      {children}
    </TwaAnalyticsProvider>
  );
};

export default Providers;
