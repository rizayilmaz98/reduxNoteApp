import express from "express";
import * as dotenv from "dotenv"
import cors from 'cors';
import json  from 'body-parser';
import { nanoid } from 'nanoid'

dotenv.config({ path: './config.env' });

const app = express();

app.use(cors());
app.use(json());

let notes = [
  {
    id: nanoid(),
    title: 'Note 1',
    description: 'Description 1',
    color: "blue",
  },
  {
    id: nanoid(),
    title: 'Note 2',
    description: 'Description 2',
    color: "pink",
  },
  {
    id: nanoid(),
    title: 'Note 3',
    description: 'Description 3',
    color: "purple",
  },
  {
    id: nanoid(),
    title: 'Note 4',
    description: 'Description 4',
    color: "yellow",
  },
  {
    id: nanoid(),
    title: 'Note 5',
    description: 'Description 5',
    color: "green",
  },
];

app.get('/notes', (req, res) =>{
 
  res.send(notes)
} );

app.post('/notes', (req, res) => {
  const note = { id: nanoid(), title: req.body.title , description: req.body.description , color: req.body.color };
  notes.push(note);
  return res.send(note);
});

app.delete('/notes/:id', (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex((note) => note.id == id);
  if (index > -1) {
    notes.splice(index, 1);
  }

  res.send(notes);
});
app.delete('/notes', (req,res) => {
  notes = notes.filter(item => item.completed===false);
  res.send(true);
})

const PORT = 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));