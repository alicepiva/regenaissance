import { teste } from "./content/teste"
import LineTo from 'react-lineto';
import { Box, Flex, Grid, GridItem, Link, Text } from '@chakra-ui/react';

function App() {

  return (
    <>
      <Box as="header">
        <Text fontSize="lg" fontWeight="bold">regenascença</Text>
      </Box>

      <Box as="main" p="30px" color="white">
        <Grid 
        templateColumns='repeat(5, 1fr)'
        templateRows='repeat(5, 1fr)'
        gap={6}>
          <GridItem className='card' rowSpan={2} bg='brand.900'>{teste.content}</GridItem>
          <GridItem className='design' w='100%' h='10' bg='brand.900'>discrete design</GridItem>
          <GridItem w='100%' h='10' bg='brand.900'></GridItem>
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem className='design2' w='100%' h='10' bg='brand.900'>design multiespécies</GridItem>
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem className='card2' rowSpan={2} bg='brand.900'>{teste.responsabilidade}</GridItem>
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900'>crise ecológica em escala planetária</GridItem>
        </Grid>
        <LineTo from="card" to="card2" fromAnchor='bottom' toAnchor='top' borderColor='black' />
        <LineTo from="card" to="design" fromAnchor='right' toAnchor='top' borderColor='black' />
        <LineTo from="card" to="design2" fromAnchor='right' toAnchor='left' borderColor='black' />
      </Box>
    </>
  )
}

export default App
