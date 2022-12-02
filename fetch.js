const dark = () => {
  document.body.style.backgroundColor = "grey";
  document.getElementById("header").style.color="chartreuse";
};
const light = () => {
  document.body.style.backgroundColor = "aqua";
  document.getElementById("header").style.color="unset";
};
let fet = document.getElementById("fetching");
let url = "NewsHub.json";
const getData = () => {
  let str = " ";
  fetch(url)
    .then((res) => {
      console.log(res.status);
      console.log(res.ok);
      return res.json();
    })
    .then((data) => {
      data.articles.forEach((element) => {
        str += `
      <div class="main">
      <div class="cardX" >
          <img src="${element.urlToImage}" class="img" alt="..." />
          <div >
            <h3 class="title">__NewsTitle__ ⤵️ </h3><h5 class="title card-title ">** ${
              element.title
            }**</h5>
            <label class="name"><B>Content :- </B></label>
              <p class="card-text">
              ${[element.content]}...
              </p>
          </div>
          <u>
          <li ><label class="name"><B>PublishedAt :-  </B></label>${
            element.publishedAt
          }</li>
              <li ><label class="name"><B>Author :-  </B></label> ${
                element.author == null ? "saish" : element.author
              } </li>
              <li ><label class="name"><B>Source :-  </B></label> ${
                element.source.name === null ? "saish" : element.source.name
              }</li>
          </ul>
          <div class="card-body">
              <a href='${
                element.url
              }' class="btn btn-primary btn-sm" target="_blank">
                  Read More...
              </a>
          </div>
      </div>
  </div>
    `;
      });
      fet.innerHTML = str;
    });
};
getData();
