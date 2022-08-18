import {FC} from 'react'
import {Box, Button, TextField} from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';

const SearchBar: FC = (): JSX.Element => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            width: 1,
            py: 5,
            px: 2,
        }}>
            <TextField
                placeholder="Search pokemon"
                size="lg"
                variant="outlined"
                sx={{
                    mr: 2,
                    flex: '0 0 50%'
                }}
            />
            <Button startIcon={<SearchIcon />} size="lg">Search</Button>
        </Box>
    )
};

export default SearchBar
