const addForm = document.querySelector("#addForm");
addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newProduct = {
        "name": document.querySelector("#prdName").value,
        "desc": document.querySelector("#desc").value,
        "image": document.querySelector("#image").value,
    };
    if (newProduct.name === "" || newProduct.image === "" || newProduct.desc === "") {
        alert("Không được để trống");
    } else {
        alert("Thêm thành công");
        fetch("http://localhost:3000/products", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newProduct)
        })
        .then(() => window.location = "./index.html");
    }
});
