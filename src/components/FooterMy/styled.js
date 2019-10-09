import styled from 'styled-components'

export const Container = styled.div`
  padding: 24px 0;
  margin-top: 30px;
  border-top: 1px solid #d9d9d9;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;

    .sort-by {
      color: #a3a3a3;
      span {
        margin-right: 24px;
      }
    }
  }
`
