import { Component } from "../../utils/component";
// import template from './chat.hbs'
import './styles.css'


export class Chat extends Component {
    constructor({...props}) {
        super({
            ...props
        });
    }
    render() {
        return `
            <div class="chat__container">
    <div class="chat__left-side">
        {{{ Avatar}}}
        <div>
            <p>Name</p>
            <p>Text</p>
        </div>
    </div>
    <div class="chat__right-side">
        <p>time</p>
        <p>4</p>
    </div>

</div>
        `;
    }
}
