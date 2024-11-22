function reverseNumber() {
    const number = document.getElementById('number').value;
    const reversed = number.split('').reverse().join('');
    document.getElementById('result').innerText = `Reversed Number: ${reversed}`;
}
