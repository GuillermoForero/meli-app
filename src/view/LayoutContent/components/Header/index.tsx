import Box from 'components/Box';
import SearchBar from 'view/LayoutContent/components/SearchBar';
import React, { useContext } from 'react';
import ic_ML from 'assets/Logo_ML2x.png'
import styled from 'styled-components';
import useNavigator from 'hook/useNavigator';
import { ROUTES_NAVIGATION } from 'router/routes';
import { SearchContext } from 'context/SearchContext';
import { COLORS } from 'consts';
import { Row, Col } from 'antd'
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
  return (
    <Box alignItems="center" justifyContent="center" height="60px" backgroundColor={COLORS.MELI_YELLOW}>
      <Row style={{ 'width': '100%', height: '100%' }}>
        <Col span={4}>
          <Box justifyContent="flex-end" alignItems="center" height="100%">
            <MeliLogo onClick={() => handlerClickMeliLogo()} src={ic_ML} alt="search" />
          </Box>
        </Col>
        <Col span={18}>
          <SearchBar />
        </Col>
      </Row>
    </Box>

  )
};

export default Header;