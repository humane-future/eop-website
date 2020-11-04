import { lighten } from 'polished';
import React, { MouseEventHandler } from 'react';
import styled, { css } from 'styled-components';
import { Theme } from '../../theme';
import CloseIcon from './close.inline.svg';

const Button = styled.button`
  ${({ theme }: { theme: Theme }) => css`
    display: block;
    appearance: none;
    margin: 0;
    padding: 5px;
    background: none;
    border: 0;
    width: 30px;
    height: 30px;
    fill: ${theme.colors.OrangeRedCrayola};
    cursor: pointer;
    transition: all 300ms ease-in-out;

    &:hover {
      width: 35px;
      height: 35px;
    }

    &:focus {
      outline: 1px solid ${lighten(0.1, theme.colors.OrangeRedCrayola)};
    }
  `}
`;

export interface CloseButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const CloseButton = ({ onClick }: CloseButtonProps) => (
  <Button type="button" onClick={onClick}>
    <CloseIcon />
  </Button>
);

export default CloseButton;
