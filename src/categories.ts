import Category from "./category";

class Categories {
    categories: Array<Category>;

    constructor() {
        this.categories = new Array<Category>();
        this.load();
    }

    load(): void {
        let c = new Category("Paw Patrol characters", "medium");
        c.addItems(["Marshall", "Chase", "Sky", "Zuma", "Rafi", "Rubble", "Ryder"]);
        this.categories.push(c);
        
        c = new Category("Friends characters", "medium");
        c.addItems(["Ross", "Joey", "Chandler", "Monica", "Rachael", "Phoebe", "Gunther"]);
        this.categories.push(c);        
    }

    public random(): Category {
        return this.categories[Math.floor(Math.random() * this.categories.length)];
    }
    
    public all(): Array<Category> {
        return this.categories;
    }
}

export default Categories;