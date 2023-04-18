function verifyMajority(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

const valueReturned = verifyMajority(12);
console.log(valueReturned);

verifyMajority(18);
verifyMajority(26);
