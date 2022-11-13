import Component from "../../utils/component";
// import template from './button.hbs'
import './styles.css'
import { IButton } from './types'

class Button extends Component {
    constructor({onClick, ...props}: IButton) {
        super({
            ...props, events: {click: onClick}
        });
    }
    render() {
        return `<button class="button" type="{{type}}">{{ label }}</button>`;
    }
}

export default Button;
