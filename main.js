var canvas = new fabric.Canvas('myCanvas');
var x = document.getElementById("myAudio");

function new_image() {
    fabric.image.fromURL('BirthdayImage.jpg', function (Img) {
        bl_img_obj = Img;

        bl_img_obj.scaleToWidth(700);
        bl_img_obj.scaleToHeight(510);
        bl_img_obj.set({
            top: 0,
            left: 0

        });
canvas.add(bl_img_obj);
    });

}

function playSound() {
    x.play();
}
