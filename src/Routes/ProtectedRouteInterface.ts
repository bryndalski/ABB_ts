export default interface ProtectedRouteInterface {
  condition: boolean // boolean of conditnion
  renderTrue: any // renders compoenent/ page if is true
  renderFalse: any // render if is not true
}
