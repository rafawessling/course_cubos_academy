import express from 'express';
import { selectedPlayer, removePlayer, addPlayer } from './controllers/players.js';

const app = express();

app.get('/', selectedPlayer);
app.get('/remove', removePlayer);
app.get('/add', addPlayer);

app.listen(8000);
