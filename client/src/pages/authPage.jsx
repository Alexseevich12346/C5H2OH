import { Flex,Text, Input, InputGroup, Stack, InputLeftElement,Button,WrapItem  } from '@chakra-ui/react';
import NavBarSh from '../components/NavBarSh';
import { Link } from 'react-router-dom';
import { RegisterRoute } from '../utils/consts';
import { useState } from 'react';
import {Context} from '../index';
import { useContext } from 'react';

const AuthPage = () => {
    const [typePass, setTypePass] = useState(false);
    const eyeClick =()=>{
        setTypePass(!typePass);
    }
    const { store } = useContext(Context);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handlelogin = async(email,password)=>{
        try{
            await store.login(email,password);
            if(store.isAuth){
                alert('Вы русский')
            } else{
                store.setError('Incorrect loginor pass. Try again!')
                alert("Error")
            }
        }catch (e){
                console.log('An error ocured during login')
        }
    };
    return (
        <Flex className='flex_ayth_regist'
            width={'100%'}
            flexWrap={'wrap'}
            justify={'center'}
            color={'white'}
        >
            <NavBarSh />
            <Flex // всей страницы 
                width={'90%'}
                justify={'center'}
                alignItems={'center'}
                height={'95vh'}
            >
                <Flex
                boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px'}
                width={'22em'}
                height={'45vh'}
                flexWrap={'wrap'}
                justify={'center'}
                >
                    <Text mt={'7%'} fontSize={'50px'} fontWeight={'bold'} textAlign={'center'} w={'100%'} color={'white'}> Sign in</Text>
                    <Stack spacing={4}>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none' width={'25px'} top={'0px'} left={'10px'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 256 256">
                            <path fill="currentColor" d="M230.92 212c-15.23-26.33-38.7-45.21-66.09-54.16a72 72 0 1 0-73.66 0c-27.39 8.94-50.86 27.82-66.09 54.16a8 8 0 1 0 13.85 8c18.84-32.56 52.14-52 89.07-52s70.23 19.44 89.07 52a8 8 0 1 0 13.85-8ZM72 96a56 56 0 1 1 56 56a56.06 56.06 0 0 1-56-56Z"/>
                        </svg>
                        </InputLeftElement>
                        
                        <Input 
                            type='text'
                            placeholder='Email'
                            onChange = {e=> setEmail(e.target.value)}
                            value={email}
                        />
                        
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
                        <div className='passInput'>
                            <Link onClick={eyeClick}>
                                <svg  className='eye_icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5">
                                        <path d="M3 13c3.6-8 14.4-8 18 0"/>
                                        <path d="M12 17a3 3 0 1 1 0-6a3 3 0 0 1 0 6Z"/>
                                    </g>
                                </svg>
                            </Link>
    
                            
                            <Input type={typePass ? "text" : "password"} pl={'40px'} width={'250px'} placeholder='Password'
                                onChange={e=> setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        
                    </InputGroup>
                    <WrapItem>
                        <Button colorScheme='whatsapp' w={'250px'} textAlign={'center'}
                            onClick={() => handlelogin(email, password)}
                        >
                            Login
                        </Button>
                    </WrapItem>
                    </Stack>
                    <Text mr={'5px'}  textAlign={'center'}> Do you have an account? <Text color={'teal'}><Link to ={RegisterRoute}>Register</Link></Text></Text>

                </Flex>
        </Flex>       


        </Flex>
        
  );
}

export default AuthPage;

