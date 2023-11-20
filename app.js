const express = require('express');
const app = express();
const port = 3000;

// Middleware to check if the content is locked
app.use((req, res, next) => {
  const currentDate = new Date();
  const Day1Date = new Date('1.12.2023'); // Replace with your target date
  const Day2Date = new Date('2.12.2023');
  const Day3Date = new Date('3.12.2023');
  const Day4Date = new Date('4.12.2023');
  const Day5Date = new Date('5.12.2023');
  const Day6Date = new Date('6.12.2023');
  const Day7Date = new Date('7.12.2023');
  const Day8Date = new Date('8.12.2023');
  const Day9Date = new Date('9.12.2023');
  const Day10Date = new Date('10.12.2023');
  const Day11Date = new Date('11.12.2023');
  const Day12veDate = new Date('12.12.2023');
  const Day13Date = new Date('13.12.2023');
  const Day14Date = new Date('14.12.2023');
  const Day15Date = new Date('15.12.2023');
  const Day16Date = new Date('16.12.2023');
  const Day17Date = new Date('17.12.2023');
  const Day18Date = new Date('18.12.2023');
  const Day19Date = new Date('19.12.2023');
  const Day20Date = new Date('20.12.2023');
  const Day21Date = new Date('21.12.2023');
  const Day22Date = new Date('22.12.2023');
  const Day23Date = new Date('23.12.2023');
  const Day24Date = new Date('24.12.2023');

  if (currentDate < Day24Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day23Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day22Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day21Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day20Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day19Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }
if (currentDate < Day18Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day17Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day16Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day15Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

  if (currentDate < Day14Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day13Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day12Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day11Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day10Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day9Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }
if (currentDate < Day8Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day7Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day6Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day5Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day4Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day3Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day2Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

if (currentDate < Day1Date) {
    res.send('Content is locked until ' + targetDate.toDateString());
  } else {
    next(); // Continue to the next middleware or route
  }

});

// Route for the locked content
app.get('/locked-content', (req, res) => {
  res.send('This is the locked content!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});