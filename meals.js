// function loadApi(search) {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
//     fetch(url)
//         .then(res => res.json())
//         // .then(data => displayMeal(data.meals))
//     .then(data=>console.log(data))
   
// }

// const displayMeal = meals => {
    
//     const getDiv = document.getElementById('div-container');
//     getDiv.innerHTML = ``;
//     meals.forEach(meal => {
       
//         const col = document.createElement('div');
//         col.classList.add('col');
//         col.innerHTML = `
//         <div onclick="displaycard()" class="card h-100">
//                     <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                     <div class="card-body">
//                     <h5 class="card-title">${meal.strMeal}</h5>
//                     <p class="card-text">${meal.strInstructions.slice(0,200)}.</p>
//                     </div>
//                     </div> 
//                     `
//         getDiv.appendChild(col);
//     });
// }
// function displaycard() {
//     console.log('hoise');
// }

// function displayitem() {
    
//     const getSearch = document.getElementById('search-item');
//     const searchtext = getSearch.value;
//     loadApi(searchtext);
// }
// loadApi('a');