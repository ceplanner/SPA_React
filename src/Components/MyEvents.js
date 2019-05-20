import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getData } from "../Actions";
import './component.css'
import Loader from 'react-loader-spinner';
import { NavLink } from "reactstrap";


class MyEvents extends Component {
  componentDidMount() {
    this.props.getData();
    
   
  }
  render() {
    // if(this.props.fetchingEvents)
    if (this.props.fetchingEvents)
    return (
      <div className="eventfetching" >
        <Loader type="Circles" color="#b76bff" height="120" width="120" />
      </div>
    );
    return <div >
      {this.props.myEvents.map(
        myEvent =><div className='cardd' key={myEvent.id}>
          <NavLink href={`/MyEvents/${myEvent.id}`}>
           <div >{myEvent.event_name}</div>
           <div >{myEvent.event_budget}</div>
           <div >{myEvent.event_type}</div>
           <div >{myEvent.event_date}</div>
           </NavLink>
        </div>
      )}
    
       
      </div>
   
  }
}


const mapStateToProps = state => {
  return { myEvents: state.myEvents,
  fetchingEvents: state.fetchingEvents,
  error:  state.error,
  loggedIn: state.loggedIn,
  errorStatusCode: state.errorStatusCode
  
   };
};
export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(MyEvents)
);