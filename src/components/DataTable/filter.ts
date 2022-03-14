const filter = (
  value: string,
  invisibleColums: string[],
  data: Array<any>,
): Object[] => {
  // gets rid of unwanted columns
  console.log('KLUCZE')
  console.log(invisibleColums)

  data.forEach((e) => {
    invisibleColums.map((key) => delete e[key])
    console.log(e)
  })
  // console.log(data)
  //FilterValues

  data = data.filter((e) =>
    Object.values(e).join('').includes(value) ? e : null,
  )

  return [...data]
}

export default filter
