import Block from "../../utils/component";
import {validateInput} from "../../utils/useValidate";
import userFields from "../../data/userFields";


class register extends Block {
    constructor() {
        const submit = (): void => {
            const el = this.getContent();
            const inputs = Array.from(el?.querySelectorAll('input') as NodeList);
            const inputsData: Array<Record<string, string | boolean>> = inputs
                .map((input: HTMLInputElement) => ({
                    name: input.name,
                    value: input.value,
                    isValid: validateInput(input),
                }));
            if (inputsData.every((input) => input.isValid)) {
                console.log(inputsData);
            }
        };

        super({ fields: userFields, validateInput, submit });
    }
    render() {
        return `
        <form class="form-container">
    <ul class="settings-list">
        {{#each fields}}
            <li>
                <span>{{this.fieldName}}</span>
                {{{ Input name=this.id label=this.fieldName type=this.type onBlur=validateInput
                        onFocus=validateInput}}}
            </li>
        {{/each}}
        </ul>
    {{{ Button label="Register" type="submit"}}}
    {{{ Button label="Sign In" }}}
</form>`
    }
}

export default register