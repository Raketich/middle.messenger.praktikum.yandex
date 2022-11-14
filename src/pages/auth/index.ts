import { Component } from "../../utils/component";
import {validateInput} from "../../utils/useValidate";

export class Auth extends Component {
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
                console.log("Info from auth inputs", inputsInfo);
            }
        };

        super({ validateInput, submit });
    }
    render() {
        return `
            <main>
                <form class="form-container">
                    {{{ Input name="login" label="Login" type="text" onBlur=validateInput onFocus=validateInput}}}
                    {{{ Input name="password" label="Password" type="password" onBlur=validateInput onFocus=validateInput}}}
                    {{{Button onClick=submit type="submit" label="Login"}}}
                </form>
            </main>`
    }
}
