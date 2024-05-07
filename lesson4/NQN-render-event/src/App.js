import React, { Component } from 'react'
import TddProductlist from './components/NQNProductlist';
import TddProductAdd from './components/NQNProductAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : [
        { title: 'Nguyễn Quang Nam', id: 2210900048, status:1 },
        { title: 'Cabbage', id: 1, status:1  },
        { title: 'Garlic', id: 2, status:0  },
        { title: 'Apple', id: 3, status:1  },
        { title: 'Samsung', id: 4, status:0  },
      ]
    }
  }
  tddHandleSubmit = (param)=> {
    console.log("App:",param);
    //thêm vào mảng dữ liệu product
    let {products} = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container border mt-5'>
        <h1>Nguyễn Quang Nam - Render Data - Event Form</h1>
        <hr/>
        <NQNProductlist renderProducts={this.state.products}/>
        <hr/>
        <NQNProductAdd onSummit={this.NQNHandleSubmit}/>
      </div>
    )
  }
}
