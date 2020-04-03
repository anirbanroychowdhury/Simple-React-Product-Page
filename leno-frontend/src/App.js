import React from 'react';
import './App.css';
import  SimpleCard  from './item-card';
import Navbar from 'react-bootstrap/Navbar'
import { logDOM } from '@testing-library/react';


class App extends React.Component {
   
  constructor(props){
    super(props);
    this.state = {
      productList: [],
      query: '',
    };
    this.handleEnterButton = this.handleEnterButton.bind(this);
    this.handleInputSearchBar = this.handleInputSearchBar.bind(this);
  }

  //This function is called before teh app is displayed, and sets the state for the productList
  componentDidMount(){
    this.getProductDataList();
  }

  //query data from backend server
  getProductDataList() {
    fetch('http://localhost:3000/products').then(res => res.json()).then((data) => {
      this.setState({productList: data})
    }).catch(console.log)
  }

  //Explicitly handles the etner button on search bar
  handleEnterButton(e){
    var unsortedProdList = [];
    var sortedProdList = [];
    if(e.keyCode === 13){
       this.state.productList.map((item,key)=>{
        unsortedProdList.push(item);
        
      });
      unsortedProdList.forEach((item) => {
        if(String(item['name']).includes(e.target.value)){
          sortedProdList.push(item);
        }
      })
      this.setState({productList: sortedProdList});
    }
   
  }

  //Handles the query entered in the search bar
  handleInputSearchBar(e){
    this.setState({
      query:e.target.value
    },() => {
      if(this.state.query && this.state.query.length>1){
        if(this.state.query.length % 2 === 0){
          this.getProductDataList();
        }
      }
    })
  }

  //Creates a list of Cards, According the the data received from backend.
  getProductListComponenet(productList){
    var temp = [];    
    // console.log(productList);
    if(productList.length>0 && productList){
      productList.map((item,key) => {
        temp.push(<SimpleCard  {...item}/>);
      })
    }else{
      temp.push(
      <div>
        <h1>"Data not being fetched, restart backend server"</h1>
      </div>
      );
    }
    return temp;
  }
  
  render(){
    var ProductList = this.getProductListComponenet(this.state.productList);
    return(
     <div id="parent">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
        />
        <div className="navBar">
          <NavBarItem />
        </div>
        <div className="search">
          <label className="productName" style={{color:'white'}}>Product Name:</label>
          <div className="wrapper">
             <input placeholder="Enter product name" type="text" id="fname" name="fname" onChange = {this.handleInputSearchBar} onKeyDown={this.handleEnterButton}/><br></br>
          </div>
        </div>
        <div className="productList" >
          {ProductList}
        </div>
        <FooterBar />
     </div>
    );
  }
}

//Renders The Nav Bar
function NavBarItem(props){
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
    <img
      alt=""
      src={require('./logo.svg')}
      width="30"
      height="30"
      className="d-inline-block align-top"
    />{' '}
    React Bootstrap
  </Navbar.Brand>
</Navbar>
  );
}
//Renders the Footer
function FooterBar(props){
  return(
    <div className="footer">
    <section></section>
    <footer class="footer-distributed">
    
          <div class="footer-left">
    
            <h3>Company<span>logo</span></h3>
    
            <p class="footer-links">
              <a href="#" class="link-1">Home</a>
              
              <a href="#">Blog</a>
            
              <a href="#">Pricing</a>
            
              <a href="#">About</a>
              
              <a href="#">Faq</a>
              
              <a href="#">Contact</a>
            </p>
    
            <p class="footer-company-name">Company Name © 2015</p>
          </div>
    
          <div class="footer-center">
    
            <div>
              <i class="fa fa-map-marker"></i>
              <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
            </div>
    
            <div>
              <i class="fa fa-phone"></i>
              <p>+1.555.555.5555</p>
            </div>
    
            <div>
              <i class="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">support@company.com</a></p>
            </div>
    
          </div>
    
          <div class="footer-right">
    
            <p class="footer-company-about">
              <span>About the company</span>
              Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>
    
            <div class="footer-icons">
    
              <a href="#"><i class="fa fa-facebook"></i></a>
              <a href="#"><i class="fa fa-twitter"></i></a>
              <a href="#"><i class="fa fa-linkedin"></i></a>
              <a href="#"><i class="fa fa-github"></i></a>
    
            </div>
    
          </div>
    
        </footer>
      
    </div>
  );
}

export default App;
 