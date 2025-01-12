'use client'

import { Container, VStack, Heading, Link, Icon, Flex, Text, Button } from '@chakra-ui/react'
import { FaTelegram, FaTwitter, FaDiscord, FaLinkedin, FaGithub, FaCalendar } from 'react-icons/fa'
import { SiElement, SiFarcaster } from 'react-icons/si'
import { HiOutlineStatusOnline } from "react-icons/hi";

const ContactPage = () => {
  const contactLinks = [
    
    {
      name: 'GitHub',
      url: 'https://github.com/julienbrg',
      icon: FaGithub,
      username: 'julienbrg'
    },
    {
      name: 'Farcaster',
      url: 'https://warpcast.com/julien-',
      icon: SiFarcaster,
      username: 'julien-'
    },
    {
      name: 'Element',
      url: 'https://matrix.to/#/@julienbrg:matrix.org',
      icon: SiElement,
      username: '@julienbrg:matrix.org'
    },
    {
      name: 'Status',
      url: 'https://status.app/u/iwSACggKBkp1bGllbgM=#zQ3shmh1sbvE6qrGotuyNQB22XU5jTrZ2HFC8bA56d5kTS2fy',
      icon: HiOutlineStatusOnline,
      username: 'julien'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/julienbrg',
      icon: FaTelegram,
      username: '@julienbrg'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/julienbrg',
      icon: FaTwitter,
      username: '@julienbrg'
    },
    {
      name: 'Discord',
      url: 'https://discordapp.com/users/julienbrg',
      icon: FaDiscord,
      username: 'julienbrg'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/julienberanger/',
      icon: FaLinkedin,
      username: 'julienberanger'
    },
    {
        name: 'Schedule a Call',
        url: 'https://calendly.com/julien_/30min?month=2024-12',
        icon: FaCalendar,
        username: '30 min meeting',
        primary: true
      },
  ]

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="xl" mb={8} textAlign="center">
          Get in Touch
        </Heading>
        
        <VStack spacing={6} align="stretch">
          {contactLinks.map((contact) => (
            <Link 
              key={contact.name}
              href={contact.url}
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              <Flex
                align="center"
                p={4}
                bg={contact.primary ? '#8c1c84' : 'gray.800'}
                borderRadius="lg"
                transition="all 0.2s"
                _hover={{ 
                  bg: contact.primary ? '#6d1566' : 'gray.700',
                  transform: 'translateY(-2px)'
                }}
              >
                <Icon 
                  as={contact.icon}
                  boxSize={6}
                  color={contact.primary ? 'white' : 'blue.400'}
                  mr={4}
                />
                <VStack align="flex-start" spacing={0}>
                  <Text fontWeight="bold">{contact.name}</Text>
                  <Text color={contact.primary ? 'whiteAlpha.800' : 'gray.400'} fontSize="sm">
                    {contact.username}
                  </Text>
                </VStack>
              </Flex>
            </Link>
          ))}
        </VStack>
      </VStack>
    </Container>
  )
}

export default ContactPage