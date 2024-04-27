//for accepted event colour is green, for rejected event red and for pending event colour is orange.
const eventData = [
    {
      "eventColor": "green",
      "title": "Daily standup",
      "status": "accepted",
      "start": "2024-04-19T16:30:00",
      "end": "2024-04-19T20:30:00"
    },
    {
      "eventColor": "red",
      "title": "Weekly Catchup",
      "status": "denied",
      "start": "2024-04-20T18:30:00",
      "end": "2024-04-20T20:30:00"
    },
    {
      "eventColor": "green",
      "title": "Sprint Planning",
      "status": "accepted",
      "start": "2024-04-20T18:30:00",
      "end": "2024-04-20T20:30:00"
    },
    {
      "eventColor": "green",
      "title": "Team Meeting",
      "status": "accepted",
      "start": "2024-04-05T10:00:00",
      "end": "2024-04-05T11:00:00"
    },
    {
      "eventColor": "green",
      "title": "Product Demo",
      "status": "accepted",
      "start": "2024-04-10T12:00:00",
      "end": "2024-04-10T13:00:00"
    },
    {
      "eventColor": "green",
      "title": "Client Meeting",
      "status": "accepted",
      "start": "2024-04-15T14:00:00",
      "end": "2024-04-15T15:00:00"
    },
    {
      "eventColor": "red",
      "title": "Training Session",
      "status": "denied",
      "start": "2024-04-16T16:00:00",
      "end": "2024-04-16T17:00:00"
    },
    {
      "eventColor": "green",
      "title": "Team Meeting",
      "status": "accepted",
      "start": "2024-04-01T10:00:00",
      "end": "2024-04-01T11:00:00"
    },
    {
      "eventColor": "green",
      "title": "Product Demo",
      "status": "accepted",
      "start": "2024-04-16T12:00:00",
      "end": "2024-04-16T13:00:00"
    },
    {
      "eventColor": "green",
      "title": "Client Meeting",
      "status": "accepted",
      "start": "2024-04-03T14:00:00",
      "end": "2024-04-03T15:00:00"
    },
    {
      "eventColor": "red",
      "title": "Training Session",
      "status": "denied",
      "start": "2024-04-04T16:00:00",
      "end": "2024-04-04T17:00:00"
    },
    {
      "eventColor": "green",
      "title": "Project Review",
      "status": "accepted",
      "start": "2024-04-05T10:00:00",
      "end": "2024-04-05T11:00:00"
    },
    {
      "eventColor": "orange",
      "title": "Client Presentation",
      "status": "pending",
      "start": "2024-04-06T13:00:00",
      "end": "2024-04-06T14:00:00"
    },
    {
      "eventColor": "green",
      "title": "Team Lunch",
      "status": "accepted",
      "start": "2024-04-07T12:00:00",
      "end": "2024-04-07T13:00:00"
    },
    {
      "eventColor": "red",
      "title": "Brainstorming Session",
      "status": "denied",
      "start": "2024-04-08T11:00:00",
      "end": "2024-04-08T12:00:00"
    },
    {
      "eventColor": "green",
      "title": "Team Building Activity",
      "status": "accepted",
      "start": "2024-04-09T15:00:00",
      "end": "2024-04-09T16:00:00"
    },
    {
      "eventColor": "orange",
      "title": "Client Workshop",
      "status": "pending",
      "start": "2024-04-10T10:00:00",
      "end": "2024-04-10T11:00:00"
    },
    {
      "eventColor": "green",
      "title": "Project Kickoff",
      "status": "accepted",
      "start": "2024-04-11T12:00:00",
      "end": "2024-04-11T13:00:00"
    },
    {
      "eventColor": "green",
      "title": "Team Huddle",
      "status": "accepted",
      "start": "2024-04-12T14:00:00",
      "end": "2024-04-12T15:00:00"
    },
    {
      "eventColor": "green",
      "title": "Client Consultation",
      "status": "accepted",
      "start": "2024-04-13T16:00:00",
      "end": "2024-04-13T17:00:00"
    },
    {
      "eventColor": "red",
      "title": "Product Launch",
      "status": "denied",
      "start": "2024-04-14T10:00:00",
      "end": "2024-04-14T11:00:00"
    },
    {
      "eventColor": "green",
      "title": "Training Workshop",
      "status": "accepted",
      "start": "2024-04-15T12:00:00",
      "end": "2024-04-15T13:00:00"
    },
    {
      "eventColor": "orange",
      "title": "Team Building Event",
      "status": "pending",
      "start": "2024-04-16T14:00:00",
      "end": "2024-04-16T15:00:00"
    },
    {
      "eventColor": "green",
      "title": "Project Update",
      "status": "accepted",
      "start": "2024-04-17T16:00:00",
      "end": "2024-04-17T17:00:00"
    },
    {
      "eventColor": "red",
      "title": "Team Review",
      "status": "denied",
      "start": "2024-04-18T10:00:00",
      "end": "2024-04-18T11:00:00"
    },
    {
      "eventColor": "green",
      "title": "Client Presentation",
      "status": "accepted",
      "start": "2024-04-19T12:00:00",
      "end": "2024-04-19T13:00:00"
    },
    {
      "eventColor": "orange",
      "title": "Product Demo",
      "status": "pending",
      "start": "2024-04-02T14:00:00",
      "end": "2024-04-02T15:00:00"
    },
    {
      "eventColor": "green",
      "title": "Team Lunch",
      "status": "accepted",
      "start": "2024-04-21T16:00:00",
      "end": "2024-04-21T17:00:00"
    },
    {
      "eventColor": "orange",
      "title": "Client Meeting",
      "status": "pending",
      "start": "2024-04-22T10:00:00",
      "end": "2024-04-22T11:00:00"
    },
    {
      "eventColor": "green",
      "title": "Project Discussion",
      "status": "accepted",
      "start": "2024-04-23T12:00:00",
      "end": "2024-04-23T13:00:00"
    },
    {
      "eventColor": "red",
      "title": "Team Building Exercise",
      "status": "denied",
      "start": "2024-04-24T14:00:00",
      "end": "2024-04-24T15:00:00"
    },
    {
      "eventColor": "green",
      "title": "Client Workshop",
      "status": "accepted",
      "start": "2024-04-25T16:00:00",
      "end": "2024-04-25T17:00:00"
    },
    {
        "eventColor": "orange",
        "title": "Client Meeting",
        "status": "pending",
        "start": "2024-04-26T10:00:00",
        "end": "2024-04-26T11:00:00"
      },
      {
        "eventColor": "green",
        "title": "Project Discussion",
        "status": "accepted",
        "start": "2024-04-27T12:00:00",
        "end": "2024-04-27T13:00:00"
      },
      {
        "eventColor": "red",
        "title": "Team Building Exercise",
        "status": "denied",
        "start": "2024-04-28T14:00:00",
        "end": "2024-04-28T15:00:00"
      },
      {
        "eventColor": "green",
        "title": "Client Workshop",
        "status": "accepted",
        "start": "2024-04-29T16:00:00",
        "end": "2024-04-29T17:00:00"
      },
      {
        "eventColor": "orange",
        "title": "Client Meeting",
        "status": "pending",
        "start": "2024-04-26T10:00:00",
        "end": "2024-04-26T11:00:00"
      },
      {
        "eventColor": "orange",
        "title": "Project Discussion",
        "status": "pending",
        "start": "2024-04-27T12:00:00",
        "end": "2024-04-27T13:00:00"
      },
      {
        "eventColor": "green",
        "title": "Team Building Exercise",
        "status": "accepted",
        "start": "2024-04-28T14:00:00",
        "end": "2024-04-28T15:00:00"
      },
      {
        "eventColor": "red",
        "title": "Client Workshop",
        "status": "denied",
        "start": "2024-04-30T16:00:00",
        "end": "2024-04-30T17:00:00"
      },
      {
        "eventColor": "green",
        "title": "New Project Kickoff",
        "status": "accepted",
        "start": "2024-05-01T10:00:00",
        "end": "2024-05-01T11:00:00"
      },
      {
        "eventColor": "orange",
        "title": "Product Strategy Meeting",
        "status": "pending",
        "start": "2024-05-02T12:00:00",
        "end": "2024-05-02T13:00:00"
      },
      {
        "eventColor": "green",
        "title": "Client Consultation",
        "status": "accepted",
        "start": "2024-05-03T14:00:00",
        "end": "2024-05-03T15:00:00"
      },
      {
        "eventColor": "red",
        "title": "Team Training",
        "status": "denied",
        "start": "2024-05-04T16:00:00",
        "end": "2024-05-04T17:00:00"
      },
      {
        "eventColor": "green",
        "title": "Project Review",
        "status": "accepted",
        "start": "2024-05-05T10:00:00",
        "end": "2024-05-05T11:00:00"
      },
      {
        "eventColor": "orange",
        "title": "Client Presentation",
        "status": "pending",
        "start": "2024-05-06T13:00:00",
        "end": "2024-05-06T14:00:00"
      },
      {
        "eventColor": "green",
        "title": "Team Lunch",
        "status": "accepted",
        "start": "2024-05-07T12:00:00",
        "end": "2024-05-07T13:00:00"
      },
      {
        "eventColor": "red",
        "title": "Brainstorming Session",
        "status": "denied",
        "start": "2024-05-08T11:00:00",
        "end": "2024-05-08T12:00:00"
      },
      {
        "eventColor": "red",
        "title": "Project Discussion",
        "status": "denied",
        "start": "2024-05-09T15:00:00",
        "end": "2024-05-09T16:00:00"
      },
      {
        "eventColor": "orange",
        "title": "Client Workshop",
        "status": "pending",
        "start": "2024-05-10T10:00:00",
        "end": "2024-05-10T11:00:00"
      },
      {
        "eventColor": "green",
        "title": "Project Kickoff",
        "status": "accepted",
        "start": "2024-05-11T12:00:00",
        "end": "2024-05-11T13:00:00"
      }
  ]
  ;  
export default eventData;
