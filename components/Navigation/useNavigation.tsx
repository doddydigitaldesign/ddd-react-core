import { useContext } from "react";
import { INavigationState, NavigationContext } from ".";

export const useNavigation = (): {
    state: INavigationState;
    setActiveItem: (id: string) => void;
} => {
    const ctx = useContext(NavigationContext);

    return ctx;
};
