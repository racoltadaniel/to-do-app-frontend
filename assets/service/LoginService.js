export default class LoginService {
  constructor ($axios) {
    this.axios = $axios
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    // this.axios.rejectUnauthorized = false
    // this.axios.requestCert = false
  }

  performLogin (username, password) {
    const data = new FormData()
    data.append('username', username)
    data.append('password', password)
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    // this.axios.rejectUnauthorized = false
    // this.axios.requestCert = false
    return this.axios({
      method: 'post',
      url: 'login',
      data
    }).then(() => {
      return true
    }).catch(() => {
      return false
    })
  }
}
