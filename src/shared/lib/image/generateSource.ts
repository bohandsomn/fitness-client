import { apiUrl } from '@/shared/config'

export function generateSource(demonstration: string): string {
    const src = `${apiUrl}/image/${demonstration}`
    return src
}