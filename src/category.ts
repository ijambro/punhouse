type Difficulty = "easy" | "medium" | "hard";

export default class Category {
    public name: string | undefined;
    public promptName: string | undefined;
    public items: Set<string>;

    constructor(name: string, promptName: string) {
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