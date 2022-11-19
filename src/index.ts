import { Button } from './components/button';
// @ts-ignore
import { Avatar } from './components/avatar';
// @ts-ignore
import { SettingsRow } from './components/settings-row';
import { Input } from './components/input';
import { Chat } from "./components/chat";

import { Settings } from "./pages/settings"
import { Register } from "./pages/register"
import { Auth } from "./pages/auth"
import { Main } from "./pages/main"
import { NewPassword } from "./pages/settings/newPassword"
import { ChangeUserInfo } from "./pages/settings/changeUserInfo"
import { Page404 } from "./pages/page404"
import { Page500 } from "./pages/page500"
import { Navigation } from "./pages/navigation"

import { registerComponent } from "./utils/registerComponent";

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
        function: new Navigation(),
    },
    {
        pathname: "/settings",
        function: new Settings()
    },
    {
        pathname: "/register",
        function: new Register(),
    },
    {
        pathname: "/auth",
        function: new Auth(),
    },
    {
        pathname: "/main",
        function: new Main(),
    },
    {
        pathname: "/set-new-password",
        function: new NewPassword(),
    },
    {
        pathname: "/change-user-info",
        function: new ChangeUserInfo(),
    },
    {
        pathname: "/404",
        function: new Page404(),
    },
    {
        pathname: "/500",
        function: new Page500(),
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
