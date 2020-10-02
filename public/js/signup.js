$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");
  const usernameInput = $("input#username-input");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.username, userData.email, userData.password);
    usernameInput.val("");
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(username, email, password) {
    $.post("/api/signup", {
      username: username,
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
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
