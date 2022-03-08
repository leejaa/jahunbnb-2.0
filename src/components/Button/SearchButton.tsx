import { css } from '@emotion/react';
import { SearchIcon } from 'components/Icon';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const buttonCss = css`
  width: 250px;
  height: 48px;
  border: 1px solid #ededed;
  border-radius: 40px;
  display: flex;
  padding: 0 10px 0 10px;
`;

const SearchButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, children, ...restProps } = props;
    return (
      <button
        css={buttonCss}
        type="button"
        className={className}
        {...restProps}
      >
        <div
          css={css`
            margin-right: auto;
            padding-left: 15px;
            font-size: 14px;
          `}
        >
          검색 시작하기
        </div>
        <div
          css={css`
            border-radius: 50%;
            width: 32px;
            height: 32px;
            background-color: #ff385c;
            padding: 10px;
          `}
        >
          <SearchIcon />
        </div>
      </button>
    );
  }
);

export default SearchButton;
