import Component from "../../utils/component";
// import template from './button.hbs'
import { ISettingsRow } from './types'

class SettingsRow extends Component {
    constructor({...props}: ISettingsRow) {
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
