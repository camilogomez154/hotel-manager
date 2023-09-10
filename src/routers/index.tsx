import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { WizardSetupSection } from "../sections/wizardSetup";
import SignIn from "../sections/signIn";

const MainBrowserRouter = createBrowserRouter([
    { path: '/setup', element: <WizardSetupSection /> },
    { path: '/sign-in', element: <SignIn /> },
    { path: '/dashboard', element: <div>Hello world!</div> }
])

export function MainRouter(): JSX.Element {

    return (
        <RouterProvider router={MainBrowserRouter} />
    )
}