let elInputUsername = document.querySelector('#username')
let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')
let elInputPassword = document.querySelector('#password')
let elInputPasswordretype = document.querySelector('#password-retype')
let elFailpasswordmessage = document.querySelector('.mismatch-message')


function isMatch (password1, password2) {
  if (password1 === password2) {
    return true
  } else {
  return false
  }
}

elInputUsername.onkeyup = function () {
  if (isMoreThan4Length(elInputUsername.value)) {
    elSuccessMessage.classList.remove('hide') // 성공 메시지가 보여야 함
    elFailureMessage.classList.add('hide')    // 실패 메시지가 가려져야 함
  }
  else {
    elSuccessMessage.classList.add('hide') // 성공 메시지가 보여야 함
    elFailureMessage.classList.remove('hide')    // 실패 메시지가 가려져야 함
  }
}

elInputPasswordretype.onkeyup = function () {
  if (isMatch(elInputPassword.value, elInputPasswordretype.value)) {
    elFailpasswordmessage.classList.add('hide')
  } else {
  elFailpasswordmessage.classList.remove('hide')
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4
}
