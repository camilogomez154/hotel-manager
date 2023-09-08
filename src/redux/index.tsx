import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { Store } from "./store";

export function ReduxProvider({ children }: PropsWithChildren): JSX.Element {
    return (
        <Provider store={Store} >
            {children}
        </Provider>
    )
}