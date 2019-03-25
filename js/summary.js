const summaries = [
    {
        title: 'Обо мне',
        text: '<strong>Место жительства:</strong> Киев\n' +
            '<br>' +
            '<strong>Дата рождения:</strong> 23.10.1995\n' +
            '<br>' +
            '<strong>Образование:</strong> высшее\n' +
            '<br>' +
            '<strong>Пол:</strong> женский\n' +
            '<br>' +
            '<strong>Семейное положение:</strong> не замужем\n' +
            '<br>' +
            '<strong>Телефон:</strong> +38 (097) 543-50-14; +38 (093) 386-55-15\n' +
            '<br>' +
            '<strong>Почтовый адрес:</strong> listen_my_voice@ukr.net' +
            '<br>'
    },
    {
        title: 'Опыт работы',
        text: '<strong><u><p>ООО "ФК Тандем-Финанс"</p></u></strong>' +
            '<br>' +
            '<strong>01.11.2016г. - 01.01.2017</strong>' +
            '<br>' +
            'Дежурный информационно-справочного отдела' +
            '<p></p>' +
            '<br>' +
            '<strong>01.01.2017г. - 15.03.2019</strong>' +
            '<br>' +
            'Инженер информационно-телекомуникационных систем'
    },
    {
        title: 'Образование', 
        text: '<strong><u>2010-2014г.</u></strong>' +
            '<br>' +
            'Частное высшее учебное заведение «Экономико-правовой техникум при Межрегиональной Академии управления персоналом»\n' +
            '<br>' +
            '<strong>Специальность:</strong> разработка программного обеспечения\n' +
            '<br>' +
            '<strong>Квалификация:</strong> техник-программист\n' +
            '<br>' +
            '<p><strong>Степень :</strong> младший специалист</p>\n' +
            '<br>' +
            '<strong><u>2014-2016г.</u></strong>' +
            '<br>' +
            '«Институт компьютерно-информационных технологий в Межрегиональной Академии управления персоналом»\n' +
            '<br>' +
            '<strong>Факультет:</strong> программная инженерия \n' +
            '<br>' +
            '<strong>Специальность:</strong> прикладное программирование (интегрировано с программой Microsoft)\n' +
            '<br>' +
            '<p><strong>Степень :</strong> Бакалавр</p>\n' +
            '<br>' +
            '<strong><u>2016-2017г.</u></strong>' +
            '<br>' +
            '«Институт компьютерно-информационных технологий в Межрегиональной Академии управления персоналом»\n' +
            '<br>' +
            '<strong>Специализация:</strong> Сетевые технологии и системное администрирование (интегрировано с программой Microsoft и Cisco)\n' +
            '<br>' +
            '<strong>Специальность:</strong>  инженерия программного обеспечения\n' +
            '<br>' +
            '<strong>Образовательно-квалификационный уровень:</strong> Специалист (с отличием)\n'
    },
    {
        title: 'Плюшки',
        text: '<ul>' +
            '<li>Умение легко находить контакт с людьми</li>' +
            '<li>Уверенность в себе</li>' +
            '<li>Активная жизненная позиция</li>' +
            '<li>Умение добиваться поставленных целей</li>' +
            '<li>Креативное мышление</li>\n' +
            '<li>Внимательность к деталям</li>' +
            '<li>Готовность самостоятельно принимать решения</li>\n' +
            '<li>Умение работать в команде</li> \n' +
            '<li>Стремление к профессиональному развитию</li>' +
            '<li>Инициативность </li>\n' +
            '</ul>'
    }
];  

window.addEventListener('load', loadSummary);

function loadSummary() {
    const summariesContainer = document.getElementById('summaries_container');
    for(let i = 0; i < summaries.length; i++) {
    const summary = summaries[i];
    const htmlRpw = `
    <div class="row">
        <div class="col">
            <div class="smry">
                <span>${summary.title}</span>
            </div>
            <span class="smry-text">${summary.text}</span>
            <hr>
        </div>
    </div>
    `;
    const row = document.createElement('section');
    row.innerHTML = htmlRpw;
    summariesContainer.appendChild(row);
}
}