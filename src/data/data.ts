import schoolboyWelcome from "../assets/images/persons/schoolboy/welcome.png";
import schoolboyMain from "../assets/images/persons/schoolboy/main.png";
import schoolboyHello from "../assets/images/persons/schoolboy/hello.png";
import schoolboySadness from "../assets/images/persons/schoolboy/sadness.png";

import studentWelcome from "../assets/images/persons/student/welcome.png";
import studentMain from "../assets/images/persons/student/main.png";
import studentHello from "../assets/images/persons/student/hello.png";
import studentTalk from "../assets/images/persons/student/talk.png";
import studentThink from "../assets/images/persons/student/think.png";

import expertWelcome from "../assets/images/persons/expert/welcome.png";
import expertMain from "../assets/images/persons/expert/main.png";
import expertHello from "../assets/images/persons/expert/hello.png";
import expertSadness from "../assets/images/persons/expert/sadness.png";
import expertTalk from "../assets/images/persons/expert/talk.png";

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

export type PersonId = "schoolboy" | "student" | "expert";

export type LocationId =
  | "olympic-center"
  | "academy"
  | "career-center"
  | "global-area"
  | "poster-square"
  | "space-commonwealth"
  | "media-center"
  | "library";

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
            title:
              "Город Содружества - это реальный шанс повлиять на свое будущее",
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
      locations: ["olympic-center", "academy", "career-center", "global-area"],
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
            text: `Я Диана, учусь в университете на специалиста по управлению рисками \n\n Помогу тебе здесь освоиться!`,
            button: {
              type: "row",
              text: "Привет",
            },
            image: studentHello,
          },
          {
            title: "",
            text: "В Городе Содружества ты можешь найти стажировку, прокачать навыки через обучение, поучаствовать в проектах с экспертами и найти единомышленников по всему миру",
            button: {
              type: "row",
              text: "Отправиться в город",
            },
            image: studentMain,
          },
          {
            text: `На карте есть 5 локаций, в которые ты можешь отправиться. \n Выбирай, что тебе интересно!`,
            action: "Нажми на здание, чтобы начать",
            image: studentTalk,
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
          image: studentThink,
        },
      },
      locations: ["olympic-center", "academy", "career-center", "global-area"],
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
            text: `Меня зовут Екатерина, я эксперт в области финансовой безопасности. \n\nПомогу вам освоиться в городе`,
            button: {
              type: "row",
              text: "Здравствуйте",
            },
            image: expertHello,
          },
          {
            title: "",
            text: `В Городе Содружества вас ждут инструменты для публикации вашего экспертного контента, выступлений на мероприятиях и профессионального нетворкинга. \nЗдесь можно делиться разборами, вести дискуссии, находить партнёров и заказчиков.  \nА ещё — участвовать в международных проектах и заявлять о своей экспертизе на глобальном уровне`,
            button: {
              type: "row",
              text: "Отправиться в город",
            },
            image: expertMain,
          },
          {
            text: `На карте есть 4 локации, в которые вы можете отправиться. \nВыбирайте, что вам интересно!`,
            action: "Нажми на здание, чтобы начать",
            image: expertTalk,
          },
          {
            title: "Жми на следующую локацию",
            action: "Нажми на здание, чтобы начать",
            image: expertMain,
          },
        ],
        lockedLocation: {
          title: "Увы, эта локация пока закрыта",
          text: "Давай вернемся к тем местам, которые сейчас доступны",
          action: "Выбери другое здание на карте",
          image: expertSadness,
        },
      },
      locations: ["poster-square"],
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
        "Поможем выбрать профессию, вуз и понять, куда двигаться дальше",
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
        "Здесь можно присоединиться к международному движению по финансовой безопасности",
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
      id: "poster-square",
      title: "Афишная площадь",
      subtitle: "Следите за мероприятиями, стажировками и анонсами олимпиад",
      position: [426, 642],
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
  ],
};

export default data;
