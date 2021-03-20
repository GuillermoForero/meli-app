import Box from 'components/Box';
import Header from 'components/Header';
import { COLORS } from 'consts';
import React from 'react';

const LayoutContent: React.FC = (props) => (
    <Box alignItems="center" flexDirection="column" style={{ backgroundColor: `${COLORS.DEFAULT_GRAY}` }} minHeight="100vh">
    <Header/>
    {props.children}
  </Box>
);

export default LayoutContent;
