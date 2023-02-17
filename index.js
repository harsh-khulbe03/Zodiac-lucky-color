const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackground = () => {
    switch(zodiac.value) {
        case "aries":
            body.style.backgroundColor = "blue";
            break;
        case "tarus":
            body.style.backgroundColor = "green";
            break;
        case "gemini":
            body.style.backgroundColor = "yellow";
            break;
        case "cancer":
            body.style.backgroundColor = "pink";
            break;
        case "leo":
            body.style.backgroundColor = "gray";
            break;
        case "virgo":
            body.style.backgroundColor = "aqua";
            break;
        case "libra":
            body.style.backgroundColor = "chartreuse";
            break;
        case "scorpio":
            body.style.backgroundColor = "blueviolet";
            break;
        case "sagittarius":
            body.style.backgroundColor = "cornflowerblue";
            break;
        case "aquarious":
            body.style.backgroundColor = "crimson";
            break;
        case "capricorn":
            body.style.backgroundColor = "darksalmon";
            break;
        case "pisces":
            body.style.backgroundColor = "limegreen";
            break;
        default:
            body.backgroundColor = "white";
    }
}