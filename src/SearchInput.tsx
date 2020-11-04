import React, { InputHTMLAttributes } from 'react';
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
      font-size: 2rem;
      height: 40px;
      width: 100%;
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

export type SearchInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'placeholder'
>;

const SearchInput = (props: SearchInputProps) => (
  <Input placeholder="Search..." {...props} />
);

export default SearchInput;
