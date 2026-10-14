window.addEventListener("DOMContentLoaded", () => {

    let heartCards = document.querySelector(".heartCards");

    let windowHeight = window.innerHeight;
    let windowHeightCount = 0;

    function heartUp() {
        const heartIcon = document.createElement("div");
        heartIcon.setAttribute("class", "heart-div");
        heartIcon.textContent = "❤";
        let heartSize = 15;



        const styleHeart = {
            fontSize: heartSize + "px",
            animationDuration: 5 + "s",
            color: "rgb(250, 121, 142)",
        }

        heartIcon.classList.add("heart-divHover");

        Object.assign(heartIcon.style, styleHeart);
        // document.body.appendChild(heartIcon);



    }

    let heightsScreenNm = 2;
    let heightsScreen = 996 * heightsScreenNm;

    let getInterval = setInterval((ss) => {
        windowHeightCount++;
        console.log(windowHeightCount);
        // heartUp();
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


    }, 100);


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
        // error = "Have A Wrong!";
        // alert("error");
        errorInAlert();
    }



    function sayToUser() {
        window.alert("Burası Çalışmıyor");
    }

    const iconİnput = document.querySelector(".iconHeart");
    const postUp = document.querySelector(".postUp");

    iconİnput.addEventListener("click", clickIcon);
    function clickIcon() {
        try {
            const stylePost = {
                transform: "rotateX(134deg)",
                top: "3rem",
                position: "relative",
                zIndex: "1"
            }
            iconİnput.classList.add("heartIconHidden");
            Object.assign(postUp.style, stylePost);

        } catch (err) {
            errorInAlert();
        }
    }

    const postLetter = document.querySelector(".post-letter-desc");
    const postLetterFront = document.querySelector(".postDescFront");

    const contentLetter = document.querySelector(".content");
    const postBody = document.querySelector(".postBody");

    let animationForLetter = {
        transition: "all 1s ease-in"
    }

    Object.assign(postLetterFront.style, animationForLetter);


    const styleFrontLetter = {
        position: "relative",
        zIndex: "1"
    }

    postLetter.addEventListener("click", clickHiddenLetter);
    function clickHiddenLetter(e) {
        if (!postUp.classList.add("postHidden") && !postLetterFront.classList.add("postHidden") && !postBody.classList.add("postBodyBckg") && !contentLetter.classList.add("contentLetter")) {
            contentLetter.classList.add("ContentLetter");
        }
        else {
            sayToUser();
            postUp.classList.remove("postHidden");
            postBody.classList.remove("postBodyBckg");

            contentLetter.classList.remove("ContentLetter");
            postLetterFront.classList.remove("postHidden");
        }
    }
});