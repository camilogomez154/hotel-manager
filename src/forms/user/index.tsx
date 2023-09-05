// Modules
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { TextField, Button, Box } from '@mui/material'
import { useForm, Controller } from "react-hook-form"

// Properties
import { UserFormProperties } from "./userForm.properties";

// Constants
import { initialUserFormValues } from "./userForm.constants";

// Models
import { UserFormModel } from "./userForm.model";

/**
 * UserForm
 * @param {UserFormProperties} properties 
 * @return {JSX.Element}
 */
export function UserForm(properties: UserFormProperties): JSX.Element {

    const UserFormClassValidatorResolver = classValidatorResolver(UserFormModel)

    const { handleSubmit, formState, control } = useForm({
        resolver: UserFormClassValidatorResolver,
        defaultValues: initialUserFormValues,
        reValidateMode: "onChange",
    });

    return (
        <Box display="flex" flexDirection="column" gap={2} component="form" onSubmit={handleSubmit(properties.onSubmit)}>
            <Controller
                render={
                    ({ field }) =>
                        <TextField
                            error={formState.errors.name !== undefined}
                            helperText={formState.errors.name?.message}
                            variant="outlined"
                            label="Nombre"
                            {...field}
                        />
                }
                control={control}
                name="name"
            />
            <Controller
                render={
                    ({ field }) =>
                        <TextField
                            error={formState.errors.phone !== undefined}
                            helperText={formState.errors.phone?.message}
                            variant="outlined"
                            label="Telefono"
                            type="tel"
                            {...field}
                        />
                }
                control={control}
                name="phone"
            />
            <Controller
                render={
                    ({ field }) =>
                        <TextField
                            error={formState.errors.nickname !== undefined}
                            helperText={formState.errors.nickname?.message}
                            label="Nombre de usuario"
                            variant="outlined"
                            {...field}
                        />
                }
                control={control}
                name="nickname"
            />
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
                {properties.buttonText}
            </Button>
        </Box>
    )
}