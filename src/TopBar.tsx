import React from 'react';
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

const TopBar = () => (
  <Wrapper>
    <Header>End of Power</Header>
    <SearchWrapper>
      <SearchInput />
    </SearchWrapper>
  </Wrapper>
);

export default TopBar;
