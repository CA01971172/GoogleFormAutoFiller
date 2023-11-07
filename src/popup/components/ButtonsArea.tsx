import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';

export default function ButtonsArea() {
    const {
        addForm,
        saveCurrentData
    } = useContext(DataContext);

    return (
        <Box
        // ボタンを中央寄せして横並びにする
            display="flex"
            flexDirection="row"
            gap={3}
            justifyContent="center"
        // 画面下部に位置を固定する
            py={1}
            width="100%"
        // その他スタイル
            boxShadow={3}
        >
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={addForm}
            >
                追加
            </Button>
            <Button
                variant="contained"
                color="success"
                startIcon={<SaveIcon/>}
                onClick={saveCurrentData}
            >
                保存
            </Button>
        </Box>
    )
}