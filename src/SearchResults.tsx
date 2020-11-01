import React, {
  forwardRef,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';

const Wrapper = styled.div`
  margin-top: 36px;
  position: absolute;
  width: 100%;
`;

const StyledMenu = styled(Menu)`
  .MuiMenu-paper {
    width: 300px;
    max-width: calc(100% - 10px);
    margin: 0 20px;
  }
`;

const ListItemLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  const CustomLink = useMemo(
    () =>
      forwardRef<HTMLAnchorElement>((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );
  return (
    <ListItem button component={CustomLink}>
      {children}
    </ListItem>
  );
};

export interface SearchResultsProps {
  searchWrapperRef: RefObject<HTMLDivElement>;
  open: boolean;
  onClose: MenuProps['onClose'];
}

const SearchResults = ({
  searchWrapperRef,
  open,
  onClose,
}: SearchResultsProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (searchWrapperRef.current) {
      setAnchorEl(searchWrapperRef.current);
    }
  }, []);

  if (!anchorEl) {
    return null;
  }

  return (
    <Wrapper>
      <Paper elevation={3}>
        {/* <StyledMenu keepMounted open={open} onClose={onClose}> */}
        {/* <MenuItem>Profile</MenuItem> */}
        {/* <MenuItem>My account</MenuItem> */}
        {/* <MenuItem>Logout</MenuItem> */}
        {/* </StyledMenu> */}
        <List component="nav" aria-label="Search Results">
          <ListItemLink to="/">
            <ListItemText primary="Home" />
          </ListItemLink>
          <ListItemLink to="/about">
            <ListItemText primary="About" />
          </ListItemLink>
        </List>
      </Paper>
    </Wrapper>
  );
};

export default SearchResults;
