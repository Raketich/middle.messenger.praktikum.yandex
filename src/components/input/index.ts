import { Component } from "../../utils/component";
import {IInput} from './types'
import './styles.css'

export class Input extends Component {
    constructor({onBlur, onFocus, ...props}: IInput) {
        super({ ...props, events: { blur: onBlur, focus: onFocus } });
    }
    render() {
        return `<label for="{{name}}">
    <input class="input" type="{{type}}" id="{{name}}" name="{{name}}" placeholder="{{label}}"/>
</label>`;
    }
}
