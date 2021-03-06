import Box from 'components/Box';
import Header from 'view/LayoutContent/components/Header';
import { COLORS } from 'consts';
import React from 'react';

const LayoutContent: React.FC = (props) => (
    <Box alignItems="center" flexDirection="column" backgroundColor={COLORS.DEFAULT_GRAY} minHeight="100vh">
    <Header/>
    {props.children}
  </Box>
);

export default LayoutContent;
