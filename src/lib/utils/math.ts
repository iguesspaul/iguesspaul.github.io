export function find(asqr:boolean, bsqr:boolean, csqr:boolean, a:number, b:number, c:number):number {
    if (asqr) {
        a = Math.sqrt(a);
    }
    if (bsqr) {
        b = Math.sqrt(b);
    }
    if (csqr) {
        c = Math.sqrt(c);
    }
    if (c == 0) {
        return Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    } else if (b == 0) {
        return Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
    } else if (a == 0) {
        return Math.sqrt(Math.pow(c, 2) - Math.pow(b, 2));
    }
    return 0;
}

function degrees(a: number): number {
    return a * (Math.PI / 180);
}

export function sinesLaw(a1r: number, a2r: number, a3r: number, s1: number): number {
    const a1 = degrees(a1r);
    const a2 = degrees(a2r);
    const a3 = degrees(a3r);
    return ((s1 * Math.sin(a2)) / Math.sin(a1)) * Math.sin(a3) * s1 * 0.5;
}