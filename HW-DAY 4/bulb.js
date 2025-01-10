function toggleLight(lightId) {
    const light = document.getElementById(lightId);
    if (light.src.includes('off.jpeg')) {
        light.src = lightId + '_on.jpeg';
    } else {
        light.src = 'off.jpeg';
    }
}