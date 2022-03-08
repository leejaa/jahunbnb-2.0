import { css } from '@emotion/react';
import React, { FunctionComponent, useCallback, useState } from 'react';
import TabsComponent from '@mui/material/Tabs';
import TabComponent from '@mui/material/Tab';

interface TabsProps {
  colorInvert: boolean;
}

const Tabs: FunctionComponent<TabsProps> = (props) => {
  const { colorInvert } = props;
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
          color: colorInvert ? 'black' : 'white',
          fontWeight: 700,
        },
        '& .MuiTab-root.Mui-selected': {
          color: colorInvert ? 'black' : 'white',
          fontWeight: 900,
        },
        '& .MuiTabs-indicator': {
          backgroundColor: colorInvert ? 'black' : 'white',
          maxWidth: 30,
          marginLeft: '30px',
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
