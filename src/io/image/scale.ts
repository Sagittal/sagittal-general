import {Basis, Px, Scale} from "./types"

const computePx = <T extends number = number>(basis: Basis<T>, scale: Scale<T>): Px => {
    return basis * scale as Px
}

export {
    computePx,
}
