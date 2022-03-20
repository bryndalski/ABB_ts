export default interface DynamicCheckboxInterface {
  type: 'radio' | 'checkbox'

  index: number
  enabled?: boolean
  label: string | number
  checked: boolean
  change: Function
}
