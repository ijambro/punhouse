import Category from "../category";

class CategoriesController {
    categories: Map<number, Category>;

    constructor() {
        this.categories = new Map<number, Category>();
        this.load();
    }

    private load(): void {
        this.add(1, "Paw Patrol characters", "Paw Patrol character",
            ["Marshall", "Chase", "Sky", "Zuma", "Rafi", "Rubble", "Ryder"]);
        
        this.add(2, "Friends characters", "Friends character",
            ["Ross", "Joey", "Chandler", "Monica", "Rachael", "Phoebe", "Gunther"]);
        
        console.log("Loaded CategoriesController, printing categories:");
        console.log(this.categories);
        console.log("Printing categories as JSON:");
        console.log(JSON.stringify(this.categories));
    }

    add(id: number, name: string, promptName: string, items: Array<string>) {
        let c = new Category(id, name, promptName);
        c.addItems(items);
        this.categories.set(c.id, c);
    }

    get(id: number): Category | undefined {
        return this.categories.get(id);
    }

    random(): Category {
        let array = Array.from(this.categories.values());
        return array[Math.floor(Math.random() * array.length)];
    }
    
    all(): Array<Category> {
        return Array.from(this.categories.values());
    }
}

export default new CategoriesController();