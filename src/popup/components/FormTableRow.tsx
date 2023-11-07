import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { FormInfo } from "../../utils/fetchStorage";
import { DataContext } from '../providers/DataProvider';

export default function FormTableRow({data, index}: {data: FormInfo, index: number}) {
    const {
        rewriteForm,
        deleteForm,
        setIsDoneSave
    } = useContext(DataContext);

    return (
        <>
            <Grid item xs={5}>
                <TextField
                    label="指定のラベル"
                    placeholder="指定するラベル名を入力"
                    // multiline
                    value={data.label}
                    onChange={(event) => {
                        rewriteForm(index, "label", event.target.value);
                        setIsDoneSave(false);
                    }}
                    variant="standard"
                    fullWidth
                    color="primary"
                />
            </Grid>
            <Grid item xs={5}>
                <TextField
                    label="入力する内容"
                    placeholder="指定のラベルに入力する内容を入力"
                    // multiline
                    value={data.text}
                    onChange={(event) => {
                        rewriteForm(index, "text", event.target.value);
                        setIsDoneSave(false);
                    }}
                    variant="standard"
                    fullWidth
                    color="primary"
                />
            </Grid>
            <Grid item xs={2}>
                <IconButton
                    aria-label="delete"
                    onClick={() => {
                        deleteForm(index);
                        setIsDoneSave(false);
                    }}
                >
                    <DeleteIcon/>
                </IconButton>
            </Grid>
        </>
    )
}