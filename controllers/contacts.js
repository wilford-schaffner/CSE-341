const mongoDB = require('../db/mongoDB');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
    const response = await mongoDB.getDb().db('lesson-2').collection('contacts').find({});
    response.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
}

const getSingle = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongoDB
      .getDb()
      .db('lesson-2')
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

module.exports = { getAll, getSingle };