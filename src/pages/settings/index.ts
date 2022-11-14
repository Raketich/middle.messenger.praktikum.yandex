import { Component } from "../../utils/component";

export class Settings extends Component {
    render() {
        return `
       <div>
            <div>
                {{{ Avatar }}}
            </div>
            <p>{{userName}}</p>
            <ul class="settings-list">
                {{#each fields}}
                    <li>{{{ SettingsRow row-name=this.fieldName row-value=this.fieldValue}}}</li>
                {{/each}}
            </ul>
            {{{ Button label="Change settings" }}}
            {{{ Button label="Change password" }}}
            {{{ Button label="Log out" }}}
        </div>`
    }
}
