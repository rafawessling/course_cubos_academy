const ticket = true;
const censure = 16;
const age = 12;
const parents = true;

if (ticket) {
    if (age >= censure || parents) {
        console.log('Allowed to watch the movie.');
    } else {
        console.log('Not allowed to watch the movie.');
    }
} else {
    console.log('Not allowed to watch the movie.');
}
