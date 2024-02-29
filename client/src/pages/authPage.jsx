import NavBar from '../components/NavBar';
import { Flex } from '@chakra-ui/react';
const AuthPage = () =>{
    return(
        <Flex
        width={'100%'}
        flexWrap={'wrap'}
        >
            <NavBar/>
            <Flex 
                width={'90%'}
                justify={'center'}
                alignItems={'center'}
                height={'70vh'}
            >
                <Flex
                    box-shadow={'10px 10px 5px 10px rgba(0,0,0,0.75)'}
                    wight={'300px'}
                    height={'300px'}
                >
                </Flex>
            </Flex>
        </Flex>
    )
}
export default AuthPage;
