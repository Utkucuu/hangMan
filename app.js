
/** selectors */

const timer = document.getElementById("timer")
const trueIcon = document.getElementById("trueIcon")
const falseIcon = document.getElementById("falseIcon")
const menArea = document.getElementById("menArea")
const treeFooter = document.getElementById("treeFooter")
const treeBody = document.getElementById("treeBody")
const treeHead = document.getElementById("treeHead")
const treeRope = document.getElementById("treeRope")
const manHead = document.getElementById("manHead")
const manBody = document.getElementById("manBody")
const manLeftArm = document.getElementById("manLeftArm")
const manRightArm = document.getElementById("manRightArm")
const manLeftFoot = document.getElementById("manLeftFoot")
const manRightFoot = document.getElementById("manRightFoot")
const wordArea = document.getElementById("wordArea")
const startBtn = document.getElementById("start")
const resettBtn = document.getElementById("reset")
const keyboardArea = document.getElementById("keyboardArea")
const disableDiv = document.getElementById("disableDiv")

document.addEventListener("DOMContentLoaded", function () {
    timer.style.display = "none"
    trueIcon.style.display = "none"
    falseIcon.style.display = "none"
    resettBtn.style.display = "none"
    keyboardArea.style.display = "none"
})

let timePoint = 59
let num = 9
let num2 = 9
let timePoint2 = 59


/*time func */
function time() {

    let time = setInterval(function () {
        timer.innerHTML = `01:${timePoint--}`

        if (timer.innerHTML === `01:10`) {

            let time2 = setInterval(function () {
                clearInterval(time)
                timer.innerHTML = `01:0${num--}`

                if (timer.innerHTML == `01:00`) {
                    clearInterval(time2)

                    let time3 = setInterval(function () {
                        timer.innerHTML = `00:${timePoint2--}`

                        if (timer.innerHTML == `00:10`) {
                            let time4 = setInterval(function () {
                                clearInterval(time3)
                                timer.innerHTML = `00:0${num2--}`

                                if (timer.innerHTML == `00:00`) {
                                    clearInterval(time4)
                                    alert("süre doldu")
                                    setTimeout (function () {
                                        window.location.reload()
                                      },2000)
                                }

                            }, 1000)
                        }
                    }, 1000)
                }
            }, 1000)
        }
    }, 1000)
}

resettBtn.onclick = function () {
    window.location.reload()
}

