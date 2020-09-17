let path = "";
$(document).ready(function() {
    $("header").load('/header.html', function() {
        console.log("Header Loaded");
        $("app").load('/app.html', function() {
            console.log("Application loaded");
            setInterval(() => {
                checkurl();
            }, 50);
        })
    })
})

function checkurl() {
    if (path !== window.location.pathname) {
        path = window.location.pathname;
        loadpage();
    }
}

function loadpage() {
    let path = window.location.pathname;
    if (path == "/profile/vaibhav") {
        $("#vaibhav").fadeIn();
        $("#isha").hide();
    } else if (path == "/profile/isha") {
        $("#vaibhav").hide();
        $("#isha").fadeIn();
    }
}

function route(x) {
    if (window.location.pathname.slice(1) !== x) {
        history.pushState(null, null, `/${x}`);
    }
}