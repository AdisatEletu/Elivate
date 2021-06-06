import { doAlert } from '../components/alert/AlertComponent'

const handleError = error => {
  if (error?.response?.data.data[0]) {
    doAlert(error.response.data.data[0], 'error');
    return false
  } else if (error?.response?.data?.error) {
    doAlert(error.response.data.error, 'error');
    return false
  } else {
    doAlert('Something went wrong', 'error')
  }
}

export default handleError
