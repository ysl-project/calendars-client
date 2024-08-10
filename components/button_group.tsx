import { Box, Button } from "@chakra-ui/react"

interface Props {
    title: string;
    bgColor: string;
    ftColor: string;
    variant: string;
    onClick: () => void;
} 

export const ButtonGroup = ({title, bgColor, ftColor, variant, onClick}: Props) => {
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
            variant={variant}
        >
            {title}
        </Button>
    </Box>)
};

