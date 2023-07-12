export interface IWithErrors {
    rules?: (() => null | string)[]
}