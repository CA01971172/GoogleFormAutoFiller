import { ThemeProvider, createTheme } from '@mui/material/styles'
import FormTable from "./components/FormTable";
import ButtonsArea from './components/ButtonsArea';
import Box from '@mui/material/Box';
import TitleHeader from './components/TitleHeader';

export default function App() {
    // MUIのスタイル
    const theme = createTheme({
        palette: {
            primary: {
                main: "#673ab7"
            },
            secondary: {
                main: "rgba(0, 0, 0, 0.54)"
            }
        }  
    });


    return (
        <ThemeProvider theme={theme}>
            <Box
                width={500}
                height={300}
                display="flex"
                flexDirection="column"
            >
                <TitleHeader/>
                <FormTable/>
                <ButtonsArea/>
            </Box>
        </ThemeProvider>
    )
}