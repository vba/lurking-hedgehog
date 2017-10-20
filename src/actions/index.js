
export const CHOOSE_SERVICE = "CHOOSE_SERVICE";
export const NEAREST_GAS_STATIONS = 'NEAREST_GAS_STATIONS';
export const NEAREST_SERVICES = 'NEAREST_SERVICES';

export function chooseService(id, name) {
    return Object.freeze({
        type: CHOOSE_SERVICE,
        id,
        name
    })
}

export function pushNearestGasStations (stations = []) {
    return Object.freeze({
        type: NEAREST_GAS_STATIONS,
        stations
    })
}

export function pushNearestServices (services = []) {
    return Object.freeze({
        type: NEAREST_SERVICES,
        services
    })
}