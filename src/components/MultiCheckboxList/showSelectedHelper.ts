import CheckBoxArrayInterface from './CheckBoxArrayInterface'

const showSelectedHelper = (
  label: string,
  show: boolean,
  data: Array<CheckBoxArrayInterface>,
): string => {
  if (!show) return label
  // if returns only label
  else {
    let count = data.filter((e) => e.checked).length

    return `${label} (${count > 100 ? '100+' : count})`
  }
}
export default showSelectedHelper
