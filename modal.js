// SHOW MODAL

var modalButton = document.getElementById('callModal');
modalButton.addEventListener('click', function () {
    var modal = document.getElementById('modal');
    modal.style.top = 'calc(60% - 200px)';
});

var closeModal = document.getElementById('close-modal');
closeModal.addEventListener('click',function(){
    modal.style.top = '-250px';
});
