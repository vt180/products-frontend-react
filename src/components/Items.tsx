import Toolbar                            from '@mui/material/Toolbar';
import Grid                               from '@mui/material/Grid';
import Box                                from '@mui/material/Box';
import Pagination                         from '@mui/material/Pagination';
import { ChangeEvent, useEffect }         from 'react';
import Stack                              from '@mui/material/Stack';
import Item                               from './Item';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchProducts, setCurrentPage }  from '../redux/productsSlice';


export default function Items() {
    const dispatch   = useAppDispatch();
    const products   = useAppSelector(state => state.products.data);
    const pagination = useAppSelector(state => state.products.pagination);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const handleChange = (event: ChangeEvent<unknown>, page: number) => {
        console.log(event, page);
        dispatch(setCurrentPage(page));
        dispatch(fetchProducts());
    };

    return (
        <Box component="main" sx={{ flexGrow: 1, p: 3, height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Toolbar />
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={1}
                sx={{ flexGrow: 1, width: '100%' }}
            >
                <Grid
                    container
                    spacing={3}
                    columns={20}
                    sx={{
                        flexGrow: 1,
                        overflowY: 'visible',
                        maxHeight: 'calc(100vh - 76px - 48px - 16px)' // Adjust according to your Toolbar and other spacing
                    }}
                >
                    {products.map((product) => (
                        <Item product={product} key={product.productId} />
                    ))}
                </Grid>
                <Pagination count={pagination.totalPages} page={pagination.currentPage} onChange={handleChange} />
            </Stack>
        </Box>
    );
}
