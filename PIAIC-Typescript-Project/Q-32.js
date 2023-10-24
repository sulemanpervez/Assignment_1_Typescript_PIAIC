"use strict";
let current_users = ['John', 'Alice', 'Bob', 'Charlie', 'David'];
let new_users = ['Mike', 'john', 'Sarah', 'Jessica', 'bob'];
for (let new_user of new_users) {
    let is_username_taken = false;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            is_username_taken = true;
            break;
        }
    }
    if (is_username_taken) {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    }
    else {
        console.log(`Congratulations, ${new_user} is available!`);
    }
}
