const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const imgList = $$(".img-item");
const result = $(".result");
const imgGroup = $(".img-group");

imgList.forEach((item) => {
  item.addEventListener("mousemove", function (e) {
    result.classList.remove("hide");

    const img = item.querySelector("img");

    const x = (e.offsetX / this.offsetWidth) * 100;
    const y = (e.offsetY / this.offsetHeight) * 100;

    const left = e.pageX - imgGroup.offsetLeft;
    const top = e.pageY - imgGroup.offsetTop;

    console.log(left, top);

    result.style.cssText = `
      background-image: url(${img.src});
      background-position: ${x}% ${y}%;
      background-size: ${img.width * 4}px ${img.height * 4}px;
      top: ${top}px;
      left: ${left}px;
    `;
  });

  item.addEventListener("mouseleave", function (e) {
    result.classList.add("hide");
    result.style.cssText = ``;
  });
});
