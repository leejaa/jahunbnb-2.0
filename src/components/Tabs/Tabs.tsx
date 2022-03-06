import { css } from '@emotion/react';
import React, { FunctionComponent, useCallback, useState } from 'react';
import TabsComponent from '@mui/material/Tabs';
import TabComponent from '@mui/material/Tab';

interface TabsProps {}

const Tabs: FunctionComponent<TabsProps> = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setTabIndex(newValue);
    },
    []
  );
  return (
    <TabsComponent
      value={tabIndex}
      onChange={handleChangeTab}
      aria-label="main tabs"
      sx={{
        '& .MuiTab-textColorPrimary': {
          color: 'white',
        },
        '& .MuiTab-root.Mui-selected': {
          color: 'white',
        },
        '& .MuiTabs-indicator': {
          backgroundColor: 'white',
        },
      }}
    >
      <TabComponent label="숙소" />
      <TabComponent label="체험" />
      <TabComponent label="온라인체험" />
    </TabsComponent>
  );
};

export default Tabs;
