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
            <div class="avatar">
                <p>A</p>
            </div>
            `;
    }
}

export default Avatar;