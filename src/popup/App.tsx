import { ThemeProvider, createTheme } from '@mui/material/styles'
import FormTable from "./components/FormTable";
import ButtonsArea from './components/ButtonsArea';

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
                <ButtonsArea/>
            </ThemeProvider>
        </div>
    )
}