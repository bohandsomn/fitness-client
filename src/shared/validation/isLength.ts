export function isLength(data: string, min?: number, max?: number): boolean {
    if (min && data.length < min) {
        return false
    } else if (max && data.length > max) {
        return false
    }
    return true
}