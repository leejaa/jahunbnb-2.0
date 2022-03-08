import { css } from '@emotion/react';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorInvert?: boolean;
}

interface ButtonsCss {
  colorInvert?: boolean;
}

const buttonCss = ({ colorInvert }: ButtonsCss) => css`
  border-radius: 24px;
  padding: 0.8rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${colorInvert ? 'black' : 'white'};
  &:hover {
    background: ${colorInvert ? '#f7f7f7' : '#262626'};
  }
`;

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, colorInvert = false, ...restProps } = props;
  return (
    <button
      css={buttonCss({ colorInvert })}
      type="button"
      className={className}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default BaseButton;
