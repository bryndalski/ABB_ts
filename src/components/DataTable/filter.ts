const filter = (value: string, invisibleColums: string[], data: Array<any>) => {
  //gets rid of unwanted columns
  data = data.map((e) =>
    Object.keys(e).forEach((ie) => {
      if (invisibleColums.includes(ie)) delete e[ie]
    }),
  )
  console.log(data)
}

export default filter
