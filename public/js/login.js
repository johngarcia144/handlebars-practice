$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $("form.login");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("/api/login", {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});

const quotes = [
  "This is the code you’re looking for.",
  "Give a man a program, and you’ll frustrate him for a day. Teach a man to program, and you frustrate him for life.",
  "A misspelled variable will make your day terrible.",
  "A machine learning algorithm would jump off a cliff if everyone else was doing it.",
  "A few hours of trial and error can save precious minutes of looking at the README.",
  "If you don’t have time to do it right, you’ll make time to do it twice.",
  "Sometimes, the best debugger is a good night’s sleep.",
  "The best part of being a dev is the ability to work anywhere, anytime. The worst part of being a dev is also the ability to work anywhere, anytime.",
  "Debugger? I hardly know her!",
  "Yes, I’m asking if you’re a robot. I, too, am a robot.",
  "You're closer to becoming a millionaire than Jeff Bezos. Congrats!",
  "Your snippets are safe with us.",
  "It’s not a bug – it’s an undocumented feature.",
  "0110001001101111011011110110001001110011",
  "Documentation? We don’t need no stinking documentation!",
  "Things aren’t always #000000 and #FFFFFF",
  "If at first you don’t succeed; call it version 1.0",
  "Hi Class! It's me, Zoo Loop from Activity 18, Week 3. Never forget your roots. Giraffe."
];

function newQuote() {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

newQuote();
