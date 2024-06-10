1. Lưu ảnh vào folder này
2. Tạo 1 file và 1 biến để lưu các ảnh 
EX: 
const images = {
    logo: require('./Logo.svg').default,
    darkLogo: require('./DarkLogo.svg').default,
    noImage: require('./no-image.png')
    Jewelry: require('./Jewelry.png')
}
export default images;
