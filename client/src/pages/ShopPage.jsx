import '../App.css';
import { Flex } from '@chakra-ui/react';
import CardItem from '../components/cardItem';
import NavBar from '../components/NavBar';
const ShopPage = () =>{
  return (
    <Flex
      width={'100%'}
      flexWrap={'wrap'}
    >
       <NavBar/>
    <Flex
        justify={'center'}
        align={'center'}
        flexWrap={'wrap'}
        gap={'35px'}
        mt={'50px'}
    >
    </Flex>
    </Flex>
   
  );
}
export default ShopPage;
