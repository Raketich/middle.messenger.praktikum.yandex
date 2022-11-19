import { Component } from "../../utils/component";

export class Navigation extends Component {

    render() {
        return `
<main>
        <div class="content">
            <nav>
                <ul>
                    <li><a href="/auth">Auth</a></li>
                    <li><a href="/register">Register</a></li>
                    <li><a href="/settings">Settings</a></li>
                    <li><a href="/main">Main</a></li>
                    <li><a href="/change-user-info">Change User Info</a></li>
                    <li><a href="/set-new-password">Set New Password</a></li>
                    <li><a href="/404">404</a></li>
                    <li><a href="/500">500</a></li>
                </ul>   
            </nav>  
        </div>
        </main>
`
    }
}
