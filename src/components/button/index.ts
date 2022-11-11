import Block from "../../utils/component";
// import template from './button.hbs'
import './styles.css'
import { IButton } from './types'

class Button extends Block {
    constructor({onClick, ...props}): IButton {
        super({
            ...props, events: {click: onClick}
        });
    }
    render() {
        return `<button class="button" type="{{type}}">{{ label }}</button>`;
    }
}

export default Button;
