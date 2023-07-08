export interface ILogInOptimizedContext {
    email: string
    password: string
}
export interface IUseLogInStateUpdateResult {
    changeEmail: (email: string) => void
    resetEmail: () => void
    changePassword: (password: string) => void
    resetPassword: () => void
}