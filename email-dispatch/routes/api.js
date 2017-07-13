var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/:action', function(req, res) {

  let action = req.params.action

  if(action == 'send'){ //send email
    res.json({
    confirmation: 'success',
    message: 'IT WORKED'
  })
  return
  }
  res.json({
  confirmation: 'fail',
  message: 'Invalid'
})

})

module.exports = router
