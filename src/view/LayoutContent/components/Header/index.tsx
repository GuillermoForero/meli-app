import Box from 'components/Box';
import SearchBar from 'view/LayoutContent/components/SearchBar';
import React from 'react';
import ic_ML from 'assets/Logo_ML2x.png'
import styled from 'styled-components';

const MeliLogo = styled.img`
  height: 35px;
  object-fit: contain;
  margin-right: 10px;
`;
const Header: React.FC = () => (
  <Box alignItems="center" justifyContent="center" height="60px" style={{backgroundColor: '#FFE600'}}>
    <MeliLogo src={ic_ML} alt="search"/>
    <SearchBar/>  
  </Box>
  
);

export default Header;