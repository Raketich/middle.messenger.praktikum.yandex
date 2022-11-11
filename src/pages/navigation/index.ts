import Block from "../../utils/component";

class navigation extends Block {
    render() {
        return `
        <div class="content">
    <a href="/auth">Auth</a>
    <a href="/register">Register</a>
    <a href="/settings">Settings</a>
    <a href="/main">Main</a>
    <a href="/change-user-info">Change User Info</a>
    <a href="/set-new-password">Set New Password</a>
    <a href="/404">404</a>
    <a href="/500">500</a>
</div>`
    }
}

export default navigation