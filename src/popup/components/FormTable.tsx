import { useContext } from "react"
import Grid from '@mui/material/Grid';
import { DataContext } from "../providers/DataProvider"
import FormTableRow from "./FormTableRow";

export default function FormTable() {
    const {
        formArray
    } = useContext(DataContext);

    return (
        <Grid container spacing={2}>
            {formArray.map((data, index) => (
                <FormTableRow
                    key={data.id}
                    index={index}
                    data={data}
                />
            ))}
        </Grid>
    )
}