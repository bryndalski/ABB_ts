import axios from 'axios'
import Swal from 'sweetalert2'
//CONFIG
import CONFIG from '../../CONFIG.json'

import Toast from '../Toasts/MiniToast'

export default function SendRowData(
  id: number,
  sheet?: string,
  content?: Object,
) {
  axios({
    method: 'POST',
    url: CONFIG.editRow,
    data: {
      ...content,
      sheet,
      id,
    },
  })
    .catch((err) => {
      console.error(err)
      return Toast.fire({ icon: 'error', title: 'Dane nie zostały zapisane' })
    })
    .then((_) =>
      Toast.fire({
        icon: 'success',
        title: 'Dane zapisane pomyślnie',
      }),
    )
}
