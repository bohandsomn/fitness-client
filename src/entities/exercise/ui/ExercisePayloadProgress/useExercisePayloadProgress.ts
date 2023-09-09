import { generateSource } from '@/shared'
import { useExercisePayloadStateSelector } from '../../providers'

export const useExercisePayloadProgress = () => {
    const { demonstration, header } = useExercisePayloadStateSelector((state) => ({
        demonstration: state.demonstration,
        header: state.header,
    }))
    const src = generateSource(demonstration)
    const alt = header
    const width = '56' as const
    const height = '56' as const
    const quality = '0.7' as const
    return {
        src,
        alt,
        width,
        height,
        quality,
    }
}