import '../App.css';
import { Card, CardBody, Image, Text, Heading, Box, Button } from '@chakra-ui/react';
import TheHost_IP from '../images/видюха.png'

const CardItem = () =>{
    return(
        <Card 
            width={'30%'}
            height={'35%'}
            background={'#0593'}
            boxShadow={'1px 1px 10px #808080'} 
            borderRadius={'10px'}
            textAlign={'center'}
            gap={'15px'}
        >
            <CardBody
                display={'flex'}
                flexDirection={'column'}
                aling Items={'center'}
                textAlign={'center'}
                justifyContent={'space-evenly'}
            >
                <Image                    
                    textAlign={'center'}
                    src={TheHost_IP}
                    width={'300px'}
                    alt='TheHost_IP-KVM'
                >

                </Image>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    wight={'100%'}  
                >
                    <Heading fontSize={'30px'}>Gigabyte Видеокарта GeForce RTX 4070 12 ГБ (GV-N4070WF3OC-12GD)</Heading>
                </Box>
                <Box>
                    <Text>
                       <br/> <b>12 ГБ GDDR6X, 1920 МГц / 2595 МГц, 5888sp, 46 RT-ядер, трассировка лучей, 192 бит, 3.1 слота, питание 16 pin (PCIe Gen5), HDMI, DisplayPort</b>
                    </Text>
                </Box>
                <Box>
                    <Text
                    height={'100px'}
                    fontSize={'28px'}
                    >
                       <br/> <b>Price: 1000$
                       </b>
                    </Text>
                </Box>
                <Box>
                    <Button background={'cyan'} width={'200px'}>Order</Button>
                </Box>
            </CardBody>
       
        
        </Card>
    )
}
    export default CardItem; //выгружаем компонент