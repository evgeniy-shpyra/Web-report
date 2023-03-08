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

    toggleActiveMainLink("#main-link-1")

    $("#main-link-1").click(function () {
        toggleActiveMainLink("#main-link-1")
    })
    $("#main-link-2").click(function () {
        toggleActiveMainLink("#main-link-2")
    })
    $("#main-link-3").click(function () {
        toggleActiveMainLink("#main-link-3")
    })
    $("#main-link-4").click(function () {
        toggleActiveMainLink("#main-link-4")
    })
    $("#main-link-5").click(function () {
        toggleActiveMainLink("#main-link-5")
    })
    $("#main-link-6").click(function () {
        toggleActiveMainLink("#main-link-6")
    })
    $("#main-link-7").click(function () {
        toggleActiveMainLink("#main-link-7")
    })
    $("#main-link-8").click(function () {
        toggleActiveMainLink("#main-link-8")
    })
    $("#main-link-9").click(function () {
        toggleActiveMainLink("#main-link-9")
    })
})
