import { Flex } from "@chakra-ui/react"
const Loader = () => {
    return (
        <Flex
            w={'100%'}
            h={'100vh'}
            justify={'center'}
            align={'center'}
            bg={'midnight'} 
        >
            <div>Loading...</div>
        </Flex>
    )
}
export default Loader;