import { SignInForm } from '../../forms/signin';
import { SignInFormModel } from '../../forms/signin/signInForm.model';
import { SignInUser } from '../../services/users/signInUser';
import { Container, Avatar, Box, } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useUser } from '../../hooks/user';

export default function SignIn() {

    const { setSignIn } = useUser()

    const handleSubmit = async (data: SignInFormModel) => {
        const { session, user } = await SignInUser(data.email, data.password)
        setSignIn(user, session);
    };

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <SignInForm onSubmit={handleSubmit} />
            </Box>
        </Container>
    );

}