window.addEventListener("DOMContentLoaded", () => {

    let heartCards = document.querySelector(".heartCards");

    let windowHeight = window.innerHeight;
    console.log(windowHeight);
    let windowHeightCount = 0;

    function heartUp() {
        const heartIcon = document.createElement("div");
        heartIcon.setAttribute("class", "heart-div");
        heartIcon.textContent = "❤";
        let heartSize = 15;

        let sayLove = "Love";

        sayLove.split("").forEach(words => {
            console.log(words);
        });

        let windowWidth = window.innerWidth + "px";

        const styleHeart = {
            left: Math.random() * windowWidth,
            fontSize: heartSize + "px",
            animationDuration: 5 + "s",
            color:"rgb(250, 121, 142)",
            // transform:"scale(1)",
            // transition: "left 1s ease, transform 1s ease"
        }

        heartIcon.classList.add("heart-divHover");

        Object.assign(heartIcon.style, styleHeart);
        document.body.appendChild(heartIcon);



    }

    let heightsScreenNm = 2;
    let heightsScreen = 996 * heightsScreenNm;
    console.log(heightsScreen);

    let getInterval = setInterval((ss) => {
        windowHeightCount++;
        console.log(windowHeightCount);
        heartUp();
        try {
            if (windowHeightCount >= 49) {
                 console.log("İs Done!");
                clearInterval(getInterval);
            }
        } catch (err) {
            if (windowHeightCount >= 35) {
               
            }
            else {
                errorInAlert(ss);
            }

        }


    }, 1000);


    function errorInAlert() {
        let sizeForAlert = [10, 12, 13, 14, 15];

        let alertScreen = document.createElement("h1")
        let alertDesc = "We Have A Problem!";

        alertScreen.setAttribute("class", "title-alert");
        alertScreen.textContent = alertDesc;

        const alertStyle = {
            fontSize: sizeForAlert[2] + "px",
        }

        // alertScreen.appendChild(alertStyle);
        return document.body.appendChild(alertScreen);
    }

    let timeOut;
    let speedOut = 1000;
    let speedCount = 0;
    let countChs = Math.round(Math.random()) * [6];
    console.log(countChs);


    try {
        timeOut = setTimeout(() => {
            countChs++;
            console.log("There is Code here!");
            heartUp();
            if (speedCount === 6) {
                clearTimeout(timeOut);
            }
            else {
                countChs = 0;
                clearTimeout(timeOut);
            }

        }, speedOut);
    } catch (error) {
        error = "Have A Wrong!";
        alert("error");
    }


});