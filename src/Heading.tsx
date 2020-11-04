import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

export type HeadingRange = 1 | 2 | 3 | 4 | 5 | 6;

export type HeadingSpacing = 'top' | 'bottom' | 'both' | 'none';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level: HeadingRange;
  size: HeadingRange;
  spacing?: HeadingSpacing;
}

const sizeMap = {
  1: 4,
  2: 3.5,
  3: 3,
  4: 2.5,
  5: 2,
  6: 1.5,
};

const UnStyledHeading = ({ level, ...props }: HeadingProps) => {
  let DynamicHeading = `h${level}`;
  return <DynamicHeading {...props} />;
};

type HasSpacing = (spacing: HeadingSpacing) => boolean;

const hasTopSpacing = (spacing: HeadingSpacing) =>
  ['top', 'both'].includes(spacing);

const hasBottomSpacing = (spacing: HeadingSpacing) =>
  ['bottom', 'both'].includes(spacing);

const getConditionalSpacing = (condition: HasSpacing) => (
  spacing: HeadingSpacing,
) => (condition(spacing) ? '20px' : '0');

const getTopSpacing = getConditionalSpacing(hasTopSpacing);

const getBottomSpacing = getConditionalSpacing(hasBottomSpacing);

const Heading = styled(UnStyledHeading)`
  font-size: ${({ size }) => sizeMap[size]}rem;
  font-weight: 800;
  margin: ${({ spacing = 'none' }) =>
    `${getTopSpacing(spacing)} 0 ${getBottomSpacing(spacing)} 0`};
`;

Heading.displayName = 'Heading';

export default Heading;
