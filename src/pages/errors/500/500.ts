import Block from '../../../common/Block/Block';

interface PageProps {}

export class Page500 extends Block<PageProps> {
  render() {
    return `
        <div class="flex flex-col items-center justify-center w-full bg-blue-light h-screen justify-center">
            <h1 class="text-4xl font-medium mb-4">500</h1>
            <div class="text-xl mb-14 tracking-wide">
                <p>It seems like something gone wrong on server.</p>
                <p>Dont worry. we are already working on it </p>
            </div>
            {{{ Link to='/messenger' label='К чатам' classes='text-blue decoration-none hover:underline duration-200' }}}
        </div>
    `;
  }
}
