function login(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let requestBody = {
        email: email,
        password: password

    }

    fetch("/login", {
        method: "POST",
        headers:  {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(requestBody)
    }).then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    }).then(data => {
        console.log("data: ", data)

        if (data.success) {
            location.href = "../index.html"
        }
    }).catch(error => {
        console.error("Fetcherror:", error);
    })
}