import isColor from './isColor';

export default arr => {
    if (!Array.isArray(arr)) {
        return false;
    }

    if (arr.every(value => typeof value === "string" && isColor(value))) {
        return true;
    }

    return false;
}