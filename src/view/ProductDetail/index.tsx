import Box from 'components/Box';
import React from 'react';
import Header from 'components/Header';
import SearchResult from 'components/SearchResult';
import { COLORS } from 'consts';

const ProductDetail: React.FC = () => (
  <Box alignItems="center" flexDirection="column" style={{ backgroundColor: `${COLORS.DEFAULT_GRAY}` }} minHeight="100vh">
    <Header/>
    <SearchResult/>
  </Box>
  
);

export default ProductDetail;