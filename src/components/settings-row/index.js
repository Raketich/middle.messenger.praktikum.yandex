import Block from "../../utils/component";
// import template from './button.hbs'

class SettingsRow extends Block {
    constructor({onClick, ...props}) {
        super({
            ...props, events: {click: onClick}
        });
    }
    render() {
        return `
                <div class="settings-row">
                    <span>{{row-name}}</span>
                    <span>{{row-value}}</span>
                </div>
            `;
    }
}

export default SettingsRow;