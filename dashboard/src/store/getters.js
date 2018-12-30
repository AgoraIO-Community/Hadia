const config = state => state.app.config
const isLoading = state => state.app.isLoading
const palette = state => state.app.config.palette
const loginCred = state => state.app.login

export {
  isLoading,
  palette,
  config,
  loginCred
}
