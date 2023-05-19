import styled from "styled-components"
import {Layout} from 'antd';

const {Sider} = Layout;

export const LayoutWrapper = styled(Layout)`
  min-height: 100vh
`

export const ChildrenWrapper = styled.div`
  border-radius: 20px;
  padding: 24px;
`
export const ListWrapper = styled.div`
  height: calc(100% - 112px);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SiderWrapper = styled(Sider)`
  && {
    .ant-layout-sider-trigger {
      border-top: 1px solid lightgray;

      svg {
        fill: black;
      }
    }

    .logoIcon {
      border-bottom: 1px solid lightgray;
    }
  }
`
export const LogoImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 24px;

  img {
    height: 40px;
    width: 40px;
    border-radius: 40px;
  }

  span {
    font-size: 28px;
  }
`