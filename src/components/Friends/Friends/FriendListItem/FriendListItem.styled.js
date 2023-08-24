import styled from 'styled-components'

export const FriendItem = styled.li`
display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 42px;
  margin: 0 auto;
  padding: 20px;
  max-width: 100%;
  width: 360px;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`

export const Status = styled.span`
display: block;
  margin-left: 1.625rem;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: rgba(0.2, 0.1, 0, 0.3);
`

export const Image = styled.img`
display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 20%;
`

export const Name = styled.p`
margin-left: 10px;
  font-size: 16px;
  font-weight: 700;
`