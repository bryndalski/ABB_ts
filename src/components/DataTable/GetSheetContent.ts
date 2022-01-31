import axios from 'axios'

const getData = (url: string): Promise<Object> =>
  new Promise((suc, err) => {
    axios({
      method: 'get',
      url,
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
