import React, { useCallback, useState } from 'react';
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import { AppBar, Button, IconButton, useScrollTrigger } from '@mui/material';
import { Header } from 'components/Header';
import { v4 as uuidv4 } from 'uuid';
import mediaQuery from 'styles/mediaQuery';
import { BaseButton } from 'components/Button';

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
      <main
        css={css`
          max-width: calc(100% - 1.5rem);
          width: 100%;
          margin: auto;
          ${mediaQuery.sm} {
            max-width: calc(100% - 10rem);
          }
        `}
      >
        <section
          css={css`
            grid-area: section1;
            margin-top: 80px;
          `}
        >
          <div
            css={css`
              min-height: 465px;
              height: auto;
              background: url('https://a0.muscache.com/im/pictures/a2704500-b282-4411-a2fb-d7f80c4c72a8.jpg?im_w=2560')
                no-repeat center;
              border-radius: 15px;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              color: white;
              padding: 0 24px 48px 24px;
              ${mediaQuery.sm} {
                min-height: 648px;
              }
            `}
          >
            <h1
              css={css`
                font-weight: 600;
                font-size: 28px;
                white-space: pre-line;
                word-break: keep-all;
                text-align: center;
                ${mediaQuery.sm} {
                  font-size: 48px;
                }
              `}
            >
              호기심을 자극하는 숙소로&nbsp;떠나보세요
            </h1>
            <div>
              <BaseButton
                colorInvert
                buttonColor="white"
                textColor="pink"
                css={css`
                  margin: auto;
                  margin-top: 16px;
                `}
              >
                유연한 검색
              </BaseButton>
            </div>
          </div>
        </section>
      </main>
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
