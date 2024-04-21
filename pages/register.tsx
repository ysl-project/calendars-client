import { ServiceLayout } from '@/components/service_layout';
import { Box, Heading, Input } from '@chakra-ui/react';
import { ButtonGroup } from '@/components/button_group';
import React from 'react'

const Register = () => {
    return (
        <ServiceLayout title="캘린더스_회원가입">
            <Box maxW="md" mx="auto" pt="6">
                <Heading as='h3' size='lg'>회원가입</Heading>
            </Box>
            <Box maxW="md" mx="auto" pt="6">
                <Heading as='h3' size='lg'>이메일</Heading>
                <Input placeholder="이메일" />
                <ButtonGroup title="이메일인증하기" ftColor="#c2c8cc" color="#f7f8fa"/>
                <Heading as='h3' size='lg'>비밀번호</Heading>
                <Input placeholder="비밀번호" />
                <Heading as='h3' size='lg'>닉네임</Heading>
                <Input placeholder="닉네임" />
            </Box>
        </ServiceLayout>
    )
};

export default Register;