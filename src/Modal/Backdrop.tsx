import styled, { css } from 'styled-components';
import { Theme } from '../theme';

const Backdrop = styled.div`
  ${({ theme }: { theme: Theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: ${theme.colors.BlueYonder};
    opacity: 0.5;
    z-index: 1000;
  `}
`;

export default Backdrop;
