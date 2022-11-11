import Block from "../../../utils/component";

class changeUserInfo extends Block {
    render() {
        return `
       <form>
    <ul class="settings-list">
    {{#each userFields}}
        <li>
        {{this.fieldName}}
        {{{ Input label=this.fieldName }}}
        </li>
    {{/each}}
    </ul>
    {{{ Button label="Сохранить"}}}
</form>`
    }
}

export default changeUserInfo