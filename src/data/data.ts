import schoolboyWelcome from "../assets/images/persons/schoolboy/welcome.png";
import schoolboyMain from "../assets/images/persons/schoolboy/main.png";
import schoolboyHello from "../assets/images/persons/schoolboy/hello.png";
import schoolboySadness from "../assets/images/persons/schoolboy/sadness.png";
import schoolboyFinal from "../assets/images/persons/schoolboy/final.png";

import studentWelcome from "../assets/images/persons/student/welcome.png";
import studentMain from "../assets/images/persons/student/main.png";
import studentHello from "../assets/images/persons/student/hello.png";
import studentSpeak from "../assets/images/persons/student/speak.png";
import studentThink from "../assets/images/persons/student/think.png";
import studentFinal from "../assets/images/persons/student/final.png";

import expertWelcome from "../assets/images/persons/expert/welcome.png";
import expertMain from "../assets/images/persons/expert/main.png";
import expertHello from "../assets/images/persons/expert/hello.png";
import expertSadness from "../assets/images/persons/expert/sadness.png";
import expertTalk from "../assets/images/persons/expert/talk.png";
import expertNotBottom from "../assets/images/persons/expert/not-bottom.png";

import representativeMain from "../assets/images/persons/representative/main.png";
import representativeWelcome from "../assets/images/persons/representative/welcome.png";
import representativeNotBottom from "../assets/images/persons/representative/not-bottom.png";
import representativeTalk from "../assets/images/persons/representative/talk.png";

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
import careerCenterBackground from "../assets/images/city/locations/career-center/main.png";

import globalAreaMain from "../assets/images/city/buildings/global-area/main.png";
import globalAreaActive from "../assets/images/city/buildings/global-area/active.png";
import globalAreaComplete from "../assets/images/city/buildings/global-area/complete.png";
import globalAreaBackground from "../assets/images/city/locations/global-area/main.png";

import posterSquareBackgroundError from "../assets/images/city/locations/poster-square/error.jpg";

import memberProfileMain from "../assets/images/city/buildings/member-profile/main.png";
import memberProfileActive from "../assets/images/city/buildings/member-profile/active.png";
import memberProfileComplete from "../assets/images/city/buildings/member-profile/complete.png";
import memberProfileBackground from "../assets/images/city/locations/member-profile/background.png";

import libraryMain from "../assets/images/city/buildings/library/main.png";
import libraryActive from "../assets/images/city/buildings/library/active.png";
import libraryComplete from "../assets/images/city/buildings/library/complete.png";

import mediaCenterMain from "../assets/images/city/buildings/media-center/main.png";
import mediaCenterActive from "../assets/images/city/buildings/media-center/active.png";
import mediaCenterComplete from "../assets/images/city/buildings/media-center/complete.png";

import spaceCommonwealthMain from "../assets/images/city/buildings/space-commonwealth/main.png";
import spaceCommonwealthActive from "../assets/images/city/buildings/space-commonwealth/active.png";
import spaceCommonwealthComplete from "../assets/images/city/buildings/space-commonwealth/complete.png";
import spaceCommonwealthBackground from "../assets/images/city/locations/space-commonwealth/main.png";

import posterSquareMain from "../assets/images/city/buildings/poster-square/main.png";
import posterSquareActive from "../assets/images/city/buildings/poster-square/active.png";
import posterSquareComplete from "../assets/images/city/buildings/poster-square/complete.png";
import posterSquareBackground from "../assets/images/city/locations/poster-square/main.png";

import locationBackground from "../assets/images/city/locations/main.jpg";

export type PersonId = "schoolboy" | "student" | "expert" | "representative";

