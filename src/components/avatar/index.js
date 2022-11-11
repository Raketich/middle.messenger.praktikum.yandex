import Block from "../../utils/component";
import './styles.css'

class Avatar extends Block {
    constructor({onClick, ...props}) {
        super({
            ...props, events: {click: onClick}
        });
    }
    render() {
        return `
            <img class="avatar" src="" alt="avatar">
                <p>A</p>
            </img>
            `;
    }
}

export default Avatar;