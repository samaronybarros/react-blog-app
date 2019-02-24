const formatError = err => {
  let error = null
  if (err.length == 2) {
    error = {
      errUser: err[0].msg,
      errPass: err[1].msg
    }
  } else {
    if (err[0].param === 'password') {
      error = {
        errPass: err[0].msg
      }
    } else {
      error = {
        errUser: err[0].msg
      }
    }
  }

  return error
}

export default formatError
