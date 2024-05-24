import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import Product from "../src/components/Product";
import { productData, responsive } from "./data";
import AppRouter from './components/AppRouter'
import {observer} from 'mobx-react-lite';
function App() {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
}

export default observer(App);
