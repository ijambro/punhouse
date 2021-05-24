type Difficulty = "easy" | "medium" | "hard";

class Category {
    public id: number;
    public name: string | undefined;
    public promptName: string | undefined;
    private items: Set<string>;

    constructor(id: number, name: string, promptName: string) {
        this.id = id;
        this.name = name;
        this.promptName = promptName;
        this.items = new Set<string>();
    }

    addItems(itemsToAdd: Array<string>) {
        for (let i of itemsToAdd) {
            this.items.add(i);
        }
    }

    hasItem(item: string): boolean {
        return this.items.has(item);
    }

    size(): number {
        return this.items.size;
    }

    getDifficulty(): Difficulty {
        if (this.items.size < 4) {
            return "hard";
        } else if (this.items.size < 8) {
            return "medium";
        } else {
            return "easy";
        }
    }
}

export default Category;
export const fieldsToInclude = ["id", "name"];