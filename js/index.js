let common = new Common();

//  - awake
function awake() {
    resize();
    start();
}

//  - start
function start(){
    initPage();
    addEventListener();
}

//  - resize page
function resize(){
    common.resizeRem();
}

//  - initPage
function initPage() {

}
//  - addEventListener
function addEventListener() {

}

window.onload = awake;
window.onresize = resize;
resize();
