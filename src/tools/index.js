

export function getRandomCoordinates(center, radius=500) {
    const y0 = center.latitude;
    const x0 = center.longitude;
    const rd = radius / 111300;

    const u = Math.random();
    const v = Math.random();

    const w = rd * Math.sqrt(u);
    const t = 2 * Math.PI * v;
    const x = w * Math.cos(t);
    const y = w * Math.sin(t);

    const xp = x / Math.cos(y0);

    return {
        latitude: y + y0,
        longitude: xp + x0
    };
}