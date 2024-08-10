import { ServiceLayout } from '@/components/service_layout';
import NextLink from 'next/link'
import { ButtonGroup } from '@/components/button_group';
import { NextPage } from 'next';
import { Box, Center, Flex, Heading, Input, Link } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
    return <ServiceLayout title="캘린더스">
        <Box maxW="md" mx="auto" pt="200">
            <Flex justify="center">
                <Heading>캘린더스</Heading>
            </Flex>
        </Box>
        <Box maxW="md" mx="auto" pt="6">
            <Input variant='flushed' placeholder="이메일" />
            <Input variant='flushed' placeholder="비밀번호" />
        </Box>
        <Box maxW="md" mx="auto" pt="6">
            <ButtonGroup title="로그인" ftColor="white" bgColor="#3589F0" onClick={() => {}}/>
            <Flex justify="center" pt="4">
                <Link as={NextLink} href='/register' fontSize="sm" color="gray.600">회원가입</Link>
            </Flex>
            <Flex justify="center" pt="8" pb="3">
                <Box fontSize="sm" color="gray">SNS계정으로 간편 로그인/회원가입</Box>
            </Flex>
        </Box>
        <Center>
            <Box mr="5">
                <img style={{ height: '40px'}} src="/kakao.ico" alt="kakaoLogo" />
            </Box>
            <Box>
                <img style={{ height: '30px'}} src="/google.ico" alt="googleLogo" />
            </Box>
        </Center>
    </ServiceLayout>
};

export default IndexPage;
