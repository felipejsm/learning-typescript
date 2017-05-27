interface IComponent {
	getId() : string;
}
class Button implements IComponent {
	id: string;
	getId(): string {
		return 	this.id;
	}
}
