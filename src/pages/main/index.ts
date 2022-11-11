import Block from "../../utils/component";
import "./styles.css"

class main extends Block {

    render() {
        return `
       <div class="main__container">
    <div class="main__left-side">
        <a>Профиль</a>
        {{{ Input name="search" label="Search" type="text"}}}
        {{{ Chat }}}
    </div>
    <div class="main__right-side">
        <div class="right-side__top">
            <div class="top__left">
                {{{ Avatar }}}
                <p>Name</p>
            </div>
            {{{ Button label="Menu" }}}
        </div>
        <div class="right-side__bottom">
            <div>
                messages
            </div>
            <div>
                {{{ Button label="Attach" }}}
                {{{ Input label="Message" name="message" }}}
                {{{ Button label="Send"}}}
            </div>
        </div>
    </div>
</div>

`
    }
}

export default main