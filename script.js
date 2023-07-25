let allPicture = [
    'Images/1.jpg',
    'Images/2.jpg',
    'Images/3.jpg',
    'Images/4.jpg',
    'Images/5.jpg',
    'Images/6.jpg',
    'Images/7.jpg',
    'Images/8.jpg',
    'Images/9.jpg',
    'Images/10.jpg',
    'Images/11.jpg',
    'Images/12.jpg',
    'Images/13.jpg'
];
let countPicture = 0;
let image = document.getElementById('image')
setInterval(() => {
    if(countPicture >= allPicture.length){
        countPicture = 0;
    }
    let imgSource = allPicture[countPicture];
    image.setAttribute('src', imgSource);
    countPicture++;
}, 2000);