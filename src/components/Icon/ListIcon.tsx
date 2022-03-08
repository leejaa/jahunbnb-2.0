/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { css } from '@emotion/react';

const svgCss = css`
  display: block;
  fill: none;
  height: 16px;
  width: 16px;
  stroke: currentColor;
  stroke-width: 3;
  overflow: visible;
`;

const ListIcon: FunctionComponent = () => {
  return (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      css={svgCss}
    >
      <g fill="none" fillRule="nonzero">
        <path d="m2 16h28" />
        <path d="m2 24h28" />
        <path d="m2 8h28" />
      </g>
    </svg>
  );
};

export default ListIcon;
