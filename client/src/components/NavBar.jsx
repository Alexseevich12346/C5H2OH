import '../App.css';
import { Text, Box, Flex, Grid, Input,Heading, Button} from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import { ShopRoute, HomeRoute, RegisterRoute,AuthRoute} from '../utils/consts'
const NavBar = () => {
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
                <Heading>Videockat</Heading> 
            </Link>
            <Flex>
                <Link to={ShopRoute}>
                <button className='headerBtn'>
                    Shop
                </button>
                </Link>
                <button className='headerBtn'>
                About
                </button>
                <button className='headerBtn'>
                Products
                </button>
            </Flex>
            <Flex>
            <Link  to={AuthRoute}>
                <svg className='nam-icon' width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M17.438 21.937H6.562a2.5 2.5 0 0 1-2.5-2.5v-.827c0-3.969 3.561-7.2 7.938-7.2s7.938 3.229 7.938 7.2v.827a2.5 2.5 0 0 1-2.5 2.5M12 12.412c-3.826 0-6.938 2.78-6.938 6.2v.827a1.5 1.5 0 0 0 1.5 1.5h10.876a1.5 1.5 0 0 0 1.5-1.5v-.829c0-3.418-3.112-6.198-6.938-6.198m0-2.501a3.924 3.924 0 1 1 3.923-3.924A3.927 3.927 0 0 1 12 9.911m0-6.847a2.924 2.924 0 1 0 2.923 2.923A2.926 2.926 0 0 0 12 3.064"/>
                </svg> 
            </Link>
                <Link>
                <svg className='nam-icon' width="50" height="48" viewBox="0 0 42 32" xmlns="http://www.w3.org/2000/svg">
    <g fill="currentColor">
        <path d="M39.5 14h-37a.503.503 0 0 0-.486.621L6.02 30.638C6.116 30.975 6.411 32 7.5 32h27c1.093 0 1.385-1.026 1.485-1.379l4-16A.5.5 0 0 0 39.5 14m-4.48 16.363c-.182.637-.37.637-.52.637h-27c-.149 0-.336 0-.515-.621L3.141 15H38.86z"/>
        <path d="M18.5 28a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-1 0v9a.5.5 0 0 0 .5.5m-7.001 0a.5.5 0 0 0 .498-.555l-1-9a.5.5 0 1 0-.994.11l1 9a.5.5 0 0 0 .496.445M24.5 28a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-1 0v9a.5.5 0 0 0 .5.5m5.944-.003l.057.003a.5.5 0 0 0 .496-.445l1-9a.5.5 0 0 0-.994-.11l-1 9a.5.5 0 0 0 .441.552M34.5 12a.5.5 0 0 0 .378-.827l-9.5-11a.5.5 0 0 0-.756.653l9.5 11A.497.497 0 0 0 34.5 12M17.816.113a.5.5 0 0 0-.703.071l-9 11a.5.5 0 1 0 .774.632l9-11a.5.5 0 0 0-.071-.703M41.5 10h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1m-28 1h16a.5.5 0 0 0 0-1h-16a.5.5 0 0 0 0 1m-13 0h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1"/>
    </g>
</svg>
                </Link>
            
            </Flex>
        </Flex>
        )
}

export default NavBar;