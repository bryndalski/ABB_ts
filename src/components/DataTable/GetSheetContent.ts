import axios from 'axios'

const getData = (url: string, sheet: string): Promise<Array<Object>> =>
  new Promise((suc, err) => {
    console.log('XDDD')

    axios({
      method: 'POST',
      url,
      data: { sheet },

      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then((res) => {
        suc(res.data)
      })
      .catch((e) => err(e))
  })

export default getData
