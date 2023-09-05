import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { WizardSetupSection } from "../sections/wizardSetup";
import SignIn from "../sections/signIn";

const MainBrowserRouter = createBrowserRouter([
    { path: '/setup', element: <WizardSetupSection /> },
    { path: '/sign-in', element: <SignIn /> }
])

export function MainRouter(): JSX.Element {
    return (
        <RouterProvider router={MainBrowserRouter} />
    )
}