import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import { AppBar, Button, IconButton, useScrollTrigger } from '@mui/material';
import { Header } from 'components/Header';
import { v4 as uuidv4 } from 'uuid';

const Home: NextPage = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return (
    <div
      css={css`
        display: grid;
        grid-template-columns: 1fr;
        grid-template-areas:
          'header'
          'section1'
          'footer';
      `}
    >
      <AppBar position="sticky">
        <Header colorInvert={trigger} />
      </AppBar>
      {Array.from({ length: 50 }).map((item, index) => (
        <br key={uuidv4()} />
      ))}
      <section
        css={css`
          grid-area: section1;
        `}
      >
        section
      </section>
      <footer
        css={css`
          grid-area: footer;
        `}
      >
        footer
      </footer>
    </div>
  );
};

export default Home;
