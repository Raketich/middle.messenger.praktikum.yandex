import Component from "../../utils/component";
import './styles.css'
import { IAvatar} from './types'

class Avatar extends Component {
    constructor({onClick, ...props}: IAvatar) {
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
