var controlGiphy = 0;

function btnGiphy(){
    imgagemProduct = document.getElementById("image-produto");
    if(controlGiphy == 0){
        controlGiphy++;
        imgagemProduct.setAttribute("src", "./images/sofa360.gif");
    }else{
        controlGiphy=0;
        imgagemProduct.setAttribute("src", "./images/sofaMorgot.png");
    }
}