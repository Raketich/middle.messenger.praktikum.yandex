import Component from "../../utils/component";
// import template from './button.hbs'

class SettingsRow extends Component {
    constructor({...props}) {
        super({
            ...props
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
