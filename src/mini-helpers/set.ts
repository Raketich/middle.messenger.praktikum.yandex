import {merge} from "./merge";


type Indexed<T = any> = {
    [key in string]: T;
}

export function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
    if(typeof object !== 'object') {
        return object;
    }
    const result = path.split('.').reduceRight((acc, cur) => ({[cur]: acc}), value);
    return merge(object as Indexed, result as Indexed);
}
