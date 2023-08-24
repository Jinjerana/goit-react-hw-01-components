import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin: 0 auto;
  margin-bottom: 5px;
  max-width: 100%;
  width: 360px;
`

export const Card = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin-bottom: 5px;
`

export const Avatar = styled.img`
display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
`

export const Name = styled.p`
font-size: 16px;
font-weight: 700;
color: rgba(1, 0.5, 0.5, 0.5)
`

export const Tag = styled.p`
font-weight: 400;
`

export const Location = styled.p`
font-weight: 400;
`

export const StatList = styled.ul`
display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const StatItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
`

export const Label = styled.span`
font-weight: 400;
`

export const Quantity = styled.span`
font-weight: 400;
`