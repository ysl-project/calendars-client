import { ServiceLayout } from '@/components/service_layout';
import NextLink from 'next/link'
import { ButtonGroup } from '@/components/button_group';
import { NextPage } from 'next';
import { Box, Heading, Input, Link } from '@chakra-ui/react';

const IndexPage: NextPage = () => {
    return <ServiceLayout title="캘린더스">
        <Box maxW="md" mx="auto" pt="6">
            <Heading>캘린더스</Heading>
        </Box>
        <Box maxW="md" mx="auto" pt="6">
            <Input variant='flushed' placeholder="이메일" />
            <Input variant='flushed' placeholder="비밀번호" />
        </Box>
        <Box maxW="md" mx="auto" pt="6">
            <ButtonGroup title="로그인"/>
            <Link as={NextLink} href='/register'>회원가입하기</Link>
        </Box>
    </ServiceLayout>
};

export default IndexPage;
