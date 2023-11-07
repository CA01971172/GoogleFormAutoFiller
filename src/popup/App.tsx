import { ThemeProvider, createTheme } from '@mui/material/styles'
import FormTable from "./components/FormTable";

export default function App() {
    // MUIのスタイル
    const theme = createTheme({
        palette: {
            primary: {
                main: "#673ab7",
            }
        }  
    });


    return (
        <div
            style={{
                width: 300,
                height: 300,
                border: "1px red solid"
            }}
        >
            <ThemeProvider theme={theme}>
                <FormTable/>
            </ThemeProvider>
        </div>
    )
}