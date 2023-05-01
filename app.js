function visit() {
  let name = prompt('What is your name?');

  alert('Hello, ' + name + '!😃');

  let city = prompt('What sity do you live in?');
  if (city === 'Odesa') {
    alert('🌝 Welcome to our lessons in ' + city + '!💃');
  } else {
    alert("😞 Sorry, we don't have lessons in your city");
  }
}

let visitButton = document.querySelector('.visit-button');
visitButton.addEventListener('click', visit);
