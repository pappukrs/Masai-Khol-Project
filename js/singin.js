if (JSON.parse(localStorage.getItem('usercollection')) !== null) {
  sai = JSON.parse(localStorage.getItem('usercollection'))
} else {
  sai = []
}

function saveuser() {




  fa= document.getElementById('fname').value
    
      em= document.getElementById('email').value
      pass= document.getElementById('Password').value

all=true
 sai.forEach(element => {
     if(element.e==em){
         alert("Email  alredy used")
         all=false

     }
     
 });     
if(all==false){
window.location.reload()
return
}
if(fa==''||em==''||pass.length<6){
alert("Please fill all required !")
window.location.reload()
return
}








  var username = {
      f: document.getElementById('fname').value,
      l: document.getElementById('lname').value,
      e: document.getElementById('email').value,
      p: document.getElementById('Password').value,
      cart: [],
      record: {
          about: "",
          income: 0,
          city: '',
          loction: "",
          mobileno: '',
          
      },
      payinfo: {
              cnum: "123456789123416",
              vc: "Month,Year",
              cname: "cardholdername"
          }

  }
  sai.push(username)

  localStorage.setItem('usercollection', JSON.stringify(sai))
  alert("Successful!")
  window.location.href='login.html'
}
var x = document.getElementById('s').addEventListener('click', function () {

  if (document.getElementById('a').style.display == 'block') {
      document.getElementById('a').style.display = 'none'
  } else {
      document.getElementById('a').style.display = 'block'

  }
  document.getElementById('b').style.display = 'none'
})

var x = document.getElementById('deen').addEventListener('click', function () {

  if (document.getElementById('b').style.display == 'block') {
      document.getElementById('b').style.display = 'none'
  } else {
      document.getElementById('b').style.display = 'block'

  }
  document.getElementById('a').style.display = 'none'
})
var x = document.getElementById('sai').addEventListener('click', function () {

  document.getElementById('b').style.display = 'none'

  document.getElementById('a').style.display = 'none'
})

