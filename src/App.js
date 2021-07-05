import React from 'react';
import './App.css';
import Colors from './components/Colors'
import DetailsThumb from './components/DetailsThumb'
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'
import Section from './components/Section'
import {DataProvider} from './components/Context'

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
      }
    ],
    index: 0
  };

  myRef = React.createRef();
  
  handleTab = index =>{
    //alert(index)
    this.setState({index: index})
    const images = this.myRef.current.children;
    //Style change when tabbing
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }

  render() {
    const {products, index} = this.state;
    //console.log(products);
    return( 
      <DataProvider>
        <div className="app">

          <Router>
            <Header />
            <Section />

          </Router>


          {
            products.map(item =>(
              <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[index]} alt=""/>
                </div>

                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>

                  <Colors colors={item.colors} />

                  <p>{item.description}</p>
                  <p>{item.content}</p>

                  <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                  <button className="cart">Add to cart</button>

                </div>
              </div>
            ))
          }


      

        </div>
      </DataProvider>
    );
  };
}

export default App;
