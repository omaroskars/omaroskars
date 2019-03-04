import React from "react";
import moment from "moment";

function Event(props) {
  const { color, startTime, endTime, type } = props.event;
  return (
    <div
      className="event"
      style={{
        margin: "0 10px",
        padding: 3,
        borderRadius: 0.5,
        background: color
      }}
    >
      <div>{type}</div>
      <div>
        {moment(startTime).format("hh:mm")} - {moment(endTime).format("hh:mm")}
      </div>
    </div>
  );
}

function SchedulerRow(props) {
  return (
    <div
      style={{
        width: "100%"
      }}
    >
      <div className="header">{props.data.name}</div>

      {props.data.events.map(e => {
        return <Event event={e} />;
      })}
    </div>
  );
}

export default SchedulerRow;
