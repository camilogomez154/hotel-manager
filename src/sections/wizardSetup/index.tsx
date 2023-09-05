import { UserForm } from "../../forms/users";
import { WizardSetupProperties } from "./wizarSetup.properties";

export function WizardSetupSection(properties: WizardSetupProperties): JSX.Element {
    return (
        <section className="wizard-setup-wrapper">
            <UserForm name="Create administrator user" />
        </section>
    )
}