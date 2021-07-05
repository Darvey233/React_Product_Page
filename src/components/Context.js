import React, { Component } from 'react'

export const DataContext = React.Context();

export class DataProvider extends Component {

  state = {
    products: [
      {
        "_id": "1",
        "title": "Audi RS3 01",
        "src": "https://th.bing.com/th/id/OIP.EErZ1qL49uG_2oiw_jQfdAHaE8?pid=ImgDet&rs=1",
        "description": "Number 1 car pic",
        "content": "A car pic",
        "price": 23,
        "colors": ["Silver"]
      }
    ]
  }
  render(){
    const {products} = this.state;

    return (
      <DataContext.Provider value={{products}}>
        {this.props.children}
      </DataContext.Provider>
    )
  }
}

