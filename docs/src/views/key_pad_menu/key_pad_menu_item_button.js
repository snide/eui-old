import React from 'react';

import {
  KuiIcon,
  KuiKeyPadMenuItemButton,
} from '../../../../src/components';

export default () => (
  <KuiKeyPadMenuItemButton
    label="Dashboard"
    onClick={() => window.alert('Clicked')}
  >
    <KuiIcon type="dashboardApp" size="large" />
  </KuiKeyPadMenuItemButton>
);
