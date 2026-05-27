import schoolboyMain from "../assets/images/persons/schoolboy/main.png";
import schoolboyHello from "../assets/images/persons/schoolboy/hello.png";
import schoolboySadness from "../assets/images/persons/schoolboy/sadness.png";

import locationBackgroundMain from "../assets/images/city/locations/main.jpg";

import olympicCenterMain from "../assets/images/city/buildings/olympic-center/main.png";
import olympicCenterActive from "../assets/images/city/buildings/olympic-center/active.png";
import olympicCenterComplete from "../assets/images/city/buildings/olympic-center/complete.png";
import olympicCenterBackground from "../assets/images/city/locations/olympic-center/main.png";
import olympicCenterErrorBackground from "../assets/images/city/locations/olympic-center/error.png";
import olympicCenterCompleteBackground from "../assets/images/city/locations/olympic-center/complete.png";

import academyMain from "../assets/images/city/buildings/academy/main.png";
import academyActive from "../assets/images/city/buildings/academy/active.png";
import academyComplete from "../assets/images/city/buildings/academy/complete.png";
import academyBackground from "../assets/images/city/locations/academy/main.png";
import academyErrorBackground from "../assets/images/city/locations/academy/error.png";
import academyCompleteBackground from "../assets/images/city/locations/academy/complete.png";

import careerCenterMain from "../assets/images/city/buildings/career-center/main.png";
import careerCenterActive from "../assets/images/city/buildings/career-center/active.png";
import careerCenterComplete from "../assets/images/city/buildings/career-center/complete.png";

import globalAreaMain from "../assets/images/city/buildings/global-area/main.png";
import globalAreaActive from "../assets/images/city/buildings/global-area/active.png";
import globalAreaComplete from "../assets/images/city/buildings/global-area/complete.png";

export type PersonId = "schoolboy";

export type LocationId =
    | "olympic-center"
    | "academy"
    | "career-center"
    | "global-area";

export type ReplyData = {
    image: string;
    title?: string;
    text?: string;
    action?: string;
    button?: {
        type: "default" | "row";
        text: string;
    };
};

export type PersonData = {
    id: PersonId;
    name: string;
    role: string;
    image: string;
    replies: {
        align: "left" | "right";
        start: ReplyData[];
        lockedLocation: ReplyData;
    };
    locations: LocationId[];
};

export type LocationData = {
    id: LocationId;
    title: string;
    subtitle: string;
    position: [number, number];
    baloon: {
        position: [number, number];
    };
    images: {
        building: {
            main: string;
            active: string;
            complete: string;
        };
        background: {
            main: string;
            error?: string;
            complete?: string;
        };
    };
};

export type AppData = {
    persons: PersonData[];
    locations: LocationData[];
};

const data: AppData = {
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
                        title: "Привет, давай знакомиться!",
                        text: "Меня зовут Артем, я учусь в 10-м классе. Помогу тебе освоиться в городе",
                        button: {
                            type: "row",
                            text: "Привет",
                        },
                        image: schoolboyHello,
                    },
                    {
                        title: "Город Содружества - это реальный шанс повлиять на свое будущее",
                        text: "Ты можешь узнать больше об интересных профессиях, повысить свои шансы на поступление в известные вузы и стать частью международного движения в сфере финансовой безопасности",
                        button: {
                            type: "row",
                            text: "Отправиться в город",
                        },
                        image: schoolboyMain,
                    },
                    {
                        text: "На карте есть 4 локации, в которые ты можешь отправиться.\n**Выбирай, что тебе интересно!**",
                        action: "Нажми на здание, чтобы начать",
                        image: schoolboyMain,
                    },
                    {
                        title: "Жми на следующую локацию",
                        action: "Нажми на здание, чтобы начать",
                        image: schoolboyMain,
                    },
                ],
                lockedLocation: {
                    title: "Увы, эта локация пока закрыта",
                    text: "Давай вернемся к тем местам, которые сейчас доступны",
                    action: "Выбери другое здание на карте",
                    image: schoolboySadness,
                },
            },
            locations: [
                "olympic-center",
                "academy",
                "career-center",
                "global-area",
            ],
        },
    ],
    locations: [
        {
            id: "olympic-center",
            title: "Олимпиадный центр",
            subtitle: "Получай дополнительные баллы для поступления в вузы",
            position: [1252, 275],
            baloon: {
                position: [120, -65],
            },
            images: {
                building: {
                    main: olympicCenterMain,
                    active: olympicCenterActive,
                    complete: olympicCenterComplete,
                },
                background: {
                    main: olympicCenterBackground,
                    error: olympicCenterErrorBackground,
                    complete: olympicCenterCompleteBackground,
                },
            },
        },
        {
            id: "academy",
            title: "Академия",
            subtitle: "Прокачай знания в сфере финансовой безопасности",
            position: [926, 158],
            baloon: {
                position: [161, -100],
            },
            images: {
                building: {
                    main: academyMain,
                    active: academyActive,
                    complete: academyComplete,
                },
                background: {
                    main: academyBackground,
                    error: academyErrorBackground,
                    complete: academyCompleteBackground,
                },
            },
        },
        {
            id: "career-center",
            title: "Карьерный центр",
            subtitle: "Поможем выбрать профессию, вуз и направление",
            position: [681, 57],
            baloon: {
                position: [27, -20],
            },
            images: {
                building: {
                    main: careerCenterMain,
                    active: careerCenterActive,
                    complete: careerCenterComplete,
                },
                background: {
                    main: locationBackgroundMain,
                },
            },
        },
        {
            id: "global-area",
            title: "Глобальная площадь",
            subtitle: "Присоединяйся к международному движению",
            position: [566, 329],
            baloon: {
                position: [140, -83],
            },
            images: {
                building: {
                    main: globalAreaMain,
                    active: globalAreaActive,
                    complete: globalAreaComplete,
                },
                background: {
                    main: locationBackgroundMain,
                },
            },
        },
    ],
};

export default data;
