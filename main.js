/**
 * NutriPlan - Main Entry Point
 * 
 * This is the main entry point for the application.
 * Import your modules and initialize the app here.
 */
const recipesgrid = document.querySelector("#recipes-grid");

let recipes = [];

const gatrecipes = new XMLHttpRequest();

gatrecipes.open(
    "GET",
    "https://nutriplan-api.vercel.app/api/meals/filter?category=Seafood&page=1&limit=25"
);

gatrecipes.addEventListener("load", () => {

    recipes=JSON.parse(gatrecipes.response).results;

    console.log(recipes);

    shwrecipes(recipes);
});

gatrecipes.send();

function shwrecipes(list) {

    let cartona = "";

    for (let i = 0; i <list.length; i++) {

        cartona += `
           <div
              class="recipe-card bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group"
              data-meal-id="${list[i].id}"
            >
              <div class="relative h-48 overflow-hidden">
                <img
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="${list[i].thumbnail}"
                  alt="Teriyaki Chicken Casserole"
                  loading="lazy"
                />
                <div class="absolute bottom-3 left-3 flex gap-2">
                  <span
                    class="px-2 py-1 bg-white/90 backdrop-blur-sm text-xs font-semibold rounded-full text-gray-700"
                  >
                    ${list[i].name}
                  </span>
                  <span
                    class="px-2 py-1 bg-emerald-500 text-xs font-semibold rounded-full text-white"
                  >
                    ${list[i].area}
                  </span>
                </div>
              </div>
              <div class="p-4">
                <h3
                  class="text-base font-bold text-gray-900 mb-1 group-hover:text-emerald-600 transition-colors line-clamp-1"
                >
                  Teriyaki Chicken Casserole
                </h3>
                <p class="text-xs text-gray-600 mb-3 line-clamp-2">
                    ${list[i].description}
                </p>
                <div class="flex items-center justify-between text-xs">
                  <span class="font-semibold text-gray-900">
                    <i class="fa-solid fa-utensils text-emerald-600 mr-1"></i>
                                        ${list[i].name}

                  </span>
                  <span class="font-semibold text-gray-500">
                    <i class="fa-solid fa-globe text-blue-500 mr-1"></i>
                    ${list[i].area}
                  </span>
                </div>
              </div>
            </div>
        `;
    }

    recipesgrid.innerHTML = cartona;
}