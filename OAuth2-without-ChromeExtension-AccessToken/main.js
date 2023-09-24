document.addEventListener("DOMContentLoaded", () => {
  // Your OAuth 2.0 configuration
  const clientId =
    "42715593834-liji9rnhnrn4rjr886qe5nbndjlss50v.apps.googleusercontent.com";
  const redirectUri = "https://www.google.com";
  const authorizationEndpoint = "https://accounts.google.com/o/oauth2/auth";
  const tokenEndpoint = "https://oauth2.googleapis.com/token";
  const scope = "openid profile";

  // Function to initiate the OAuth 2.0 login flow
  function login() {
    const authorizationUrl = `${authorizationEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
    window.location.href = authorizationUrl;
  }

  // Function to parse the authorization code from the URL
  function parseAuthorizationCode() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("code");
  }

  // Function to exchange the authorization code for an access token
  function exchangeCodeForToken(code) {
    const data = {
      code,
      client_id: clientId,
      redirect_uri: redirectUri,
      grant_type: "authorization_code",
    };

    // Make a POST request to the token endpoint
    fetch(tokenEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data),
    })
      .then((response) => response.json())
      .then((tokenData) => {
        // Use the access token for authenticated API requests
        console.log("Access Token:", tokenData.access_token);
      })
      .catch((error) => {
        console.error("Error exchanging code for token:", error);
      });
  }

  // Check if there's an authorization code in the URL
  const code = parseAuthorizationCode();
  if (code) {
    // If there's a code, exchange it for an access token
    exchangeCodeForToken(code);
  } else {
    // If there's no code, display the login button
    const loginButton = document.getElementById("login-button");
    loginButton.addEventListener("click", login);
  }

  const dateInput = document.getElementById("dateInput");
  const selectedDateDisplay = document.getElementById("selectedDate");

  dateInput.addEventListener("input", () => {
    const selectedDate = dateInput.value;
    selectedDateDisplay.textContent = selectedDate;
  });

  const today = new Date();
  const dateOptions = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("todaysDate").textContent = today.toLocaleDateString(
    undefined,
    dateOptions
  );
});
