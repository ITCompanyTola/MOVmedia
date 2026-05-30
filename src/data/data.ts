import schoolboyWelcome from "../assets/images/persons/schoolboy/welcome.png";
import schoolboyMain from "../assets/images/persons/schoolboy/main.png";
import schoolboyWelcomeMain from "../assets/images/persons/schoolboy/welcomeMain.png";
import schoolboyWelcomeHello from "../assets/images/persons/schoolboy/welcomeHello.png";
import schoolboyWelcomeSadness from "../assets/images/persons/schoolboy/welcomeSadness.png";
import schoolboyFinal from "../assets/images/persons/schoolboy/final.png";

import studentWelcome from "../assets/images/persons/student/welcome.png";
import studentMain from "../assets/images/persons/student/main.png";
import studentWelcomeMain from "../assets/images/persons/student/welcomeMain.png";
import studentHello from "../assets/images/persons/student/welcomeHello.png";
import studentSpeak from "../assets/images/persons/student/welcomeSpeak.png";
import studentThink from "../assets/images/persons/student/welcomeThink.png";
import studentFinal from "../assets/images/persons/student/final.png";

import expertWelcome from "../assets/images/persons/expert/welcome.png";
import expertMain from "../assets/images/persons/expert/main.png";
import expertWelcomeMain from "../assets/images/persons/expert/welcomeMain.png";
import expertHello from "../assets/images/persons/expert/welcomeHello.png";
import expertSadness from "../assets/images/persons/expert/welcomeSadness.png";
import expertTalk from "../assets/images/persons/expert/welcomeSpeak.png";
import expertNotBottom from "../assets/images/persons/expert/welcomeNodBottom.png";

import representativeMain from "../assets/images/persons/representative/main.png";
import representativeWelcomeMain from "../assets/images/persons/representative/welcomeMain.png";
import representativeWelcome from "../assets/images/persons/representative/welcome.png";
import representativeNotBottom from "../assets/images/persons/representative/welcomeNotBottom.png";
import representativeTalk from "../assets/images/persons/representative/welcomeTalk.png";
import representativeFocused from "../assets/images/persons/representative/welcomeFocued.png";

import olympicCenterMain from "../assets/images/city/buildings/olympic-center/main.png";
import olympicCenterActive from "../assets/images/city/buildings/olympic-center/active.png";
import olympicCenterComplete from "../assets/images/city/buildings/olympic-center/complete.png";
import olympicCenterBackground from "../assets/images/city/locations/olympic-center/main.png";
import olympicCenterErrorBackground from "../assets/images/city/locations/olympic-center/error.png";
import olympicCenterCompleteBackground from "../assets/images/city/locations/olympic-center/complete.png";
import olympicCenterRoute from "../assets/video/routes/olympic-center-route.webm";

import academyMain from "../assets/images/city/buildings/academy/main.png";
import academyActive from "../assets/images/city/buildings/academy/active.png";
import academyComplete from "../assets/images/city/buildings/academy/complete.png";
import academyBackground from "../assets/images/city/locations/academy/main.png";
import academyErrorBackground from "../assets/images/city/locations/academy/error.png";
import academyCompleteBackground from "../assets/images/city/locations/academy/complete.png";
import schoolbodyBackground from "../assets/images/city/locations/academy/schoolbodyBackground.jpg";
import academyRoute from "../assets/video/routes/academy-route.webm";

import careerCenterMain from "../assets/images/city/buildings/career-center/main.png";
import careerCenterActive from "../assets/images/city/buildings/career-center/active.png";
import careerCenterComplete from "../assets/images/city/buildings/career-center/complete.png";
import careerCenterBackground from "../assets/images/city/locations/career-center/main.png";
import careerCenterRoute from "../assets/video/routes/career-center-route.webm";

import globalAreaMain from "../assets/images/city/buildings/global-area/main.png";
import globalAreaActive from "../assets/images/city/buildings/global-area/active.png";
import globalAreaComplete from "../assets/images/city/buildings/global-area/complete.png";
import globalAreaBackground from "../assets/images/city/locations/global-area/main.png";
import globalAreaRoute from "../assets/video/routes/global-area-route.webm";

import posterSquareBackgroundError from "../assets/images/city/locations/poster-square/error.jpg";

import memberProfileMain from "../assets/images/city/buildings/member-profile/main.png";
import memberProfileActive from "../assets/images/city/buildings/member-profile/active.png";
import memberProfileComplete from "../assets/images/city/buildings/member-profile/complete.png";
import memberProfileBackground from "../assets/images/city/locations/member-profile/background.png";
import memberProfileStudentBackgground from "../assets/images/city/locations/member-profile/student-background.jpg";
import memberProfileRoute from "../assets/video/routes/member-profile-route.webm";

