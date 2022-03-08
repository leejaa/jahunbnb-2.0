import { css } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import {
  BaseButton,
  IconMenuButton,
  IconMessageButton,
  SearchButton,
} from 'components/Button';
import { AirbnbLogo } from 'components/Icon';
import { Tabs } from 'components/Tabs';
import React, { FunctionComponent } from 'react';
import mediaQuery from 'styles/mediaQuery';
import LanguageIcon from '@mui/icons-material/Language';

interface Props {
  colorInvert: boolean;
}

const Header: FunctionComponent<Props> = (props) => {
  const { colorInvert } = props;

  return (
    <header
      css={css`
        grid-area: header;
        background-color: ${colorInvert ? 'white' : 'black'};
        padding: 1rem 5rem 1rem 5rem;

        color: ${colorInvert ? 'black' : 'white'};
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
        <IconMessageButton colorInvert={colorInvert}>
          어디로 여행가세요?
        </IconMessageButton>
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
          {colorInvert ? (
            <SearchButton>검색 시작하기</SearchButton>
          ) : (
            <Tabs colorInvert={colorInvert} />
          )}
        </div>
        <div
          css={css`
            display: flex;
          `}
        >
          <BaseButton
            colorInvert={colorInvert}
            textColor={colorInvert ? 'black' : 'white'}
          >
            호스트 되기
          </BaseButton>
          <IconButton
            color="inherit"
            sx={{
              '&:hover': {
                backgroundColor: colorInvert ? '#f7f7f7' : '#262626',
              },
            }}
          >
            <LanguageIcon fontSize="small" />
          </IconButton>
          <IconMenuButton
            menu={[
              { id: 0, name: '회원가입' },
              { id: 1, name: '로그인' },
              { id: 2, name: '숙소 호스트 되기' },
              { id: 3, name: '체험 호스팅하기' },
              { id: 4, name: '도움말' },
            ]}
            css={css`
              margin-left: 12px;
            `}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
