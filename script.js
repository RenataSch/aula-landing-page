class Receita {
    constructor(buttonId, recipeTextId) {
        this.button = document.getElementById(buttonId);
        this.recipeText = document.getElementById(recipeTextId);
        this.init();
    }

    init() {
        this.button.addEventListener('click', () => this.toggleRecipe());
    }

    toggleRecipe() {
        if (this.recipeText.style.display === 'none') {
            this.recipeText.style.display = 'block';  
            this.button.textContent = 'Fechar receita';  
        } else {
            this.recipeText.style.display = 'none';  
            this.button.textContent = 'Abrir receita';  
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Receita('show-recipe', 'recipe-text');  
});
