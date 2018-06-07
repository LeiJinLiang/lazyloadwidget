import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
    position: fixed;
    top : 50%;
    left : 50%;
    transform: translate(-50%,-50%);
`
const Loader = keyframes`
   from{
    letter-spacing: -1px;
   }
   to{
    letter-spacing: 15px;
   }
`

const Warpper = styled.div`
   position: relative;
   padding: 10px 20px;
   animation: ${Loader} 1s cubic-bezier(0.5,0.1,0.15,1) alternate infinite;
   &:before{
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      transform: skewX(-15deg);
      background-color: #eee;
   }
`

const Banner = styled.div`
  width: 60px;
  height: 100%;
  position: absolute;
  z-index: -2;
  bottom: -30%;
  transform: skewX(-15deg);
  background-color: #ccc;
  &:before{
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    top: -1px;
    border: 22px solid;
    background-color: transparent;
  }
`

const AnimateBannerLeft = keyframes`
  from{
    right: 82%;
  }
  to{
    right: 90%;
  }
`

const BannerLeft = Banner.extend`
  animation: ${AnimateBannerLeft} 1s cubic-bezier(0.5,0.1,0.15,1) alternate infinite;
  &:before{
    left: -1px;
    border-left-color: #18506F;
   
  }
`

const AnimateBannerRight = keyframes`
  from{
    left: 82%;
  }
  to{
    left: 90%;
  }
`
const BannerRight = Banner.extend`
  animation: ${AnimateBannerRight} 1s cubic-bezier(0.5,0.1,0.15,1) alternate infinite;
  &:before{
    right: -1px;
    border-right-color: #18506F;
  }
`

const Loading = () =>(
    <Container>
        <Warpper>
            LOADING
            <BannerLeft></BannerLeft>
            <BannerRight></BannerRight>
        </Warpper>
    </Container>
)

export default Loading