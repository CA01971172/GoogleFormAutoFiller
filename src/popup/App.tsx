import { ThemeProvider, createTheme } from '@mui/material/styles'
import FormTable from "./components/FormTable";
import ButtonsArea from './components/ButtonsArea';
import Box from '@mui/material/Box';

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
        <ThemeProvider theme={theme}>
            <Box
                width={500}
                height={300}
                border="1px red solid"
                display="flex"
                flexDirection="column"
            >
                <FormTable/>
                <ButtonsArea/>
            </Box>
        </ThemeProvider>
    )
}