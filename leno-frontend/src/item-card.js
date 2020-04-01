import React from 'react';
import Card from 'react-bootstrap/Card'
// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     maxWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

// export default function SimpleCard(props) {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//   console.log(props);
//   return (
//      <div id="parent">
         
//        <div>
//        <Card className={classes.root}>
//       <CardContent>
//         <Typography className={classes.title} color="textSecondary" gutterBottom>
//           {props.category}
//         </Typography>
//         <Typography variant="h5" component="h2">
//           {props.name}
//         </Typography>
//         <Typography className={classes.pos} color="textSecondary">
//           {props.price}
//         </Typography>
//         {/* <Typography variant="body2" component="p">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography> */}
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//        </div>
//      </div>
//   );
// }

class SimpleCard extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Card bg="dark" text="white" style={{ width: '18rem',margin:'3px auto'}}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
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