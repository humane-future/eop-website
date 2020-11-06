import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import SearchInput from './SearchInput';

const Wrapper = styled.div`
  ${({ theme }) => {
    return css`
      display: flex;
      align-items: center;
      background-color: ${theme.colors.BlackCoral};
      width: 100%;
      height: 60px;
      padding: 5px 15px;
    `;
  }}
`;

const SearchWrapper = styled.div`
  margin-left: auto;
  padding: 5px;
  width: 310px;
`;

const Header = styled.div`
  ${({ theme }) => {
    return css`
      color: ${theme.colors.GhostWhite};
      font-size: 2rem;
      margin: 5px;
    `;
  }}
`;

export interface TopBarProps {
  isModalOpen: boolean;
  onOpenModal?: () => void;
  searchValue: string;
  setSearchValue: (key: string) => void;
}

const TopBar = ({
  searchValue,
  setSearchValue,
  isModalOpen,
  onOpenModal,
}: TopBarProps) => {
  const onChange = useCallback(
    (value) => {
      setSearchValue(value);
      if (!isModalOpen) {
        onOpenModal?.();
      }
    },
    [setSearchValue],
  );
  return (
    <Wrapper>
      <Header>End of Power</Header>
      <SearchWrapper>
        {!isModalOpen && (
          <SearchInput
            value={searchValue}
            onChange={onChange}
            active={!isModalOpen}
          />
        )}
      </SearchWrapper>
    </Wrapper>
  );
};

export default TopBar;
