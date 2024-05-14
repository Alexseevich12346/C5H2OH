import '../App.css';
import { Flex } from '@chakra-ui/react';

const NewsPage = () => {
    return (
       <Flex className='c_news'>
            <div className='news'>
                <div className='newspaper'>
                    <h2>Новости понедельника</h2>
                    <p></p>
                </div>
                <div className='newspaper'>
                    <h2>Новости вторника
                    </h2>
                    <p></p>
                </div>
                <div className='newspaper'>
                    <h2>Новости  среды</h2>
                    <p></p>
                </div>
                <div className='newspaper'>
                    <h2>Новости  четверга</h2>
                    <p></p>
                </div>
                <div className='newspaper'>
                    <h2>Новости  пятницы</h2>
                    <p></p>
                </div>
                <div className='newspaper'>
                    <h2>Новости  субботы
                    </h2>
                    <p></p>
                </div>
                <div className='newspaper'>
                    <h2>Новости  воскресенья</h2>
                    <p></p>
                </div>
            </div>
       </Flex>
  );
}

export default NewsPage;