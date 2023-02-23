var data=[
{
"id": "a",
"title": "Izaz"
},
{
"id": "b",
"title": "Waqas Khan",
"eventColor": "green"
},
{
"id": "c",
"title": "Dawood Israr",
"eventColor": "orange"
},
{
"id": "d",
"title": "Muneeb",
},
{
"id": "e",
"title": "Waseem"
},
{
"id": "f",
"title": "Ikram",
"eventColor": "red"
},
{
"id": "g",
"title": "Kashif"
},
{
"id": "h",
"title": "Auditorium H"
},
{
"id": "i",
"title": "Auditorium I"
},
{
"id": "j",
"title": "Auditorium J"
},
{
"id": "k",
"title": "Auditorium K"
},
{
"id": "l",
"title": "Auditorium L"
},
{
"id": "m",
"title": "Auditorium M"
},
{
"id": "n",
"title": "Auditorium N"
},
{
"id": "o",
"title": "Auditorium O"
},
{
"id": "p",
"title": "Auditorium P"
},
{
"id": "q",
"title": "Auditorium Q"
},
{
"id": "r",
"title": "Auditorium R"
},
{
"id": "s",
"title": "Auditorium S"
},
{
"id": "t",
"title": "Auditorium T"
},
{
"id": "u",
"title": "Auditorium U"
},
{
"id": "v",
"title": "Auditorium V"
},
{
"id": "w",
"title": "Auditorium W"
},
{
"id": "x",
"title": "Auditorium X"
},
{
"id": "y",
"title": "Auditorium Y"
},
{
"id": "z",
"title": "Auditorium Z"
}
];
document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    initialView: 'resourceTimelineDay',
    aspectRatio: 1.5,
    headerToolbar: {
      left: 'prev,next',
      center: 'addEventButton',
      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth'
    },
    
    editable: true,
    resourceAreaHeaderContent: 'Employee Name',
    resources: data,
    events: 'https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline'
  });
  

  calendar.render();
});