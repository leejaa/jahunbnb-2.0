import { css } from '@emotion/react';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const buttonCss = css`
  border-radius: 24px;
  padding: 0.8rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  &:hover {
    background: #262626;
  }
`;

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, children, ...restProps } = props;
  return (
    <button css={buttonCss} type="button" className={className} {...restProps}>
      {children}
    </button>
  );
});

export default BaseButton;
