// user.js
import { validateEmail } from './utils.js';

class User {
    // 1️ Private properties
    #name;
    #email;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // 2️ Getters and Setters
    get name() {
        return this.#name;
    }

    set name(value) {
        if (value.length < 2) {
            console.log(" Name must be at least 2 characters.");
        } else {
            this.#name = value;
        }
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        if (User.validateEmail(value)) {
            this.#email = value;
        } else {
            console.log(" Invalid email format.");
        }
    }

    // 3️ Static method
    static validateEmail(email) {
        return validateEmail(email);
    }
}

// 4️ Add method using prototype
User.prototype.logActivity = function (activity) {
    console.log(` ${this.name} performed: ${activity}`);
};

export { User };
