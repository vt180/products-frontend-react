import { alpha, styled }                                      from "@mui/material/styles";
import AppBar                                                 from "@mui/material/AppBar";
import Toolbar                                                from "@mui/material/Toolbar";
import InputBase                                              from "@mui/material/InputBase";
import SearchIcon                                             from "@mui/icons-material/Search";
import { useAppDispatch }                                     from "../redux/hooks";
import { fetchProducts, setCurrentPage, setSearchFieldValue } from "../redux/productsSlice";
import { useRef }                                             from "react";

const Search = styled("div")(({ theme }) => ({
    position:        "relative",
    borderRadius:    theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover":       {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft:      0,
    width:           "50rem",
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
        padding:     theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${ theme.spacing(4) })`,
        transition:  theme.transitions.create("width"),
        width:       "47rem",
    },
}));


export default function Headerbar() {
    const dispatch = useAppDispatch();

    const handleSearchChanged = (searchString: string | null) => {
        dispatch(setSearchFieldValue(searchString));
        dispatch(setCurrentPage(1));
        dispatch(fetchProducts());
    };

    const inputRef = useRef(null);

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === "Enter" && inputRef !== null && inputRef.current !== null) {
            // @ts-ignore
            inputRef.current.blur();
        }
    };

    return (
        <AppBar position="fixed" sx={ { zIndex: (theme) => theme.zIndex.drawer + 1, alignItems: "center" } }>
            <Toolbar>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon/>
                    </SearchIconWrapper>
                    <StyledInputBase onKeyDown={ handleKeyDown } inputRef={ inputRef } autoFocus={ true } onChange={ e => handleSearchChanged(e.target.value) }/>
                </Search>
            </Toolbar>
        </AppBar>
    );
}
