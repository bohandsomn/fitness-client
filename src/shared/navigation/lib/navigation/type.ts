export interface INavigation<Route extends string> {
    goTo(route: Route): void
    goTo(route: Route, params: object): void
    goBack(): void
    goStart(): void
    updateParams(params: object): void
}