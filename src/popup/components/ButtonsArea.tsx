import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';

export default function ButtonsArea() {
    const {
        
    } = useContext(DataContext);

    return (
        <Box display="flex" flexDirection="row" gap={2}>
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
            >
                追加
            </Button>
            <Button
                variant="contained"
                color="success"
                startIcon={<SaveIcon/>}
            >
                保存
            </Button>
        </Box>
    )
}