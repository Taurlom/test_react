const data = [
    {
        user: {
            avatar: './img/avatars/taurlom.png',
            name: 'Taurlom'
        },
        message: 'React был создан Джорданом Валке, разработчиком программного обеспечения из Facebook. На него',
        time: '10.12.2021'
    },
    {
        user: {
            name: 'Сорокин В.И.'
        },
        message: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.',
        time: '11.12.2021',
        thread: [
            {
                user: {
                    name: 'Петров П.М.'
                },
                message: 'Вы так говорите, как будто это что-то плохое',
                time: '11.13.2021'
            },
            {
                user: {
                    name: 'Васечкин Л.Г.'
                },
                message: 'омг лол',
                time: '11.13.2021',
                thread: [
                    {
                        user: {
                            name: 'Мартин Алексеич'
                        },
                        message: 'Здравствуй дорогой',
                        time: '11.13.2021'
                    },
                ]
            }
        ]
    },
    {
        user: {
            name: 'Петров Р.О.'
        },
        message: 'React-разработка заключается в описании того, что нужно вывести на страницу (а не в составлении ' +
                 'инструкций для браузера, посвящённых тому, как это делать). Это, кроме прочего, означает значительное сокращение объёмов...',
        time: '12.12.2021'
    }
];

export default data;
