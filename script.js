fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("errore: dati non trovati");
    }
  })
  .then((userData) => {
    console.log(userData, "userdata");

    const imgs = document.querySelectorAll(".card-img-top");
    userData.forEach((user) => {
      const imgContainer = document.querySelector(".card-img-top");
      const imgUrl = user.img;
      imgContainer.src = imgUrl;
      //   imgs.forEach((img) => {
      //     const imgUrl = user.img;
      //     img.src = imgUrl;
      //     console.log(img);
      //   });
    });
    // for (let i = 0; i < 4; i++) {
    //   const element = imgs[i];
    //   console.log(element);
    // }
  })
  .catch((error) => console.log(error));
