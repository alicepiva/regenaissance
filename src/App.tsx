import { teste } from "./content/teste"
import LineTo, { SteppedLineTo } from 'react-lineto';
import { Box, Grid, GridItem, Link, Text } from '@chakra-ui/react';
import CustomGridItem from "./components/CustomGridItem";
import SolidLine from "./components/SolidLine";

function App() {

  return (
    <>
      <Box p={6} as="header">
        <Text fontSize="lg" fontWeight="bold">regenascença</Text>
      </Box>

      <Box as="main" p="30px" color="white" w='3000px' overflowX={{base: 'auto'}}>
        <Grid
        templateColumns='repeat(8, 1fr)'
        templateRows='repeat(5, 1fr)'
        gap={6}>
          <GridItem textAlign='center' borderRadius='10px' className='card' rowSpan={2} bg='brand.900'>{teste.content}</GridItem>
          <CustomGridItem className='design'>
            <Link href={teste.link} target='_blank'>
              discrete design
            </Link>
          </CustomGridItem>
          <GridItem w='100%' h='10' bg='white'/>
          <GridItem w='100%' h='10' bg='white' />
          <GridItem w='100%' h='10' bg='white' />
          <GridItem className='esquina' w='100%' h='10' bg='white' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <CustomGridItem className='design2' >
            <Link href={teste.link} target='_blank'>
              design multiespécies
            </Link>
          </CustomGridItem>
          <GridItem w='100%' h='10' bg='white' />
          <GridItem className='midpoint_reg' w='100%' h='10' bg='white' />
          <CustomGridItem className='regen_eco'>regeneração de ecossistemas</CustomGridItem>
          <GridItem w='100%' h='10' bg='white' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem textAlign='center' borderRadius='10px' className='card2' rowSpan={2} bg='brand.900'>{teste.responsabilidade}</GridItem>
          <GridItem w='100%' h='10' bg='white' />
          <GridItem w='100%' h='10' bg='white' />
          <GridItem className='estruturas' colSpan={2} textAlign='center' borderRadius='10px' w='100%' h='10' bg='brand.900'>estruturas de apoio ao crescimento de corais</GridItem>
          <GridItem className='midpoint' w='100%' h='10' bg='white' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />

          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='white' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <GridItem w='100%' h='10' bg='brand.900' />
          <CustomGridItem className='crise'>crise ecológica em escala planetária</CustomGridItem>
        </Grid>
        <SolidLine from="card" to="card2" fromAnchor='bottom' toAnchor='top' />
        <SolidLine from="card" to="design" fromAnchor='right' toAnchor='left' />
        <SolidLine from="card" to="design2" fromAnchor='right' toAnchor='left' />
        <SolidLine from="card2" to="crise" fromAnchor='bottom' toAnchor='top' />
        <SteppedLineTo delay={1} from="design2" to="estruturas" borderStyle='dashed' borderColor='black' />
        <SteppedLineTo delay={1} from="regen_eco" to="estruturas" borderStyle='dashed' borderColor='black' />
        <LineTo delay={1} from="design" to="esquina" fromAnchor='right' toAnchor='center' borderStyle='dashed' borderColor='black' />
        <LineTo delay={1} from="esquina" to="midpoint" fromAnchor='center' toAnchor='center' borderStyle='dashed' borderColor='black' />
        <LineTo delay={1} from="midpoint" to="estruturas" fromAnchor='center' toAnchor='right center' borderStyle='dashed' borderColor='black' />
      </Box>
    </>
  )
}

export default App
