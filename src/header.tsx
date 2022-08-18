import {FC} from 'react'
import {Box, Typography} from "@mui/joy";

const Header: FC = (): JSX.Element => {
    return (
        <Box component="nav" sx={{
            borderBottom: '1px solid',
            borderBottomColor: 'neutral.200',
            px: 2,
            py: 2,
            backgroundColor: 'neutral.100'
        }}>
            <Typography level='h4' component="h4" fontStyle={'sm'}>PokeAPI</Typography>
        </Box>
    )
};

export default Header
