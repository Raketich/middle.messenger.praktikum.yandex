import Block from "../../../utils/component";

class newPassword extends Block {
    render() {
        return `
       <form>
    <div>
        <span>Old password</span>
        {{{ Input name="oldPassword" label="Old Password" }}}
    </div>
    <div>
        <span>New password</span>
        {{{ Input name="newPassword" label="New Password" }}}
    </div>
    <div>
        <span>Repeat new password</span>
        {{{ Input label="New Password" }}}
    </div>
    {{{ Button label="Сохранить" }}}
</form>`
    }
}

export default newPassword