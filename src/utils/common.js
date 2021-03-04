export const apiDataTirmFilter = (data) => {
    Object.keys(data).forEach(item => {
        data[item] &&
        typeof data[item] === 'string' &&
        (data[item] = data[item].trim());
    });
}