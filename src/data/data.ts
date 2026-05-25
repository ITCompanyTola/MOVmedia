// data.ts
import schoolboyMain from "../assets/images/persons/schoolboy/main.png";
import studentMain from "../assets/images/persons/student/main.png";
import expertMain from "../assets/images/persons/expert/main.png";
import representativeMain from "../assets/images/persons/representative/main.png";

import olympicCenterMain from "../assets/images/city/buildings/olympic-center/main.png";
import olympicCenterActive from "../assets/images/city/buildings/olympic-center/active.png";
import olympicCenterComplete from "../assets/images/city/buildings/olympic-center/complete.png";

import schoolboyHello from "../assets/images/persons/schoolboy/hello.png";
import schoolboySadness from "../assets/images/persons/schoolboy/sadness.png";

const data = {
    data: {
        persons: [
            {
                id: "schoolboy",
                name: "Артем",
                role: "Школьник",
                images: {
                    main: schoolboyMain,
                },
                replies: {
                    align: "left",
                    start: [
                        {
                            title: "Привет, давай знакомиться! ",
                            text: "Меня зовут Артём, я учусь в 10-м классе. Помогу тебе освоиться в городе",
                            button: {
                                type: "row",
                                text: "Привет",
                            },
                            image: schoolboyHello,
                        },
                        {
                            title: "Город Содружества — это реальный шанс повлиять на своё будущее",
                            text: "Ты можешь узнать больше об интересных профессиях, повысить свои шансы на поступление в известные вузы и стать частью международного движения в сфере финансовой безопасности",
                            button: {
                                type: "row",
                                text: "Отправиться в город",
                            },
                            image: schoolboyMain,
                        },
                        {
                            text: "На карте есть 4 локации, в которые ты можешь отправиться. *Выбирай, что тебе интересно!*",
                            action: "Нажми на здание, чтобы начать",
                            image: schoolboyMain,
                        },
                        {
                            title: "Жми на следующую локацию",
                            action: "Нажми на здание, чтобы начать",
                            image: schoolboyMain,
                        },
                        {
                            title: "Увы, эта локация закрыта",
                            text: "Давай вернёмся к тем, которые будут для тебя полезны",
                            action: "Нажми на здание, чтобы начать",
                            image: schoolboySadness,
                        },
                    ],
                },
                locations: ["olympik-center"],
            },
            {
                id: "student",
                role: "Студент",
                name: "Диана",
                images: {
                    main: studentMain,
                },
            },
            {
                id: "expert",
                role: "Эксперт",
                name: "Екатерина",
                images: {
                    main: expertMain,
                },
                replies: {
                    align: "right",
                    start: [
                        {
                            title: "Приветствую, рада знакомству!",
                            text: "Меня зовут Екатерина, я эксперт в области финансовой безопасности. Помогу вам освоиться в городе",
                            button: {
                                type: "row",
                                text: "Здравствуйте",
                            },
                            image: expertMain,
                        },
                        {
                            text: "В Городе Содружества вас ждут инструменты для публикации вашего экспертного контента, выступлений на мероприятиях и профессионального нетворкинга. Здесь можно делиться разборами, вести дискуссии, находить партнёров и заказчиков.  А ещё — участвовать в международных проектах и заявлять о своей экспертизе на глобальном уровне",
                            button: {
                                type: "row",
                                text: "Отправиться в город",
                            },
                            image: expertMain,
                        },
                        {
                            text: "На карте есть 4 локации, в которые ты можешь отправиться. *Выбирай, что тебе интересно!*",
                            action: "Нажмите на здание, чтобы начать",
                            image: expertMain,
                        },
                        {
                            title: "Жми на следующую локацию",
                            action: "Нажмите на здание, чтобы начать",
                            image: expertMain,
                        },
                        {
                            title: "Увы, эта локация закрыта",
                            text: "Давай вернёмся к тем, которые будут для тебя полезны",
                            action: "Нажмите на здание, чтобы начать",
                            image: expertMain,
                        },
                    ],
                },
            },
            {
                id: "representative",
                role: "Представитель вуза",
                name: "Алексей",
                images: {
                    main: representativeMain,
                },
            },
        ],
        location: {
            id: "olympik-center",
            title: "Олимпиадный центр",
            subtitle: "Получай дополнительные баллы для поступления в вузы",
            position: [100, 100],
            images: {
                building: {
                    main: olympicCenterMain,
                    active: olympicCenterActive,
                    complete: olympicCenterComplete,
                },
            },
        },
    },
};

export default data;
