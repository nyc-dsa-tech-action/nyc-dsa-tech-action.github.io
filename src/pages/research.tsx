import React, { useState }  from 'react'
import { Layout, } from '../Components'
import {
  Heading,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react' 
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { useWindowWidth } from '@react-hook/window-size'

export default function Research(): JSX.Element {
  const [pageNumber, setPageNumber] = useState(1)
  const [numPages, setNumPages] = useState(1)

  const changePage = (offset: number) => {
    if ((pageNumber === 1 && offset < 1) || (pageNumber === numPages && offset > 1)) {
      return
    }
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  const onDocLoadSucess = ({ numPages}: {numPages: number}) => {
    setNumPages(numPages)
  }

  const onPageInputEnter = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('gets here')
    const pageNumber = parseInt(e.target.value)
    if (pageNumber >= 1 && pageNumber <= numPages) {
      setPageNumber(pageNumber)
    }
  }

  const pageWidth = 0.5 * useWindowWidth()

  return (
    <Layout title='Research | Internet for All NYC'>
      <Heading fontSize={24} fontWeight={500} textAlign='center' pb={{base: '18px', md: '36px'}}>
        The case for municpal broadband is strong.
      </Heading>
      <Document file='../../REPORT-2021-06-14.pdf' onLoadSuccess={onDocLoadSucess}>
        <Page pageNumber={pageNumber} width={pageWidth} />
      </Document>
      <Text>Page {pageNumber} of {numPages}</Text>
      <NumberInput defaultValue={1} min={1} max={numPages}>
        <NumberInputField width='80px' onChange={onPageInputEnter} />
        <NumberInputStepper>
          <NumberIncrementStepper 
            onClick={() => changePage(1)}
            bgColor='gold'
          />
          <NumberDecrementStepper
            onClick={() => changePage(-1)}
            bgColor='gold'
          />
        </NumberInputStepper>
      </NumberInput>
    </Layout>
  )
}
