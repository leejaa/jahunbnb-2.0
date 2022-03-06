import { css } from '@emotion/react';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const buttonCss = css`
  width: 100%;
  border-radius: 24px;
  padding: 0.8rem 0 0.8rem 0;
  background: white;
  font-size: 0.875rem;
  font-weight: 600;
`;

const IconMessageButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { className, children, ...restProps } = props;
    return (
      <button
        css={buttonCss}
        type="button"
        className={className}
        {...restProps}
      >
        <span
          css={css`
            margin-right: 10px;
          `}
        >
          <SearchIcon
            sx={{
              color: 'rgb(255, 56, 92)',
            }}
          />
        </span>
        {children}
      </button>
    );
  }
);

export default IconMessageButton;
