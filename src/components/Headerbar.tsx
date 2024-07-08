import { alpha, styled } from "@mui/material/styles";
import AppBar            from "@mui/material/AppBar";
import Toolbar           from "@mui/material/Toolbar";
import InputBase         from "@mui/material/InputBase";
import SearchIcon        from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
    position:                     "relative",
    borderRadius:                 theme.shape.borderRadius,
    backgroundColor:              alpha(theme.palette.common.white, 0.15),
    "&:hover":                    {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft:                   0,
    width:                        "50rem",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding:        theme.spacing(0, 2),
    height:         "100%",
    position:       "absolute",
    pointerEvents:  "none",
    display:        "flex",
    alignItems:     "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color:                   "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft:                  `calc(1em + ${ theme.spacing(4) })`,
        transition:                   theme.transitions.create("width"),
        width:                        "47rem",
    },
}));


export default function Headerbar() {

    return (
        <AppBar position="fixed" sx={ { zIndex: (theme) => theme.zIndex.drawer + 1, alignItems: "center" } }>
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase/>
                </Search>
            </Toolbar>
        </AppBar>
    );
}
