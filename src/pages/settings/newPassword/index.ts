import { Component } from "../../../utils/component";
import {validateInput} from "../../../utils/useValidate";


export class NewPassword extends Component {
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
                console.log("Change passwords fields info: ", inputsInfo);
            }
        };
        super({ validateInput, submit});
    }
    render() {
        return `
       <form class="register-main">
       <ul class="settings-list">
       
    <li>
    
        <span>Old password</span>
        {{{ Input name="old_password" label="Old Password" onBlur=validateInput
                        onFocus=validateInput}}}
    </li>
    <li>
        <span>New password</span>
        {{{ Input name="new_password" label="New Password" onBlur=validateInput
                        onFocus=validateInput}}}
    </li>
    <li>
        <span>Repeat new password</span>
        {{{ Input name="new_password" label="New Password" }}}
    </li>
    </ul>
    {{{ Button label="Сохранить" onClick=submit}}}
</form>`
    }
}
