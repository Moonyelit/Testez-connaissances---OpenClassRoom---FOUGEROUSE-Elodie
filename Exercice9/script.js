function checkAge(age) {
    if (age < 18) {
        return "Vous êtes mineur.";
    } else if (age >= 18 && age <= 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}

export default checkAge;

// Tests
console.log(checkAge(15));   // Affiche "Vous êtes mineur."
console.log(checkAge(30));   // Affiche "Vous êtes majeur."
console.log(checkAge(75));   // Affiche "Vous êtes senior."
