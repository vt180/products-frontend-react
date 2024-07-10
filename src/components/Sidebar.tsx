import Box        from "@mui/material/Box";
import Drawer     from "@mui/material/Drawer";
import Toolbar    from "@mui/material/Toolbar";
import Categories from "./Categories";

const drawerWidth = 240;

export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={ {
                width:                  drawerWidth,
                flexShrink:             0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
            } }
        >
            <Toolbar/>
            <Box sx={ { overflow: "auto", pt: 3 } }>
                <Categories/>
            </Box>
        </Drawer>
    );
}
