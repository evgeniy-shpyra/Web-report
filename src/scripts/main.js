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
        //   console.log(`${currentUrl}/dist/components/${currentPage}/${nameOfFile}.html`)
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
            const allChildren = $(elementsNear[0]).find("li")

            // console.log(allChildren)
            let height = 0

            allChildren.each(function () {
                const liHeight = $(this).height()
                height += liHeight + 20
            })

            if ($(elementsNear[0]).height() == 0) {
                $(elementsNear[0]).css("height", `${height}px`)
            } else {
                $(elementsNear[0]).css("height", `0px`)
            }
            return true
        } else return false
    }

    toggleActiveMainLink("#main-link-1")

    for (let i = 1; i < 13; i++) {
        $(`#main-link-${i}`).click(function () {
            togglePopup(`#main-link-${i}`) ||
                toggleActiveMainLink(`#main-link-${i}`)
        })
    }
})
