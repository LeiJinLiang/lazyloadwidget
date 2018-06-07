import React, { Component } from 'react'
import styled from 'styled-components'

const Item = styled.img`
  display : inline-block;
  width : 100%;
  height : 100%;
  background-color: pink;
`
const Wrapper= styled.div`
 width : 100%;
 height : 22rem;
 padding : 1rem;
 box-sizing: border-box;
`

const Container = styled.div`
    width : 100%;
    height : 100%;
    overflow: scroll;
`


class Lazyload extends Component{
    constructor(props){
        super(props)
        this.state = {
            index : 0
        }
    }

    handleLoadImg = el => {
        if(!el[0].src){
            const source = el[0].dataset.url
            el[0].src = source
        }
    }

    handleIsInSight =  el => {
        const bound = el[0].getBoundingClientRect()
        const clientHeight = window.innerHeight
        return bound.top <= clientHeight + 100
    }

    handleCheckImgs = () => {
        const parent = Array.prototype.slice.call(this.search.children);
        const imgs = parent.map((el)=>{ return el.children})
        const { index } = this.state
        for(let i = index; i< imgs.length; i++){
            if(this.handleIsInSight(imgs[i])){
                this.handleLoadImg(imgs[i])
                this.setState({
                    index : i
                })
            }
        }
    }

    handleThrottle = (fn, mustRun = 500) => {
        let previous = null;
        return function() {
            const now = new Date();
            const context = this;
            const args = arguments;
            if (!previous) {
                previous = now;
            }
            const remaining = now - previous;
            if (mustRun && remaining >= mustRun) {
                fn.apply(context, args);
                previous = now;
            }
        }
    }

    handleScroll = () => {
        this.handleThrottle(this.handleCheckImgs())
    }

    componentDidMount() {
       this.handleCheckImgs()
    }

    render(){
       const { data } = this.props
       return(
           <Container innerRef={(search) => { this.search = search }} onScroll = {this.handleScroll}>
               {data.map((item,idx)=>(
                   <Wrapper key={idx} >
                        <Item  data-url = {item.url}  />
                   </Wrapper>
               ))}
           </Container>
       )
    }
}

export default Lazyload