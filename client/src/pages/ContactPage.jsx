import { Text, Box, Flex, Input } from '@chakra-ui/react';
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
                    width={'90%'}
                    height={'100%'}
                    mt={'100px'}
                >
                    <Text fontSize={'30px'}>Please Contacts Us</Text>
 
                    <Flex
                        display={'flex'}
                        alignItems={'stretch'}
                        width={'100%'}
                        background={''}
                        borderRadius={'8px'}
                        padding={'10px 50px'}
                        height={'500px'}
                        marginTop={'auto'}
                        justify={'center'}
                    >
                        <Box>
                            <Link>
                                <Text>VISIT THE SHOP IN PERSON</Text>
                            </Link>
                            <Link>
                                <Text>DiveLife</Text>
                            </Link>
                            <Link>
                                <Text>StonePale Buildings</Text>
                            </Link>
                            <Link>
                                <Text>Victoria Lane</Text>
                            </Link>
                            <Link>
                                <Text>Whitefield, M45 6BL</Text>
                            </Link>
                            <Link>
                                <Text>Manchester</Text>
                            </Link>
                            <Link>
                                <Text>0161 796 0300</Text>
                            </Link>
                            <Link>
                                <Text>We have a large car park at the rear of the building, simply drive past the shop, and turn left through the green double gates. Please let us know if you want to come in person.</Text>
                            </Link>
                        </Box>
 
                        <Box paddingLeft={'30px'}>
                            <Link>
                                <Text>OPENING TIMES</Text>
                            </Link>
                            <Link>
                                <Text>The Warehouse is open :</Text>
                            </Link>
                            <Link>
                                <Text>Monday:          9.00 - 17.30</Text>
                            </Link>
                            <Link>
                                <Text>Tuesday:           9.00 - 17.30</Text>
                            </Link>
                            <Link>
                                <Text>Wednesday:      9.00 - 17.30</Text>
                            </Link>
                            <Link>
                                <Text>Thursday:         9.00 - 17.30</Text>
                            </Link>
                            <Link>
                                <Text>Friday:              9.00 - 17.30</Text>
                            </Link>
                            <Link>
                                <Text>Saturday:          - </Text>
                            </Link>
                            <Link>
                                <Text>Sunday:            - </Text>
                            </Link>
                            <Link>
                                <Text>Visits outside these hours possible by appointment only.</Text>
                            </Link>
                        </Box>
 
 
                        <Box paddingLeft={'40px'}>
                            <Link>
                                <Text>EXPLORE US ONLINE</Text>
                            </Link>
                            <Link>
                                <Text>Contact us via the phone on our warehouse open days or via the contact form.</Text>
                            </Link>
                        </Box>
                    </Flex>
                    <Flex
                        display={'flex'}
                        justify={'center'}
                        alignItems={'center'}
                        height={'300px'}
                        width={'100%'}
                        mt={'275px'}
                    >
                        <Flex justify={'center'} width={'1000px'}>
                        <Flex flexWrap={'wrap'} width={'80%'} spacing={4}>
                                <Flex width={'90%'} justify={'space-between'}>
                                    <Text width={'15%'}>Email</Text>
                                    <Input width={'100%'} type='tel' placeholder='Enter your mail' />
                                </Flex>
                                <Flex width={'90%'} justify={'space-between'}>
                                    <Text width={'15%'}>Order</Text>
                                    <Input width={'100%'} placeholder='Enter your number' />
                                </Flex>
                                <Flex width={'90%'} justify={'space-between'}>
                                    <Text width={'15%'}>Name</Text>
                                    <Input width={'100%'} type='tel' placeholder='Enter your full name' />
                                </Flex>
                                <Flex width={'90%'} justify={'space-between'}>
                                    <Text width={'15%'}>Message</Text>
                                    <Input width={'100%'} placeholder='Enter your massage' />
                                </Flex>
                        </Flex>
                        </Flex>
 
                    </Flex>
                </Flex>
            </Flex>
 
        </>
    )
}
 
export default ContactPage;