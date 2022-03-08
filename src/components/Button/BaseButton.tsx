import { css } from '@emotion/react';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonColor = 'inherit' | 'white';

type TextColor = 'pink' | 'black' | 'white';

const TEXT_COLOR: { [key in TextColor]: string } = {
  pink: '#ff385c',
  black: 'black',
  white: 'white',
};
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  colorInvert?: boolean;
  buttonColor?: ButtonColor;
  textColor?: TextColor;
}

const buttonCss = ({
  colorInvert,
  buttonColor,
  textColor,
}: Pick<ButtonProps, 'colorInvert' | 'buttonColor' | 'textColor'>) => css`
  border-radius: 24px;
  padding: 0.8rem;
  font-size: 0.875rem;
  font-weight: 600;
  background: ${buttonColor};
  color: ${TEXT_COLOR[textColor || 'black']};
  &:hover {
    background: ${colorInvert ? '#f7f7f7' : '#262626'};
  }
`;

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    children,
    colorInvert = false,
    buttonColor = 'inherit',
    textColor = 'black',
    ...restProps
  } = props;
  return (
    <button
      css={buttonCss({ colorInvert, buttonColor, textColor })}
      type="button"
      className={className}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default BaseButton;
