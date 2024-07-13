 class Cookie {
  constructor(name, value) {
    this.value = value;
    this.name = name;
  }

  setCookie(days) {
    let DAYS = 24 * 60 * 60 * 1000;
    let expiersIn = days * DAYS;
    let time = new Date();
    time.setTime(time.getTime() + expiersIn);
    let expire = `expiers=${time.toUTCString()}`;
    document.cookie = `${this.name}=${this.value}; ${expire}; Secure`;
  }

  getCooie(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === " ") c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }
}


export default Cookie;