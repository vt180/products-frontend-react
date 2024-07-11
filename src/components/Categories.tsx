import Box                                            from "@mui/material/Box";
import { SimpleTreeView }                             from "@mui/x-tree-view/SimpleTreeView";
import { TreeItem }                                   from "@mui/x-tree-view/TreeItem";
import { useAppDispatch }                             from "../redux/hooks";
import { fetchProducts, setCategory, setSubCategory, setCurrentPage } from "../redux/productsSlice";
import { ChangeEvent }                                from "react";

export default function Categories() {
    const dispatch = useAppDispatch();

    const handleSelectedItemsChange = (event: ChangeEvent<unknown>, itemIds: string | null) => {
        console.log(event, itemIds);
        if (itemIds !== null && itemIds !== undefined) {
            if (itemIds.startsWith("sub/")) {
                dispatch(setSubCategory(itemIds.replace("sub/", "")));
                dispatch(setCategory(null));
            } else {
                dispatch(setSubCategory(null));
                dispatch(setCategory(itemIds));
            }
        } else {
            dispatch(setSubCategory(null));
            dispatch(setCategory(null));
        }
        dispatch(setCurrentPage(1));
        dispatch(fetchProducts());
    };

    return (
        <Box sx={ { minHeight: 352, minWidth: 230 } }>
            <SimpleTreeView onSelectedItemsChange={ handleSelectedItemsChange }>
                <TreeItem itemId="Footwear" label="Footwear">
                    <TreeItem itemId="sub/Shoes" label="Shoes"/>
                    <TreeItem itemId="sub/Flip Flops" label="Flip Flops"/>
                    <TreeItem itemId="sub/Sandal" label="Sandals"/>
                </TreeItem>
                <TreeItem itemId="Apparel" label="Apparel">
                    <TreeItem itemId="sub/Apparel" label="Apparel"/>
                    <TreeItem itemId="sub/Topwear" label="Topwear"/>
                    <TreeItem itemId="sub/Bottomwear" label="Bottomwear"/>
                    <TreeItem itemId="sub/Innerwear" label="Innerwear"/>
                    <TreeItem itemId="sub/Socks" label="Socks"/>
                    <TreeItem itemId="sub/Dress" label="Dress"/>
                </TreeItem>
            </SimpleTreeView>
        </Box>
    )
        ;
}
