import { LocaleDate } from './type'

export function localeDateAdapter(date: Date): LocaleDate {
    return date.toLocaleDateString('fr-CA') as LocaleDate
}