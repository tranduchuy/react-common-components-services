import HomePage from "../pages/Home";
import CommonComponents from "../pages/CommonComponents";
import CommonService from "../pages/CommonServices";
import About from "../pages/About";

const routes = [
    {
        path: '/',
        component: HomePage,
        title: 'Home'
    },
    {
        path: '/components',
        component: CommonComponents,
        title: 'Components'
    },
    {
        path: '/services',
        component: CommonService,
        title: 'Services'
    },
    {
        path: '/about',
        component: About,
        title: 'About'
    }
];

export default routes;
