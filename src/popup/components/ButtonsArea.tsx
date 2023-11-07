import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SaveIcon from '@mui/icons-material/Save';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import HelpIcon from '@mui/icons-material/Help';

export default function ButtonsArea() {
    const {
        addForm,
        saveCurrentData,
        isDoneSave,
        setIsDoneSave
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
            position="relative"
        >
            <Button
                variant="contained"
                color="primary"
                startIcon={<AddIcon />}
                onClick={() => {
                    addForm();
                    setIsDoneSave(false);
                }}
            >
                追加
            </Button>
            <Button
                variant="contained"
                color="success"
                startIcon={isDoneSave ? <SaveIcon/> : <SaveAsIcon/>}
                onClick={() => {
                    saveCurrentData();
                    setIsDoneSave(true);
                }}
            >
                保存
            </Button>
            <Box
                display="box"
                position="absolute"
                right={1}
                marginRight={1}
            >
                <IconButton
                    aria-label="help"
                    color="secondary"
                    href="https://github.com/CA01971172/GoogleFormAutoFiller#readme"
                >
                    <HelpIcon/>
                </IconButton>
            </Box>
        </Box>
    )
}