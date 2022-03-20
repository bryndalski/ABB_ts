import CheckBoxArrayInterface from './CheckBoxArrayInterface'
/**
 *
 * @param value array of values in select
 * @param def default value
 * @returns {checked:def,label:lable}
 */
const reducerInit = (
  value: Array<string>,
  def: boolean,
): Array<CheckBoxArrayInterface> =>
  value.map((e) => ({ checked: def, label: e }))
export default reducerInit
