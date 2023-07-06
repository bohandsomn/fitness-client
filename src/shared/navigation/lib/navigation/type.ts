export interface INavigation {
    goTo(route: string): void
    goTo(route: string, params: object): void
    goBack(): void
    goStart(): void
    updateParams(params: object): void
}