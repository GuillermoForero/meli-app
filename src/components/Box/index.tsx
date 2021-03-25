import styled from 'styled-components';

import { BoxProps } from './types';
//I created this reusable component because for SEO it would not affect much, due to the behavior of the website itself and the react
const Box = styled.div<BoxProps>`
  min-height: ${({ minHeight }) => (minHeight ? minHeight : false)};
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  align-self: ${({ alignSelf }) => alignSelf || false};
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  box-sizing: border-box;
  height: ${({ height }) => height || 'auto'};
  width: ${({ width }) => width || '100%'};
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};
`;

export default Box;
