import { Base64 } from "js-base64";

interface SUser {
  id: number;
  username: String;
  password: String;
}

// function that goes into the json file created to check if the user trying to log in exists.
async function findUser(email: String) {
  let localUser: any;
  await fetch("/allowedUsers.db", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((r) => {
      if (!r.ok) {
        return "there is no data";
      }
      return r.json();
    })
    .then((d) => {
      // filter to find user in the data sent.
      localUser = d.filter(
        (user: { id: number; username: String; password: String }) =>
          user.username === email
      );
    });

  return localUser[0];
}

class UserAuth {
  authenticated: Boolean;

  constructor() {
    this.authenticated = false;
  }

  // function where the password is encoded in order to keep the user safe as well as the session token is created.
  // done with an async await because the fetch was not getting the information fast enough
  async login(
    user: { username: string; password: string },
    callback: Function,
    error: Function
  ) {
    const newUser: SUser = await findUser(user.username);
    const salt: string = "ke1ta$Chall3nge"; // Salt to encode password with more security than just the password in base64.
    const hashedPWD: string = Base64.encode(salt + user.password);

    if (
      newUser !== undefined &&
      user.username === newUser.username &&
      hashedPWD === newUser.password
    ) {
      sessionStorage.setItem(
        // token set in session storage so user is kept logged in
        "token",
        Base64.encode(newUser.username + ":" + newUser.password)
      );
      this.authenticated = true;
      callback();
    } else {
      error();
    }
  }

  // logout function where the session token is deleted.
  logout(callback: Function) {
    sessionStorage.removeItem("token");
    this.authenticated = false; // authenticated is changed to false in order to later control the routes the user can access.
    callback();
  }

  // auth function to later control if user is loggged or not and what they can do in the page.
  isAuthenticated = () => {
    this.authenticated = sessionStorage.getItem("token") ? true : false;
    return this.authenticated;
  };
}

export default new UserAuth();
