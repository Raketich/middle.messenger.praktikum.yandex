import Block from "../../utils/component";

class page404 extends Block {
    render() {
        return `
        <div class="error-container">
    <p>Unfortunately we could not find page you have been requested</p>
    <a href="/">To main page</a>   
    {{{Button type="submit" label="Example"}}}
</div>`
    }
}

export default page404
