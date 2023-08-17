import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import cryp from '../assets/cr.png'
import {motion} from 'framer-motion'
const Home = () => {
  return (
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'88vh'}>
      <motion.div
        style={{
          height:'80vh'
        }}
        animate={{
          translateY:'20px'
        }}
        transition={{
          duration:2,
          repeat:Infinity,
          repeatType:'reverse'
        }}
      >
      <Image w={'full'} h={'470px'} objectFit={'contain'} src={cryp} />
      </motion.div>
      <Text
        fontSize={'5xl'}
        textAlign={'center'}
        fontWeight={'thin'}
        color={'whiteAlpha.700'}
        mt={'-10'}
      >
        ERY-Crypto
      </Text>
    </Box>
  )
}

export default Home