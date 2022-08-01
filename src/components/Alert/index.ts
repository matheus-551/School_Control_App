import Swal from 'sweetalert2';

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
})

function showMessage(Title: string, Type: any){
    Toast.fire({
        icon: Type,
        title: Title
    })
}

export function SuccessMessage(message: string) {
    showMessage(message, 'success');
}

export function ErrorMessage(message: string) {
    showMessage(message, 'error');
}