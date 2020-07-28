import booking from '../components/booking'
import main from '../components/main'


const routes = [
    { path: '/', component: main, name:main },
    { path: '/booking', component: booking, name:booking },
];

export default routes;