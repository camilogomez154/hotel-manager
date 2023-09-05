// Modules
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { TextField, Button, Box } from '@mui/material'
import { useForm, Controller } from "react-hook-form"

// Properties
import { HotelFormProperties } from "./hotelForm.properties";

// Constants
import { initialHotelFormValues } from "./hotelForm.constants";

// Models
import { HotelFormModel } from "./hotelForm.model";


/**
 * HotelForm
 * @param {HotelFormProperties} properties 
 * @return {JSX.Element}
 */
export function HotelForm(properties: HotelFormProperties): JSX.Element {

    const HotelFormClassValidatorResolver = classValidatorResolver(HotelFormModel)

    const { handleSubmit, formState, control } = useForm({
        resolver: HotelFormClassValidatorResolver,
        defaultValues: initialHotelFormValues,
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