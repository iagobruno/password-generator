import './style.css'

const passwordLength = document.querySelector<HTMLSelectElement>('select#length')!
const includeNumbers = document.querySelector<HTMLInputElement>('input#numbers')!
const includeSymbols = document.querySelector<HTMLInputElement>('input#symbols')!
const includeUppercase = document.querySelector<HTMLInputElement>('input#uppercase')!

const newPassButton = document.querySelector('button#new-pass')!
const copyButton = document.querySelector('button#copy-pass')!

const resultField = document.querySelector<HTMLInputElement>('input#result-field')!

newPassButton.addEventListener('click', generatePassword)
copyButton.addEventListener('click', copyPassword)

function generatePassword() {
  let charset = 'abcdefghijklmnopqrstuvwxyz'

  if (includeUppercase.checked) {
    charset += charset.toUpperCase()
  }
  if (includeNumbers.checked) {
    charset += '0123456789'
  }
  if (includeSymbols.checked) {
    charset += '!?@#$%&*()[]{}-_+=<>:;~,.'
  }

  let newPassword = ''
  for (let i = 0; i < Number(passwordLength.value); i++) {
    newPassword += randomItem(Array.from(charset))
  }

  resultField.value = newPassword
}

function copyPassword() {
  resultField.focus()
  resultField.select()
  document.execCommand('copy')
}

function randomItem(items: string[]) {
  return items[Math.floor(Math.random() * items.length)]
}
