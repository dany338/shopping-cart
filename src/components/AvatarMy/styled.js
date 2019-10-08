import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: white;

  .avatar-name {
    display: flex;
    flex-direction: row;
    align-items: center;

    h3 {
      margin-right: 18px;
      cursor: pointer;
    }
  }
`
