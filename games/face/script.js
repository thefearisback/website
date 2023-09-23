const image = document.getElementById("image");
const image1 = "../../imgs/happy.jpg";
const image2 = "../../imgs/suprise.jpg";

let isImage1 = true;

image.addEventListener("click", () => {
        setTimeout(() => {
            image.src = image2;
        }, 1000);

    //isImage1 = !isImage1;//
});
