const togglingStatus = () => {

    const notActiveStatusContainer = document.getElementsByClassName("notActiveStatusContainer")
    const notActiveStatusBall = document.getElementsByClassName("notActiveStatusBall")

    Array.from(notActiveStatusContainer).forEach((cont, index) => {
        const ball = notActiveStatusBall[index]

        cont.addEventListener("click", (e) => {
            e.preventDefault()
            cont.classList.toggle('changeBg')
            ball.classList.toggle('changeStatus');
            ball.classList.toggle('changeColour');
        })
    })

}

togglingStatus()

const dropDown = () => {
    const dropBtn = document.querySelectorAll(".dropDown .currentNav")
    const dropContentContainer = document.getElementsByClassName("dropDownContent")
    const arrowDown = document.getElementsByClassName("arrowDown")
    const arrowRight = document.getElementsByClassName("arrowRight")

    Array.from(dropBtn).forEach((button, index) => {

        const dropContent = dropContentContainer[index]
        const eachArrowDown = arrowDown[index]
        const eachArrowRight = arrowRight[index]


        button.addEventListener("click", (e) => {
            e.preventDefault()
            dropContent.classList.toggle("showContent")
            eachArrowRight.classList.toggle("hide")
            eachArrowDown.classList.toggle("show")

        })
    })
}
dropDown()


const adminDropDown = () => {
    const adminDrop = document.querySelectorAll("#adminContainer")
    const dropDownProfile = document.querySelectorAll(".dropDownProfile")

    Array.from(adminDrop).forEach((eachdrop, index) => {

        const eachProfile = dropDownProfile[index]

        eachdrop.addEventListener("click", (e) => {
            e.preventDefault()
            eachProfile.classList.toggle("showProfile")
        })
    })
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

const displayContent =()=> {
    let display = document.getElementById("content").style.display ;
    if (display == "block") {
        document.getElementById("content").style.display = "none";
    } else {
        document.getElementById("content").style.display = "block";
    }
}

adminDropDown()
