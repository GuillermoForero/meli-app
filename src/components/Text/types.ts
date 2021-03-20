import { COLORS } from 'consts';
export type TextSize =
  | 'button1'
  | 'button2'
  | 'body1'
  | 'body2'
  | 'body3'
  | 'caption'
  | 'overline';

export type TextDecoration =
  | 'underline'
  | 'line-through'
  | 'overline';

export type TextAlign =
  | 'left'
  | 'center'
  | 'right';

export interface TextProps {
  color?: typeof COLORS;
  align?: TextAlign;
  size: TextSize;
  fontSize?: string;
  fontWeight?: string;
  className?: string;
  txtDecoration?: TextDecoration;
}
