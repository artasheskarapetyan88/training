import styled from "styled-components"


export const TitileWrapper = styled.div`
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 20px;
`

export const DialoguesPageWrapper = styled.div`
  background-color: white;
  padding: 16px;
  border-radius: 16px;

  .ant-dropdown-menu-item {
    padding: 2px 4px !important;

    svg {
      margin-right: 4px !important;
    }

    :hover {
      background-color: white !important;
      color: red !important;
    }

  }
`

export const TableHeaderWrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
`

export const InputSearch = styled.input`
  border-radius: 12px;
  border: 1px solid gray;
`

export const DeleteWrapper = styled.div`

`