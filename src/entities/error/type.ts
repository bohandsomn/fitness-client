export interface IErrorBoundaryAction {
    reload(): Promise<void>
    close(): Promise<void>
}
