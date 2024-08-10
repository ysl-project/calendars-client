import { ServiceLayout } from '@/components/service_layout';
import NextLink from 'next/link'
import { Box, Heading, Input, Flex, Text, Link } from '@chakra-ui/react';
import { ButtonGroup } from '@/components/button_group';
import React from 'react'

const Register = () => {
    return (
        <ServiceLayout title="캘린더스_회원가입">
            <Box maxW="md" mx="auto" pt="20">
                <Heading as='h3' size='md'>회원가입</Heading>
                <Box borderBottom="1px" borderColor="gray.200">
                    <Flex flexDir="column" justify="center" align="center" pt="6" pb="8">
                        <Box fontSize="sm" color="gray">SNS계정으로 간편하게 회원가입</Box>
                        <Flex justify="center" align="center" pt="2">
                            <Box mr="5">
                                <img style={{ height: '40px'}} src="/kakao.ico" alt="kakaoLogo" />
                            </Box>
                            <Box>
                                <img style={{ height: '30px'}} src="/google.ico" alt="googleLogo" />
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Box>
            <Box maxW="md" mx="auto" pt="8" pb="20">
                <Box>
                    <Heading as='h3' size='sm' pb="3">이메일</Heading>
                    <Input placeholder="이메일" mb="2"/>
                    <ButtonGroup title="이메일인증하기" ftColor="#3589F0" bgColor="#f7f8fa" variant="outline"/>
                </Box>
                <Box>
                    <Heading as='h3' size='sm' pb="3" mt="8">비밀번호</Heading>
                    <Text fontSize="sm" color="gray">영문, 숫자, 특수문자를 포함한 8자 이상의 비밀번호를 입력해주세요.</Text>
                    <Input placeholder="비밀번호" mt="2"/>
                </Box>
                <Box>
                    <Heading as='h3' size='sm' pb="3" mt="8">비밀번호 확인</Heading>
                    <Input placeholder="비밀번호 확인"/>
                </Box>
                <Box>
                    <Heading as='h3' size='sm' pb="3" mt="8">닉네임</Heading>
                    <Text fontSize="sm" color="gray">다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</Text>
                    <Input placeholder="닉네임" mt="2" mb="10"/>
                </Box>
                <ButtonGroup title="회원가입하기" ftColor="white" bgColor="#3589F0" onClick={() => {}}/>
                <Flex justify="center" pt="4">
                    <Text fontSize="sm" mr="3">이미 아이디가 있으신가요? </Text>
                    <Link as={NextLink} href='/' fontSize="sm" fontWeight="800" textDecoration="underline">로그인</Link>
                </Flex>
            </Box>
        </ServiceLayout>
    )
};

export default Register;