import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SearchResults from './SearchResults';

const Wrapper = styled.div`
  flex-grow: 1;
`;

const StyledToolbar = styled(Toolbar)`
  ${({ theme }) => css`
    flex-wrap: wrap;

    ${theme.breakpoints.down('xs')} {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  `}
`;

const Title = styled(Typography)`
  ${({ theme }) => css`
    flex-grow: 1;

    ${theme.breakpoints.up('sm')} {
      width: auto;
    }
  `}
`;

const SearchWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: 0;
    width: 100%;
    margin-top: 16px;

    ${theme.breakpoints.up('sm')} {
      margin-left: ${theme.spacing(1)}px;
      margin-top: 0;
      width: auto;
    }
  `}
`;

const Search = styled.div`
  ${({ theme }) => css`
    position: relative;
    border-radius: ${theme.shape.borderRadius}px;
    background-color: ${fade(theme.palette.common.white, 0.15)};

    &:hover {
      background-color: ${fade(theme.palette.common.white, 0.25)};
    }
  `}
`;

const SearchResultsAnchor = styled.div`
  height: 65px;
  width: 100px;
  position: absolute;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }),
);

export interface TopBarProps {
  children: string;
}

const TopBar = ({ children }: TopBarProps) => {
  const classes = useStyles();
  const searchWrapperRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <AppBar position="static">
        <StyledToolbar>
          <Title variant="h6" noWrap>
            {children}
          </Title>
          <SearchWrapper>
            <Search>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <SearchResultsAnchor ref={searchWrapperRef}>
              &nbsp;
            </SearchResultsAnchor>
            <SearchResults
              searchWrapperRef={searchWrapperRef}
              open={true}
              onClose={() => {}}
            />
          </SearchWrapper>
        </StyledToolbar>
      </AppBar>
    </Wrapper>
  );
};

export default TopBar;
