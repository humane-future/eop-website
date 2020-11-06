import React, { ChangeEvent, useCallback } from 'react';
import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Theme } from './theme';

const Input = styled(motion.input)`
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

export interface SearchInputProps
  extends Omit<HTMLMotionProps<'input'>, 'placeholder' | 'onChange'> {
  active: boolean;
  onChange?: (key: string) => void;
}

const SearchInput = ({ active, onChange, ...props }: SearchInputProps) => {
  const onChangeCallback = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value);
    },
    [onChange],
  );
  return (
    <Input
      placeholder="Search..."
      key="search-input"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'spring', damping: 25, stiffness: 120 }}
      onChange={onChangeCallback}
      {...props}
    />
  );
};

export default SearchInput;
