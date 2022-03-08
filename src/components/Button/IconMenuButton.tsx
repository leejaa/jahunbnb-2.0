import { css } from '@emotion/react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { ButtonHTMLAttributes, forwardRef, useState } from 'react';
import { ListIcon, ProfileIcon } from '../Icon';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  menu: { id: number; name: string }[];
}

const buttonCss = css`
  background: white;
  padding: 5px 10px 5px 10px;
  border-radius: 21px;
  border: 1px solid #e1e1e1;
`;

const IconMenuButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const { className, children, menu, ...restProps } = props;
    return (
      <>
        <button
          id="button"
          css={buttonCss}
          type="button"
          className={className}
          onClick={handleClick}
          {...restProps}
        >
          <ListIcon />
          <ProfileIcon
            css={css`
              margin-left: 12px;
            `}
          />
        </button>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'button',
          }}
          sx={{
            marginTop: 1,
            fontWeight: 600,
            '& .MuiPopover-paper': {
              borderRadius: 5,
            },
          }}
        >
          {menu.map((item) => (
            <MenuItem key={item.id} sx={{ fontWeight: 'bold' }}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      </>
    );
  }
);

export default IconMenuButton;
