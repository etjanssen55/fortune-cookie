const getFortune = () => {
  const fortunes = require('./fortunes.json')
  const randomNumber = Math.floor(Math.random() * 10)

  console.log(fortunes[randomNumber])
};

module.exports = getFortune
