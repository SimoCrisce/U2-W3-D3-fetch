fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("errore: dati non trovati");
    }
  })
  .then((books) => {
    console.log(books, "books");

    books.forEach((book) => {
      const row = document.getElementById("row");
      const col = document.createElement("div");
      const card = document.createElement("div");
      const img = document.createElement("img");
      const cardBody = document.createElement("div");
      const cardTitle = document.createElement("h5");
      const cardText = document.createElement("p");
      const centeredBtn = document.createElement("div");
      const removeBtn = document.createElement("a");
      const cardt = document.createElement("div");

      row.appendChild(col);
      col.appendChild(card);
      card.appendChild(img);
      card.appendChild(cardBody);
      cardBody.appendChild(cardt);
      cardt.appendChild(cardTitle);
      cardt.appendChild(cardText);

      cardBody.appendChild(centeredBtn);
      centeredBtn.appendChild(removeBtn);

      col.classList.add("col-12", "col-sm-6", "col-md-4", "col-lg-3", "gy-5");

      const imgUrl = book.img;
      img.src = imgUrl;
      img.style = "width: 100%; height: 300px;";

      cardTitle.classList.add("mt-3");
      cardTitle.innerText = book.title;
      cardText.innerText = "Prezzo: €" + book.price;

      centeredBtn.classList.add("d-flex", "justify-content-center");

      cardt.style.height = "130px";

      removeBtn.classList.add("btn", "btn-danger", "mb-3");
      removeBtn.innerText = "ELIMINA";

      const remove = () => {
        card.remove();
      };

      removeBtn.addEventListener("click", remove);

      //   const cardContainer = document.getElementById("container-image");
      //   const image = document.createElement("img");
      //   const imgUrl = book.img;
      //   image.src = imgUrl;
      //   image.style.width = "100%";
      //   cardContainer.appendChild(image);
      //   console.log(imgUrl);
    });
  })
  .catch((error) => console.log(error));
