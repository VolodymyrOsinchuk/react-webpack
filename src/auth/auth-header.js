export function authHeader() {
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.authdata) {
    return {"Autorisation" : "Basic" + user.authdata}
  } else {
    return {};
  }
}