startBtn.onclick = function () {

    timer.style.display = "block"
    trueIcon.style.display = "block"
    falseIcon.style.display = "block"
    resettBtn.style.display = "block"
    keyboardArea.style.display = "block"
    startBtn.style.display = "none"
    disableDiv.style.display = "none"

    time()

    function random() {
        let list = ["ATATÜRK", "PENCERE", "LAZIMLIK", "DEFTER", "TEMİZLİK", "BAYRAK", "ARABA", "MASA", "SANDALYE", "ELA", "ALİ", "LİLA", "TRANSFER", "GÖZ", "SİM", "KOD", "KALEM", "KEMAN", "KEBAP", "PARA", "SÖZLEŞME", "TELEVİZYON", "ÇİM", "BİNEK", "İNEK", "ÇANTA", "HAYVAN", "KÖPEK",]

        var listIndex = (Math.floor(Math.random() * 28))

        var word = list[listIndex]

        for (let i = 0; i < word.length; i++) {

            var letterDiv = document.createElement("div")
            letterDiv.className = "letter my-auto"

            wordArea.appendChild(letterDiv)
        }

        if (word.length == 3) {
            manBody.style.display = "none"
            manLeftArm.style.display = "none"
            manRightArm.style.display = "none"
            manLeftFoot.style.display = "none"
            manRightFoot.style.display = "none"
        }

        if (word.length == 4) {
            manHead.style.display = "none"
            manBody.style.display = "none"
            manLeftArm.style.display = "none"
            manRightArm.style.display = "none"
            manLeftFoot.style.display = "none"
            manRightFoot.style.display = "none"
        }

        if (word.length == 5) {
            treeRope.style.display = "none"
            manHead.style.display = "none"
            manBody.style.display = "none"
            manLeftArm.style.display = "none"
            manRightArm.style.display = "none"
            manLeftFoot.style.display = "none"
            manRightFoot.style.display = "none"
        }

        if (word.length == 6) {
            manHead.style.display = "none"
            manBody.style.display = "none"
            manLeftArm.style.display = "none"
            manRightArm.style.display = "none"
            manLeftFoot.style.display = "none"
            manRightFoot.style.display = "none"
        }

        if (word.length == 7) {

            treeRope.style.display = "none"
            manHead.style.display = "none"
            manBody.style.display = "none"
            manLeftArm.style.display = "none"
            manRightArm.style.display = "none"
            manLeftFoot.style.display = "none"
            manRightFoot.style.display = "none"
        }

        if (word.length == 8) {
            treeHead.style.display = "none"
            treeRope.style.display = "none"
            manHead.style.display = "none"
            manBody.style.display = "none"
            manLeftArm.style.display = "none"
            manRightArm.style.display = "none"
            manLeftFoot.style.display = "none"
            manRightFoot.style.display = "none"
        }
        if (word.length == 9) {
            treeBody.style.display = "none"
            treeHead.style.display = "none"
            treeRope.style.display = "none"
            manHead.style.display = "none"
            manBody.style.display = "none"
            manLeftArm.style.display = "none"
            manRightArm.style.display = "none"
            manLeftFoot.style.display = "none"
            manRightFoot.style.display = "none"
        }
        if (word.length == 10) {
            treeFooter.style.display = "none"
            treeBody.style.display = "none"
            treeHead.style.display = "none"
            treeRope.style.display = "none"
            manHead.style.display = "none"
            manBody.style.display = "none"
            manLeftArm.style.display = "none"
            manRightArm.style.display = "none"
            manLeftFoot.style.display = "none"
            manRightFoot.style.display = "none"
        }

        console.log(word)
        return word
    }


    var wordOutput = random().split("")

    //Not: join(‘ ‘) fonksiyonunda iki tırnak arasına hangi karakteri yazarsanız, array’i string’e dönüştürürken virgülleri iki tırnak arasına yazdığınız karakter ile değiştirir.
    var loseOutput = wordOutput.join("")
    //Biz örnekte boşluk karakteri kullandığımız için virgüllerin yerine boşluk koydu. Eğer tırnakların arasına hiçbir şey koymazsanız boşluksuz çevirir. 

    var trueLetter = 1
    var falseLetter = 1

    function getWord(event) {



        if (wordOutput.includes(event.innerHTML)) {

            wordOutput.forEach(function (e, i) {

                if (e == event.innerHTML) {
                    trueIcon.innerHTML = trueLetter++
                    wordArea.children[i + 1].innerHTML = event.innerHTML
                    event.style.backgroundColor = "greenyellow"
                    event.disabled = true
                }

            })

            if (wordOutput.length + 1 == trueLetter) {

                win()
            }

        }

        else {

            event.disabled = true
            event.style = `	background:red;
            box-shadow:0 5px 0 2px #001a24;
            margin-bottom:0;
            text-decoration:none;
            font-size: 16px;
            padding: 2px;`

            falseIcon.innerHTML = falseLetter++

            if (wordOutput.length == 3) {

                if (manBody.style.display == "none") {
                    manBody.style.display = "block"
                    return
                }

                if (manLeftArm.style.display == "none" && manRightArm.style.display == "none") {
                    manLeftArm.style.display = "block"
                    manRightArm.style.display = "block"
                    return
                }

                if (manLeftFoot.style.display == "none" && manRightFoot.style.display == "none") {
                    manLeftFoot.style.display = "block"
                    manRightFoot.style.display = "block"

                }
                lose()
            }

            if (wordOutput.length == 4) {

                if (manHead.style.display == "none") {
                    manHead.style.display = "block"
                    return
                }

                if (manBody.style.display == "none") {
                    manBody.style.display = "block"
                    return
                }

                if (manLeftArm.style.display == "none" && manRightArm.style.display == "none") {
                    manLeftArm.style.display = "block"
                    manRightArm.style.display = "block"
                    return
                }

                if (manLeftFoot.style.display == "none" && manRightFoot.style.display == "none") {
                    manLeftFoot.style.display = "block"
                    manRightFoot.style.display = "block"

                }
                lose()
            }

            if (wordOutput.length == 5) {

                if (treeRope.style.display == "none") {
                    treeRope.style.display = "block"
                    return
                }

                if (manHead.style.display == "none") {
                    manHead.style.display = "block"
                    return
                }

                if (manBody.style.display == "none") {
                    manBody.style.display = "block"
                    return
                }

                if (manLeftArm.style.display == "none" && manRightArm.style.display == "none") {
                    manLeftArm.style.display = "block"
                    manRightArm.style.display = "block"
                    return
                }

                if (manLeftFoot.style.display == "none" && manRightFoot.style.display == "none") {
                    manLeftFoot.style.display = "block"
                    manRightFoot.style.display = "block"
                }
                lose()
            }

            if (wordOutput.length == 6) {

                if (manHead.style.display == "none") {
                    manHead.style.display = "block"
                    return
                }

                if (manBody.style.display == "none") {
                    manBody.style.display = "block"
                    return
                }

                if (manLeftArm.style.display == "none") {
                    manLeftArm.style.display = "block"
                    return
                }

                if (manRightArm.style.display == "none") {
                    manRightArm.style.display = "block"
                    return
                }

                if (manLeftFoot.style.display == "none") {
                    manLeftFoot.style.display = "block"
                    return
                }
                if (manRightFoot.style.display == "none") {
                    manRightFoot.style.display = "block"

                }
                lose()
            }

            if (wordOutput.length == 7) {

                if (treeRope.style.display == "none") {
                    treeRope.style.display = "block"
                    return
                }

                if (manHead.style.display == "none") {
                    manHead.style.display = "block"
                    return
                }

                if (manBody.style.display == "none") {
                    manBody.style.display = "block"
                    return
                }

                if (manLeftArm.style.display == "none") {
                    manLeftArm.style.display = "block"
                    return
                }

                if (manRightArm.style.display == "none") {
                    manRightArm.style.display = "block"
                    return
                }

                if (manLeftFoot.style.display == "none") {
                    manLeftFoot.style.display = "block"
                    return
                }
                if (manRightFoot.style.display == "none") {
                    manRightFoot.style.display = "block"

                }
                lose()
            }

            if (wordOutput.length == 8) {

                if (treeHead.style.display == "none") {
                    treeHead.style.display = "block"
                    return
                }

                if (treeRope.style.display == "none") {
                    treeRope.style.display = "block"
                    return
                }

                if (manHead.style.display == "none") {
                    manHead.style.display = "block"
                    return
                }

                if (manBody.style.display == "none") {
                    manBody.style.display = "block"
                    return
                }

                if (manLeftArm.style.display == "none") {
                    manLeftArm.style.display = "block"
                    return
                }

                if (manRightArm.style.display == "none") {
                    manRightArm.style.display = "block"
                    return
                }

                if (manLeftFoot.style.display == "none") {
                    manLeftFoot.style.display = "block"
                    return
                }
                if (manRightFoot.style.display == "none") {
                    manRightFoot.style.display = "block"

                }
                lose()
            }
            if (wordOutput.length == 9) {

                if (treeBody.style.display == "none") {
                    treeBody.style.display = "block"
                    return
                }

                if (treeHead.style.display == "none") {
                    treeHead.style.display = "block"
                    return
                }

                if (treeRope.style.display == "none") {
                    treeRope.style.display = "block"
                    return
                }

                if (manHead.style.display == "none") {
                    manHead.style.display = "block"
                    return
                }

                if (manBody.style.display == "none") {
                    manBody.style.display = "block"
                    return
                }

                if (manLeftArm.style.display == "none") {
                    manLeftArm.style.display = "block"
                    return
                }

                if (manRightArm.style.display == "none") {
                    manRightArm.style.display = "block"
                    return
                }

                if (manLeftFoot.style.display == "none") {
                    manLeftFoot.style.display = "block"
                    return
                }
                if (manRightFoot.style.display == "none") {
                    manRightFoot.style.display = "block"

                }
                lose()
            }

            if (wordOutput.length == 10) {

                if (treeFooter.style.display == "none") {
                    treeFooter.style.display = "block"
                    return
                }

                if (treeBody.style.display == "none") {
                    treeBody.style.display = "block"
                    return
                }

                if (treeHead.style.display == "none") {
                    treeHead.style.display = "block"
                    return
                }

                if (treeRope.style.display == "none") {
                    treeRope.style.display = "block"
                    return
                }

                if (manHead.style.display == "none") {
                    manHead.style.display = "block"
                    return
                }

                if (manBody.style.display == "none") {
                    manBody.style.display = "block"
                    return
                }

                if (manLeftArm.style.display == "none") {
                    manLeftArm.style.display = "block"
                    return
                }

                if (manRightArm.style.display == "none") {
                    manRightArm.style.display = "block"
                    return
                }

                if (manLeftFoot.style.display == "none") {
                    manLeftFoot.style.display = "block"
                    return
                }
                if (manRightFoot.style.display == "none") {
                    manRightFoot.style.display = "block"

                }
                lose()
            }
        }

    }

    const boardButtons = document.querySelectorAll(".boardButtons")
    boardButtons.forEach(function (event) {
        event.addEventListener("click", function () {
            getWord(event)
        })
    })

    function lose() {
        boardButtons.forEach(function (e) {
            e.disabled = true
        })
        setTimeout(function () {
            alert(`kaybettin ${loseOutput}`)

            setTimeout(function () {
                window.location.reload()
            }, 1000)

        }, 1000)
    }

    function win() {
        boardButtons.forEach(function (e) {
            e.disabled = true
        })

        setTimeout(function () {
            alert("kazandın")

            setTimeout(function () {
                window.location.reload()
            }, 500)

        }, 1000)
    }

}









