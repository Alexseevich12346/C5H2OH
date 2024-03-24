import '../App.css'; 
import { Box } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Vot from '../images/pc.png'
import  Footer  from '../components/Footer'
import { Flex, Image } from '@chakra-ui/react';

const HomePage = () =>{
    return(
        <>        
        <NavBar/>
        <div className="main">
            <div className="main_man">
                <div className="main_hed">
                    <span className='p'>Первый курс <br />
                        по компьютерной сборке
                    </span>
                </div>
                <div className="time" id='time'>
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
            <div className="main_two">
                <div className="kurs_po_obuch">
                    <div className="but_kurs">
                        <button className='btnMain' src='#'>Заказать курс</button>
                    </div>
                    <div className="ucheniki">
                            <div className="uch_vsego">Учеников всего:       200</div>
                            <div className="uch_ucpesh_okonch">Успешно закончили курс:   190</div>
                    </div>
                    <div className="zarabotok">
                        
                    </div>
                </div>
                <div className="information">
                    <div className="inf_op">
                        <div className="foto">
                        <Image                    
                            textAlign={'center'}
                            src={Vot}
                            width={'300px'}
                            alt='TheHost_IP-KVM'
                            float={'left'}
                        >
                        </Image>
                        </div>
                        <div className="h1_inf">
                            <h1>Чем мы занимаемся?</h1>
                            <p>На курсах мы занимаемся обучением студентов основам и практическим навыкам сборки компьютеров. В рамках курсов мы познакомим вас с различными компонентами компьютера, их функциональностью и совместимостью, а также научим правильно выбирать и собирать комплектующие.</p>
                        </div>
                    </div>
                </div>
                <div className="start">
                    <div className="start_inf">
                        <div className="ellipse"></div>
                        <h1>Быстрый старт</h1>
                        <span className='nine_proc'>Больше 90% учеников прошли полный курс и смогли собрать свой первый компьютер</span>
                    </div>
                    .
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
