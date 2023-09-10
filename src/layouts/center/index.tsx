import { Container, Backdrop, CircularProgress } from '@mui/material';
import { CenterProperties } from './center.properties';

export function CenterLayout(properties: CenterProperties): JSX.Element {
    return (
        <Container component='main' sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={properties.loading}
                onClick={() => { }}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {properties.children}
        </Container>
    )
}