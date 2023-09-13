import React from 'react';
import { LaunchpadCards } from '@cleartax/mtsg-ui';

export const Launchpad = () => {
  return (
    <LaunchpadCards
      {...{
        icon: 'https://assets1.cleartax-cdn.com/cleartax/images/1644238215_lp2icons1.svg',
        backgroundColorClass: 'bg-orange-400',
        cardName: 'GSTR 1',
        cardDescription:
          'Monthly/Quarterly return for declaring outward supplies',
        onCardClick: () => console.log('hi'),
        newTag: true,
        newTagBackgroundColorClass: 'bg-orange-500',
        isAccessible: true,
        includeLicensingWrapper: true,
      }}
    />
  );
};
