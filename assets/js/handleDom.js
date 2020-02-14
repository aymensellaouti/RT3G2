function createImage(
    src,
    title = 'mon Image',
    width = '50',
    height = '50',
    alt = title
) {
    let img = document.createElement('img');
    img.src = src ;
    img.title = title;
    img.width = width;
    img.height = height;
    img.alt = alt;
    return img;
}
let image = createImage('assets/images/tender.jpg');
let body = document.querySelector('body');
setTimeout(
    () => body.appendChild(image),
    2000
);

setTimeout(
    () => body.insertBefore(image.cloneNode(true),body.firstChild),
    3000
);
