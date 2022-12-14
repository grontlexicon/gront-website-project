const axios = require("axios").default;

window.addEventListener("load", async () => {
  try {
    const { data } = await axios.get("/api/v1/news/get");

    const newsArray = data.news;

    newsArray.forEach((element) => {
      const image = document.createElement("div");
      const card = document.createElement("div");
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const h1 = document.createElement("h1");
      const h5 = document.createElement("h5");
      const p = document.createElement("p");
      const newsrow = document.getElementById("newsrow");
      newsrow.className = "flex flex-col";
      card.className = "card flex-row pl-28 pt-5 pb-5 ";
      h1.className = "text-lg font-bold p-2";
      h5.className = "text-sm text-stone-400 pl-2";
      image.className = "bg-gray-200 h-40 w-40 p-2";
      p.className = "p-2 whitespace-pre-wrap";
      let d = new Date(element.createdDate);

      image.innerHTML = "Image need to fix";
      h1.innerHTML = element.title;
      h5.innerHTML =
        "Created: " + d.getDay() + "/" + d.getMonth() + "/" + d.getFullYear();
      
      p.innerHTML = element.article;
      div1.append(image);
      div2.append(h1, h5, p);
      card.append(div1, div2);
      newsrow.append(card);
    });
  } catch (err) {
    console.log(err);
  }
});
