document.addEventListener('DOMContentLoaded', () => {
    const inputText = document.querySelector('#input');
    const outputText = document.querySelector('#output');
    const translateBtn = document.querySelector('#translateBtn')
    let langpair = 'uk|en'

    const changeBtn = document.querySelector('#changeBtn');
    changeBtn.addEventListener('click', () => {
        if (langpair === 'uk|en') {
            langpair = 'en|uk';
        } else {
            langpair = 'uk|en';
        }
    });

    async function translateText() {
        const text = inputText.value.trim();
        const safeText = encodeURIComponent(text);
        const email = 'volodymyr.logika@gmail.com'
        const url = `https://api.mymemory.translated.net/get?q=${safeText}&langpair=${langpair}&de=${email}`;

        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        outputText.textContent = data.responseData.translatedText
    }    
    
    translateBtn.addEventListener('click', translateText);

});