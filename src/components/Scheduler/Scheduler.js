import React, { Component } from "react";
import moment from "moment";

import SchedulerRow from "./SchedulerRow";

const mockData = [
  {
    id: 1,
    name: "Omar Oskarsson",
    events: [
      {
        type: "Klipping",
        startTime: moment().toString(),
        endTime: moment().toString(),
        color: "tomato"
      }
    ]
  },
  {
    id: 2,
    name: "Bjarni",
    events: [
      {
        type: "Klipping",
        startTime: moment().toString(),
        endTime: moment().toString(),
        color: "tomato"
      }
    ]
  }
];

const employees = [
  {
    id: 1,
    name: "Omar Oskarsson"
  },
  {
    id: 2,
    name: "Bjarni"
  }
];
class Scheduler extends Component {
  render() {
    return (
      <div>
        <h1>Scheduler</h1>

        {mockData.map(e => {
          return <SchedulerRow data={e} />;
        })}
      </div>
    );
  }
}

export default Scheduler;
