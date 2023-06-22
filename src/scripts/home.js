const setEnableText = (element) => {
  element.children[0].style.display = "block";
};

const setDisableText = (element) => {
  element.children[0].style.display = "none";
};

const choseActivity = (element) => {
  const buttons = document.getElementsByClassName("btn");
  const activityTitle = document.getElementById("activityTitle");
  const activityDescription = document.getElementById("activityDescription");
  const activityImage = document.getElementsByClassName("activityImg")[0];

  for (let btn of buttons) {
    if (btn.classList.contains("menuActive")) {
      btn.classList.remove("menuActive");
    }
  }
  activityTitle.textContent = element.textContent;
  activityDescription.textContent = activitiesDescriptions[element.id];
  activityImage.src = `src/public/images/home/${element.id}.jpg`;
  element.classList.add("menuActive");
};

const activitiesDescriptions = {
  trail:
    "Tilha Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel molestiae necessitatibus ratione libero in vitae ex delectus laboriosam repudiandae magni nam, nobis molestias soluta eaque! Nam ipsum numquam facilis! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  horseTour:
    "Passeio a Cavalo Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel molestiae necessitatibus ratione libero in vitae ex delectus laboriosam repudiandae magni nam, nobis molestias soluta eaque! Nam ipsum numquam facilis! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  waterfall:
    "Cachoeira Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel molestiae necessitatibus ratione libero in vitae ex delectus laboriosam repudiandae magni nam, nobis molestias soluta eaque! Nam ipsum numquam facilis! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  zipline:
    "Tirolesa Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel molestiae necessitatibus ratione libero in vitae ex delectus laboriosam repudiandae magni nam, nobis molestias soluta eaque! Nam ipsum numquam facilis! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
  spa: "Spa Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi vel molestiae necessitatibus ratione libero in vitae ex delectus laboriosam repudiandae magni nam, nobis molestias soluta eaque! Nam ipsum numquam facilis! Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
};
