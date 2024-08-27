import { ServiceLayout } from '@/components/service_layout';
import NextLink from 'next/link'
import { Box, Heading, Input, Flex, Text, Link } from '@chakra-ui/react';
import { ButtonGroup } from '@/components/button_group';
import React, { ChangeEvent, useCallback, useState } from 'react'
import GNB from '@/components/GNB';

const Main = () => {
    return (
        <ServiceLayout title="캘린더스_메인">
            <GNB />
            <Box maxW="md" mx="auto" pt="20">
                메인 페이지
            </Box>
        </ServiceLayout>
    )
};

export default Main;