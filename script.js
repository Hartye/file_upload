let imgs = [];

const date = {
  loadDate() {
    let nowDate = new Date();
    let nowYear = nowDate.getFullYear();
    document.querySelector(".date").innerHTML = nowYear;
  },
};

const DOM = {
  show(imgUrl) {
    imgs.push(imgUrl);
    const show = document.querySelector(".canvas");
    show.innerHTML = "";

    for (i = 0; i < imgs.length; i++) {
      const img = document.createElement("img");
      img.src = imgs[i];
      img.width = "500";

      show.appendChild(img);
    }
  },

  upImg() {
    document.querySelector("input").addEventListener("change", function () {
      if (this.files && this.files[0]) {
        DOM.show(URL.createObjectURL(this.files[0]));
      }
    });
  },

  toTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },
};

date.loadDate();
