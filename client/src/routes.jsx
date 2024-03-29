import {ShopRoute, HomeRoute, RegisterRoute, AuthRoute , NewsRoute} from "./utils/consts";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/homePage";
import AuthPage from "./pages/authPage";
import RegisterPage from "./pages/RegisterPage";
import NewsPage from "./pages/NewsPage";

export const publicRoutes = [
    {
        path: ShopRoute,
        Element: ShopPage
    },
    {
        path: HomeRoute,
        Element: HomePage
    },
    {
        path: AuthRoute,
        Element: AuthPage
    },
    {
        path: RegisterRoute,
        Element: RegisterPage
    },
    {
        path: NewsRoute,
        Element: NewsPage
    }
];
export const privateRoutes = [
    {
        
    },
]