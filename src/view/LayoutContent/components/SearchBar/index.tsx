import Box from 'components/Box';
import React, { useContext } from 'react';
import styled from 'styled-components';
import ic_Search from 'assets/ic_Search2x.png'
import { COLORS } from 'consts';
import { SearchContext } from 'context/SearchContext';
const Input = styled.input`
  width: 700px;
  padding: 7px 60px 9px 15px;
  height: 19px;
  border: 2px;
  outline: none;
  color: ${COLORS.GRAY_20};
  font-size: 16px;
  border: none;
`;
const Button = styled.button`
  width: 40px;
  height: 35px;
  border: none;
  background: ${COLORS.DEFAULT_GRAY};
  text-align: center;
  color: #fff;
  border-radius: 0 2px 2px 0;
  cursor: pointer;
  font-size: 18px;
  padding: '5px 0';
`;
const Img = styled.img`
  height: 15px;
  object-fit: 'cover';
`;

const SearchBar: React.FC = () => {
  const { handlers } = useContext(SearchContext);
  const handlerEnterKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handlers?.searchItems();
    }
  }
  return (
    <Box justifyContent="center" alignItems="center" width="auto">
      <Input onKeyDown={handlerEnterKey} onChange={(ev) => handlers?.setSearchValue(ev.target.value)} type="text" placeholder="Nunca dejes de buscar" />
      <Button type="submit" onClick={() => handlers?.searchItems()}>
        <Img src={ic_Search} alt="search" />
      </Button>
    </Box>
  )
};

export default SearchBar;