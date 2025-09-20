const awesomeFunction = (req, res, next) => {
    res.json('Tatiana Schaffner');
  };

const returnAnotherPerson = (req, res, next) => {
    res.json('Adam Schaffner');
  };

module.exports = { awesomeFunction, returnAnotherPerson };