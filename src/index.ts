import Button from './components/button';
import Avatar from './components/avatar';
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

import { userFields } from "./data/userFields";

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
        function: new settings({fields: userFields, userName: "User Name"})
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
        pathname: "/chat",
        function: new main(),
    },
    {
        pathname: "/set-new-password",
        function: new newPassword(),
    },
    {
        pathname: "/change-user-info",
        function: new changeUserInfo({userFields: userFields}),
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
    app.innerHTML = '';
    app.appendChild(template.function.getContent() as Node)
}

window.addEventListener('DOMContentLoaded', () => {
    routeTo();
})
