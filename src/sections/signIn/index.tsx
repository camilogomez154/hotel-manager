import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Avatar, Box, } from '@mui/material';

import { SignInFormModel } from '../../forms/signin/signInForm.model';
import { CenterLayout } from '../../layouts/center';
import { SignInForm } from '../../forms/signin';
import { useUser } from '../../hooks/user';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

    const { setSignIn, loading } = useUser()
    const navigate = useNavigate()

    const handleSubmit = async (data: SignInFormModel) => {
        await setSignIn(data.email, data.password);
        navigate('/dashboard')
    };

    return (
        <CenterLayout loading={loading}>
            <Box component='section' sx={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                <Avatar sx={{ mb: 3, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <SignInForm onSubmit={handleSubmit} />
            </Box>
        </CenterLayout>
    );

}