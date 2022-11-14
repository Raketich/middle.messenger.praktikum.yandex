import { Component } from "../../../utils/component";
import userFields from "../../../data/userFields";
import {validateInput} from "../../../utils/useValidate";

export class ChangeUserInfo extends Component {
    constructor() {
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
            }
        };
        super({ fields: userFields, validateInput, submit});
    }
    render() {
        return `
       <form>
            <ul class="settings-list">
                {{#each fields}}
                    <li>
                        {{this.fieldName}}
                        {{{ Input name=this.is label=this.fieldName onBlur=validateInput
                        onFocus=validateInput}}}
                    </li>
                 {{/each}}
            </ul>
            {{{ Button label="Сохранить" onClick=submit}}}
        </form>`
    }
}
