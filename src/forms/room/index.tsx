// Modules
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { TextField, Button, Box } from '@mui/material'
import { useForm, Controller } from "react-hook-form"

// Properties
import { RoomFormProperties } from "./roomForm.properties";

// Constants
import { initialRoomFormValues } from "./roomForm.constants";

// Models
import { RoomFormModel } from "./roomForm.model";

/**
 * RoomForm
 * @param {RoomFormProperties} properties 
 * @return {JSX.Element}
 */
export function RoomForm(properties: RoomFormProperties): JSX.Element {

    const RoomFormClassValidatorResolver = classValidatorResolver(RoomFormModel)

    const { handleSubmit, formState, control } = useForm({
        resolver: RoomFormClassValidatorResolver,
        defaultValues: initialRoomFormValues,
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
            <Button variant="outlined" type="submit">
                {properties.buttonText}
            </Button>
        </Box>
    )
}