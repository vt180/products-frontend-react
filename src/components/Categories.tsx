import Box                from '@mui/material/Box';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem }       from '@mui/x-tree-view/TreeItem';

export default function Categories() {
    return (
        <Box sx={ { minHeight: 352, minWidth: 230 } }>
            <SimpleTreeView>
                <TreeItem itemId="Footwear" label="Footwear">
                    <TreeItem itemId="sub/Casual Shoes" label="Casual Shoes"/>
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
    );
}
