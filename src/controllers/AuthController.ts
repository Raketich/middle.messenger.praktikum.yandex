import { AuthApi, SignInData, SignupData, UserData } from '../api/AuthApi';
import { store } from '../store';
import { deleteUser, setError, setUser } from '../store/user';
import Router from '../common/Router/Router';

class AuthController {
    private api: AuthApi;

    constructor() {
        this.api = new AuthApi();
    }

    async signup(data: SignupData) {
        try {
            await this.api.signup(data);
            await this.fetchUser();
            await Router.go('/messenger');
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }

    async login(data: SignInData) {
        try {
            await this.api.login(data);
            await this.fetchUser();
            await Router.go('/messenger');
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }

    async logout() {
        try {
            await this.api.logout();

            store.dispatch(deleteUser());
        } catch (e) {
            store.dispatch(setError(e as { reason: string }));
        }
    }

    async fetchUser(): Promise<UserData | void> {
        try {
            const user = await this.api.read();

            store.dispatch(setUser(user));

            return user;
        } catch (e) {
            store.dispatch(deleteUser());
        }
    }
}

export default new AuthController();
