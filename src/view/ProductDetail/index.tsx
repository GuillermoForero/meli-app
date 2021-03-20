import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import { COLORS } from 'consts';
import styled from 'styled-components';
import Button from './components/Button';

const ItemImg = styled.img`
  max-height: 70vh;
  width: 100%;
  object-fit: contain;
  border-radius: 4px;
`;

const ProductDetail: React.FC = () => (
  <Box justifyContent="center" padding="32px" width="60%" margin="40px 0" style={{ backgroundColor: `${COLORS.WHITE}` }}>
    <Box flexDirection="column" width="70%">
      <ItemImg src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-12-pro-family-hero?wid=940&amp;hei=1112&amp;fmt=jpeg&amp;qlt=80&amp;op_usm=0.5,0.5&amp;.v=1604021663000" alt="ItemImg" />
      <Text color={COLORS.GRAY_20} fontSize="28px" margin="0 0 32px">
        Descripción del producto
      </Text>
      <Text color={COLORS.GRAY_60} fontSize="16px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore nesciunt a, architecto doloremque minus temporibus
        eligendi doloribus quos, distinctio quasi iste excepturi nihil. Officia praesentium nobis reiciendis pariatur autem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolore nesciunt a, architecto doloremque minus temporibus
        eligendi doloribus quos, distinctio quasi iste excepturi nihil. Officia praesentium nobis reiciendis pariatur autem?
      </Text>
    </Box>
    <Box flexDirection="column" width="30%">
      <Box>
        <Text color={COLORS.GRAY_40} margin="0 0 14px">Nuevo - 234 vendidos</Text>
      </Box>
      <Text color={COLORS.GRAY_20} fontSize="24px" margin="0 0 32px">
        Deco Rverse sombrero oxford
      </Text>
      <Text color={COLORS.GRAY_20} fontSize="46px" margin="0 0 32px">
        $ 1.980
      </Text>
      <Button>Comprar</Button>
    </Box>
  </Box>

);

export default ProductDetail;