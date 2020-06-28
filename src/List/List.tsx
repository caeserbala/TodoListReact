import React from 'react';
import { CardDetails } from '../cardDetails/cardDetails';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './List.css'
import { CardDetailsPopup } from '../cardDetailsPopup/cardDetailsPopup';

export class List extends React.Component<any, any> {
  // cardDetails = [] as any; 
  displayPopup = false;
  constructor(props: any) {
    super(props);
    this.state = {
      cardDetails: []
    }

  }

  componentDidMount() {

    const itemsRef = firebase.database().ref('cardDetails');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let updatedCardDetails = []
      if (!!items) {
        for (let [cardID, value] of Object.entries(items)) {
          if (!!value) {
            let newValue = {...value as any , cardID}
            updatedCardDetails.push(newValue);
          }
        }
        this.setState({ cardDetails: updatedCardDetails });
      }
    })
  }

  displayCard() {
    this.displayPopup = true;
    this.setState({});
  }


  render() {
    return (<>
      <div style={{ display: 'flex', width: '30%' }}>
        <div className="listContainer" >
          <h4>List Item 1 </h4>
          <div className="container">
            <div className="row shadow-1">
              {/* <CardDetails {...this.state.cardDetails}/> */}
              {
                !!this.state.cardDetails && this.state.cardDetails.map((value: any, index: number) => <CardDetails {...value} key={value.key} />)
              }
            </div>
          </div>
          <FontAwesomeIcon icon={faPlusCircle} onClick={() => this.displayCard()} size={'3x'} color={'grey'} />
          {!!this.displayPopup && <CardDetailsPopup displayPopup={this.displayPopup} />}
        </div>
        {/* <div className="listContainer">
          <h4>List Item  2</h4>
         </div> */}

      </div>

    </>);
  }

}



