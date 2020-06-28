import React from 'react';
import Firebase from "firebase";
import { CardDetailsPopup } from '../cardDetailsPopup/cardDetailsPopup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './cardDetails.css';

export class CardDetails extends React.Component<any, any> {
    updatePopup = false;
    constructor(props: any) {
        super(props);
    }

    updateCard() {
        this.updatePopup= true;
        this.setState({});
    }

    render() {

        return (<>

            <div className="col-md-8 cardContainer" onClick={()=>this.updateCard()}>
                <div> {this.props.title}</div>
                <div> desc: {this.props.desc}</div>
            </div>

             {!!this.updatePopup && <CardDetailsPopup updatePopup = {this.updatePopup} {...this.props}/>}


        </>);
    }

}



