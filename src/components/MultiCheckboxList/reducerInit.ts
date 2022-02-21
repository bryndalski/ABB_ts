const reducerInit = (value: Array<string>): Array<Object> =>
  value.map((e) => ({ checked: true, label: e }))
export default reducerInit
