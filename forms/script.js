/*Add a keyup listener on the first input field, so that once you type a letter in this field, 
it goes into the <span id="display-firstname">. 
The content of the field and the span should always remain the same.
Add a keyup listener on the second input (the number input), 
so that if the age is below 18 the content of the section a-hard-truth remains hidden, 
otherwise show them this hard to swallow fact.
Well this is a common one. Add a keyup listener on both fields and show a visual hint 
(for instance turn the field red) if the password is too short (less than 6 characters)
 or if the password and its confirmation do not match.
Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. 
For ease of use, we'll say that the dark mode is just turning the background black and the text white.
*/

// Displaying the firstname
const firstnameInput = document.getElementById('firstname');
const displayFirstname = document.getElementById('display-firstname');

firstnameInput.addEventListener('keyup', function() {
  displayFirstname.textContent = firstnameInput.value;
});

//  Showing the hard truth based on age
const ageInput = document.getElementById('age');
const hardTruthSection = document.getElementById('a-hard-truth');

ageInput.addEventListener('keyup', function() {
  if (parseInt(ageInput.value) < 18) {
    hardTruthSection.style.visibility = 'hidden';
  } else {
    hardTruthSection.style.visibility = 'visible';
  }
});

//  Password + verification
const passwordInput = document.getElementById('pwd');
const passwordConfirmInput = document.getElementById('pwd-confirm');

function checkPassword() {
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  if (password.length < 6 || password !== passwordConfirm) {
    passwordInput.style.backgroundColor = 'red';
    passwordConfirmInput.style.backgroundColor = 'red';
  } else {
    passwordInput.style.backgroundColor = '';
    passwordConfirmInput.style.backgroundColor = '';
  }
}

passwordInput.addEventListener('keyup', checkPassword);
passwordConfirmInput.addEventListener('keyup', checkPassword);

//  Dark mode toggle
const toggleDarkMode = document.getElementById('toggle-darkmode');
const body = document.body;

toggleDarkMode.addEventListener('change', function() {
  if (toggleDarkMode.value === 'dark') {
    body.style.backgroundColor = 'black';
    body.style.color = 'white';
  } else {
    body.style.backgroundColor = '';
    body.style.color = '';
  }
});
