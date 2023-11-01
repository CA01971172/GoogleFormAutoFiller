import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormInfo } from "../utils/fetchStorage";

export default function FormTableRow({data}: {data: FormInfo}) {
    return (
        <>
            <Grid item xs={5}>
                <TextField
                    variant="standard"
                    fullWidth
                    label="指定のラベル"
                    placeholder="指定するラベル名を入力してください"
                    multiline
                />
            </Grid>
            <Grid item xs={5}>
                <TextField
                    variant="standard"
                    fullWidth
                    label="入力する内容"
                    placeholder="指定のラベルに入力する内容を入力してください"
                    multiline
                />
            </Grid>
            <Grid item xs={2}>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            </Grid>
        </>
    )
}