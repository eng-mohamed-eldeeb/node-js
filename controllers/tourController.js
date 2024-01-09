import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const tours = JSON.parse(fs.readFileSync(`${__dirname}/../data/tours-simple.json`));

const checkID = (req, res, next, val) => {
  console.log(`tour id is: ${val}`);
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: 'faild',
      message: 'invalied id',
    });
  }
  next();
};

const checkNameAndPrice = (req, res, next) => {
  console.log(req.body);
  if (!req.body.name || !req.body.price) {
    return res.status(404).json({
      status: 'faild',
      message: 'invalied name or price',
    });
  }
  next();
};

const createTour = (req, res) => {
  console.log(req.body);
  const id = tours[tours.length - 1].id - 1;
  const newTour = Object.assign({ id }, req.body);
  tours.push(newTour);
  fs.writeFile(`${__dirname}/data/tours-simple.json`, JSON.stringify(tours), (err) => {
    console.log(err);
  });
  res.status(201).json({
    status: 'success',
    data: {
      tours: newTour,
    },
  });
};

const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    resulte: tours.length,
    data: {
      tours,
    },
  });
  next();
};

const getATour = (req, res) => {
  console.log(req.params.id);
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);
  res.status(200).json({
    message: 'success',
    data: {
      tour,
    },
  });
};

export { createTour, getAllTours, getATour, checkID, checkNameAndPrice };
