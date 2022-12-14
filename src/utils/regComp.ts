
import * as Handlebars from 'handlebars';
// import Handlebars from 'handlebars/dist/handlebars.runtime'
import Block from '../common/Block/Block';

export function regComp(Comp: typeof Block, name: string): void {
    Handlebars.registerHelper(name, ({ hash, data, fn }: Handlebars.HelperOptions) => {
        if (!data.root.children) {
            data.root.children = {};
        }
        if (!data.root.refs) {
            data.root.refs = {};
        }
        const component = new Comp(hash);
        if (hash.ref) {
            data.root.refs[hash.ref] = component;
        }
        data.root.children[component.id] = component;

        return `<div data-id="id-${component.id}">${fn ? fn(this) : ''}</div>`;
    });
}
