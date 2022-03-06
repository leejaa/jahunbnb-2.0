import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import LanguageIcon from '@mui/icons-material/Language';
import { Button, IconButton } from '@mui/material';
import { BaseButton, IconMessageButton } from '../components/Button';
import mediaQuery from '../styles/mediaQuery';
import { AirbnbLogo } from '../components/Icon';
import { Tabs } from '../components/Tabs';

const Home: NextPage = () => {
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
      <header
        css={css`
          grid-area: header;
          background-color: black;
          padding: 1rem;

          color: white;
          font-weight: 600;
          font-size: 1rem;

          & > div {
            align-items: center;
          }
        `}
      >
        <div
          css={css`
            ${mediaQuery.sm} {
              display: none;
            }
          `}
        >
          <IconMessageButton>어디로 여행가세요?</IconMessageButton>
        </div>
        <div
          css={css`
            display: none;
            ${mediaQuery.sm} {
              display: flex;
            }
          `}
        >
          <a css={css``}>
            <AirbnbLogo />
          </a>
          <div
            css={css`
              flex-grow: 1;
              display: flex;
              justify-content: center;
            `}
          >
            <Tabs />
          </div>
          <div
            css={css`
              display: flex;
            `}
          >
            <BaseButton>호스트 되기</BaseButton>
            <IconButton
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: '#262626',
                },
              }}
            >
              <LanguageIcon fontSize="small" />
            </IconButton>
          </div>
        </div>
      </header>
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
