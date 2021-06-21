import React from 'react';
import './App.css';

//test
//sdfwer
//asdfwaqerweerdsfg


class App extends React.Component {
  state = {
    products: [
      {
        _id: '1',
        title: 'Example product',
        src: ["https://th.bing.com/th/id/OIP.EErZ1qL49uG_2oiw_jQfdAHaE8?pid=ImgDet&rs=1",
              "https://www.abt-sportsline.com/fileadmin/_processed_/1/7/csm_ABT_Audi_RS3_tuning_nardograu_ERF_-1920_3_4_Front_252cb046f3.jpg",
              "https://gtspirit.com/wp-content/uploads/2017/12/ABT-Audi-RS3-11.jpg",
              "https://www.abt-sportsline.com/fileadmin/user_upload/ABT_RS3_Nardograu_Heck.jpg"
        
        ],
        description: 'UI/UX designing, html css tutorials',
        content: 'Welcome to my product page',
        price: 23,
        colors: ['red', 'blue', 'green'],
        count: 1,
      },
    ],
  };

  render() {
    const { products } = this.state;
    //console.log(products);
    return( 
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[0]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>

                <div className="colors">
                  {
                    item.colors.map((color, index) =>(
                      <button style={{background: color}} key={index}></button>

                    ))
                  }
                </div>

                <p>{item.description}</p>
                <p>{item.content}</p>

                <div className="thumb">
                  {
                    item.src.map((img, index) =>(
                      <img src={img} alt="" key={index} 
                      onClick={() => this.handleTab(index)}
                      />
                    ))
                  }

                </div>
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;
