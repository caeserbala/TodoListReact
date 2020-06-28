import React from 'react';
import { List } from '../List/List';
import  fireDatabase from '../firebaseConfig'
import firebase from 'firebase';


 export  class Board extends React.Component <any , any> {
  constructor (props : any){
    super(props);
  
  }

 componentDidMount(){

  const itemsRef = firebase.database().ref('list');
  itemsRef.on('value', (snapshot) => {
    let items = snapshot.val();
    let updatedCardDetails = []
    if (!!items) {
      for (let [listID, value] of Object.entries(items)) {
        if (!!value) {
          let newValue = {...value as any , listID}
          updatedCardDetails.push(newValue);
        }
      }
      this.setState({ cardDetails: updatedCardDetails });
    }
  })

 }
  componentDidUpdate(){
    
  }

  render(){
    
    return (
    
    <List />);
  }
 
}


