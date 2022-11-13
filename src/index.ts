import Button from './components/button';
// @ts-ignore
import Avatar from './components/avatar';
// @ts-ignore
import SettingsRow from './components/settings-row';
import Input from './components/input';
import Chat from "./components/chat";

import settings from "./pages/settings"
import register from "./pages/register"
import auth from "./pages/auth"
import main from "./pages/main"
import newPassword from "./pages/settings/newPassword"
import changeUserInfo from "./pages/settings/changeUserInfo"
import page404 from "./pages/page404"
import page500 from "./pages/page500"
import navigation from "./pages/navigation"

import registerComponent from "./utils/registerComponent";

registerComponent(Input, "Input");
registerComponent(Button, "Button")

// import './styles.css'

const components = [
    {name: "Button", component: Button},
    {name: "Avatar", component: Avatar},
    {name: "SettingsRow", component: SettingsRow},
    {name: "Input", component: Input},
    {name: "Chat", component: Chat}]


const registerComponents = () => {
    components.forEach(({name, component}) => {
        registerComponent(component, name)
    })
}

registerComponents();

const templates = [
    {
        pathname: "/",
        function: new navigation(),
    },
    {
        pathname: "/settings",
        function: new settings()
    },
    {
        pathname: "/register",
        function: new register(),
    },
    {
        pathname: "/auth",
        function: new auth(),
    },
    {
        pathname: "/main",
        function: new main(),
    },
    {
        pathname: "/set-new-password",
        function: new newPassword(),
    },
    {
        pathname: "/change-user-info",
        function: new changeUserInfo(),
    },
    {
        pathname: "/404",
        function: new page404(),
    },
    {
        pathname: "/500",
        function: new page500(),
    },
]

const routeTo = () => {

    const template =  templates.filter(tmpl => tmpl.pathname === location.pathname)[0];
    const app = document.querySelector('#app');
    if(app) {
        app.innerHTML = '';
        app.appendChild(template.function.getContent() as Node)
    }
}

window.addEventListener('DOMContentLoaded', () => {
    routeTo();
})
