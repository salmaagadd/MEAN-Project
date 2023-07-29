const PanoImage= document.querySelector('.panoimg');
const hosppano ='../../../assets/imgs/360ph.jpg';

const panorama= new PANOLENS.imagepanorama(hosppano);
const viewer = new PANOLENS.Viewer({
    container: PanoImage
})
viewer.add(panorama);