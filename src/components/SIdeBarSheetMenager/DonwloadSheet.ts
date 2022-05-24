import axios from 'axios'
import CONFIG from '../../CONFIG.json'
export default function DownloadSheet() {
  axios({
    method: 'get',
    url: CONFIG.downloadSheet,
    responseType: 'blob',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', 'raport.xls')
    document.body.appendChild(link)
    link.click()
  })
}
