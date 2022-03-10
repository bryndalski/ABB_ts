export default interface DynamicCheckboxInterface {
  index: number
  enabled?: boolean
  label: string | number
  checked: boolean
  change: Function
}
