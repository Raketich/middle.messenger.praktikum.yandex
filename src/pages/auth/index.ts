import Block from "../../utils/component";
import {validateInput} from "../../utils/useValidate";

class auth extends Block {
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

        super({ validateInput, submit });
    }
    render() {
        return `
        <form class="form-container">
    {{{ Input name="login" label="Login" type="text" onBlur=validateInput onFocus=validateInput}}}
    {{{ Input name="password" label="Password" type="password" onBlur=validateInput onFocus=validateInput}}}
    {{{ Button label="Sign In" type="submit"}}}
    {{{ Button label="Register" }}}
</form>`
    }
}

export default auth