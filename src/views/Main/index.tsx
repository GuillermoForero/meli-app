import Box from 'components/Box';
import React, { PropsWithChildren } from 'react';
import Header from 'components/Header';
import SearchResult from 'components/SearchResult';
import { COLORS } from 'consts';

const Main: React.FC = (props: PropsWithChildren<any>) => (
  <Box alignItems="center" flexDirection="column" style={{ backgroundColor: `${COLORS.DEFAULT_GRAY}` }} minHeight="100vh">
    <Header/>
    <SearchResult/>
  </Box>
  
);

export default Main;