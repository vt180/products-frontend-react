import Toolbar    from '@mui/material/Toolbar';
import Grid       from '@mui/material/Grid';
import Box        from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import React      from 'react';
import Stack      from '@mui/material/Stack';
import products   from '../products.json';
import Item       from './Item';


export default function Items() {
    const [page, setPage] = React.useState(1);
    const handleChange    = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    return (
        <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
            <Toolbar/>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={ 1 }
            >
                <Grid container spacing={ 5 }>
                    { products.map((product) => (
                        <Item product={ product }/>
                    )) }
                </Grid>
                <Pagination count={ 10 } page={ page } onChange={ handleChange }/>
            </Stack>
        </Box>
    );
}
