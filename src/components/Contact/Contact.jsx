import {
  Box,
  Button,
  Container,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <Container h={'92vh'}>
      <VStack justifyContent={'center'} h="full" spacing={'16'}>
        <Heading children="Contact Us" />
        <form style={{ width: '100%' }}>
          <Box marginY={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="email"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Enter your name"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Enter your email"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box marginY={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Write us"
              focusBorderColor="yellow.500"
            />
          </Box>

          <Button my="4" colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>
          <Box my="4">
            Request for a course?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;
