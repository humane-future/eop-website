import styled, { css } from 'styled-components';
import { Theme } from '../theme';

const Dialog = styled.div`
  ${({ theme }: { theme: Theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 5px solid ${theme.colors.OrangeRedCrayola};
    background-color: ${theme.colors.GhostWhite};
    width: 800px;
    height: 500px;
    margin: auto;
    max-width: calc(100% - 20px);
    max-height: calc(100% - 20px);
    z-index: 1001;
  `}
`;

export default Dialog;
