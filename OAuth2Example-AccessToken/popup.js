document.addEventListener("DOMContentLoaded", function () {
  const myButton = document.getElementById("login");

  if (myButton) {
    myButton.addEventListener("click", function () {
      // Your click event handler logic here

      // OAuth 2.0 parameters
      const extensionID = chrome.runtime.id;
      console.log("extensionID:", extensionID);
      const authUrl = "https://accounts.google.com/o/oauth2/auth";
      const redirectUrl = chrome.identity.getRedirectURL();
      const clientId =
        "42715593834-liji9rnhnrn4rjr886qe5nbndjlss50v.apps.googleusercontent.com";
      const scopes = "openid email profile";

      // OAuth 2.0 flow
      chrome.identity.launchWebAuthFlow(
        {
          url: `${authUrl}?client_id=${clientId}&redirect_uri=${encodeURIComponent(
            redirectUrl
          )}&scope=${encodeURIComponent(scopes)}&response_type=token`,
          interactive: true,
        },
        function (redirectedTo) {
          console.log("redirectedTo:", redirectedTo);

          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
            return;
          }

          // Handle the OAuth response
          const responseUrl = new URL(redirectedTo);
          const accessToken = responseUrl.hash.split("&")[0].split("=")[1];

          // Now you can use the access token for API requests
          console.log("Access Token:", accessToken);
        }
      );
    });
  }
});
