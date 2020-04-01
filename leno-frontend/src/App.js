import React from 'react';
import './App.css';
import  SimpleCard  from './item-card';
import CardDeck from 'react-bootstrap/CardDeck';
import Navbar from 'react-bootstrap/Navbar'


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

  componentDidMount(){
    this.getProductDataList();
  }

  getProductDataList = () => {
    fetch('http://localhost:3000/products').then(res => res.json()).then((data) => {
      this.setState({productList: data})
    }).catch(console.log)
  }

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
  
  render(){
    var ProductList = this.state.productList.map((item,key)=> {
      return <SimpleCard  {...item}/>
    });
   
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
             <input type="text" id="fname" name="fname" onChange = {this.handleInputSearchBar} onKeyDown={this.handleEnterButton}/><br></br>
             <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="productList" >
          {ProductList}
        </div>
     </div>
    );
  }
}

function NavBarItem(props){
  return(
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
    <img
      alt=""
      src="/logo.svg"
      width="30"
      height="30"
      className="d-inline-block align-top"
    />{' '}
    React Bootstrap
  </Navbar.Brand>
</Navbar>
  );
}

export default App;
