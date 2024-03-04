document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    // const menuList = document.querySelector('.menu-list');
    const navLinks = document.querySelector('.nav-links');
    const bars = document.querySelectorAll('.bar');
    // console.log("clicked")

    if (hamburgerMenu && navLinks) {
        hamburgerMenu.addEventListener('click', function () {
            console.log('Hamburger menu clicked');
            hamburgerMenu.classList.toggle('active');
            // menuList.classList.toggle('active');
            navLinks.classList.toggle('active');
            bars.forEach(bar => {
                bar.classList.toggle('active');
            });
        });
    }

    const recipe1 = {
        name: 'Recipe: Dynamically Evolving Web Content',
        instructions: [
            'Step 1: Commence by composing a web document and imbuing it with fundamental tags.',
            'Step 2: Introduce a div element with the class "demo" within the body section',
            'Step 3: Add <script> .. </script> tags to the body of the document, just before the </body> tag',
            'Step 4: Use the DOM method, getElementById, to select the div element with the class "demo"',
            'Step 5: Use textContent method to add plain text. You should see when you render the document in the browser.',
            'Step 6: Insert HTML code using the insertAdjacentHTML method. Adjust the style for the "demo" class to have a width and height of 300px. Witness how the content, including HTML tags, is rendered',
            'Step 7: Create new elements using the createElement method, then use appendChild to add them below.'
        ],
        ingredients: [
            'DOM createElement method',
            'appendChild method',
            'CSS styling for dimension adjustments'
        ],
        codeExample: `
        let demoRef = document.getElementById("demo");
        demoRef.textContent = "Recipe: Innovating Web Content Dynamics";
        demoRef.insertAdjacentHTML("beforeend", "<p>Elevate your web presence!</p>");
        demoRef.insertAdjacentHTML("beforeend", "<p>Transform your experience with dynamic elements.</p>");
        demoRef.style.width = "300px";
        demoRef.style.height = "300px";
        
        let newList = document.createElement("ul");
        let listItem1 = document.createElement("li");
        listItem1.textContent = "Elevate your web presence";
        newList.appendChild(listItem1);
        let listItem2 = document.createElement("li");
        listItem2.textContent = "Transform your experience with dynamic elements";
        newList.appendChild(listItem2);
        
        demoRef.appendChild(newList);
        `
    };

    const recipe2 = {
        name: 'Recipe 2: Displaying JSON Data',
        instructions: [
            'JSON stands for JavaScript Object Notation, and it comes close to an array of objects.',
            'It is important to make sure that objects have common attributes if these attributes are being used to display information.',
            'Make sure that the images are referenced correctly, then you can use the techniques in Recipe 1 to display the animals on a web page.'
        ],
        ingredients: [
            'The DOM createElement method',
            'The DOM append method',
            'Array of objects',
            'Choice of images'
        ],
        codeExample: `
            const HerosData = [
                {
                    HeroName: "Thor",
                    age: 1,
                    weightInKilos: 34,
                    pic: "Neemapng"
                },
                {
                    HeroName: "Luck",
                    age: 4,
                    weightInKilos: 33,
                    pic: "images\\Hero.png"
                }
            ];

            const HerosListDiv = document.getElementById('Heros-list');

            HeroData.forEach((Hero) => {
                const HeroDiv = document.createElement('div');
                HeroDiv.classList.add('Hero');
        
                const HeroImage = document.createElement('img');
                HeroImage.src = Hero.pic;
                Hero.alt = Hero.Hero;
        
                const Hero = document.createElement('p');        
                HeroDiv.appendChild(HeroImage);
                peHeroDiv.appendChild(peHeroInfo);
        
                HerosListDiv.appendChild(HeroDiv);
            });
        </script>
        `
    };

    const recipe3 = {
        name: 'Recipe 3: Finding JSON Data',
        instructions: [
            'Utilize either the find method (returns the first element) or a combination of some type of iteration and find to filter the data.',
        ],
        ingredients: [
            'The Array forEach method',
            'The console.log method for displaying the filtered results.            ',
            'Parameters specifying the species and minimum age criteria for filtering.            '
        ],
        codeExample: `
        // Define a function to filter pets based on specified criteria
        function filterPets(pets, species, minAge) {
            return pets.filter(pet => pet.breed.toLowerCase() === species.toLowerCase() && pet.age > minAge);
        }
        
        // Example usage:
        const filteredPets = filterPets(petsData, "dog", 2);
        console.log(filteredPets);
        
        `
    };

    const recipes = [recipe1, recipe2, recipe3];

    function generateRecipeHTML(recipe) {
        let html = `<h2>${recipe.name}</h2>`;
        if (recipe.instructions) {
            html += '<h3>Instructions:</h3><ul>';
            recipe.instructions.forEach(instruction => {
                html += `<li>${instruction}</li>`;
            });
            html += '</ul>';
        }
        if (recipe.ingredients) {
            html += '<h3>Ingredients:</h3><ul>';
            recipe.ingredients.forEach(ingredient => {
                html += `<li>${ingredient}</li>`;
            });
            html += '</ul>';
        }
        if (recipe.codeExample) {
            html += '<h3>Code Example:</h3><pre>';
            html += recipe.codeExample;
            html += '</pre>';
        }
        return html;
    }

    recipes.forEach((recipe, index) => {
        const recipeContent = document.querySelector(`#recipe${index + 1}`);
        recipeContent.innerHTML = generateRecipeHTML(recipe);
    });
});