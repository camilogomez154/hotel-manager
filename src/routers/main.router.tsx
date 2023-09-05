import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { WizardSetupSection } from "../sections/wizardSetup";

const MainBrowserRouter = createBrowserRouter([
    { path: '/setup', element: <WizardSetupSection /> }
])

export function MainRouter(): JSX.Element {
    return (
        <RouterProvider router={MainBrowserRouter} />
    )
}