import libraryMain from "../assets/images/city/buildings/library/main.png";
import libraryActive from "../assets/images/city/buildings/library/active.png";
import libraryComplete from "../assets/images/city/buildings/library/complete.png";
import libraryRoute from "../assets/video/routes/llibrary-route.webm";

import mediaCenterMain from "../assets/images/city/buildings/media-center/main.png";
import mediaCenterActive from "../assets/images/city/buildings/media-center/active.png";
import mediaCenterComplete from "../assets/images/city/buildings/media-center/complete.png";
import mediaCenterRoute from "../assets/video/routes/media-center-route.webm";

import spaceCommonwealthMain from "../assets/images/city/buildings/space-commonwealth/main.png";
import spaceCommonwealthActive from "../assets/images/city/buildings/space-commonwealth/active.png";
import spaceCommonwealthComplete from "../assets/images/city/buildings/space-commonwealth/complete.png";
import spaceCommonwealthBackground from "../assets/images/city/locations/space-commonwealth/main.png";
import spaceCommonwealthRoute from "../assets/video/routes/space-route.webm";

import posterSquareMain from "../assets/images/city/buildings/poster-square/main.png";
import posterSquareActive from "../assets/images/city/buildings/poster-square/active.png";
import posterSquareComplete from "../assets/images/city/buildings/poster-square/complete.png";
import posterSquareBackground from "../assets/images/city/locations/poster-square/main.png";
import posterSquareRoute from "../assets/video/routes/poster-square-route.webm";

