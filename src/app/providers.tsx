'use client';

import type { JSX } from 'react';
import React from 'react';
import type { TelegramWebAppData } from '@tonsolutions/telemetree-react';
import {
  TrackGroups,
  TwaAnalyticsProvider,
} from '@tonsolutions/telemetree-react';
import { useInitData, useLaunchParams } from '@telegram-apps/sdk-react';

const Providers: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
  const initData = useInitData();
  const launchParams = useLaunchParams();
  console.log('launchParams', launchParams);
  console.log('initData', initData);

  const telegramWebAppData: TelegramWebAppData = {
    query_id: initData?.queryId,
    user: initData?.user,
    chat_type: initData?.chatType,
    chat_instance: initData?.chatInstance,
    start_param: initData?.startParam,
    auth_date: initData?.authDate,
    hash: initData?.hash,
    platform: launchParams?.platform,
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
