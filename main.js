const app = document.querySelector("#app");

const SHOW = () => {
    fetch("http://localhost:3000/products")
        .then((Response) => Response.json())
        .then((DATA) => {
            app.innerHTML = DATA.map((ITEM, INDEX) => {
                return `
                    <tr>
                        <td>${INDEX + 1}</td>
                        <td>${ITEM.name}</td>
                        <td>${ITEM.desc}</td>
                        <td><img src="${ITEM.image}" alt="" width="100px"></td>
                        <td>
                            <a href="update.html?id=${ITEM.id}"><button class="btn btn-light">Sửa</button></a>
                            <button class="btn btn-light btn-delete" data-id="${ITEM.id}">Xoá</button>
                        </td>
                    </tr>
                `;
            }).join("");
            console.log(DATA);
            
            const btnDelete = document.querySelectorAll(".btn-delete");
            btnDelete.forEach(btn => {
                btn.addEventListener("click", () => {
                    const id = btn.dataset.id;
                    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này không?")) {
                        fetch(`http://localhost:3000/products/${id}`, {
                            method: "DELETE",
                        })
                        .then(response => {
                            if (response.ok) {
                                alert("Xóa thành công");
                                // Remove the deleted row from the table
                                btn.closest("tr").remove();
                            } else {
                                alert("Xóa thất bại");
                            }
                        })
                        .catch(error => {
                            console.error("Error:", error);
                            alert("Xóa thất bại");
                        });
                    }
                });
            });
        });
}

SHOW();
