import Swal from 'sweetalert2';

const useSweetAlert = () => {
  const showSuccessAlert = (title, message) => {
    Swal.fire({
      icon: 'success',
      title: title,
      text: message,
      showConfirmButton: false,
      timer: 1500
    });
  };

  const showErrorAlert = (title, message) => {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message
    });
  };

  return { showSuccessAlert, showErrorAlert };
};

export default useSweetAlert;
