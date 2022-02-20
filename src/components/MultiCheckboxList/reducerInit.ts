const reducerInit = (value: Array<string>): Array<Object> =>
  value.map((e) => ({ checked: true, value: e }))
export default reducerInit
