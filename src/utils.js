export default function getErrorMessage(errors) {
    if (!errors) return String();
    return errors[Object.keys(errors)[0]];
}
