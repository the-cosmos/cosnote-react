export default function getErrorMessage(errors) {
    if (!errors) return String();
    return errors[Object.keys(errors)[0]];
}

export function stringToTitle(string) {
    return string.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
