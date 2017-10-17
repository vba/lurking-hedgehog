
export const CHOOSE_SERVICE = "CHOOSE_SERVICE";


export function chooseService(id, name) {
    return Object.freeze({
        type: CHOOSE_SERVICE,
        id,
        name
    })
}