import React, { Component } from "react";
import DateTime from "../data/DateTime";
import EventForm from "../components/EventForm";
import EventList from "../components/EventList";
import Controls from "../components/Controls";

const style = {
  backgroundColor: "00FFFF",
  color: "#ccc",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  padding: "0em 1em"
};

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dt: "",
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {},
      filtered: [],
      events: [
        {
          uid: 1578710655009,
          dtstart: new Date("12/09/2021 11:00"),
          dtend: new Date("12/09/2021 11:45"),
          title: "Love Sharnangat Interview",
          location: "Google Meet",
          description: "SDE Intern",
          email: "luv@gmail.com",
          phone: "9800017514"
        },
        {
          uid: 1578710655010,
          dtstart: new Date("12/10/2021 11:15"),
          dtend: new Date("12/10/2021 12:15"),
          title: "Ankit Bansod Interview",
          location: "Google Meet",
          description: "SDE Intern",
          email: "ankit@gmail.com",
          phone: "9800017514"
        },
        {
          uid: 1578710655011,
          dtstart: new Date("12/11/2021 12:15"),
          dtend: new Date("12/11/2021 13:15"),
          title: "Apurv Deshmukh Interview",
          location: "Google Meet",
          description: "SDE Intern",
          email: "apurv@gmail.com",
          phone: "9800017514"
        },
        {
          uid: 1578710655005,
          dtstart: new Date("12/12/2021 11:15"),
          dtend: new Date("12/12/2021 12:15"),
          title: "Mohit Singh Interview",
          location: "Google Meet",
          description: "UI/UX Developer",
          email: "mohit@gmail.com",
          phone: "9800017514"
        }
      ]
    };
    this.handleShowFormClick = this.handleShowFormClick.bind(this);
    this.handleFormCancel = this.handleFormCancel.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
    this.handleEditItem = this.handleEditItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleShowFormClick() {
    this.setState({
      formVisible: !this.state.formVisible
    });
  }
  handleFormCancel() {
    this.setState({
      formVisible: false,
      hasSelectedEvent: false,
      selectedEvent: {}
    });
  }
  handleChange(e) {
  let currentList = [];
  let newList = [];

  if (e.target.value !== "") {
  
  currentList = this.props.events;

  // newList = currentList.filter(item => {
  //   const lc = item.toLowerCase();
  //   const filter = e.target.value.toLowerCase();
  //   return lc.includes(filter);
  //  });
  } else {
  newList = this.props.filtered;
  }
  this.setState({
    filtered: newList
  });
  }
  handleFormSubmit(event) {
    let events = this.state.events;
    const eventIndex = events.findIndex(obj => {
      return obj.uid === event.uid;
    });
    if (eventIndex === -1) {
      events.push(event);
    } else {
      events[eventIndex] = event;
    }
    this.setState({
      events: events,
      formVisible: false
    });
  }
  removeEvent(array, uid) {
    const index = array.findIndex(obj => {
      return obj.uid === uid;
    });
    return index >= 0
      ? [...array.slice(0, index), ...array.slice(index + 1)]
      : array;
  }
  handleRemoveItem(uid) {
    const events = this.removeEvent(this.state.events, uid);
    this.setState({ events: events });
  }
  handleEditItem(node) {
    this.setState({
      selectedEvent: node,
      hasSelectedEvent: true,
      formVisible: true
    });
  }
  componentDidMount() {
    const dt = new DateTime();
    const currentDateTime = dt.getCurrentDateTime();
    this.setState({
      filtered: this.props.events
    });
    this.setState({
      dt: currentDateTime
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      filtered: nextProps.events
    });
  }
  render() {
    return (
      <div id={this.props.id} style={style}>
        <Controls
          onShowFormClick={this.handleShowFormClick}
          formVisible={this.state.formVisible}
        />
       <div>
            <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
         <ul>
          </ul>
      </div>
        {this.state.formVisible ? (
          <EventForm
            formVisible={this.state.formVisible}
            formTitle="Schedule Interview"
            onFormCancel={this.handleFormCancel}
            onFormSubmit={this.handleFormSubmit}
            selectedEvent={this.state.selectedEvent}
            hasSelectedEvent={this.state.hasSelectedEvent}
          />
        ) : null}
        <EventList
          events={this.state.events}
          onRemoveItem={this.handleRemoveItem}
          onEditItem={this.handleEditItem}
        />
      </div>
    );
  }
}

export default Container;
