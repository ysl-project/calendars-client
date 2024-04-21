import { Box, Button } from "@chakra-ui/react"

export const ButtonGroup = ({title}: {title: string}) => {
    return (
    <Box width="full">
        <Button
            size="lg"
            width="full"
            maxW="md"
            borderRadius="5"
            bgColor="#3589F0"
            color="white"
            colorScheme="blue"
        >
            {title}
        </Button>
    </Box>)
};

