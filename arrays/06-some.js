const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

const numbers = [
  1, 3, 2, 3, 1, 10, 4, 5, 3, 7, 5, 6, 8, 9, 10, 1, 4, 7, 2, 8, 5, 0, 12, 4, 13,
  11, 5, 0, 100,
];

console.log(
  'Par',
  numbers.some((item) => item % 2 === 0)
);

const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true,
  },
  {
    customerName: 'Andres',
    total: 256,
    delivered: true,
  },
];

console.log(
  'Delivered',
  orders.some((item) => item.delivered)
);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: 'Cita de trabajo',
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: 'Cita con mi jefe',
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: 'Cena',
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 8),
  endDate: new Date(2021, 1, 1, 9, 30),
};

const isOverLap = (newDate) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      {
        start: date.startDate,
        end: date.endDate,
      },
      {
        start: newDate.startDate,
        end: newDate.endDate,
      }
    );
  });
};

console.log('isOverLap:', isOverLap(newAppointment));
