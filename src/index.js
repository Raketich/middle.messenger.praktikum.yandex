import template from './index.hbs'

import './components/button';
import './components/input';
import './components/settings-row'
import './components/avatar'

import settings from "./pages/settings/settings.hbs"
import register from "./pages/register/register.hbs"
import auth from "./pages/auth/auth.hbs"
import chat from "./pages/chat/chat.hbs"
import newPassword from "./pages/settings/newPassword/new-password.hbs"
import changeUserInfo from "./pages/settings/changeUserInfo/change-user-info.hbs"
import page404 from "./pages/page404/page404.hbs"
import page500 from "./pages/page500/page500.hbs"

import { userFields } from "./data/userFields";

import './styles.css'

console.log(location)

const templates = [
    {
        pathname: "/",
        function: template({}),
    },
    {
        pathname: "/settings",
        function: settings({fields: userFields, userName: "User Name"})
    },
    {
        pathname: "/register",
        function: register({fields: userFields}),
    },
    {
        pathname: "/auth",
        function: auth({}),
    },
    {
        pathname: "/chat",
        function: chat({}),
    },
    {
        pathname: "/set-new-password",
        function: newPassword({}),
    },
    {
        pathname: "/change-user-info",
        function: changeUserInfo({userFields: userFields}),
    },
    {
        pathname: "/404",
        function: page404({}),
    },
    {
        pathname: "/500",
        function: page500({}),
    },

]

const routeTo = () => {
    const template =  templates.filter(tmpl => tmpl.pathname === location.pathname)[0];
    return template.function
}

window.addEventListener('DOMContentLoaded', () => {
    const app = document.querySelector('#app');
    app.innerHTML = routeTo();
})