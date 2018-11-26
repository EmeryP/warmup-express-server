import express from 'express';

const router = express.Router();

router.get('/', (req,res) => {
  res.write('hello')
  res.end();
})

router.post('/save', (req,res) => {
  let record = JSON.stringify(req.body);
  res.write(record);
  res.end();
})

export default router;