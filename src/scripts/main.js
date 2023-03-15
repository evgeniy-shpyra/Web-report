$(document).ready(() => {
    const activeMainLink = {
        id: "",
    }

    const toggleActiveMainLink = (currentId) => {
        if (activeMainLink.id == currentId) return

        const currentPathArray = window.location.href.split("/")
        const currentUrl = `http://${currentPathArray.slice(2, 3)[0]}`

        const currentPage = currentPathArray[currentPathArray.length - 1].slice(
            0,
            -5
        )
        const nameOfFile = $(currentId).text().trim()

        $(activeMainLink.id).removeClass("button_active")
        $(currentId).addClass("button_active")
        activeMainLink.id = currentId

        if (nameOfFile)
            $.get(
                `${currentUrl}/dist/components/${currentPage}/${nameOfFile}.html`,
                function (data) {
                    $("#information").html(data)
                },
                "html"
            )
    }

    const togglePopup = (currentId) => {
        const elementsNear = $(currentId).siblings(".popup__items")
        if (elementsNear.length) {
            $(elementsNear[0]).hasClass("popup__items_hidden")
                ? $(elementsNear[0]).removeClass("popup__items_hidden")
                : $(elementsNear[0]).addClass("popup__items_hidden")
            return true
        } else return false
    }

    toggleActiveMainLink("#main-link-1")

    for (let i = 1; i < 10; i++) {
        $(`#main-link-${i}`).click(function () {
            togglePopup(`#main-link-${i}`) ||
                toggleActiveMainLink(`#main-link-${i}`)
        })
    }

})
