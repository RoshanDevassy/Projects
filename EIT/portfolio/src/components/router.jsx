import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';
import Header from "./header";
import Contact from "./contact";

const router = createBrowserRouter([
    {
        element:<Header/>,
        children:[
            {
                index: true,
                element: <Home/>,
            },
            {
                path: '/home',
                element : <Home/>,
            },
            {
                path: '/about',
                element: <About/>,
            },
            {
                path: '/projects',
                element : <Projects/>,
            },
            {
                path: '/contact',
                element : <Contact/>,
            },
        ]
    },
    
]);

export {router};