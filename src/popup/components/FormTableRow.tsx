import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormInfo } from "../utils/fetchStorage";

export default function FormTableRow({data}: {data: FormInfo}) {
    return (
        <>
            <Grid item xs={5}>
                <div>{data.label}</div>
            </Grid>
            <Grid item xs={5}>
                <div>{data.text}</div>
            </Grid>
            <Grid item xs={2}>
                <div>あ</div>
            </Grid>
        </>
    )
}