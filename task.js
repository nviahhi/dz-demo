export class Task {

	constructor (name) {
		this.name = name;
	}

	run() {
		console.log(`running task: ${this.name}`);
	}
}