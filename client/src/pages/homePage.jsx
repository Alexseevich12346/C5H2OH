import '../App.css'; 
import {Link } from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Vot from '../images/pc.png'
import  Footer  from '../components/Footer'
import { Flex, Image } from '@chakra-ui/react';
import Countdown from '../countdown';
import IconOne from '../images/icon-1.jpg'
import IconTwo from '../images/icon-2.jpg'
import IconThree from '../images/icon-3.jpg'
import { useEffect, useState } from 'react';
import Loader from '../components/Loader'
import TeacherOne from '../images/teacher-1.jpg'
import TeacherTwo from '../images/teacher-2.jpg'
import TeacherThree from '../images/teacher-3.jpg';
import {observer} from 'mobx-react-lite';
import { Context } from '../index';
import { useContext } from 'react';


const HomePage = () =>{
    const {store} = useContext(Context);
    const [isLoading,setIsLoading] = useState(true);
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = () => {
        alert(`Email: ${email}`);
    };
    useEffect(() => {
        const checkAuth = async () =>{
            if(localStorage.getItem('token')){
                await store.checkAuth();
            }
            setIsLoading(false)
        }
        checkAuth();
    }, [store])
    return(
        <> 
            {isLoading ? (
                <Loader/>
            ) : (   
                <>  
                <NavBar/>
                <div className="main">
                    <div className="main_man">
                        <div className="main_hed">
                            <span className='p'>Первый курс <br />
                                по компьютерной сборке
                            </span>
                        </div>
                        <Countdown />
                    </div>
                    <div className="main_two">
                        <div className="kurs_po_obuch">
                            <div className="but_kurs">
                                <Link top={''}>
                                <button className='btnMain'>
                                    Заказать курс
                                </button>
                                </Link>
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
                                    width={'400px'}
                                    alt='TheHost_IP-KVM'
                                    float={'left'}
                                >
                                </Image>
                                </div>
                                <div className="h1_inf" id='about'>
                                    <h1>Чем мы занимаемся?</h1>
                                    <p>На курсах мы занимаемся обучением студентов основам и практическим навыкам сборки компьютеров. В рамках курсов мы познакомим вас с различными компонентами компьютера, их функциональностью и совместимостью, а также научим правильно выбирать и собирать комплектующие.</p>
                                </div>
                            </div>
                        </div>
                        <div className="start">
                            {/* <Carousel/> */}
                            <div className="start_inf">
                                <div class="loading-spinner"></div>
                                <h1>Быстрый старт</h1>
                                <span className='nine_proc'>Больше 90% учеников прошли полный курс и смогли <br/>собрать свой первый компьютер</span>
                            </div>
                            <div className="procent">
                                <div className="pro">
                                    <div className="num">0%</div>
                                    <div className="border_o"></div>
                                    <div className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem necessitatibus ea debitis, architecto accusamus quas a! Id culpa ullam, natus labore voluptate fugit odio rem ducimus reprehenderit, ipsam, qui quisquam.</div>
                                </div>
                                <div className="pro">
                                    <div className="num">35%</div>
                                    <div className="border_t"></div>
                                    <div className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi quaerat blanditiis delectus dicta aliquam, saepe culpa excepturi laborum temporibus. Distinctio voluptatem inventore ea maxime reprehenderit maiores omnis. Alias, necessitatibus.</div>
                                </div>
                                <div className="pro">
                                    <div className="num">75%</div>
                                    <div className="border_th"></div>
                                    <div className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi quaerat blanditiis delectus dicta aliquam, saepe culpa excepturi laborum temporibus. Distinctio voluptatem inventore ea maxime reprehenderit maiores omnis. Alias, necessitatibus.</div>
                                </div>
                                <div className="pro">
                                    <div className="num">Итог</div>
                                    <div className="border_f"></div>
                                    <div className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque commodi quaerat blanditiis delectus dicta aliquam, saepe culpa excepturi laborum temporibus. Distinctio voluptatem inventore ea maxime reprehenderit maiores omnis. Alias, necessitatibus.</div>
                                </div>
                            </div>
                        </div>
                        <div className="profice">
                            <h1>Получите профессию прямо сейчас</h1>
                            <div className="prof_doc">
                                <div className="pract">
                                    <Image                    
                                        textAlign={'center'}
                                        src={IconOne}
                                        width={'100px'}
                                        alt='IconOne'
                                        float={'left'}
                                    >
                                    </Image>
                                    <p>Только практические навыки в работе</p>
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat animi, nihil laudantium ad, officia tempora repudiandae consequuntur eos ipsum quaerat alias. Odio, nesciunt inventore ex quisquam temporibus velit tempora sint!</span>
                                </div>
                                <div className="work">
                                    <Image                    
                                        textAlign={'center'}
                                        src={IconTwo}
                                        width={'100px'}
                                        alt='IconTwo'
                                        float={'left'}

                                    >
                                    </Image>
                                    <p>Работа на самом современном оборудовании</p>
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat animi, nihil laudantium ad, officia tempora repudiandae consequuntur eos ipsum quaerat alias. Odio, nesciunt inventore ex quisquam temporibus velit tempora sint!</span>
                                </div>
                                <div className="study">
                                    <Image                    
                                        textAlign={'center'}
                                        src={IconThree}
                                        width={'100px'}
                                        alt='IconThree'
                                        float={'left'}
                                    >
                                    </Image>
                                    <p>Сертификация по окончании обучения</p>
                                    <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat animi, nihil laudantium ad, officia tempora repudiandae consequuntur eos ipsum quaerat alias. Odio, nesciunt inventore ex quisquam temporibus velit tempora sint!</span>
                                </div>
                            </div>
                        </div>
                        <div className="partners">
                            <div className="partner">
                            <div class="loading-spinner"></div>
                            <h1>Партнеры - топовые бренды</h1>
                            <div class="container">
                                <div class="image-container" style={{image: "./src/images/logo.png",borderc:" black"}}>
                                    <div class="placeholder"></div>
                                </div>
                                <div class="image-container" id='asrock' style={{image: "./src/images/asrock.png",borderc:" black"}}>
                                    <div class="placeholder"></div>
                                </div>
                                <div class="image-container" id='be_quite' style={{image: "./src/images/be_quite.png",borderc:" black"}}>
                                    <div class="placeholder"></div>
                                </div>
                                <div class="image-container" id='AMD' style={{image: "./src/images/AMD.jpg",borderc:" black"}}>
                                    <div class="placeholder"></div>
                                </div>
                                <div class="image-container" id='intel' style={{image: "./src/images/intel.png",borderc:" black"}}>
                                    <div class="placeholder"></div>
                                </div>
                                <div class="image-container" id='nvidia' style={{image: "./src/images/nvidia.svg",borderc:" black"}}>
                                    <div class="placeholder"></div>
                                </div>
                                <div class="image-container" id='RoG' style={{image: "./src/images/RoG.jpg",borderc:" black"}}>
                                    <div class="placeholder"></div>
                                </div>
                                <div class="image-container" id='' style={{image: "./src/images/samsung.png",borderc:" black"}}>
                                    <div class="placeholder"></div>
                                </div>
                            </div>
                        </div>
                        <div className="programme_stydies">
                            <h1>Программа обучения</h1>
                            <span className='nine_proc'>Больше 90% учеников прошли полный курс и смогли <br/>собрать свой первый компьютер</span>
                            <div class="timeline">
                                <div class="line"></div>
                                <div class="week left" style={{top: "20px"}}><span>Красивая часть курса,
                                    которая помогает в успехе</span>
                                </div>
                                <div class="week right" style={{top: "100px"}}><span>Красивая часть курса,
                                    которая помогает в успехе</span>
                                </div>
                                <div class="week left" style={{top: "180px"}}><span>Красивая часть курса,
                                    которая помогает в успехе</span>
                                </div>
                                <div class="week right" style={{top: "260px"}}><span>Красивая часть курса,
                                    которая помогает в успехе</span>
                                </div>
                                <div class="week left" style={{top: "340px"}}><span>Красивая часть курса,
                                    которая помогает в успехе</span>
                                </div>
                                <div class="week right" style={{top: "420px"}}><span>Красивая часть курса,
                                    которая помогает в успехе</span>
                                </div>
                                <div class="week left" style={{top: "500px"}}><span>Красивая часть курса,
                                    которая помогает в успехе</span>
                                </div>
                            </div>
                        </div>
                        <div className="teachers">
                            <div class="loading-spinner"></div>
                            <h1>Ваши преподаватели</h1>
                            <div className="tabloid">
                                <div class="profile-card">
                                    <Image
                                         textAlign={'center'}
                                         src={TeacherOne}
                                         width={'100px'}
                                         alt='TeacherOne'
                                         float={'left'}
                                         class="profile-photo"
                                    />
                                    <h1 className='teacher_name'>Иван Иванов</h1>
                                    <p class="title">Web Developer</p>
                                    <button class="bio-button">Биография</button>
                                    <div class="bio-popup"style={{bottom:'-160px'}}>Иван — опытный веб-разработчик, работающий в индустрии более 5 лет. Любит кофе, особенно на занятиях при новых темах</div>
                                </div>
                                <div class="profile-card">
                                    <Image
                                         textAlign={'center'}
                                         src={TeacherTwo}
                                         width={'100px'}
                                         alt='TeacherTwo'
                                         float={'left'}
                                         class="profile-photo"
                                    />
                                    <h1 className='teacher_name'>Владимир Юрьевич </h1>
                                    <p class="title">Web Developer</p>
                                    <button class="bio-button">Биография</button>
                                    <div class="bio-popup" style={{bottom:'-160px'}}>Владимир - опытный программист, работающий в индустрии более 5 лет, методика его обучения нравится многим</div>
                                </div>
                                <div class="profile-card">
                                    <Image
                                         textAlign={'center'}
                                         src={TeacherThree}
                                         width={'100px'}
                                         alt='TeacherThree'
                                         float={'left'}
                                         class="profile-photo"
                                    />
                                    <h1 className='teacher_name'>Егор Алексеевич</h1>
                                    <p class="title">Web Developer</p>
                                    <button class="bio-button">Биография</button>
                                    <div class="bio-popup" style={{bottom:'-160px'}}>Егор — опытный веб-разработчик, объясняет материал достуано и сразу предоставляет практические задания</div>
                                </div>
                            </div>
                        </div>
                        <div className="states">
                            <h1>Статьи каждую неделю</h1>
                            <span className='nine_proc'>Чтобы получать свежие и актуальные новости  <br/>введите свой E-mail и нажмите кнопку "Подписаться"</span>
                            <div className="email-input-container">
                                <input
                                    type="email"
                                    placeholder="E-mail"
                                    value={email}
                                    onChange={handleEmailChange}
                                    className="email-input"
                                />
                                <button onClick={handleSubmit} className="submit-button">
                                    Подписаться
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <Flex
                    h={'100vh'}
                >
                    <Footer/>   
                </Flex>
                </> 
            )}
        </>
    )
}
export default observer(HomePage);
