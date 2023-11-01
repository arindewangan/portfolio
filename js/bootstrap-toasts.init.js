/*
Template Name: Upzet - Responsive Bootstrap 4 Admin Dashboard
Author: Themesdesign
Website: https://www.cybsinnovations.com/
File: Bootstrap Toasts Js
*/


//  Bootstrap Toast 
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
    toastTrigger.addEventListener('click', function () {
        var toast = new bootstrap.Toast(toastLiveExample)

        toast.show()
    })
}

