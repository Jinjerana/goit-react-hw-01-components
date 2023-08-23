import { StatList, StatItem, Title, Label, Percentage } from './Statistics.styled'

import PropTypes from 'prop-types';

export const Statistics = ({stats, title}) => {
  return (
    <Statistics>
      {title && <Title>{title}</Title>}

  <StatList>
    {
    stats.map((item, idx) => (
      <StatItem
      key={item.id}
      id={item.id}
      index={idx}>
        <Label>{item.label}</Label>
        <Percentage>{item.percentage}%</Percentage>
      </StatItem>
      ))};
  </StatList>
</Statistics>
)
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired).isRequired
}
