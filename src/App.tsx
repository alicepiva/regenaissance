import './App.css'
import { teste } from "./content/teste"
import LineTo from 'react-lineto';
import { Box, Flex, Link, Text } from '@chakra-ui/react';

function App() {

  return (
    <>
      <Box as="header">
        <Text fontSize="lg" fontWeight="bold">regenascença</Text>
      </Box>

      <Flex as="main" mt="130px" justify="space-around" color="white" gap="140px">
        <Box>
          <Flex
          className="card"
          mb="20px"
          bgColor="brand.900"
          borderRadius="8px"
          p="10px"
          >
            <Text>
              {teste.content}
            </Text>
          </Flex>
          <Flex
          className="card2"
          bgColor="brand.900"
          borderRadius="8px"
          p="10px">
            <Text>
              {teste.responsabilidade}
            </Text>
          </Flex>
          <LineTo from="card" to="card2" fromAnchor='bottom' toAnchor='top' borderColor='black' />
        </Box>
        <Box>
            <Flex
            className='design'
            mb="20px"
            bgColor="brand.900"
            borderRadius="8px"
            p="10px">
              <Link className='textoDesign' href={teste.link} target="_blank">discrete design</Link>
          </Flex>
          <Flex
          className='design2'
          bgColor="brand.900"
          borderRadius="8px"
          p="10px">
            <Link
            className='textoDesign'
            href={teste.link}
            target="_blank">design multiespécies</Link>
          </Flex>
        </Box>
          <LineTo from="card" to="design" fromAnchor='right' toAnchor='left' borderColor='black' />
          <LineTo from="card" to="design2" fromAnchor='right' toAnchor='left' borderColor='black' />
      </Flex>
    </>
  )
}

export default App
