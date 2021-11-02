const chalk = require('chalk')

const handleIncorrectId = () => {
  console.log(
    chalk.red(
      'You entered an incorrect ID. Please check your ID and repeat the request!'
    )
  )
  return null
}

module.exports = handleIncorrectId
