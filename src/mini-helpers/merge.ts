type Indexed<T = any> = {
    [key in string]: T;
}

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
    for(const r in rhs) {
        if(!rhs.hasOwnProperty(r)) {
            continue;
        }
        try {
            if (rhs[r].constructor === Object) {
                lhs[r] = merge(lhs[r] as Indexed, rhs[r] as Indexed);
            } else {
                lhs[r] = rhs[r];
            }
        } catch(e) {
            lhs[r] = rhs[r];
        }
    }
    return lhs;
}
