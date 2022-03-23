const filter = (
  value: string,
  invisibleColums: string[],
  inputData: Array<any>,
): Object[] => {
  // gets rid of unwanted columns
  let data: Array<any> = JSON.parse(JSON.stringify(inputData))
  //removes keys
  data = data.filter((e) => invisibleColums.map((key) => delete e[key]))
  //FilterValues
  data = data.filter((e) =>
    Object.values(e).join('').includes(value) ? e : null,
  )

  return data
}

export default filter
