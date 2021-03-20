import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import icShipping from 'assets/ic_shipping2x.png'
import styled from 'styled-components';
import { COLORS } from 'consts';

const ItemImg = styled.img`
  height: 100%;
  width: 200px;
  object-fit: cover;
  margin-left: 10px;
  border-radius: 4px;
`;

const ShippingIcon = styled.img`
  height: 15px;
  object-fit: contain;
  margin-left: 10px;
`;
export interface Props {
  imgSrc: string;
  price: string;
  description: string;
  city: string;
  isShipping: boolean;
}
const ResultItem: React.FC<Props> = (props: Props) => (
  <Box justifyContent="space-between" alignItems="center" padding="10px" height="250px" style={{ backgroundColor: 'white', borderBottom: '1px solid #EEEEEE' }}>
    <Box width="auto" height="100%" alignItems="center">
      <ItemImg src={'https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg'} alt="itemImg" />
      <Box flexDirection="column" width="auto" alignSelf="flex-start" margin="0 0 0 10px">
        <Box alignItems="center">
          <Text color={COLORS.GRAY_20} fontSize="20px">{'$ '}{props.price}</Text>
          {props.isShipping &&
            <ShippingIcon src={icShipping} alt="shippingImg" />
          }
        </Box>
        <Text color={COLORS.GRAY_40} fontSize="16px">{props.description}</Text>
      </Box>
    </Box>
    <Box alignSelf="flex-start" width="auto" padding="20px 50px 0 0">
      <Text color={COLORS.GRAY_60} fontSize="12px">{props.city}</Text>
    </Box>
  </Box>

);

export default ResultItem;