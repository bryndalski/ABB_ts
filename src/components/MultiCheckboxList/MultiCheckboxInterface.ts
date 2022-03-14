/**
 * @interface
 * @todo
 * @multi - allows multiple selects
 * @data array of labels
 * @onChange callback function changes any value
 */
export default interface MultiCheckboxInterface {
  multi: boolean
  data: Array<string>
  onChange: Function
}
