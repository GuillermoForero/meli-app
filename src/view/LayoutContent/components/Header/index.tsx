import Box from 'components/Box';
import SearchBar from 'view/LayoutContent/components/SearchBar';
import React, { useContext } from 'react';
import ic_ML from 'assets/Logo_ML2x.png'
import styled from 'styled-components';
import useNavigator from 'hook/useNavigator';
import { ROUTES_NAVIGATION } from 'router/routes';
import { SearchContext } from 'context/SearchContext';

const MeliLogo = styled.img`
  height: 35px;
  object-fit: contain;
  margin-right: 10px;
  cursor: pointer;
`;
const Header: React.FC = () => {
  const { navigateTo } = useNavigator();
  const { handlers } = useContext(SearchContext);
  const handlerClickMeliLogo = () => {
    navigateTo(ROUTES_NAVIGATION.SEARCHER);
    handlers?.setSearchValue('');
  }
  return(
  <Box alignItems="center" justifyContent="center" height="60px" style={{backgroundColor: '#FFE600'}}>
    <MeliLogo onClick={() => handlerClickMeliLogo()} src={ic_ML} alt="search"/>
    <SearchBar/>  
  </Box>
  
)};

export default Header;