import styled from 'styled-components'

export const Table = styled.table`
margin: 0 auto;
  margin-bottom: 15px;
  padding: 15px;
  max-width: 90%;
  width: 400px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`

export const Thead = styled.thead`
border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`

export const Tr = styled.tr`
font-size: 16px;
  font-weight: 700;
`

export const Th = styled.th`
padding: 15px;
  padding-left: 15px;
  text-align: left;
`

export const Tbody = styled.tbody`
height: 20px;
font-size: 16px;
  font-weight: 700;
`

export const Td = styled.td`
height: 20px;
text-transform: capitalize;
`
export const SecondTr = styled.tr`
background-color: rgba(0, 0, 0, 0.3);
`

export const Type = styled(Td)`
text-transform: capitalize;
`