import { useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Quiz, type QuizAnswerData } from "../../components/ui/Quiz/Quiz";
import type { LocationScreenProps } from "./types";
import styles from "./PosterSquareLocation.module.css";
import { ChevronRight } from "lucide-react";

import expertMain from "../../assets/images/persons/expert/main.png";
import expertListensCarefully from "../../assets/images/persons/expert/listens-carefully.png";
import expertSure from "../../assets/images/persons/expert/sure.png";
// import { useAppStore } from "../../store/useAppStore";

const answers: QuizAnswerData[] = [
  {
    id: "1",
    text: "Перейду по ссылке — редакция не будет обманывать",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 23 23"
        fill="none"
      >
        <path
          d="M7.27584 14.8189L14.8183 7.27641M4.44792 10.1047L2.5623 11.9903C0.479503 14.0731 0.4791 17.45 2.5619 19.5327C4.64469 21.6155 8.02197 21.6156 10.1048 19.5328L11.9896 17.6472M10.104 4.44767L11.9896 2.56205C14.0724 0.479258 17.4491 0.479344 19.5319 2.56214C21.6146 4.64494 21.6151 8.02173 19.5324 10.1045L17.6469 11.9902"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBackground: "#3990F9",
  },
  {
    id: "2",
    text: "Скачаю файл, проверю антивирусом, а потом открою",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="24"
        viewBox="0 0 18 26"
        fill="none"
      >
        <path
          d="M1 25H17M9 1L9 19.6667M2.33333 13L9 19.6667L15.6667 13"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBackground: "#82c7e1",
  },
  {
    id: "3",
    text: "Не перейду по ссылке, свяжусь с редакцией по официальному контакту и уточню, отправляли ли они мне материал",
    correct: true,
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="21"
        viewBox="0 0 26 24"
        fill="none"
      >
        <path
          d="M9.45052 16.9862C10.5448 20.1006 13.5118 22.3334 17.0002 22.3334C18.5745 22.3334 20.0424 21.8786 21.28 21.0933L22.9761 21.6586C23.6275 21.8758 23.9537 21.9844 24.1702 21.9072C24.3587 21.8399 24.5068 21.6916 24.574 21.5031C24.6512 21.2865 24.5429 20.9608 24.3258 20.3094L23.7604 18.6133L23.9498 18.2992C24.6184 17.1303 25.0005 15.7764 25.0005 14.3333C25.0005 9.91507 21.4183 6.33333 17 6.33333L16.7005 6.33885L16.5495 6.34687M9.00008 17.0001C7.4258 17.0001 5.95774 16.5454 4.72005 15.7601L3.02409 16.3255C2.37269 16.5426 2.04667 16.6511 1.83008 16.5738C1.6416 16.5066 1.49308 16.3582 1.42586 16.1698C1.34863 15.9532 1.45735 15.6275 1.67448 14.9761L2.23985 13.2799C1.45458 12.0423 1 10.5743 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9C17 13.4183 13.4184 17.0001 9.00008 17.0001Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBackground: "#F46248",
  },
];

export function PosterSquareScreen({
  person,
  isCompleted,
  setReply,
  setBackgroundVariant,
  completeLocation,
  closeLocation,
}: LocationScreenProps) {
  // const { openModal } = useAppStore();

  const [step, setStep] = useState<"intro" | "question">(
    isCompleted ? "question" : "intro",
  );

  const handleStart = () => {
    setStep("question");
    setReply({
      image: person.image,
      text: "В Медиацентре публикуются только профессионалы. \n\n**Проверим вашу экспертизу на практике**",
    });
  };

  const handleCorrectAnswer = () => {
    completeLocation();
  };

  if (step === "question") {
    return (
      <div className={`${styles.quiz}`}>
        <Card className={`${styles.quizCard}`}>
          <Quiz
            question={{
              text: "Вам приходит сообщение от имени редакции: Срочно! Согласуйте публикацию и посмотрите макет статьи по ссылке. Ссылка ведёт на незнакомый сайт \n\n**Ваши действия в этой ситуации?**",
              icon: (
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0003 40.3337C32.1255 40.3337 40.3337 32.1255 40.3337 22.0003C40.3337 11.8751 32.1255 3.66699 22.0003 3.66699C11.8751 3.66699 3.66699 11.8751 3.66699 22.0003C3.66699 32.1255 11.8751 40.3337 22.0003 40.3337Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M18.334 15.5547C19.2507 13.7397 20.1673 12.834 22.0007 12.834C24.285 12.834 25.6673 14.6472 25.6673 16.4603C25.6673 18.2735 24.7507 19.1792 22.0007 20.9942V23.834M22.0007 30.2507V31.1673"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ),
              iconBackground: "#F46248",
            }}
            answers={answers}
            wrongReplies={[
              {
                image: expertListensCarefully,
                text: "Не торопитесь, давайте попробуем ещё раз",
              },
              {
                image: expertSure,
                text: "Ошибка — это тоже опыт! \nПопробуем снова?",
              },
            ]}
            successReply={{
              image: expertMain,
              text: "**Это верный ответ!**\nВозвращайся на карту и выбирай следующую локацию",
            }}
            setReply={setReply}
            setBackgroundVariant={setBackgroundVariant}
            broadcastPersonId={person.id}
            broadcastQuizId="quiz"
            onCorrect={handleCorrectAnswer}
            onContinue={closeLocation}
            continueText="Продолжить"
          />
        </Card>
      </div>
    );
  }

  return (
    <div className={`${styles.intro}`}>
      <Button size="s" onClick={handleStart}>
        Продолжить <ChevronRight />
      </Button>
    </div>
  );
}
