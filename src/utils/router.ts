import { Component } from "./component";

export class Route {
    private component: Component | null;
    private props: any;
    private pathname: string;
    private componentClass: typeof Component;

    constructor(pathname: string, component: typeof Component, props: any) {
        this.pathname = pathname;
        this.component = null;
        this.props = props;
        this.componentClass = component;
    }

    navigate(pathname: stirng) {
        if(this.match(pathname)) {
            this.pathname = pathname;
            this.render();
        }
    }

    leave() {
        this.component = null;
    }

    match(pathname: string) {
        return this.pathname === pathname;
    }

    render() {
        if(!this.component) {
            this.component = new this.componentClass();
        }
        const query = this.props.rootQuery
        const root = document.querySelector(query);
        if(!root) {
            throw new Error(`for ${query} have not been found root`)
        }
        root.innerHTML = '';
        root.appendChild(this.component.getContent());
    }
}

export class Router {
    private static __instance: Router;
    routes: Route[] = [];
    history = window.history;
    currentRoute: Route | null = null;

    constructor() {
        if(Router.__instance) {
            return Router.__instance;
        }
        Router.__instance = this;
    }

    use(pathname: string, component: typeof Component) {
        const route = new Route(pathname, component, {rootQuery: '#app'})
        this.routes.push(route);
        return this;
    }

    start() {
        window.onpopstate = () => {
            this._onRoute(window.location.pathname);
        };
        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if(!route) {
            this.go('/404');
            return;
        }
        if(this.currentRoute) {
            this.currentRoute.leave();
        }
        this.currentRoute = route;
        route.render();
    }

    getRoute(pathname: string) {
        return this.routes.find(r => r.match(pathname));
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }
}

// export function inRouter(Component: typeof Component) {
//     return class InRouter extends Component {
//         constructor(props: any) {
//             super({...props}, router: new Router)
//         }
//     }
// }
