import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,

  useColorModeValue,
  chakra
} from '@chakra-ui/react'

import Paragraph from '../components/paragraph'

import Layout from '../components/layouts/article'
import Section from '../components/section'

import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an web developer based in Philippines!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Kent Emman
          </Heading>
          <p>( Developer / Designer / Trader)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/me.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Hobbies
        </Heading>
        <Paragraph>
        Photography, Reading Manga, Badminton{' '}
    
        </Paragraph>

      </Section>

 




    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
