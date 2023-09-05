// Modules
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { TextField, Button, Box } from '@mui/material'
import { useForm, Controller } from "react-hook-form"

// Properties
import { SignInFormProperties } from "./signInForm.properties";

// Constants
import { initialSignInFormValues } from "./signInForm.constants";

// Models
import { SignInFormModel } from "./signInForm.model";

/**
 * SignInForm
 * @param {SignInFormProperties} properties 
 * @return {JSX.Element}
 */
export function SignInForm(properties: SignInFormProperties): JSX.Element {

    const SignInFormClassValidatorResolver = classValidatorResolver(SignInFormModel)

    const { handleSubmit, formState, control } = useForm({
        resolver: SignInFormClassValidatorResolver,
        defaultValues: initialSignInFormValues,
        reValidateMode: "onChange",
    });

    return (
        <Box display="flex" flexDirection="column" gap={2} component="form" onSubmit={handleSubmit(properties.onSubmit)}>
            <Controller
                render={
                    ({ field }) =>
                        <TextField
                            error={formState.errors.email !== undefined}
                            helperText={formState.errors.email?.message}
                            label="Correo electronico"
                            variant="outlined"
                            {...field}
                        />
                }
                control={control}
                name="email"
            />
            <Controller
                render={
                    ({ field }) =>
                        <TextField
                            error={formState.errors.password !== undefined}
                            helperText={formState.errors.password?.message}
                            label="Contraseña"
                            variant="outlined"
                            type="password"
                            {...field}
                        />
                }
                control={control}
                name="password"
            />
            <Button variant="outlined" type="submit">
                sign in
            </Button>
        </Box>
    )
}