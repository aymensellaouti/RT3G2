var para = document.querySelector('p');

setInterval(
    () => {
        para.classList.toggle('lampe');
    }, 1500
);
