import { Td, SecondTr, Type } from './TableRow.styled'

import PropTypes from 'prop-types';

export const TableRow = ({ type, amount, currency, index }) => {
    return (
      <SecondTr idx={index}>
        <Type>{type}</Type>
        <Td>{amount}</Td>
        <Td>{currency}</Td>
      </SecondTr>
    );
  };

  TableRow.propTypes = {
    index: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };