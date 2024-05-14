import { Text, Box, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar';
const ContactPage = () => {
    return (
        <>
            <NavBar />
            <Flex
                pt={'23px'}
                h={'100%'}
                justify={'center'}
                display={'flex'}
                alignItems={'center'}
                flexDirection={'column'}
            >

                <Flex
                    boxShadow={'rgba(0,0,0, 0.24) 0px 3px 8px;'}
                    display={'flex'}
                    flexDirection={'column'}
                    bgColor={'#F1F7F6'}
                    width={'90%'}
                    height={'100%'}

                >
                    <Text fontSize={'30px'} color={'teal'}>Please Contacts Us</Text>

                    <Flex

                        display={'flex'}
                        alignItems={'stretch'}
                        width={'100%'}
                        background={''}
                        borderRadius={'8px'}
                        padding={'10px 50px'}
                        height={'500px'}
                        marginTop={'auto'}

                    >



                        <Box >
                            <Link>
                                <Text color={'teal'}>VISIT THE SHOP IN PERSON</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>DiveLife</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>StonePale Buildings</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Victoria Lane</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Whitefield, M45 6BL</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Manchester</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>0161 796 0300</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>We have a large car park at the rear of the building, simply drive past the shop, and turn left through the green double gates. Please let us know if you want to come in person.</Text>
                            </Link>
                        </Box>

                        <Box paddingLeft={'30px'}>
                            <Link>
                                <Text color={'teal'}>OPENING TIMES</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>The Warehouse is open :</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Monday:           -</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Tuesday:           9.00 - 16.00</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Wednesday:      9.00 - 16.00</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Thursday:         9.00 - 17.30</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Friday:              -</Text>
                            </Link>
                            <Link>
                                <Text color={'teal'}>Saturday:          -</Text>
                            </Link>
                        </Box>
                    </Flex>    
                </Flex>
            </Flex>
        </>
        )
}
export default ContactPage;