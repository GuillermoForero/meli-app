import styled from 'styled-components';
import { ButtonProps } from 'view/ProductDetail/components/Button/types';

const Button = styled.button<ButtonProps>`
  display:inline-block;
  width: 200px;
  height: 30px;
  padding:0.35em 1.2em;
  border-radius: 2px;
  margin:0 0.3em 0.3em 0;
  border: none;
  background-color: ${({ theme }) => theme.MELI_BLUE};
  text-decoration:none;
  font-family:'Roboto',sans-serif;
  font-weight:300;
  cursor: pointer;
  color:#FFFFFF;
  text-align:center;
  transition: all 0.2s;
  &:hover{
     background-color: #2968c8;
    }
    @media (max-width: 768px) {
      width: 100px;
    }
`;

export default Button;
