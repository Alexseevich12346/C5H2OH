import { Flex,Text, Input, InputGroup, Stack, InputLeftElement,Button,WrapItem  } from '@chakra-ui/react';
import NavBarSh from '../components/NavBarSh';
import { Link } from 'react-router-dom';
import { AuthRoute} from '../utils/consts';
import AuthPage from './authPage';
const RegisterPage = () => {
    return (
        <Flex
            width={'100%'}
            flexWrap={'wrap'}
            justify={'center'}
        >
            <NavBarSh />
            <Flex // всей страницы 
                width={'90%'}
                justify={'center'}
                alignItems={'center'}
                height={'70vh'}
            >
                <Flex
                boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px'}
                width={'20em'}
                height={'35vh'}
                flexWrap={'wrap'}
                justify={'center'}
                >
                    <Text mt={'7%'} fontSize={'35px'} fontWeight={'bold'} textAlign={'center'} w={'100%'} color={'Black'}> Sign up</Text>
                    <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none' width={'25px'} top={'0px'} left={'10px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"/>
                        </svg>
                        </InputLeftElement>
                        
                        <Input type='tel' placeholder='Login'/>
                        
                    </InputGroup>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none' width={'25px'} top={'0px'} left={'10px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
                            <path fill="currentColor" fill-rule="evenodd" d="M14.95 3.684L8.637 8.912a1 1 0 0 1-1.276 0l-6.31-5.228A.999.999 0 0 0 1 4v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a.999.999 0 0 0-.05-.316M2 2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m-.21 1l5.576 4.603a1 1 0 0 0 1.27.003L14.268 3z"/>
                        </svg>
                        </InputLeftElement>
                        
                        <Input type='tel' placeholder='Email'/>
                        
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement
                        pointerEvents='none'
                        color='gray.300'
                        fontSize='1.2em'
                        width={'25px'} 
                        top={'0px'} 
                        left={'10px'}
                        >
                       <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 16 16">
                            <path fill="currentColor" d="M4 5v-.8C4 1.88 5.79 0 8 0s4 1.88 4 4.2V5h1.143c.473 0 .857.448.857 1v9c0 .552-.384 1-.857 1H2.857C2.384 16 2 15.552 2 15V6c0-.552.384-1 .857-1zM3 15h10V6H3zm5.998-3.706L9.5 12.5h-3l.502-1.206A1.644 1.644 0 0 1 6.5 10.1c0-.883.672-1.6 1.5-1.6s1.5.717 1.5 1.6c0 .475-.194.901-.502 1.194M11 4.36C11 2.504 9.657 1 8 1S5 2.504 5 4.36V5h6z"/>
                        </svg>
                        </InputLeftElement>
                        <Input placeholder='Password'/>
                    </InputGroup>
                    <WrapItem>
                        <Button colorScheme='whatsapp' w={'250px'} textAlign={'center'}>Login</Button>
                    </WrapItem>
                    </Stack>
                    <Text mr={'5px'}> Do you have an account? <Text color={'teal'}><Link to ={AuthRoute}>Login</Link></Text></Text>

                </Flex>
        </Flex>       


        </Flex>
        
  );
}

export default RegisterPage;