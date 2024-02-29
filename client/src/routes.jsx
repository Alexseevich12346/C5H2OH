import {ShopRoute, HomeRoute, RegisterRoute, AuthRoute} from "./utils/consts";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/homePage";
import AuthPage from "./pages/authPage";
import RegisterPage from "./pages/RegisterPage";

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
];
export const privateRoutes = [
    {
        
    },
]