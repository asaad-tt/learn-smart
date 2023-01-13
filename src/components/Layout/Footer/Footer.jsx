import { Box, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
} from 'react-icons/ti';
import { DiGithub } from 'react-icons/di';

const Footer = () => {
  return (
    <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width="full">
          <Heading children="All rights reserved" color={'white'}></Heading>
          <Heading
            children="@ Learn smart academy"
            color={'yellow.400'}
            size="sm"
            fontFamily={'body'}
          ></Heading>
        </VStack>

        <HStack
          color={'white'}
          fontSize="50"
          spacing={['2', '10']}
          justifyContent="center"
        >
          <a
            href="https://www.youtube.com/@programmingwithmosh"
            target={'blank'}
          >
            <TiSocialYoutubeCircular />
          </a>
          <a href="https://www.instagram.com/" target={'blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href="https://github.com/asaad-tt" target={'blank'}>
            <DiGithub />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