export type LocationId =
    | "olympic-center"
    | "academy"
    | "career-center"
    | "global-area"
    | "poster-square"
    | "space-commonwealth"
    | "media-center"
    | "library"
    | "member-profile";

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
    welcome: string;
    replies: {
        align: "left" | "right";
        start: ReplyData[];
        lockedLocation: ReplyData;
        final: ReplyData;
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
            welcome: schoolboyWelcome,
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
                        text: "**Жми на следующую локацию**",
                        action: "Нажми на здание, чтобы начать",
                        image: schoolboyMain,
                    },
                ],
                lockedLocation: {
                    text: "**Увы, эта локация пока закрыта**\nДавай вернемся к тем местам, которые сейчас доступны",
                    action: "Выбери другое здание на карте",
                    image: schoolboySadness,
                },
                final: {
                    title: "Получи свой стильный мерч в качестве бонуса!",
                    text: "Хочешь ещё больше крутых возможностей? Заходи на сайт платформы Содружество.\n\nОтсканируй QR‑код, зарегистрируйся \n **и получи стильный мерч**",
                    image: schoolboyFinal,
                },
            },
            locations: [
                "olympic-center",
                "academy",
                "career-center",
                "global-area",
            ],
        },
        {
            id: "student",
            name: "Диана",
            role: "Студент",
            image: studentMain,
            welcome: studentWelcome,
            replies: {
                align: "right",
                start: [
                    {
                        title: "Привет!",
                        text: `Я Диана, учусь в университете на специалиста по управлению рисками\n**Помогу тебе здесь освоиться!**`,
                        button: {
                            type: "row",
                            text: "Привет",
                        },
                        image: studentHello,
                    },
                    {
                        text: "В Городе Содружества ты можешь найти стажировку, прокачать навыки через обучение, поучаствовать в проектах с экспертами и найти единомышленников по всему миру",
                        button: {
                            type: "row",
                            text: "Отправиться в город",
                        },
                        image: studentMain,
                    },
                    {
                        text: `На карте есть 6 локаций, в которые ты можешь отправиться.\n**Выбирай, что тебе интересно!**`,
                        action: "Нажми на здание, чтобы начать",
                        image: studentSpeak,
                    },
                    {
                        text: "**Жми на следующую локацию**",
                        action: "Нажми на здание, чтобы начать",
                        image: studentMain,
                    },
                ],
                lockedLocation: {
                    text: "**Увы, эта локация пока закрыта**\nДавай вернемся к тем местам, которые сейчас доступны",
                    action: "Выбери другое здание на карте",
                    image: studentThink,
                },
                final: {
                    image: studentFinal,
                    title: "Получи свой стильный мерч в качестве бонуса!",
                    text: "Хочешь ещё больше крутых возможностей? Заходи на сайт платформы Содружество. \n\n Отсканируй QR\u2011код, зарегистрируйся\n**и получи стильный мерч**",
                },
            },
            locations: [
                "academy",
                "global-area",
                "member-profile",
                "poster-square",
                "space-commonwealth",
                "olympic-center",
            ],
        },
        {
            id: "expert",
            name: "Екатерина",
            role: "Эксперт",
            image: expertMain,
            welcome: expertWelcome,
            replies: {
                align: "right",
                start: [
                    {
                        title: "Приветствую, рада знакомству!",
                        text: `Меня зовут Екатерина, я эксперт в области финансовой безопасности.\n**Помогу вам освоиться в городе**`,
                        button: {
                            type: "row",
                            text: "Здравствуйте",
                        },
                        image: expertHello,
                    },
                    {
                        title: "",
                        text: `В Городе Содружества вас ждут инструменты для публикации вашего экспертного контента, выступлений на мероприятиях и профессионального нетворкинга.\n\nЗдесь можно делиться разборами, вести дискуссии, находить партнёров и заказчиков.\n\nА ещё — участвовать в международных проектах и заявлять о своей экспертизе на глобальном уровне`,
                        button: {
                            type: "row",
                            text: "Отправиться в город",
                        },
                        image: expertMain,
                    },
                    {
                        text: `На карте есть 4 локации, в которые вы можете отправиться.\n**Выбирайте, что вам интересно!**`,
                        action: "Нажмите на здание, чтобы начать",
                        image: expertTalk,
                    },
                    {
                        text: "**Жмите на следующую локацию**",
                        action: "Нажмите на здание, чтобы начать",
                        image: expertNotBottom,
                    },
                ],
                lockedLocation: {
                    text: "**Увы, эта локация закрыта**\nДавайте вернёмся к тем, которые будут для вас полезны",
                    action: "Нажмите на здание, чтобы начать",
                    image: expertSadness,
                },
                final: {
                    title: "Сканируйте QR‑код и регистрируйтесь на сайте, чтобы быть в центре профессионального сообщества",
                    text: "Также приготовили стильный мерч за регистрацию",
                    image: expertMain,
                },
            },
            locations: [
                "poster-square",
                "space-commonwealth",
                "media-center",
                "library",
            ],
        },
        {
            id: "representative",
            name: "Алексей",
            role: "Представитель вуза",
            image: representativeMain,
            welcome: representativeWelcome,
            replies: {
                align: "right",
                start: [
                    {
                        title: "Приветствую!",
                        text: "Меня зовут Алексей, я представитель Университета «Содружество». \n\nМоя задача — улучшать престиж нашего вуза, находить новых талантов и заявлять о себе на профессиональных мероприятиях",
                        button: {
                            type: "row",
                            text: "Здравствуйте",
                        },
                        image: representativeNotBottom,
                    },
                    {
                        title: "",
                        text: "В Городе Содружества вы сможете найти способных школьников и студентов, провести или поддержать олимпиаду, а также встроить ваш вуз в систему мероприятий и сообществ",
                        button: {
                            type: "row",
                            text: "Отправиться в город",
                        },
                        image: representativeTalk,
                    },
                    {
                        text: "На карте есть 3 локации, в которые вы можете отправиться.\n**Выбирайте, что вам интересно!**",
                        action: "Нажми на здание, чтобы начать",
                        image: representativeMain,
                    },
                    {
                        text: "**Жмите на следующую локацию**",
                        action: "Нажмите на здание, чтобы начать",
                        image: representativeTalk,
                    },
                ],
                lockedLocation: {
                    text: "**Увы, эта локация пока закрыта**\nДавайте вернёмся к тем, которые будут вам полезны",
                    action: "Нажмите на здание, чтобы начать",
                    image: expertSadness,
                },
                final: {
                    title: "Сканируйте QR‑код и регистрируйтесь на сайте, чтобы быть в центре профессионального сообщества",
                    text: "Также приготовили стильный мерч за регистрацию",
                    image: representativeMain,
                },
            },
            locations: [
                "olympic-center",
                "member-profile",
                "space-commonwealth",
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
            subtitle:
                "Прокачай свои знания в сфере финансовой безопасности. И не только!",
            position: [926, 158],
            baloon: {
                position: [161, -120],
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
            title: "Центр карьеры",
            subtitle:
                "Поможем выбрать профессию, вуз и понять, куда двигаться дальше",
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
                    main: careerCenterBackground,
                },
            },
        },
        {
            id: "global-area",
            title: "Глобальная площадь",
            subtitle:
                "Здесь можно присоединиться к международному движению по финансовой безопасности",
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
                    main: globalAreaBackground,
                },
            },
        },
        {
            id: "member-profile",
            title: "Профиль участника / вуза",
            subtitle:
                "Расскажи о себе или своей организации, чтобы быстро найти единомышленников",
            position: [942, 489],
            baloon: {
                position: [148, -122],
            },
            images: {
                building: {
                    main: memberProfileMain,
                    active: memberProfileActive,
                    complete: memberProfileComplete,
                },
                background: {
                    main: memberProfileBackground,
                },
            },
        },
        {
            id: "library",
            title: "Библиотека",
            subtitle:
                "Собрали в одном месте материалы по финансовой безопасности. Учись, развивайся или создавай сам!",
            position: [266, 137],
            baloon: {
                position: [110, -69],
            },
            images: {
                building: {
                    main: libraryMain,
                    active: libraryActive,
                    complete: libraryComplete,
                },
                background: {
                    main: locationBackground,
                },
            },
        },
        {
            id: "media-center",
            title: "Медиацентр",
            subtitle:
                "Следите на событиями, давайте интервью и делитесь экспертизой",
            position: [-26, 225],
            baloon: {
                position: [40, -72],
            },
            images: {
                building: {
                    main: mediaCenterMain,
                    active: mediaCenterActive,
                    complete: mediaCenterComplete,
                },
                background: {
                    main: locationBackground,
                },
            },
        },
        {
            id: "space-commonwealth",
            title: "Пространство Содружество",
            subtitle:
                "Общайся, публикуй посты, находи единомышленников или наставников",
            position: [153, 488],
            baloon: {
                position: [106, -108],
            },
            images: {
                building: {
                    main: spaceCommonwealthMain,
                    active: spaceCommonwealthActive,
                    complete: spaceCommonwealthComplete,
                },
                background: {
                    main: spaceCommonwealthBackground,
                },
            },
        },
        {
            id: "poster-square",
            title: "Афишная площадь",
            subtitle:
                "Следи за мероприятиями, стажировками и анонсами олимпиад",
            position: [410, 598],
            baloon: {
                position: [241, -52],
            },
            images: {
                building: {
                    main: posterSquareMain,
                    active: posterSquareActive,
                    complete: posterSquareComplete,
                },
                background: {
                    main: posterSquareBackground,
                    error: posterSquareBackgroundError,
                },
            },
        },
    ],
};

export default data;
