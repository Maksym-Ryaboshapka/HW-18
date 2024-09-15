// Task 1

const infoAboutCategories = () => {
  const categoriesEl = document.querySelectorAll(".main-list > .main-item");

  categoriesEl.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const quantityOfItem = category.querySelectorAll("ul > li").length;

    console.log(
      `Категорія: ${categoryName} Кількість елементів: ${quantityOfItem}`
    );
  });
};

infoAboutCategories();

// Task 2

const addIngredients = () => {
  const ingredients = [
    "Картопля",
    "Гриби",
    "Часник",
    "Помідори",
    "Зелень",
    "Приправи",
  ];

  const listEl = document.querySelector("#ingredients");
  const itemsArr = [];

  ingredients.forEach((ingredient) => {
    const itemEl = document.createElement("li");
    const textEl = document.createElement("p");

    textEl.textContent = ingredient;
    itemEl.append(textEl);

    itemsArr.push(itemEl);
  });

  listEl.append(...itemsArr);
};

addIngredients();

// Task 3

const addImages = () => {
  const images = [
    {
      url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

  const listEl = document.querySelector("#gallery");
  let resultLayout = "";

  images.forEach((image) => {
    resultLayout += `<li><img src="${image.url}" alt="${image.alt}" class="task3-img"></li>`;
  });

  listEl.insertAdjacentHTML("afterbegin", resultLayout);
};

addImages();

// Task 4

const initCounter = () => {
  const counterEl = document.querySelector("#value");
  let counterVal = 0;

  const increment = () => {
    counterVal++;

    return counterEl.textContent = counterVal;
  };

  const decrement = () => {
    counterVal--;

    return counterEl.textContent = counterVal;
  };

  document
    .querySelector(`[data-action="increment"]`)
    .addEventListener("click", increment);
  document
    .querySelector(`[data-action="decrement"]`)
    .addEventListener("click", decrement);
};

initCounter();
