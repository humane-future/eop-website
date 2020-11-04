import styled, { css } from 'styled-components';
import { Theme } from '../theme';

const Dialog = styled.div.attrs({
  role: 'dialog',
})`
  ${({ theme }: { theme: Theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid ${theme.colors.OrangeRedCrayola};
    background-color: ${theme.colors.GhostWhite};
    width: 800px;
    height: 500px;
    margin: auto;
    max-width: calc(100% - 20px);
    max-height: calc(100% - 20px);
    z-index: 1001;
    padding: 10px;
  `}
`;

export default Dialog;
