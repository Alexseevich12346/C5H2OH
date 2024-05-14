import '../App.css';
import { Image, Box, Flex} from '@chakra-ui/react';
import Facebook from '../images/facebook.png'
import Instagram from '../images/instagram.png'
import Vk from '../images/vk.png'
import Youtube from '../images/youtube.png'

const Footer = () => {
    return (
        <Flex
        display={'flex'}         
        align={'center'}
        justify={'space-evenly'}
        width={'100%'}
        background={'#0483'}
        boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px;'}
        borderRadius={'8px'}
        padding={'10px 50px'}
        position = {'relative'}
        height={'20vh'}
        marginTop = {'auto'}
    >       
        <Box>
            <div className="follow_us">
                <h1 style={{margin:'0'}}>Наши соцсети</h1>
                <div className="mes">
                    <a href="https://www.vk.com/">
                    <Image
                            textAlign={'center'}
                            src={Vk}
                            width={'75px'}
                            alt='Vk'
                            float={'left'}
                            className='mes_click'
                    />
                    </a>
                    <a href="https://youtube.com/">
                    <Image
                            textAlign={'center'}
                            src={Youtube}
                            width={'75px'}
                            alt='Youtube'
                            float={'left'}
                            className='mes_click'
                    />
                    </a>
                    <a href="https://www.facebook.com/">
                    <Image
                            textAlign={'center'}
                            src={Facebook}
                            width={'75px'}
                            alt='Facebook'
                            float={'left'}
                            className='mes_click'
                    />
                    </a>
                    <a href="https://www.instagram.com">
                        <Image
                                textAlign={'center'}
                                src={Instagram}
                                width={'75px'}
                                alt='Instagram'
                                float={'left'}
                                className='mes_click'
                        />
                    </a>
                </div>
            </div>
        </Box>

    </Flex>
    )
}
export default Footer;