// data.ts
import schoolboyMain from "../assets/images/persons/schoolboy/main.png";
// import expertMain from "../assets/images/persons/expert/main.png";

import olympicCenterMain from "../assets/images/city/buildings/olympic-center/main.png";
import olympicCenterActive from "../assets/images/city/buildings/olympic-center/active.png";
import olympicCenterComplete from "../assets/images/city/buildings/olympic-center/complete.png";
import olympicCenterBackgroundMain from "../assets/images/city/locations/main.jpg";

// import academyMain from "../assets/images/city/buildings/academy/main.png";
// import academyActive from "../assets/images/city/buildings/academy/active.png";
// import academyComplete from "../assets/images/city/buildings/academy/complete.png";

// import careerCenterMain from "../assets/images/city/buildings/career-center/main.png";
// import careerCenterActive from "../assets/images/city/buildings/career-center/active.png";
// import careerCenterComplete from "../assets/images/city/buildings/career-center/complete.png";

// import globalAreaMain from "../assets/images/city/buildings/global-area/main.png";
// import globalAreaActive from "../assets/images/city/buildings/global-area/active.png";
// import globalAreaComplete from "../assets/images/city/buildings/global-area/complete.png";

import schoolboyHello from "../assets/images/persons/schoolboy/hello.png";
import schoolboySadness from "../assets/images/persons/schoolboy/sadness.png";

export interface Data {
    data: {
        persons: {
            id: string;
            name: string;
            role: string;
            image: string;
            replies: {
                align: "left" | "right";
                start: {
                    image: string;
                    title?: string;
                    text?: string;
                    button?: {
                        type: "default" | "row";
                        text: string;
                    };
                    action?: string;
                }[];
            };
            locations: string[];
        }[];
        locations: {
            id: string;
            title: string;
            subtitle: string;
            position: number[];
            images: {
                building: {
                    main: string;
                    active: string;
                    complete: string;
                };
                background: {
                    main: string;
                };
            };
            baloon: {
                position: number[];
            };
            start: {
                [key: string]: {
                    reply: {
                        image: string;
                        text: string;
                    };
                    card: {
                        width: number;
                        position: "bottom-left" | "bottom-right";
                        blocks: any[];
                    };
                };
            };
        }[];
    };
}

const data: Data = {
    data: {
        persons: [
            {
                id: "schoolboy",
                name: "Артем",
                role: "Школьник",
                image: schoolboyMain,
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
                locations: ["olympic-center"],
            },
            // {
            //     id: "expert",
            //     role: "Эксперт",
            //     name: "Екатерина",
            //     image: expertMain,
            //     replies: {
            //         align: "right",
            //         start: [
            //             {
            //                 title: "Приветствую, рада знакомству!",
            //                 text: "Меня зовут Екатерина, я эксперт в области финансовой безопасности. Помогу вам освоиться в городе",
            //                 button: {
            //                     type: "row",
            //                     text: "Здравствуйте",
            //                 },
            //                 image: expertMain,
            //             },
            //             {
            //                 text: "В Городе Содружества вас ждут инструменты для публикации вашего экспертного контента, выступлений на мероприятиях и профессионального нетворкинга. Здесь можно делиться разборами, вести дискуссии, находить партнёров и заказчиков.  А ещё — участвовать в международных проектах и заявлять о своей экспертизе на глобальном уровне",
            //                 button: {
            //                     type: "row",
            //                     text: "Отправиться в город",
            //                 },
            //                 image: expertMain,
            //             },
            //             {
            //                 text: "На карте есть 4 локации, в которые ты можешь отправиться. *Выбирай, что тебе интересно!*",
            //                 action: "Нажмите на здание, чтобы начать",
            //                 image: expertMain,
            //             },
            //             {
            //                 title: "Жми на следующую локацию",
            //                 action: "Нажмите на здание, чтобы начать",
            //                 image: expertMain,
            //             },
            //             {
            //                 title: "Увы, эта локация закрыта",
            //                 text: "Давай вернёмся к тем, которые будут для тебя полезны",
            //                 action: "Нажмите на здание, чтобы начать",
            //                 image: expertMain,
            //             },
            //         ],
            //     },
            //     locations: [],
            // },
        ],
        locations: [
            {
                id: "olympic-center",
                title: "Олимпиадный центр",
                subtitle: "Получай дополнительные баллы для поступления в вузы",
                position: [1252, 275],
                images: {
                    building: {
                        main: olympicCenterMain,
                        active: olympicCenterActive,
                        complete: olympicCenterComplete,
                    },
                    background: {
                        main: olympicCenterBackgroundMain,
                    },
                },
                baloon: {
                    position: [120, -65],
                },
                start: {
                    schoolboy: {
                        reply: {
                            image: schoolboyMain,
                            text: "В Олимпиадном центре каждый год проходит Международная Олимпиада по финансовой безопасности",
                        },
                        card: {
                            width: 925,
                            position: "bottom-right",
                            blocks: [
                                {
                                    type: "text",
                                    text: "Для этого на сайте нужно пройти несколько этапов:",
                                },
                            ],
                        },
                    },
                },
            },
            // {
            //     id: "academy",
            //     title: "Академия",
            //     subtitle:
            //         "Прокачай свои знания в сфере финансовой безопасности. И не только!",
            //     position: [926, 158],
            //     images: {
            //         building: {
            //             main: academyMain,
            //             active: academyActive,
            //             complete: academyComplete,
            //         },
            //     },
            //     baloon: {
            //         position: [161, -121],
            //     },
            // },
            // {
            //     id: "career-center",
            //     title: "Карьерный центр",
            //     subtitle:
            //         "Поможем выбрать профессию, вуз и понять, куда двигаться дальше",
            //     position: [681, 57],
            //     images: {
            //         building: {
            //             main: careerCenterMain,
            //             active: careerCenterActive,
            //             complete: careerCenterComplete,
            //         },
            //     },
            //     baloon: {
            //         position: [27, -40],
            //     },
            // },
            // {
            //     id: "global-area",
            //     title: "Глобальная площадь",
            //     subtitle:
            //         "Здесь можно присоединиться к международному движению по финансовой безопасности",
            //     position: [566, 329],
            //     images: {
            //         building: {
            //             main: globalAreaMain,
            //             active: globalAreaActive,
            //             complete: globalAreaComplete,
            //         },
            //     },
            //     baloon: {
            //         position: [140, -83],
            //     },
            // },
        ],
    },
};

export default data;
