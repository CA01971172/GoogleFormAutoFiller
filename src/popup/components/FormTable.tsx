import { useContext } from "react"
import { DataContext } from "../providers/DataProvider"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FormTableRow from "./FormTableRow";

export default function FormTable() {
    const {
        formArray
    } = useContext(DataContext);

    return (
        <Box
            flex="1"
            border="1px blue solid"
            style={{
                overflowY: "auto",
                overflowX: "hidden"
            }}
        >
            <Grid
                container
                spacing={2}
            >
                {formArray.map((data, index) => (
                    <FormTableRow
                        key={data.id}
                        index={index}
                        data={data}
                    />
                ))}
            </Grid>
        </Box>
    )
}