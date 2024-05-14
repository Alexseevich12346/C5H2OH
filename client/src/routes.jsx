import {ShopRoute, HomeRoute, RegisterRoute, AuthRoute , NewsRoute, CourseRoute,ContactRoute} from "./utils/consts";
import ShopPage from "./pages/ShopPage";
import HomePage from "./pages/homePage";
import AuthPage from "./pages/authPage";
import RegisterPage from "./pages/RegisterPage";
import NewsPage from "./pages/NewsPage";
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursePage";

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
    },
    {
        path: ContactRoute,
        Element: ContactPage
    },
    { 
        path: CourseRoute,
        Element: CoursePage
    }
];
export const privateRoutes = [
    {
        
    },
]