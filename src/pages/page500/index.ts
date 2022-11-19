import { Component } from "../../utils/component";
import './styles.css'

export class Page500 extends Component {
    render() {
        return `
<main>
        <div class="error-container">
            <p>It seems like something gone wrong on server.</p>
            <p>Dont worry. we are already working on it </p>    
        </div>
</main>`
    }
}
