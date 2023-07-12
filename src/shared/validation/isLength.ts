export function isLength(data: string | number, min?: number, max?: number): boolean {
    if (typeof data === 'string') {
        if (min && data.length < min) {
            return false
        } else if (max && data.length > max) {
            return false
        }
    } else {
        if (min && data < min) {
            return false
        } else if (max && data > max) {
            return false
        }
    }
    return true
}