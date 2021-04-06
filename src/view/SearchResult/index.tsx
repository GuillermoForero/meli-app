import Box from 'components/Box';
import React from 'react';
import ResultItem from 'view/SearchResult/components/ResultItem';
import { itemsSelectors } from 'state/items';
import { useSelector } from 'react-redux';
import { isMobile } from 'react-device-detect';
import { Row, Col } from 'antd'
const SearchResult: React.FC = () => {
  const searchItems = useSelector(itemsSelectors.searchItems);
  return (
    <Box alignItems="center" justifyContent="center" flexDirection="column" width="100%" margin="40px 0 0" >
      {searchItems?.items.map((item, index) => (
        <Row style={{ width: '100%' }} key={index}>
          {!isMobile && <Col span={2}/>}
          <Col span={isMobile? 24: 20} style={{ backgroundColor: 'white' }} >
            <ResultItem id={item.id} key={index} imgSrc={item.picture} price={item.price} title={item.title} city="mendoza" freeShipping={item.free_shipping} />
          </Col>
        </Row>
      ))}
    </Box>
  )
};

export default SearchResult;