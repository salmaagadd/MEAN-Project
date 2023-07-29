var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectId;

router.get('/usersData' , (req,res,next) => {
  req.collection.find({})
  .toArray()
  .then(results => res.json(results))
  .catch(error => res.send(error));
});

router.post('/usersData', (req, res, next) => {
  const { name, email , mobile , address } = req.body;
  if (!name || !email || !mobile || !address) {
    return res.status(400).json({
      message: 'Name , Email , Phone and Address are required',
    });
  }

  const payload = {name, email , phone: mobile ,address};
  req.collection.insertOne(payload)
    .then(result => res.json(payload))
    .catch(error => res.send(error));
});

router.delete('/usersData/:id', (req, res, next) => {
  const { id } = req.params;
  const _id =new ObjectID(id);
  req.collection.deleteOne({ _id })
    .then(result => res.send('Deleted successfully!'))
    .catch(error => res.send(error));
});

module.exports = router;