export function isEmail(data: string): boolean {
    const regExpMatchArray = data.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    return !!regExpMatchArray
}