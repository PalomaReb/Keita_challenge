import { Base64 } from "js-base64";

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
      localUser = d.filter(
        (user: {
          id: number;
          username: String;
          password: String;
          role: String;
        }) => user.username === email
      );
    });

  return localUser[0];
}

class UserAuth {
  authenticated: Boolean;
  role: String;

  constructor() {
    this.authenticated = false;
    this.role = "";
  }

  async login(
    user: { username: string; password: string },
    callback: Function,
    error: Function
  ) {
    const newUser: any = await findUser(user.username);
    const salt: string = "ke1ta$Chall3nge";
    const hashedPWD: string = Base64.encode(salt + user.password);

    if (
      newUser !== undefined &&
      user.username === newUser.username &&
      hashedPWD === newUser.password
    ) {
      sessionStorage.setItem(
        "token",
        Base64.encode(newUser.username + ":" + newUser.password)
      );
      this.authenticated = true;
      this.role = newUser.role;
      callback();
    } else {
      error();
    }
  }

  logout(callback: Function) {
    sessionStorage.removeItem("token");
    this.authenticated = false;
    this.role = "";
    callback();
  }

  isAuthenticated = () => {
    this.authenticated = sessionStorage.getItem("token") ? true : false;
    return this.authenticated;
  };
}

export default new UserAuth();
