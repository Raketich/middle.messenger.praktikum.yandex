// require('babel-polyfill');
import './assets/scss/app.scss';
import './helpers';

import AuthController from './controllers/AuthController';
import registerComponent, { BlockConstructable } from './common/register';
import Router, { RouterBeforeEachFn } from './common/Router/Router';
import Block from './common/Block/Block';
import LoginPage from './pages/login';
import LogoutPage from './pages/logout';
import RegistrationPage from './pages/registration';
import SettingsPage from './pages/settings';
import MessengerPage from './pages/messenger/index';
import SettingsUpdatePage from './pages/settings/update';
import ChangePasswordPage from './pages/settings/change';
import Page500 from './pages/errors/500';
import Page404 from './pages/errors/404';

import AddUserPopup from './components/AddUserPopup'
import Back from './components/Back'
import Button from './components/Button'
import ChangeImagePopup from './components/ChangeImagePopup'
import Chat from './components/Chat'
import ChatForm from './components/ChatForm'
import ChatFoundUser from './components/ChatFoundUser'
import ChatList from './components/ChatList'
import ChatUser from './components/ChatUser'
import DeleteUserPopup from './components/DeleteUserPopup'
import FileInput from './components/FileInput'
import Input from './components/Input'
import InputGroup from './components/InputGroup'
import Link from './components/Link'
import Search from './components/Search'
import SearchResult from './components/SearchResult'
import SettingsProfile from './components/SettingsProfile'


const components =
    {
        "AddUserPopup": AddUserPopup,
        "Back": Back,
        "Button": Button,
        "ChangeImagePopup": ChangeImagePopup,
        "Chat": Chat,
        "ChatForm": ChatForm,
        "ChatFoundUser": ChatFoundUser,
        "ChatList": ChatList,
        "ChatUser": ChatUser,
        "DeleteUserPopup": DeleteUserPopup,
        "FileInput": FileInput,
        "Input": Input,
        "InputGroup": InputGroup,
        "Link": Link,
        "Search": Search,
        "SearchResult": SearchResult,
        "SettingsProfile": SettingsProfile,
    }

Object.values(components).forEach(component => {
  registerComponent(component as BlockConstructable);
});

const beforeEach: RouterBeforeEachFn = async (next, currentRoute): Promise<void> => {
  const user = await AuthController.fetchUser();
  if (!currentRoute) {
    return next();
  }
  if (currentRoute.pathname === '/') {
    if (user) {
      return Router.go('/messenger');
    }
    return next();
  } else {
    if (user || !currentRoute.props.requireAuth) {
      return next();
    }
    return Router.go('/');
  }
};

Router.use('/', { block: LoginPage })
  .use('/signup', { block: RegistrationPage })
  .use('/logout', { block: LogoutPage, meta: { requireAuth: true } })
  .use('/messenger', { block: MessengerPage, meta: { requireAuth: true } })
  .use('/settings', { block: SettingsPage, meta: { requireAuth: true } })
  .use('/settings/update', { block: SettingsUpdatePage, meta: { requireAuth: true } })
  .use('/settings/change-password', { block: ChangePasswordPage, meta: { requireAuth: true } })
  .use('/500', { block: Page500 })
  .errorPage(Page404)
  .beforeEach(beforeEach)
  .install();
