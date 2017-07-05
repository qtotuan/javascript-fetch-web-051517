// const app = "I don't do much.";
//
//
// let xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://api.github.com/repos/jquery/jquery/commits')
//
// xhr.onload = function() {
//   console.log(xhr.response)
// }
//
// xhr.onerror = function() {
//   console.log('Booo')
// }
//
// xhr.send()

const token = '9988a3c3a202729d02132294f40c9a7d84ffbae3'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
})
  .then(res => res.json())
  .then(json => console.log(json))
