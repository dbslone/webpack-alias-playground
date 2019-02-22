export default class Analytics {
  static alias(email) {
    console.log({email})
  }

  static setUserId(userId) {
    console.log({userId})
    return Analytics
  }
}
