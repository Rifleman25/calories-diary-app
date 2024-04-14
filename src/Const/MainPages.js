import History from "../components/Pages/History";
import Today from "../components/Pages/Today/Today";
import About from "../components/Pages/About";
import EatingTypes from "../components/Pages/Dicts/EatingTypes";
import FoodTypes from "../components/Pages/Dicts/FoodTypes";

export default [{
    label: 'Что это за фрукт?', 
    path: '/',
    component: About,
    children: null
}, {
    label: 'Сегодня', 
    path: '/today',
    component: Today,
    children: null
}, {
    label: 'История потребления', 
    path: '/history',
    component: History,
    children: null
}, {
    label: 'Справочники', 
    path: '/dicts',
    component: History,
    children: [{
        label: 'Типы приемов еды', 
        path: '/eatingTypes',
        component: EatingTypes,
        children: null
    }, {
        label: 'Продукты', 
        path: '/foodTypes',
        component: FoodTypes,
        children: null
    }]
}];