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
            <div className="kurs_po_obuch">
                <div className="but_kurs">
                    <button className='btnMain'>Заказать курс</button>
                </div>
                <div className="ucheniki">
                        <div className="uch_vsego">Учеников всего:       200</div>
                        <div className="uch_ucpesh_okonch">Успешно закончили курс:   190</div>
                </div>
                <div className="zarabotok"></div>
            </div>
            <div className="inf">
                <div className="foto">
                <Image                    
                    textAlign={'center'}
                    src={Vot}
                    width={'300px'}
                    alt='TheHost_IP-KVM'
                >
                </Image>
                </div>
                <div className="h1_inf">
                    <h1>Чем мы занимаемся?</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus doloribus consectetur eos repellat, sapiente, exercitationem quia quod et officia hic similique, temporibus perspiciatis dolor. Iusto tenetur nesciunt sed facilis enim.</p>
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
