import { authHeader } from "./auth-header";

function login(email, password) {
  console.log("login >>>>", login);
  const requestOptions = {
    method: "POST",
    header: { "Content-Type": "aplication/json" },
    body: JSON.stringify({ email, password }),
  };

  const url = "http://localhost:3000/user/login/";

  return fetch(url, requestOptions)
    .then(handleResponse)
    .then((user) => {
      console.log("user", user);
      if (user) {
        user.authdata = window.btoa(email + ":" + password);
        localStorage.setItem("user", JSON.stringify(user));
      }

      return user;
    });
}

function logout() {
  localStorage.removeItem("user");
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

export const userServise = {
  login,
  logout,
  // getAll
};
