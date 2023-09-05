import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { SignInForm } from '../../forms/signin';
import { SignInFormModel } from '../../forms/signin/signInForm.model';
import { SignInUser } from '../../services/users/signInUser';

export default function SignIn() {

    const handleSubmit = async (data: SignInFormModel) => {
        const session = await SignInUser(data.email, data.password)
        console.log(session)
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