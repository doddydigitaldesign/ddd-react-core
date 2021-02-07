import { useContext } from "react";
import { NavigationContext } from ".";

export const useNavigation = () => {
    const ctx = useContext(NavigationContext);

    return ctx;
};
