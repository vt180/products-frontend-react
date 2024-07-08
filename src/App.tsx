import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import Box         from '@mui/material/Box';
import Items       from './components/Items';
import Sidebar     from './components/Sidebar';
import Headerbar   from './components/Headerbar';


function App() {
    return (
        <Box sx={ { display: 'flex' } }>
            <CssBaseline/>
            <Headerbar/>
            <Sidebar/>
            <Items/>
        </Box>
    );
}

export default App;
