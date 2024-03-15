import '../App.css'; 
import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import  Footer  from '../components/Footer'
import { Flex } from '@chakra-ui/react';

const HomePage = () =>{
    return(
        <>        
        <NavBar/>
        <div className="main">
            <div className="main_hed">
                <span>Первый курс <br />
                      по компьютерной сборке
                </span>
            </div>
            <div className="time">
                <div className="time_times">
                    <span>18 <br />Дней</span>
                </div>
                <div className="time_times">
                    <span>18 <br />Часов</span>
                </div>
                <div className="time_times">
                    <span>18 <br />Минут</span>
                </div>
                <div className="time_times">
                    <span>18 <br />Секунд</span>
                </div>
            </div>
        </div>
        <Flex
            h={'100vh'}
        >
            <Footer/>   
        </Flex>

        </>
    )
}
export default HomePage;
