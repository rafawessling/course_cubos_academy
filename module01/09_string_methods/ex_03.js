function printDate(day, month, year) {
    const updatedDay = String(day).padStart(2, '0');
    const updatedMonth = String(month).padStart(2, '0');

    console.log(`${updatedDay}/${updatedMonth}/${year}`);
}

printDate(1, 1, 2021);
