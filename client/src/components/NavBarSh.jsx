import '../App.css';
import { Flex,Heading, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import logo_header from '../images/logo_header.svg'
import { HomeRoute} from '../utils/consts'
const NavBarSh = () => 
{
    return (
        <Flex          
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        background={'#0483'}
        boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px;'}
        borderRadius={'8px'}
        padding={'10px 50px'}
        >
            <Link
            to={HomeRoute}
            >
                <Heading>
                    <Image
                        textAlign={'center'}
                        src={logo_header}
                        width={'75px'}
                        alt='logo_header'
                        float={'left'}
                    />
                </Heading> 
            </Link>
            <Link
            to={HomeRoute}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"> 
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/> 
                </svg>
            </Link>
        </Flex>
    )
}

export default NavBarSh;