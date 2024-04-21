import { Box, Button } from "@chakra-ui/react"

interface Style {
    title: String;
    color: Stirng;
    ftColor: String;
} 

export const ButtonGroup = ({title, color, ftColor}:Style) => {
    return (
    <Box width="full">
        <Button
            size="lg"
            width="full"
            maxW="md"
            borderRadius="5"
            bgColor={color}
            color={ftColor}
            colorScheme="blue"
        >
            {title}
        </Button>
    </Box>)
};

