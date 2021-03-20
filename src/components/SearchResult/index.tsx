import Box from 'components/Box';
import SearchBar from 'components/SearchBar';
import Text from 'components/Text';
import React from 'react';
import ic_ML from 'assets/Logo_ML2x.png'
import styled from 'styled-components';
import { COLORS } from 'consts';
import ResultItem from 'components/ResultItem';

const ItemImg = styled.img`
  height: 80%;
  object-fit: contain;
  margin-right: 10px;
`;
const SearchResult: React.FC = () => (
  <Box alignItems="center" justifyContent="center" flexDirection="column" width="80%" margin="40px 0 0" style={{ backgroundColor: `${COLORS.WHITE}` }}>
    <ResultItem imgSrc={ic_ML} price="20000" description="Descripción del producto" city="mendoza" isShipping={true}/>
    <ResultItem imgSrc={ic_ML} price="20000" description="Descripción del producto" city="mendoza" isShipping={true}/>
    <ResultItem imgSrc={ic_ML} price="20000" description="Descripción del producto" city="mendoza" isShipping={true}/>
    <ResultItem imgSrc={ic_ML} price="20000" description="Descripción del producto" city="mendoza" isShipping={true}/>
    <ResultItem imgSrc={ic_ML} price="20000" description="Descripción del producto" city="mendoza" isShipping={true}/>
  </Box>
);

export default SearchResult;