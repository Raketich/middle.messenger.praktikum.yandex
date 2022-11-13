import Block from "../../utils/component";

class settings extends Block {
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

export default settings
