import Block from "../../../utils/component";
import {validateInput} from "../../../utils/useValidate";


class newPassword extends Block {
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
       <form>
    <div>
        <span>Old password</span>
        {{{ Input name="old_password" label="Old Password" onBlur=validateInput
                        onFocus=validateInput}}}
    </div>
    <div>
        <span>New password</span>
        {{{ Input name="new_password" label="New Password" onBlur=validateInput
                        onFocus=validateInput}}}
    </div>
    <div>
        <span>Repeat new password</span>
        {{{ Input name="new_password" label="New Password" }}}
    </div>
    {{{ Button label="Сохранить" onClick=submit}}}
</form>`
    }
}

export default newPassword
