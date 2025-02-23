window.onload = () => {
    loadDefaultDrinks();
};

const loadDefaultDrinks = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m") // Fetch default drinks
        .then((res) => res.json())
        .then((data) => {
            displayDrinks(data.drinks);
        })
        .catch((error) => console.error("Error loading drinks:", error));
};

const displayDrinks = (drinks) => {
    const drinksContainer = document.getElementById("drinks-list");

    drinks.forEach((drink) => {
        const div = document.createElement("div");

        div.innerHTML = 
            `<h3>${drink.strDrink}</h3>
            <p>Category: ${drink.strCategory || "Unknown"}</p>
            <p>Instructions: ${drink.strInstructions ? drink.strInstructions.substring(0, 15) : "N/A"}...</p>
            <button onclick="addToGroup('${drink.strDrink}')">Add to Group</button>
            <button onclick="showDetails('${drink.idDrink}')">Details</button>`
        ;

        drinksContainer.appendChild(div);
    });
};