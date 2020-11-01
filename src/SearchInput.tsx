import React from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { Theme } from './theme';

const Input = styled.input`
  ${({ theme }: { theme: Theme }) => {
    return css`
      background-color: ${theme.colors.OrangeRedCrayola};
      color: ${theme.colors.GhostWhite};
      max-width: 100%;
      appearance: none;
      padding: 0;
      border: 0;
      margin: 5px;
      font-size: 2rem;
      height: 40px;
      width: 300px;
      padding: 10px;

      &:focus {
        outline: 1px solid ${theme.colors.GhostWhite};
      }

      &::placeholder {
        color: ${transparentize(0.2, theme.colors.GhostWhite)};
      }
    `;
  }}
`;

const SearchInput = (props: object) => (
  <Input placeholder="Search..." {...props} />
);

export default SearchInput;
