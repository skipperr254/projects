import Error404Screen from './screens/Error404Screen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

import { parseRequestURL } from './utils';

const routes = {
    "/": HomeScreen,
    "/product/:id": ProductScreen
}

const router = async () => {
    const request = parseRequestURL()
    const parseURL =
        (request.resource ? `/${request.resource}` : "/") +
        (request.id ? "/:id" : "") +
        (request.verb ? `/${request.verb}` : "");

    const screen = routes[parseURL] || Error404Screen;
    const root = document.querySelector("#root");
    root.innerHTML = await screen.render();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router)