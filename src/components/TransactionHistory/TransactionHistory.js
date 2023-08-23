import { Table, Thead, Tr, Th, Tbody, Td } from './TransactionHistory.styled'

import PropTypes from 'prop-types';

export const TransactionHistory = ({type, amount, currency}) => {
    return (
        <Table>
  <Thead>
    <Tr>
      <Th>Type</Th>
      <Th>Amount</Th>
      <Th>Currency</Th>
    </Tr>
  </Thead>

  <Tbody>
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  </Tbody>
</Table>
    );
};

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
}


// import transactions from 'path/to/transactions.json';

{/* <TransactionHistory items={transactions} />; */}

