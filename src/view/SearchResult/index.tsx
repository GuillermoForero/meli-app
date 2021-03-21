import Box from 'components/Box';
import React from 'react';
import { COLORS } from 'consts';
import ResultItem from 'view/SearchResult/components/ResultItem';
import { itemsSelectors } from 'state/items';
import { useSelector } from 'react-redux';

const SearchResult: React.FC = () => {
  const searchItems = useSelector(itemsSelectors.searchItems);
  return (
    <Box alignItems="center" justifyContent="center" flexDirection="column" width="80%" margin="40px 0 0" style={{ backgroundColor: `${COLORS.WHITE}` }}>
      {searchItems?.items.map((item, index) => (
        <ResultItem key={index} imgSrc={item.picture} price={item.price} title={item.title} city="mendoza" freeShipping={item.free_shipping} />  
      ))}
    </Box>
  )
};

export default SearchResult;