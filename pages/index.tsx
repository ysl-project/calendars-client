import { ServiceLayout } from '@/components/service_layout';
import NextLink from 'next/link'
import { ButtonGroup } from '@/components/button_group';
import { NextPage } from 'next';
import { Box, Center, Flex, Heading, Input, Link } from '@chakra-ui/react';
import { ChangeEvent, useState } from 'react';
import { login } from './api/user';
import { useRouter } from 'next/router';

const IndexPage: NextPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onEailHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target as any;
        setEmail(value);
    }
    const onPasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target as any;
        setPassword(value);
    }
    
    const handleLogin = async (): Promise<void> => {
        if (!email.includes('@') || password.length < 8) {
            alert("이메일과 비밀번호가 올바르지 않습니다.");
            return;
        };
        try {
            const res = await login({email, password});
            console.log("서버 응답 데이터 : ", res);
            const accessTokken = res.data.accessToken;
            localStorage.setItem('accessToken', accessTokken);
            router.push('/main');
        } catch (error) {
            console.log('로그인 실패 : ', error);
        }
        return;
    }

    return <ServiceLayout title="캘린더스">
        <Box maxW="md" mx="auto" pt="200">
            <Flex justify="center">
                <Heading>캘린더스</Heading>
            </Flex>
        </Box>
        <Box maxW="md" mx="auto" pt="6">
            <Input variant='flushed' placeholder="이메일" 
                        type="text"
                        value={email}
                        onChange={onEailHandler}/>
            <Input variant='flushed' placeholder="비밀번호" type="password" onChange={onPasswordHandler} />
        </Box>
        <Box maxW="md" mx="auto" pt="6">
            <ButtonGroup title="로그인" ftColor="white" bgColor="#3589F0" onClick={handleLogin}/>
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
