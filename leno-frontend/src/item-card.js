import React from 'react';
import Card from 'react-bootstrap/Card'
import MonitorImg from './assets/monitor.jpg'
import BrushImg from './assets/brush.jpg';
import KeyboardImg from './assets/keyboard.jpg'
import HeadsetImg from './assets/headset.jpg'
import MouseImg from './assets/mouse.jpg'
import StoveImg from './assets/stove.jpg'

// Simple Card class used to display an item lisiting
class SimpleCard extends React.Component {
  constructor(props){
    super(props);
    this.getImage = this.getImage.bind(this);
    
  }
  // Returns the image of the product
  getImage=(param)=> {
    switch(param){
      case 'monitor':
        return MonitorImg;
      case 'brush':
        return BrushImg;
      case 'keyboard':
        return KeyboardImg;
      case 'headset':
        return HeadsetImg
      case 'mouse':
        return MouseImg;
      case 'stove':
        return StoveImg;
      default:
        return;
    }
  }
    render(){
      return(
        <Card bg="dark" text="white" style={{ width: '18rem',margin:'10px'}}>
                <Card.Img variant="top" style={{width:'17rem' ,height:'15rem',margin:'5px auto'}} src={this.getImage(String(this.props.name).toLowerCase())}/>
                <Card.Body>
                  <Card.Title>{this.props.name}</Card.Title>
                  <Card.Text>
                    ${this.props.price}
                    
                  </Card.Text>
                  
                </Card.Body>
              </Card>
      );
    }
}

export default SimpleCard;
