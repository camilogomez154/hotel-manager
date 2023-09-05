// Modules
import { useEffect, useState } from 'react';

// Components
import { Container, Box, Paper, Step, StepLabel, Stepper, CircularProgress } from "@mui/material";

// Forms
import { HotelForm } from "../../forms/hotel";
import { UserForm } from "../../forms/user";
import { RoomForm } from "../../forms/room";

import { HotelFormModel } from '../../forms/hotel/hotelForm.model';
import { UserFormModel } from '../../forms/user/userForm.model';
import { RoomFormModel } from '../../forms/room/roomForm.model';
import { CreateNewUser } from '../../services/users/createNewUser';
import { CreateNewHotel } from '../../services/hotel/createNewHotel';
import { createNewRoom } from '../../services/room/createNewRoom';

export function WizardSetupSection(): JSX.Element {

    const [isCompleted, setIsCompleted] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [hotelModel, setHotelModel] = useState<HotelFormModel>()
    const [userModel, setUserModel] = useState<UserFormModel>()
    const [roomModel, setRoomModel] = useState<RoomFormModel>()
    const [activeStep, setActiveStep] = useState<number>(0);

    const steps = ['Create admin user', 'Create new hotel', 'Create new room', 'Save data'];
    const viewsSteps = [UserForm, HotelForm, RoomForm]
    const ActiveViewStep = viewsSteps[activeStep]

    const handleNext = (data: UserFormModel | HotelFormModel | RoomFormModel) => {
        if (data instanceof HotelFormModel) setHotelModel(data)
        if (data instanceof UserFormModel) setUserModel(data)
        if (data instanceof RoomFormModel) setRoomModel(data)

        if (!isCompleted) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }

        if (activeStep === viewsSteps.length - 1) {
            setIsLoading(true)
        }
    };

    const createElements = async () => {
        if (userModel && hotelModel && roomModel) {
            const { user } = await CreateNewUser(userModel)
            console.log(user)
            if (user) {
                await CreateNewHotel(hotelModel.name, user.id)
                await createNewRoom(roomModel.name, user.id)
            }
        }
        setIsCompleted(false)
        setIsLoading(false)
    }

    useEffect(
        () => {
            if (isLoading && userModel) {
                createElements()
            }
        },
        [isLoading]
    )

    return (
        <Container sx={{ p: 15 }}>
            <Box>
                <Stepper sx={{ mb: 5 }} activeStep={activeStep}>
                    {
                        steps.map((label) => {
                            return (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            );
                        })
                    }
                </Stepper>
                <Paper sx={{ p: 5 }}>
                    {
                        activeStep <= viewsSteps.length - 1 &&
                        <ActiveViewStep name={steps[activeStep]} buttonText='Next' onSubmit={handleNext} />
                    }
                    {
                        isLoading &&
                        <CircularProgress content='Cargando...' />
                    }
                </Paper>
            </Box>
        </Container>
    )
}