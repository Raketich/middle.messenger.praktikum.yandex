import Block from "../../utils/component";
import './styles.css'

class page500 extends Block {
    render() {
        return `
       <div class="error-container">
    <p>It seems like something gone wrong on server.</p>
    <p>Dont worry. we are already working on it </p>
    
</div>`
    }
}

export default page500