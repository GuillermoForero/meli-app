import styled from 'styled-components';
import { TextProps } from 'components/Text/types';
import { COLORS } from 'consts';
//I created this reusable component because for SEO it would not affect much, due to the behavior of the website itself and the react
const Text = styled.p.attrs((props: TextProps) => ({
  ...props,
  color: props.color || COLORS.GRAY_20,
}))`
  /* DEFAULT DEFINITIONS */
  font-family: 'Montserrat', sans-serif;
  margin: ${({ margin }) => margin? margin: '0'};
  text-decoration: ${({ txtDecoration }) =>
    txtDecoration ? txtDecoration : 'none'};
  font-size: ${({ fontSize }) => fontSize? fontSize: '12px'};
  font-weight: ${({ fontWeight }) => fontWeight? fontWeight: '400'};
  text-align: ${({ textAlign }) => textAlign? textAlign: 'left'};
  color: ${({ color }) => color};
  /* WORD-BREAKING DEFINITIONS */
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  -ms-word-break: break-all;
  word-break: break-all;
  /* Non standard for WebKit */
  word-break: break-word;
`;

export default Text;
