import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import { COLORS, FONT_SIZES } from 'consts';
import styled from 'styled-components';
import Button from 'view/ProductDetail/components/Button';
import { useSelector } from 'react-redux';
import { itemsSelectors } from 'state/items';
import { isMobile } from 'react-device-detect';
import { Row, Col } from 'antd'

const ItemImg = styled.img`
  max-height: 70vh;
  width: 100%;
  object-fit: contain;
  border-radius: 4px;
`;

const ProductDetail: React.FC = () => {
  const itemDetail = useSelector(itemsSelectors.itemDetail);
  return (
    <Box justifyContent="center"  width="100%" margin="40px 0">
      <Row style={{ width: '100%' }}>
        {!isMobile && <Col span={2}/>}
        <Col span={isMobile? 24: 20} style={{ backgroundColor: 'white' }}>
          <Box padding="32px">
            <Box flexDirection="column" width="70%">
              <ItemImg src={itemDetail?.item.picture || ''} alt="ItemImg" />
              <Text color={COLORS.GRAY_20} fontSize={FONT_SIZES.large} margin="0 0 32px" as="h4">
                Descripción del producto
      </Text>
              <Text color={COLORS.GRAY_60} fontSize={FONT_SIZES.x_small}>{itemDetail?.item.description || ''}</Text>
            </Box>
            <Box flexDirection="column" width="30%">
              <Box>
                <Text color={COLORS.GRAY_40} margin="0 0 14px" as="span">{itemDetail?.item.condition || ''} - 234 vendidos</Text>
              </Box>
              <Text color={COLORS.GRAY_20} fontSize={FONT_SIZES.medium} margin="0 0 32px" as="h2">{itemDetail?.item.title || ''}</Text>
              <Text color={COLORS.GRAY_20} fontSize={FONT_SIZES.x_large} margin="0 0 32px">$ {itemDetail?.item.price || ''}</Text>
              <Button>Comprar</Button>
            </Box>
          </Box>
        </Col>
      </Row>
    </Box>

  )
};

export default ProductDetail;