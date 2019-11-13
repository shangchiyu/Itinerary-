const initState = [
  {
    country: "Spain",
    city: "Barcelona",
    img:
      "https://cdn.vox-cdn.com/thumbor/9zHVj4OnM5pYeO8rCX-W4aL-lw0=/0x0:4428x1993/1200x800/filters:focal(1872x1198:2580x1906)/cdn.vox-cdn.com/uploads/chorus_image/image/63371518/shutterstock_785442694.0.jpg"
  },
  {
    country: "Spain",
    city: "Barcelona",
    img:
      "https://www.fodors.com/wp-content/uploads/2018/07/shutterstock_552368572.jpg"
  },
  {
    country: "Spain",
    city: "Barcelona",
    img:
      "https://cdn.vox-cdn.com/thumbor/9zHVj4OnM5pYeO8rCX-W4aL-lw0=/0x0:4428x1993/1200x800/filters:focal(1872x1198:2580x1906)/cdn.vox-cdn.com/uploads/chorus_image/image/63371518/shutterstock_785442694.0.jpg"
  },
  {
    country: "Spain",
    city: "Barcelona",
    img:
      "https://www.fodors.com/wp-content/uploads/2018/07/shutterstock_552368572.jpg"
  }
];

const citiesReducer = (state = initState, action) => {
  console.log("action", action.type);
  switch (action.type) {
    case "GET_CITIES":
      return { ...state, cities: action.payload };
    default:
      return state;
  }
};
export default citiesReducer;
