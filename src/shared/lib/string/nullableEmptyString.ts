export function nullableEmptyString(value: string): string | undefined {
    const isEmpty = value === ''
    if (isEmpty) {
        return
    }
    const isTrimEmpty = value.trim() === ''
    if (isTrimEmpty) {
        return
    }
    return value
}