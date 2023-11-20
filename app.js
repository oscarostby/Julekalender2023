const express = require('express');
const app = express();
const port = 3000;

// Middleware to check if the content is unlocked
app.use((req, res, next) => {
  const currentDate = new Date();
  const Day1Date = new Date('12.01.2023'); // Replace with your target date
  const Day2Date = new Date('12.02.2023');
  const Day3Date = new Date('12.03.2023');
  const Day4Date = new Date('12.04.2023');
  const Day5Date = new Date('12.05.2023');
  const Day6Date = new Date('12.06.2023');
  const Day7Date = new Date('12.07.2023');
  const Day8Date = new Date('12.08.2023');
  const Day9Date = new Date('12.09.2023');
  const Day10Date = new Date('12.10.2023');
  const Day11Date = new Date('12.11.2023');
  const Day12Date = new Date('12.12.2023');
  const Day13Date = new Date('12.13.2023');
  const Day14Date = new Date('12.14.2023');
  const Day15Date = new Date('12.15.2023');
  const Day16Date = new Date('12.16.2023');
  const Day17Date = new Date('12.17.2023');
  const Day18Date = new Date('12.18.2023');
  const Day19Date = new Date('12.19.2023');
  const Day20Date = new Date('12.20.2023');
  const Day21Date = new Date('12.21.2023');
  const Day22Date = new Date('12.22.2023');
  const Day23Date = new Date('12.23.2023');
  const Day24Date = new Date('12.24.2023');

  if (currentDate >= Day1Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day2Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day3Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day4Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day5Date) {
    next(); 
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day6Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day7Date) {
    next(); 
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day8Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day9Date) {
    next(); 
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day10Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day11Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day12Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day13Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day14Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day15Date) {
    next(); 
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day16Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day17Date) {
    next(); 
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day18Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day19Date) {
    next(); 
  } else {
    res.send('Content is locked until ' + Day1Date.toDateString());
  }

  if (currentDate >= Day20Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day21Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day22Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day23Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day2Date.toDateString());
  }

  if (currentDate >= Day24Date) {
    next();
  } else {
    res.send('Content is locked until ' + Day24Date.toDateString());
  }
});

// Route for the unlocked content
app.get('/unlocked-content', (req, res) => {
  res.send('This is the unlocked content!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});