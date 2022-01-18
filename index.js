function openNav1() {
    if (document.getElementById("Nav").style.width != "350px") {
        document.getElementById("Nav").style.width = "350px";
        document.getElementById("Nav").style.height = "250px";
        var element = document.getElementById("Option1");
        element.classList.add("Active");
    } else {
        Close();
    }
}

/*Udělat proměnou na API aby se to ukládalo na obě stránky */
function DarkMode() {
    var doc = document.getElementById("Dark");
    if (doc.checked) {
        document.body.classList.remove("dark-mode");
        document.getElementById("sidebar").classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
        document.getElementById("sidebar").classList.add("dark-mode");
    }

}

function openNav2() {
    if (document.getElementById("Nav").style.width != "350px") {
        document.getElementById("Nav").style.width = "350px";
        document.getElementById("Nav").style.height = "250px";
        var element = document.getElementById("Option2");
        element.classList.add("Active");
        document.getElementById("Nav").classList.add("DownNav");
    } else {
        Close();
    }
}

function Close() {
    closeNav1();
    closeNav2();
}

function closeNav1() {
    document.getElementById("Nav").style.width = "0px";
    document.getElementById("Nav").style.height = "100px";
    var element = document.getElementById("Option1");
    element.classList.remove("Active");

}

function closeNav2() {
    document.getElementById("Nav").style.width = "0px";
    document.getElementById("Nav").style.height = "100px";
    var element = document.getElementById("Option2");
    element.classList.remove("Active");
    document.getElementById("Nav").classList.remove("DownNav");
}

function goHome() {
    Close();
}

window.addEventListener("load", function() {
    function sendData() {
        const XHR = new XMLHttpRequest();

        // Bind the FormData object and the form element
        const FD = new FormData(Overlay);

        // Define what happens on successful data submission
        XHR.addEventListener("load", function(event) {
            alert(event.target.responseText);
        });

        // Define what happens in case of error
        XHR.addEventListener("error", function(event) {
            alert('Oops! Something went wrong.');
        });

        // Set up our request
        XHR.open("POST", "https://example.com/cors.php");

        // The data sent is what the user provided in the form
        XHR.send(FD);
    }

    // Access the form element...
    const form = document.getElementById("Overlay");

    // ...and take over its submit event.
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        sendData();
    });
});