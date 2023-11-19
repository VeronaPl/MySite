let phrases = [
    { 'text_0': 'Frontend Developer', 'text_1': 'ЦЦК ЭМИТ (1,5 года) и по итогу: создан текущий персональный сайт', 'text_2': 'РАНХиГС при Президенте РФ (2021-2025)', 'text_3': 'Python, C#, HTML, CSS, JavaScript, Go, Git, ООП, Figma, Adobe Photoshop, Adobe Illustrator', image: 'https://sun9-65.userapi.com/impf/RPdkTsyAv3Cr6t2gAFNPYWBCw5bA5ETv47NS3w/LGkcS5hhcDw.jpg?size=960x1280&quality=95&sign=8ecd1a4f584f2c563c23f4c72ecb73a2&type=album' },
    { 'text_0': 'Вице-Мисс ЭМИТ', 'text_1': 'Подготовка к ММ ЭМИТ (1 месяц) и по итогу: получился достойный номер', 'text_2': 'Такому не учат, с этим нужно родиться', 'text_3': 'Придумываю хореографию даже во сне; кринжую в любой непонятной ситуации', image: 'https://sun9-56.userapi.com/impf/9X2ZPdCjLxBa7W6P0Jt0HiBpj2tH9VMRawztbg/1DHoWj7pBmA.jpg?size=1080x1350&quality=95&sign=7d45d1d54a653f63128cf5477619f843&type=album' },
    { 'text_0': 'ГРГ Дня Знаний', 'text_1': 'Подготовка к мероприятию (2 месяца) и по итогу: организовала мероприятие на 1000 человек', 'text_2': 'Даже на школе ГРГ не готовят к этому', 'text_3': 'Организованность и генерация кринжовых идей; умение строить стротегии', image: 'https://sun9-50.userapi.com/impf/yfIPvXNPPsOeD5Et6xYCP1hXmlHWkgnf-ecdkQ/mYxXwFGUck8.jpg?size=960x1200&quality=95&sign=a31ce7fe2a23fd3e91abb5a0c216a619&type=album' },
    { 'text_0': 'Член ЦЦК ЭМИТ', 'text_1': 'Техник на мероприятиях и разработчик текущего сайта', 'text_2': 'ПИ ЭМИТ (2021-2025)', 'text_3': 'Научилась дизайнить пока отбиралась в ЦЦК разработчиком; \n научилась быть техником за пару минут до мероприятия; \n верстала не только сайты, но письма; \n разрабатывала ботов-автоматизаторов как в вк, так и в тг', image: 'https://sun9-84.userapi.com/impf/ULBJ6AjpFNknVAINNoi4hl0yRY5WfTtiVZnRVA/ckOFehME2S8.jpg?size=960x1280&quality=95&sign=243385214615367ac7c63f70f090d2fc&type=album' },
    { 'text_0': 'Tech Crew', 'text_1': 'Техник по звуку, видео и по свету (5/5; БАЗ)', 'text_2': 'Техник - это не профессия, а призвание', 'text_3': 'Импровизирую без ТЗ; знаю, что значит "свет как небо и асфальт", "центр перешёл в центр"', image: 'https://sun9-82.userapi.com/impf/Ypgmav5dmeSDbspoNhNpYBaxKbo9ASmX4mxewA/iwml4X3VmmY.jpg?size=1564x1600&quality=95&sign=6915e8f673107ed13484769b41b67f59&type=album' },
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let advice = document.querySelector('.advice');
let phrase_1 = document.querySelector('.phrase_1');
let phrase_2 = document.querySelector('.phrase_2');
let phrase_3 = document.querySelector('.phrase_3');
let phrase_4 = document.querySelector('.phrase_4');
let image = document.querySelector('.image');

button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase_1, 'textContent', randomElement['text_0']);
    smoothly(phrase_2, 'textContent', randomElement['text_1']);
    smoothly(phrase_3, 'textContent', randomElement['text_2']);
    smoothly(phrase_4, 'textContent', randomElement['text_3']);
    smoothly(image, 'src', randomElement.image);
    if (randomElement['text_3'].length > 300) {
        advice.style.fontSize = '14px';
    } else {
        advice.style.fontSize = '16px';
    }
});

for (let i = 0; i < 4; i++) {
    smoothly(phrase_1, 'textContent', phrases[i]['text_0']);
    smoothly(phrase_2, 'textContent', phrases[i]['text_1']);
    smoothly(phrase_3, 'textContent', phrases[i]['text_2']);
    smoothly(phrase_4, 'textContent', phrases[i]['text_3']);
    smoothly(image, 'src', phrases[i].image);
}