import locationBackground from "../assets/images/city/locations/main.jpg";
import mediaCenterErrorBackground from "../assets/images/city/locations/media-center/err-content.jpg";
import mediaCenterCompleteBackground from "../assets/images/city/locations/media-center/complete-content.jpg";

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
        width?: number | string;
        title?: string;
        text?: string;
        persons?: Partial<
            Record<
                PersonId,
                {
                    title?: string;
                    text?: string;
                    position?: [number, number];
                    width?: number | string;
                }
            >
        >;
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
            persons?: Partial<
                Record<
                    PersonId,
                    {
                        main?: string;
                        error?: string;
                        complete?: string;
                    }
                >
            >;
        };
    };
    route?: {
        video: string;
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
            name: "Артём",
            role: "Школьник",
            image: schoolboyMain,
            welcome: schoolboyWelcome,
            replies: {
                align: "left",
                start: [
                    {
                        title: "Привет, давай знакомиться!",
                        text: "Меня зовут Артём, я учусь в 10-м классе. Помогу тебе освоиться в городе",
                        button: {
                            type: "row",
                            text: "Привет",
                        },
                        image: schoolboyWelcomeHello,
                    },
                    {
                        title: "Город Содружества - это реальный шанс повлиять на свое будущее",
                        text: "Ты можешь узнать больше об интересных профессиях, повысить свои шансы на поступление в известные вузы и стать частью международного движения в сфере финансовой безопасности",
                        button: {
                            type: "row",
                            text: "Отправиться в город",
                        },
                        image: schoolboyWelcomeMain,
                    },
                    {
                        text: "На карте есть 4 локации, в которые ты можешь отправиться.\n**Выбирай, что тебе интересно!**",
                        action: "Нажми на здание, чтобы начать",
                        image: schoolboyWelcomeMain,
                    },
                    {
                        text: "**Жми на следующую локацию**",
                        action: "Нажми на здание, чтобы начать",
                        image: schoolboyWelcomeMain,
                    },
                ],
                lockedLocation: {
                    text: "**Увы, эта локация закрыта**\nДавай вернёмся к тем, которые будут для тебя полезны",
                    action: "Выбери другое здание на карте",
                    image: schoolboyWelcomeSadness,
                },
                final: {
                    title: "Получи свой стильный мерч в качестве бонуса!",
                    text: "Хочешь ещё больше крутых возможностей? Заходи на сайт платформы Содружество.\n\nОтсканируй QR‑код, зарегистрируйся \n **и получи стильный мерч**",
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
                        text: `Я Диана, учусь в университете на специалиста по экономической безопасности\n**Помогу тебе здесь освоиться!**`,
                        button: {
                            type: "row",
                            text: "Привет",
                        },
                        image: studentHello,
                    },
                    {
                        text: "В Городе Содружества ты можешь найти стажировку, прокачать навыки через обучение, поучаствовать в проектах с экспертами и найти единомышленников по всему миру",
                        button: {
                            type: "row",
                            text: "Отправиться в город",
                        },
                        image: studentWelcomeMain,
                    },
                    {
                        text: `На карте есть 6 локаций, в которые ты можешь отправиться.\n**Выбирай, что тебе интересно!**`,
                        action: "Нажми на здание, чтобы начать",
                        image: studentSpeak,
                    },
                    {
                        text: "**Жми на следующую локацию**",
                        action: "Нажми на здание, чтобы начать",
                        image: studentWelcomeMain,
                    },
                ],
                lockedLocation: {
                    text: "**Увы, эта локация закрыта**\nДавай вернёмся к тем, которые будут для тебя полезны",
                    action: "Выбери другое здание на карте",
                    image: studentThink,
                },
                final: {
                    image: studentFinal,
                    title: "Получи свой стильный мерч в качестве бонуса!",
                    text: "Хочешь ещё больше крутых возможностей? Заходи на сайт платформы Содружество. \n\n Отсканируй QR\u2011код, зарегистрируйся\n**и получи стильный мерч**",
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
                        text: `Меня зовут Екатерина, я эксперт в области финансовой безопасности.\n**Помогу вам освоиться в городе**`,
                        button: {
                            type: "row",
                            text: "Здравствуйте",
                        },
                        image: expertHello,
                    },
                    {
                        title: "",
                        text: `В Городе Содружества вас ждут инструменты для публикации вашего экспертного контента, выступлений на мероприятиях и профессионального нетворкинга.\n\nЗдесь можно делиться разборами, вести дискуссии, находить партнёров и заказчиков.\n\nА ещё — участвовать в международных проектах и заявлять о своей экспертизе на глобальном уровне`,
                        button: {
                            type: "row",
                            text: "Отправиться в город",
                        },
                        image: expertWelcomeMain,
                    },
                    {
                        text: `На карте есть 4 локации, в которые вы можете отправиться.\n**Выбирайте, что вам интересно!**`,
                        action: "Нажмите на здание, чтобы начать",
                        image: expertTalk,
                    },
                    {
                        text: "**Жмите на следующую локацию**",
                        action: "Нажмите на здание, чтобы начать",
                        image: expertNotBottom,
                    },
                ],
                lockedLocation: {
                    text: "**Увы, эта локация закрыта**\nДавайте вернёмся к тем, которые будут для вас полезны",
                    action: "Нажмите на здание, чтобы начать",
                    image: expertSadness,
                },
                final: {
                    title: "Сканируйте QR‑код и регистрируйтесь на сайте, чтобы быть в центре профессионального сообщества",
                    text: "Также приготовили стильный мерч за регистрацию",
                    image: expertWelcomeMain,
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
                        text: "Меня зовут Алексей, я представитель Университета «Содружество». \n\nМоя задача — улучшать престиж нашего вуза, находить новых талантов и заявлять о себе на профессиональных мероприятиях",
                        button: {
                            type: "row",
                            text: "Здравствуйте",
                        },
                        image: representativeNotBottom,
                    },
                    {
                        title: "",
                        text: "В Городе Содружества вы сможете найти способных школьников и студентов, провести или поддержать олимпиаду, а также встроить ваш вуз в систему мероприятий и сообществ",
                        button: {
                            type: "row",
                            text: "Отправиться в город",
                        },
                        image: representativeTalk,
                    },
                    {
                        text: "На карте есть 3 локации, в которые вы можете отправиться.\n**Выбирайте, что вам интересно!**",
                        action: "Нажми на здание, чтобы начать",
                        image: representativeWelcomeMain,
                    },
                    {
                        text: "**Жмите на следующую локацию**",
                        action: "Нажмите на здание, чтобы начать",
                        image: representativeTalk,
                    },
                ],
                lockedLocation: {
                    text: "**Увы, эта локация пока закрыта**\nДавайте вернёмся к тем, которые будут вам полезны",
                    action: "Нажмите на здание, чтобы начать",
                    image: representativeFocused,
                },
                final: {
                    title: "Сканируйте QR‑код и регистрируйтесь на сайте, чтобы быть в центре профессионального сообщества",
                    text: "Также приготовили стильный мерч за регистрацию",
                    image: representativeWelcomeMain,
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
            subtitle: "Получай дополнительные баллы для поступления в вузы",
            position: [1239, 244],
            route: {
                video: olympicCenterRoute,
            },
            baloon: {
                position: [130, -25],
                width: 348,
                persons: {
                    schoolboy: {
                        title: "Олимпиадный центр",
                        text: "Получайте дополнительные баллы для поступления в вузы",
                        position: [130, -25],
                    },
                    student: {
                        title: "Олимпиадный центр",
                        text: "Получите преимущества при поступлении на программы магистратуры и аспирантуры",
                        position: [130, -25],
                    },
                    representative: {
                        title: "Олимпиадный центр",
                        text: "Проводите олимпиады, находите талантливых студентов и укрепляйте репутацию вуза",
                        position: [130, -25],
                    },
                },
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
                "Прокачайте свои знания в сфере финансовой безопасности. И не только!",
            position: [890, 215],
            route: {
                video: academyRoute,
            },
            baloon: {
                position: [200, -170],
                width: 348,
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
                    persons: {
                        schoolboy: {
                            main: schoolbodyBackground,
                        },
                    },
                },
            },
        },
        {
            id: "career-center",
            title: "Центр карьеры",
            subtitle:
                "Поможем выбрать профессию, вуз и понять, куда двигаться дальше",
            position: [646, 13],
            baloon: {
                position: [64, 20],
                width: 348,
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
            route: {
                video: careerCenterRoute,
            },
        },
        {
            id: "global-area",
            title: "Глобальная площадь",
            subtitle:
                "Здесь можно присоединиться к международному движению по финансовой безопасности",
            position: [530, 277],
            baloon: {
                position: [175, -20],
                width: 378,
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
            route: {
                video: globalAreaRoute,
            },
        },
        {
            id: "member-profile",
            title: "Профиль вуза",
            subtitle:
                "Расскажи о себе или своей организации, чтобы быстро найти единомышленников",
            position: [988, 523],
            baloon: {
                position: [110, -135],
                width: 348,
                persons: {
                    student: {
                        title: "Профиль участника",
                        text: "Расскажите о себе, чтобы быстро найти единомышленников",
                        position: [110, -135],
                    },
                    representative: {
                        title: "Профиль вуза",
                        text: "Расскажите о своём вузе, чтобы создать его положительный образ",
                        position: [110, -135],
                    },
                },
            },
            images: {
                building: {
                    main: memberProfileMain,
                    active: memberProfileActive,
                    complete: memberProfileComplete,
                },
                background: {
                    main: memberProfileBackground,
                    persons: {
                        student: {
                            main: memberProfileStudentBackgground,
                        },
                    },
                },
            },
            route: {
                video: memberProfileRoute,
            },
        },
        {
            id: "library",
            title: "Библиотека",
            subtitle:
                "Собрали в одном месте материалы по финансовой безопасности. Учитесь, развивайтесь или создавайте самостоятельно",
            position: [277, 136],
            baloon: {
                position: [73, -66],
                width: 317,
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
            route: {
                video: libraryRoute,
            },
        },
        {
            id: "media-center",
            title: "Медиацентр",
            subtitle:
                "Следите на событиями, давайте интервью и делитесь экспертизой",
            position: [-10, 329],
            baloon: {
                position: [30, -167],
                width: 287,
            },
            images: {
                building: {
                    main: mediaCenterMain,
                    active: mediaCenterActive,
                    complete: mediaCenterComplete,
                },
                background: {
                    main: locationBackground,
                    error: mediaCenterErrorBackground,
                    complete: mediaCenterCompleteBackground,
                },
            },
            route: {
                video: mediaCenterRoute,
            },
        },
        {
            id: "space-commonwealth",
            title: "Пространство Содружество",
            subtitle:
                "Общайся, публикуй посты, находи единомышленников или наставников",
            position: [160, 488],
            baloon: {
                position: [106, -108],
                width: 370,
                persons: {
                    student: {
                        title: "Пространство Содружество",
                        text: "Общайтесь, публикуйте посты, находите единомышленников или наставников",
                        position: [106, -108],
                    },
                    expert: {
                        title: "Пространство Содружество",
                        text: "Делитесь опытом, общайтесь с единомышленниками и создавайте своё сообщество",
                        position: [106, -108],
                    },
                    representative: {
                        title: "Пространство Содружество",
                        text: "Публикуйте материалы, продвигайте вуз, находите заинтересованных студентов и партнёров",
                        position: [106, -108],
                    },
                },
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
            route: {
                video: spaceCommonwealthRoute,
            },
        },
        {
            id: "poster-square",
            title: "Афишная площадь",
            subtitle:
                "Следите за мероприятиями, стажировками и анонсами олимпиад",
            position: [418, 600],
            baloon: {
                position: [241, -52],
                width: 375,
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
            route: {
                video: posterSquareRoute,
            },
        },
    ],
};

export default data;