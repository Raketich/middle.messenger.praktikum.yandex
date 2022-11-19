import { Component } from "../../utils/component";
import {validateInput} from "../../utils/useValidate";
import userFields from "../../data/userFields";

export class Register extends Component {
    constructor() {
        const test = () => console.log('test');
        const submit = (): void => {
            const el = this.getContent();
            const inputs = Array.from(el?.querySelectorAll('input') as NodeList);
            const inputsInfo: Array<Record<string, string | boolean>> = inputs
                .map((input: HTMLInputElement) => ({
                    name: input.name,
                    value: input.value,
                    isValid: validateInput(input),
                }));
            if (inputsInfo.every((input) => input.isValid)) {
                console.log("Registration fields info: ", inputsInfo);
            } else {
                console.log('fail')
            }
        };

        super({ fields: userFields, validateInput, submit, test });
    }
    render() {
        return `
<main class="register-main">
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
        {{{ Button label="Register" type="submit" onClick=submit}}}
        {{# Button }}<a href="/auth">Sign In</a>{{/Button}}
        
</form>
</main>`
    }
}
