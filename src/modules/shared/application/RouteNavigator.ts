export interface RouteNavigator {
    navigateTo: (path: string) => void;
    getCurrentPath: () => string;
}