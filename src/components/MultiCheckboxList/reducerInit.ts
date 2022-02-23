import CheckBoxArrayInterface from './CheckBoxArrayInterface'

const reducerInit = (value: Array<string>): Array<CheckBoxArrayInterface> =>
  value.map((e) => ({ checked: true, label: e }))
export default reducerInit
