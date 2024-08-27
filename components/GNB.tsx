import { Avatar, Box, Button, Flex, Input, InputGroup, InputLeftElement, Link } from "@chakra-ui/react"
import { SearchIcon, CalendarIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

const userInfo = {
    id: 'test',
    email: 'yesleee@naver.com',
    nickname: '박예슬',
    profileUrl: '',
}

const GNB = () => {
    return (
        <Box borderBottom={1} borderStyle="solid" borderColor="gray.200">
            <Flex minH="60px" py={{ base: 3 }} px={{ base: 8 }} align="center" justify="space-between" mx="auto">
                <Box>
                    <Link
                        as={NextLink}
                        href='/main'
                        fontSize="lg"
                        fontWeight="700"
                        _hover={{ textDecoration: 'none', color: 'inherit' }}
                        _focus={{ boxShadow: 'none' }}
                        >
                            <Flex align="center" ml="2">
                                <CalendarIcon mr="2" color="gray800"/>
                                캘린더스
                            </Flex>
                    </Link>
                </Box>
                <Box>
                    <Flex align="center">
                        <InputGroup mr="6">
                            <InputLeftElement pointerEvents='none'>
                                <SearchIcon color="gray.500"/>
                            </InputLeftElement>
                            <Input placeholder="일정 검색" background="gray.50" _focus={{ boxShadow: 'none', background:"white", borderColor: "gray.400" }}/>
                        </InputGroup>
                        <Avatar size="sm" src={userInfo.profileUrl} />
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

export default GNB;