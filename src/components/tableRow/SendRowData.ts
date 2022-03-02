import axios from 'axios'
import Swal from 'sweetalert2'

export default function SendRowData(
  id: number,
  sheet?: string,
  constent?: Object,
) {
  return Swal.fire('Good job!', 'You clicked the button!', 'success')
}
