import booking from '../components/booking'
import main from '../components/main'
import destinations from '../components/destinations'


const routes = [
    { path: '/', component: main, name:main },
    { path: '/booking', component: booking, name:booking },
    {path:'/destinations', component: destinations, name:destinations}
];

export default routes;