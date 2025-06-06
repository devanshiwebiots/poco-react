import React, { Component, Fragment } from "react";
import { Col, Row } from "reactstrap";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import Swal from "sweetalert2/dist/sweetalert2.js";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";

class DragCalendar extends Component {
  state = {
    calendarEvents: [
      {
        title: "Atlanta Monster",
        start: new Date("2019-04-04 00:00"),
        id: "1001",
      },
      {
        title: "My Favorite Murder",
        start: new Date("2019-04-05 00:00"),
        id: "1002",
      },
    ],
    events: [
      { title: "Meeting", id: "1" },
      { title: "Party", id: "2" },
      { title: "Long Event", id: "3" },
      { title: "Lunch", id: "4" },
      { title: "Happy Hour", id: "5" },
    ],
  };

  /**
   * adding dragable properties to external events through javascript
   */
  componentDidMount() {
    let draggableEl = document.getElementById("external-events");
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("data");
        return {
          title: title,
          id: id,
        };
      },
    });
  }

  /**
   * when we click on event we are displaying event details
   */
  eventClick = (eventClick) => {
    Swal.fire({
      title: eventClick.event.title,
      html:
        `<div class="table-responsive">
      <table class="table">
      <tbody>
      <tr >
      <td>Title</td>
      <td><strong>` +
        eventClick.event.title +
        `</strong></td>
      </tr>
      <tr >
      <td>Start Time</td>
      <td><strong>
      ` +
        eventClick.event.start +
        `
      </strong></td>
      </tr>
      </tbody>
      </table>
      </div>`,

      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove(); // It will remove event from the calendar
        Swal.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };

  render() {
    return (
      <Fragment>
        <Breadcrumb parent="Calendar" title="Draggable Calender"/>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12">
              <div className="card">
                <h5 className="card-header">Draggable Calender</h5>
                <div className="card-body">
                  <div className="animated fadeIn demo-app">
                    <Row>
                      <Col xl={3} md={4}>
                        <div id="external-events">
                          <p align="center">
                            <strong> {"Events"}</strong>
                          </p>
                          {this.state.events.map((event) => (
                            <div className="fc-event" title={event.title} data={event.id} key={event.id}>
                              {event.title}
                            </div>
                          ))}
                        </div>
                      </Col>

                      <Col xl={9} md={8}>
                        <div className="demo-app-calendar" id="mycalendartest">
                          <FullCalendar
                            defaultView="dayGridMonth"
                            header={{
                              left: "prev,next today",
                              center: "title",
                              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
                            }}
                            rerenderDelay={10}
                            eventDurationEditable={false}
                            editable={true}
                            droppable={true}
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            ref={this.calendarComponentRef}
                            weekends={this.state.calendarWeekends}
                            events={this.state.calendarEvents}
                            eventDrop={this.drop}
                            eventReceive={this.eventReceive}
                            eventClick={this.eventClick}
                          />
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DragCalendar;
