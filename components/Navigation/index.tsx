import React, { Reducer } from "react";

const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";
const RESET_ALL = "RESET_ALL";

export interface INavigationActions {
    SetActiveItem: {
        type: typeof SET_ACTIVE_ITEM;
        payload: string;
    };

    ResetAll: {
        type: typeof RESET_ALL;
        payload: boolean;
    };
}

export interface INavigationState {
    [key: string]: boolean;
}

export const NavigationReducer: Reducer<
    INavigationState,
    INavigationActions["SetActiveItem"] | INavigationActions["ResetAll"]
> = (state = {}, action) => {
    switch (action.type) {
        case SET_ACTIVE_ITEM:
            return {
                ...state,
                [action.payload]: true,
            };
        case RESET_ALL:
            return Object.entries(state).reduce(
                (acc, curr) => ({
                    ...acc,
                    [curr[0]]: false,
                }),
                {},
            );

        default:
            return state;
    }
};

export interface NavigationProps {
    navItems: { id: string; active: boolean }[];
}
export const NavigationContext = React.createContext<{
    state: INavigationState;
    setActiveItem: (id: string) => void;
}>({
    state: {},
    setActiveItem: (id) => {
        return undefined;
    },
});
export const NavigationProvider: React.FC<NavigationProps> = ({
    navItems,
    children,
}) => {
    const [state, dispatch] = React.useReducer<typeof NavigationReducer>(
        NavigationReducer,
        navItems.reduce(
            (acc, curr) => ({ ...acc, [curr.id]: curr.active }),
            {} as INavigationState,
        ),
    );

    const handlers = {
        setActiveItem: (id: string) => {
            dispatch({ type: RESET_ALL, payload: true });
            dispatch({ payload: id, type: SET_ACTIVE_ITEM });
        },
    };

    return (
        <NavigationContext.Provider
            value={{
                ...handlers,
                state,
            }}
        >
            {children}
        </NavigationContext.Provider>
    );
};
