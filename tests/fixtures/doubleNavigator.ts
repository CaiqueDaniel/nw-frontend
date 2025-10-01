import { Mocked } from "vitest";
import { RouteNavigator } from "~/modules/shared/application/RouteNavigator";

export const doubleNavigator: Mocked<RouteNavigator> = {
    getCurrentPath: vi.fn(),
    navigateTo: vi.fn()
}