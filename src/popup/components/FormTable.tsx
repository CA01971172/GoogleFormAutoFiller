import { useContext, Fragment } from "react"
import { DataContext } from "../providers/DataProvider"
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import FormTableRow from "./FormTableRow";

export default function FormTable() {
    const {
        formArray
    } = useContext(DataContext);

    return (
        <Box
            paddingLeft={1}
            flex="1"
            style={{
                overflowY: "auto",
                overflowX: "hidden"
            }}
        >
            <Grid
                container
                spacing={2}
                py={1}
            >
                {formArray.map((data, index) => (
                    <Fragment key={data.id}>
                        <FormTableRow
                            key={data.id}
                            index={index}
                            data={data}
                        />
                        {index < formArray.length - 1 && (
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                        )}
                    </Fragment>
                ))}
            </Grid>
        </Box>
    )
}