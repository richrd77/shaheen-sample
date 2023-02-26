document.querySelector('.location-map').addEventListener('click', (e) => {
     const a = document.createElement('a');
     a.href = 'https://www.google.com/maps/place/Shaheen+School+%26+PU+Collage/@17.884285,77.539083,19z/data=!4m6!3m5!1s0x3bcec77532b325a5:0xa36edaaa2aed0f48!8m2!3d17.8842845!4d77.5390832!16s%2Fg%2F11ckr5w5k7?hl=en-US'
     a.target='blank';
     a.style.display = 'none';
     a.click();
    //  document.removeChild(a);
});

// navigator.geolocation?.getCurrentPosition(
//     (p) => console.log(p),
//     e => alert('error')
// )