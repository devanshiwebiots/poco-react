/* eslint-disable import/no-anonymous-default-export */
export default [
  {
    id: 0,
    title: "All Day Event very long title",
    allDay: true,
    start: new Date(2022, 4, 0),
    end: new Date(2022, 4, 1)
  },
  {
    id: 1,
    title: "Long Event",
    start: new Date(2022, 4, 7),
    end: new Date(2022, 4, 10)
  },

  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2022, 4, 13, 0, 0, 0),
    end: new Date(2022, 4, 20, 0, 0, 0)
  },

  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2022, 10, 6, 0, 0, 0),
    end: new Date(2022, 10, 13, 0, 0, 0)
  },

  {
    id: 4,
    title: "Some Event",
    start: new Date(2022, 4, 9, 0, 0, 0),
    end: new Date(2022, 4, 9, 0, 0, 0)
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2022, 4, 11),
    end: new Date(2022, 4, 13),
    desc: "Big conference for important people"
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2022, 4, 12, 10, 30, 0, 0),
    end: new Date(2022, 4, 12, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting"
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2022, 4, 12, 12, 0, 0, 0),
    end: new Date(2022, 4, 12, 13, 0, 0, 0),
    desc: "Power lunch"
  },
  {
    id: 8,
    title: "Meeting",
    start: new Date(2022, 4, 12, 14, 0, 0, 0),
    end: new Date(2022, 4, 12, 15, 0, 0, 0)
  },
  {
    id: 9,
    title: "Happy Hour",
    start: new Date(2022, 4, 12, 17, 0, 0, 0),
    end: new Date(2022, 4, 12, 17, 30, 0, 0),
    desc: "Most important meal of the day"
  },
  {
    id: 10,
    title: "Dinner",
    start: new Date(2022, 4, 12, 20, 0, 0, 0),
    end: new Date(2022, 4, 12, 21, 0, 0, 0)
  },
  {
    id: 11,
    title: "Birthday Party",
    start: new Date(2022, 4, 13, 7, 0, 0),
    end: new Date(2022, 4, 13, 10, 30, 0)
  },
  {
    id: 12,
    title: "Late Night Event",
    start: new Date(2022, 4, 17, 19, 30, 0),
    end: new Date(2022, 4, 18, 2, 0, 0)
  },
  {
    id: 13,
    title: "Multi-day Event",
    start: new Date(2022, 4, 20, 19, 30, 0),
    end: new Date(2022, 4, 22, 2, 0, 0)
  },
  {
    id: 14,
    title: "Today",
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3))
  }
];


