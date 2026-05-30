import { useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import { Quiz, type QuizAnswerData } from "../../components/ui/Quiz/Quiz";
import type { LocationScreenProps } from "./types";
import styles from "./MemberProfileRepresentativeLocation.module.css";
import { ChevronRight } from "lucide-react";

import representativeMain from "../../assets/images/persons/representative/main.png";
import representativeFocused from "../../assets/images/persons/representative/focused.png";

import step1Img from "../../assets/images/city/locations/profile/step-1.png";

const answers: QuizAnswerData[] = [
  {
    id: "1",
    correct: true,
    text: "Публикация постов, комментариев, реакций",
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
    iconBackground: "#82c7e1",
  },
  {
    id: "2",
    correct: true,
    text: "Проведение онлайн-мероприятий (олимпиад и вебинаров)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="20"
        viewBox="0 0 24 22"
        fill="none"
      >
        <path
          d="M15.6667 21H7.66667M22.3333 5.26668V12.7334C22.3333 14.2268 22.3336 14.9735 22.043 15.544C21.7873 16.0457 21.3788 16.4536 20.877 16.7093C20.3066 17 19.5604 17 18.0669 17H5.26693C3.77345 17 3.02616 17 2.45573 16.7093C1.95396 16.4536 1.54631 16.0457 1.29065 15.544C1 14.9735 1 14.2268 1 12.7334V5.26668C1 3.77321 1 3.02649 1.29065 2.45605C1.54631 1.95429 1.95396 1.54631 2.45573 1.29065C3.02616 1 3.77345 1 5.26693 1H18.0669C19.5604 1 20.3066 1 20.877 1.29065C21.3788 1.54631 21.7873 1.95429 22.043 2.45605C22.3336 3.02649 22.3333 3.77321 22.3333 5.26668ZM15 9L9 5V13L15 9Z"
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
    id: "3",
    correct: true,
    text: "Мониторинг результатов и профилей участников Международной олимпиады",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 26 22"
        fill="none"
      >
        <path
          d="M25.0003 21H5.26693C3.77345 21 3.02616 21 2.45573 20.7093C1.95396 20.4536 1.54631 20.0458 1.29065 19.544C1 18.9736 1 18.2268 1 16.7333V1M25 3.66667L17.2057 10.4866C16.2723 11.3034 15.8054 11.7118 15.2943 11.8814C14.6914 12.0814 14.0367 12.0595 13.4485 11.8199C12.9497 11.6167 12.5114 11.1782 11.6343 10.3012C10.7763 9.44317 10.3473 9.01416 9.85807 8.8112C9.28095 8.57178 8.63833 8.5425 8.0419 8.72868C7.53627 8.88652 7.07003 9.27495 6.13786 10.0518L1 14.3333"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBackground: "#F46248",
  },
  {
    id: "4",
    correct: true,
    text: "Все ответы верны",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M1 9V22.8667C1 23.6134 1 23.9868 1.14532 24.272C1.27316 24.5229 1.47698 24.7268 1.72786 24.8547C2.01308 25 2.38673 25 3.13346 25H17.0001M19.6667 7.66667L14.3333 13L11.6667 10.3333M6.33333 15.4V5.26668C6.33333 3.77321 6.33333 3.02649 6.62398 2.45605C6.87964 1.95429 7.2873 1.54631 7.78906 1.29065C8.35949 1 9.10679 1 10.6003 1H20.7336C22.2271 1 22.9733 1 23.5437 1.29065C24.0455 1.54631 24.454 1.95429 24.7096 2.45605C25.0003 3.02649 25.0003 3.77322 25.0003 5.2667V15.4C25.0003 16.8935 25.0003 17.6402 24.7096 18.2106C24.454 18.7124 24.0455 19.1203 23.5437 19.376C22.9733 19.6666 22.2271 19.6667 20.7336 19.6667H10.6003C9.10679 19.6667 8.35949 19.6666 7.78906 19.376C7.2873 19.1203 6.87964 18.7124 6.62398 18.2106C6.33333 17.6402 6.33333 16.8935 6.33333 15.4Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    iconBackground: "#a3c148",
  },
];

export function MemberProfileRepresentativeScreen({
  person,
  isCompleted,
  setReply,
  setBackgroundVariant,
  completeLocation,
  closeLocation,
}: LocationScreenProps) {
  const [step, setStep] = useState<"step1" | "quiz">(
    isCompleted ? "quiz" : "step1",
  );

  const handleStep1Next = () => {
    setStep("quiz");
    setBackgroundVariant("complete");
    setReply({
      image: representativeMain,
      text: "Как думаете, какие возможности открываются после регистрации на платформе? \n\n**Попробуйте догадаться**",
    });
  };

  const handleCorrectAnswer = () => {
    completeLocation();
  };

  if (step === "quiz") {
    return (
      <div className={styles.quiz}>
        <Card className={styles.quizCard}>
          <Quiz
            question={{
              text: "Выберите правильный ответ",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                >
                  <path
                    d="M22.0003 40.3337C32.1255 40.3337 40.3337 32.1255 40.3337 22.0003C40.3337 11.8751 32.1255 3.66699 22.0003 3.66699C11.8751 3.66699 3.66699 11.8751 3.66699 22.0003C3.66699 32.1255 11.8751 40.3337 22.0003 40.3337Z"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M15 22L20 27L29 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              iconBackground: "#F46248",
            }}
            answers={answers}
            wrongReplies={[
              {
                image: representativeFocused,
                text: "Не совсем верно, попробуйте ещё раз",
              },
            ]}
            successReply={{
              image: representativeMain,
              text: "**Да, вы правы!** \nНо другие варианты тоже верны. \nНа платформе ещё много инструментов для продвижения вашего вуза. \nПродолжим путешествие?",
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
    <div className={styles.slide}>
      <img src={step1Img} className={styles.slideImage} alt="" />
      <Button
        size="s"
        onClick={handleStep1Next}
        className={styles.continueButton}
      >
        Продолжить <ChevronRight />
      </Button>
    </div>
  );
}
