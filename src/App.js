import React, { Component } from 'react';
import Loadable from 'react-loadable'
import './App.css';
import Loading from './components/Loading'

const LoadableComponent = Loadable({
    loader : () => import('./components/Main'),
    loading : Loading
})

const HeaderComponent = Loadable({
    loader : () => import('./components/Lazyload'),
    loading : Loading
})


const imgs = [
    { url : 'https://wx1.sinaimg.cn/mw690/6b6e567cgy1fqpz7bwpdzj20j60he44s.jpg'},
    { url : 'https://wx1.sinaimg.cn/mw690/6b6e567cgy1fqwycw0rf3j20hs0hs0ty.jpg'},
    { url : 'https://wx2.sinaimg.cn/mw690/6b6e567cgy1fqzcge705dj20hs0hsjuj.jpg'},
    { url : 'https://wx4.sinaimg.cn/mw690/6b6e567cgy1fquoymlgvaj20hs0hsdhh.jpg'},
    { url : 'https://wx3.sinaimg.cn/mw690/6b6e567cgy1fqsfrb2oedj20hs0hst9o.jpg'},
    { url : 'https://wx1.sinaimg.cn/mw690/6b6e567cgy1fqurko0tgoj20hs0hsjsg.jpg'},
    { url : 'https://wx1.sinaimg.cn/mw690/6b6e567cgy1fqr8tn5m8zj20jg0sfq6z.jpg'},
    { url : 'https://wx1.sinaimg.cn/mw690/6b6e567cgy1fqp12tvo2nj20j60nytgg.jpg'},
    { url : 'https://wx4.sinaimg.cn/mw690/6b6e567cgy1fquq3juqezj20hs0hs0tc.jpg'},
]

class App extends Component {
  constructor(props) {
      super(props)
      this.state = {
          show : true
      }
  }

  handleUpload = (url, data) => {
    const option = {
        method : 'POST',
        body : JSON.stringify(data),
        headers : new Headers({ 'Content-Type': 'application/json'})
    }
    fetch(url,option).then( res => res.json())
        .catch( err => console.log('Error',err))
        .then( response => console.log('Success', response))
  }

  handleClick = () => {
      // const url = 'https://example.com/profile'
      // const data = { username : 'example'}
      // this.handleUpload(url, data)
      this.setState({
          show : !this.state.show
      })
  }

  render() {
    return (
      <div className="App">
          {this.state.show ? <HeaderComponent data = {imgs}/>:<LoadableComponent />}
          <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default App;
