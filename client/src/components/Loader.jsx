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

            <main id="container">
                    
                    <div class="dots">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                    <div class="dots2">
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                        <div class="dot2"></div>
                    </div>
                    <div class="circle"></div>
            </main>
        </Flex>
    )
}
export default Loader;