import express from 'express';

const app = express();
const server = app.listen(8080, ()=> {
   console.log('Server running on port 8080.');
});

