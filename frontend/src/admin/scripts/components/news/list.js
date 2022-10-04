const axios = require("axios").default;

const createListItem = (
  content,
  id = "",
  className = "text-center text-lg mb-2 divide-y divide-gray-400"
) => {
  try {
    const li = document.createElement("li");
    li.innerHTML = content;
    li.id = id;
    li.className = className;
    return li;
  } catch (err) {
    console.log(err);
  }
};

const createUnorderedList = (listItems, id = "", className = "") => {
  try {
    const ul = document.createElement("ul");
    listItems.forEach((item) => {
      ul.appendChild(item);
    });
    ul.className = className;
    ul.id = id;
    return ul;
  } catch (err) {
    console.log(err);
  }
};

const getNews = async (id = undefined) => {
  const { data } = id
    ? await axios.get("/api/v1/news/get/" + id)
    : await axios.get("/api/v1/news/get");

  return data.news;
};

const addNewsList = async (
  to,
  listType = "normal",
  id = "",
  className = "",
  newsId = undefined
) => {
  const newsData = await getNews(newsId);
  let newsListItems = new Array();
  let content;
  let accordionPart1 =
    '<div class="accordion" data-accordion="open">' +
    '<div class="accordion-item relative mb-3">' +
    '<h2 class="mb-0">' +
    "<button" +
    ' class="accordion-button text-left font-semibold"' +
    ' type="button"' +
    'aria-expanded="false"' +
    ">" +
    "<span>";
  let accordionPart2 =
    "</span>" +
    '<i class="fa fa-plus collapse-close absolute right-0 pt-1 text-xs"></i>' +
    '<i class="fa fa-minus collapse-open absolute right-0 pt-1 text-xs"></i>' +
    "</button>" +
    "</h2>" +
    '<div  class="show">' +
    '<div class="py-4 text-sm opacity-60">';
  let accordionPart3 = "</div>" + "</div>" + "</div>" + "</div>";
  if (!newsId) {
    newsData.forEach((news) => {
      if (listType === "normal") {
        //content = news.title;
        content =
          accordionPart1 +
          news.title +
          accordionPart2 +
          news.article.slice(0, 5) +
          accordionPart3;
      } else if (listType === "checkBox") {
        content =
          accordionPart1 +
          `<input type = "checkbox"
                  id = "${news.title} ${news._id}"
                  name = "${news.createdDate}">
           <label for = "${news.title} ${news._id}"> ${news.title} </label>` +
          accordionPart2 +
          news.article +
          accordionPart3;
      } else if (listType === "radio") {
        content =
          accordionPart1 +
          `<input type = "radio"
                  id = "${news.title} ${news._id}"
                  name = "selected news">
           <label for = "${news.title} ${news._id}"> ${news.title} </label>` +
          accordionPart2 +
          news.article +
          accordionPart3;
      } else {
        content = "Invalid list item type";
      }

      newsListItems.push(createListItem(content, news._id));
    });
  } else {
    content = newsData.title;
    newsListItems.push(createListItem(content, newsData._id));
  }

  to.appendChild(createUnorderedList(newsListItems, id, className));
};

module.exports = { addNewsList };