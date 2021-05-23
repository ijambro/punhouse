
type Difficulty = "easy" | "medium" | "hard";

// interface Category {
//     name: string,
//     level: Difficulty,
//     items: Set<string>
// }

class Category {
    public name: string | undefined;
    public level: Difficulty | undefined;
    public items: Set<string>;

    constructor(name: string, level: Difficulty) {
        this.name = name;
        this.items = new Set<string>();
    }

    addItems(itemsToAdd: Array<string>) {
        for (let i in itemsToAdd) {
            this.items.add(i);
        }
    }
}

export default Category;