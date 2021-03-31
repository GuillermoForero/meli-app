export type TextDecoration =
  | 'underline'
  | 'line-through'
  | 'overline';

export type TextAlign =
  | 'left'
  | 'center'
  | 'right';

export interface TextProps {
  color?: string;
  textAlign?: TextAlign;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  className?: string;
  txtDecoration?: TextDecoration;
}
