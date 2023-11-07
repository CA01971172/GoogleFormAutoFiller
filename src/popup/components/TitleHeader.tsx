import Box from '@mui/material/Box';

export default function TitleHeader(){
    return (
        <Box
            display="flex"
            justifyContent="center"
            py={1}
            boxShadow={1}
        >
            <Box fontSize={24}>Google Form 自動入力</Box>
        </Box>
    )
}