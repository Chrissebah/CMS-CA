function getInfo() {
    fetch("http://localhost/flower-power/wp-json/wc/store/products/31")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

    })
    .catch((err) => {
        console.log("Error occured", err);
    });
}

getInfo();