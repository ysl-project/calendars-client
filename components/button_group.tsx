import { Box, Button } from "@chakra-ui/react"

interface Props {
    title: string;
    bgColor: string;
    ftColor: string;
    onClick: () => void;
} 

export const ButtonGroup = ({title, bgColor, ftColor, onClick}: Props) => {
    return (
    <Box width="full">
        <Button
            size="lg"
            width="full"
            maxW="md"
            borderRadius="5"
            bgColor={bgColor}
            color={ftColor}
            colorScheme="blue"
            onClick={onClick}
        >
            {title}
        </Button>
    </Box>)
};

