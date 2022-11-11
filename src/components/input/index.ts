import Block from "../../utils/component";
import {IInput} from './types'
import './styles.css'

class Input extends Block {
    constructor({onBlur, onFocus, ...props}: IInput) {
        super({ ...props, events: { blur: onBlur, focus: onFocus } });
    }
    render() {
        return `<label for="{{name}}">
    <input class="input" type="{{type}}" id="{{name}}" name="{{name}}" placeholder="{{label}}"/>
</label>`;
    }
}

export default Input;