import './App.css';
import NavBar from './components/NavBar';
import ShopPage from './pages/ShopPage'
import CardItem from './components/cardItem';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter'
function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>

  );
}

export default App;
