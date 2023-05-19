import styled from "styled-components"
import {Layout, Menu} from 'antd';

const {Sider} = Layout;

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
  img{
    height: 60px;
    width: 60px;
  }
  span{
    font-size: 32px;
  }
`