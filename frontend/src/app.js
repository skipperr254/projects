import Error404Screen from './screens/Error404Screen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';

import { parseRequestURL } from './utils.js';

const routes = {
    "/": HomeScreen,
    "/product/:id": ProductScreen
}

const router = () => {
    const request = parseRequestURL()
    const parseURL = (request.resource ? `/${request.resource}` : "/") +
        (request.id ? "/:id" : "") +
        (request.verb ? `/${request.verb}` : "");

    const screen = routes[parseURL] || Error404Screen;
    console.log(request)
    const root = document.querySelector("#root");
    root.innerHTML = screen.render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router)