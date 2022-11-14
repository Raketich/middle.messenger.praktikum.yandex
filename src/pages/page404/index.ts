import { Component } from "../../utils/component";

export class Page404 extends Component {
    render() {
        return `
<main>
        <div class="error-container">
            <p>Unfortunately we could not find page you have been requested</p>
            <a href="/">To main page</a>   
            {{{Button type="submit" label="Example"}}}
        </div>
</main>`
    }
}
