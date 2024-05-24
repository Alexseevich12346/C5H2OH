import '../App.css';
import { Flex, Heading, Image, flexbox} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ShopRoute, HomeRoute,AuthRoute, NewsRoute, ContactRoute} from '../utils/consts';
import { useRef, useEffect, useState } from 'react';
import logo_header from '../images/logo_header.svg';
import {Context} from '../index';
import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
const NavBar = () => {
    const prevScrollY = useRef(0);
    const [isNavBarVisible, setIsNavBarVisible] = useState(true);
    const {store} = useContext(Context)
     
    useEffect(() => {
        const scroll = () =>{
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > prevScrollY.current ? "down" : "up";
            if(scrollDirection === "down" && currentScrollY > 50){
                setIsNavBarVisible(false)
            }else if(scrollDirection === "up" || currentScrollY <=50){
                setIsNavBarVisible(true)
            }
            prevScrollY.current = currentScrollY;
        }
        window.addEventListener("scroll", scroll);

        return() => window.removeEventListener("scroll", scroll);
    }, []);

    useEffect(()=>{
        const scrollToSection = window.location.hash.substring(1);
        if(scrollToSection){
            const section = document.getElementById(scrollToSection);
            if(section){
                section.scrollIntoView({
                    behavior: "smooth",
                })
            }
        }
    }, [window.location.hash])
    return (
        <Flex          
        align={'center'}
        justify={'space-between'}
        width={'100%'}
        background={'#0483'}
        boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px;'}
        borderRadius={'8px'}
        padding={'10px 50px'}
        position={'fixed'}
        style={{
            transition:"opacity .3s ease-in-out",
            opacity:isNavBarVisible ? 1 : 0,
        }}
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
            <Flex>
                <Link to={ShopRoute}>
                <button className='headerBtn'>
                    Shop
                </button>
                </Link>
                <Link to={`${HomeRoute}#about`}>
                    <button className='headerBtn'>
                    About
                    </button>
                </Link>
                <button className='headerBtn'>
                Products
                </button>
                <Link to={NewsRoute}>
                <button className='headerBtn'>
                    News
                </button>
                </Link>
                <Link to={ContactRoute}>
                <button className='headerBtn'>
                    Contact
                </button>
                </Link>
            </Flex>
            <Flex>
                {store.isAuth ? (
                <Flex gap={3}>
                    <div>Hello</div>              
                    <button  onClick={() =>store.logout}>Exit</button>       
                </Flex>
                                ) :(
                    <Link  to={AuthRoute}>
                        <button className='header_btn'>Login</button>
                    </Link>
                )}
                {/* <Link>
                    <button className='header_btn'>Basket</button>
                </Link>
             */}
            </Flex>
        </Flex>
        )
}

export default observer(NavBar);