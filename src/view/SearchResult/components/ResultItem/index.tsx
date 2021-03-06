import Box from 'components/Box';
import Text from 'components/Text';
import React from 'react';
import icShipping from 'assets/ic_shipping2x.png'
import styled from 'styled-components';
import { COLORS, FONT_SIZES } from 'consts';
import { ROUTES_NAVIGATION } from 'router/routes';
import useNavigator from 'hook/useNavigator';
import { useDispatch } from 'react-redux';
import { itemsActions } from 'state/items';

const ItemImg = styled.img`
  height: 180px;
  width: 180px;
  object-fit: cover;
  margin-right: 16px;
  border-radius: 4px;
`;

const ShippingIcon = styled.img`
  height: 15px;
  object-fit: contain;
  margin-left: 10px;
`;
export interface Props {
  id: string;
  imgSrc: string;
  price: number;
  title: string;
  city: string;
  freeShipping: boolean;
}
const ResultItem: React.FC<Props> = (props: Props) => {
  const { navigateTo } = useNavigator();
  const dispatch = useDispatch();
  const goToDetailView = () => {
    dispatch(itemsActions.getItemDetail(props.id))
    navigateTo(ROUTES_NAVIGATION.ITEM_DETAIL, { id: props.id })
  }
  return (
    <Box justifyContent="space-between" alignItems="center" padding="16px" height="250px"
      onClick={() => goToDetailView()}
      style={{ backgroundColor: 'white', borderBottom: '1px solid #EEEEEE', cursor: 'pointer' }}>
      <Box width="auto" height="100%" alignItems="center">
        <ItemImg src={props.imgSrc} alt="itemImg" />
        <Box flexDirection="column" width="auto" alignSelf="flex-start" margin="0 0 0 10px">
          <Box alignItems="center" margin="16px 0 32px">
            <Text color={COLORS.GRAY_20} fontSize={FONT_SIZES.medium}>{'$ '}{props.price}</Text>
            {props.freeShipping &&
              <ShippingIcon src={icShipping} alt="shippingImg" />
            }
          </Box>
          <Text color={COLORS.GRAY_40} fontSize={FONT_SIZES.small} as="h4">{props.title}</Text>
        </Box>
      </Box>
      <Box alignSelf="flex-start" width="auto" padding="20px 20px 0 0">
        <Text color={COLORS.GRAY_60} fontSize={FONT_SIZES.xxx_small}  as="span">{props.city}</Text>
      </Box>
    </Box>

  )
};

export default ResultItem;