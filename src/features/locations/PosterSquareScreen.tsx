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
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.49967 15.5837H11.0043C12.1557 15.5835 13.2951 15.8173 14.3533 16.2707L21.0471 19.1395C21.5271 19.346 21.9362 19.6886 22.224 20.1248C22.5117 20.5611 22.6655 21.072 22.6663 21.5946C22.6663 22.5777 21.8688 23.3753 20.8856 23.3753H19.9747C18.9464 23.3756 17.9275 23.1794 16.9728 22.7973L14.8747 21.9587M2.83301 25.5003V17.0003C2.83301 16.3416 2.83301 16.0129 2.90526 15.7423C3.00186 15.3823 3.19147 15.054 3.45505 14.7905C3.71863 14.5269 4.0469 14.3373 4.40692 14.2407C4.68034 14.167 5.00901 14.167 5.66634 14.167C6.32367 14.167 6.65376 14.167 6.92434 14.2392C7.28436 14.3358 7.61264 14.5255 7.87622 14.789C8.13979 15.0526 8.3294 15.3809 8.42601 15.7409C8.49967 16.0129 8.49967 16.343 8.49967 17.0003V25.5003C8.49967 26.1591 8.49967 26.4892 8.42742 26.7583C8.33082 27.1183 8.14121 27.4466 7.87763 27.7102C7.61405 27.9738 7.28578 28.1634 6.92576 28.26C6.65234 28.3337 6.32367 28.3337 5.66634 28.3337C5.00901 28.3337 4.67892 28.3337 4.40834 28.2614C4.04832 28.1648 3.72005 27.9752 3.45647 27.7116C3.19289 27.448 3.00328 27.1198 2.90667 26.7597C2.83301 26.4877 2.83301 26.1577 2.83301 25.5003Z"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19.8333 23.375H29.1479C29.6346 23.3754 30.1048 23.5515 30.4719 23.8711C30.839 24.1907 31.0782 24.6321 31.1457 25.1141C31.2131 25.5961 31.1041 26.0862 30.8388 26.4942C30.5735 26.9022 30.1697 27.2007 29.7018 27.3346L22.3068 29.4483C20.9441 29.838 19.5013 29.8507 18.1319 29.4851L8.5 26.9167"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M25.4997 15.5833C28.6293 15.5833 31.1663 13.0463 31.1663 9.91667C31.1663 6.78705 28.6293 4.25 25.4997 4.25C22.3701 4.25 19.833 6.78705 19.833 9.91667C19.833 13.0463 22.3701 15.5833 25.4997 15.5833Z"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
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
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.333 18.6667H18.6663M25.333 14.1333V21.0666C25.333 22.5601 25.3333 23.3069 25.0426 23.8773C24.787 24.3791 24.3785 24.787 23.8767 25.0426C23.3063 25.3333 22.5601 25.3333 21.0666 25.3333H10.9333C9.4398 25.3333 8.69251 25.3333 8.12208 25.0426C7.62031 24.787 7.21266 24.3791 6.957 23.8773C6.66635 23.3069 6.66635 22.5601 6.66635 21.0666V14.1333C6.66635 13.3866 6.66635 13.0132 6.81167 12.728C6.9395 12.4771 7.14333 12.2732 7.39421 12.1453C7.67943 12 8.05242 12 8.79916 12H23.1992C23.9459 12 24.3203 12 24.6055 12.1453C24.8564 12.2732 25.0593 12.4771 25.1872 12.728C25.3325 13.0132 25.333 13.3866 25.333 14.1333ZM25.3622 12H6.6364C5.50228 12 4.93585 12 4.61426 11.8019C4.18548 11.5378 3.94237 11.0546 3.98536 10.5529C4.0176 10.1766 4.35457 9.72086 5.02963 8.80953C5.22489 8.54593 5.32252 8.41413 5.44203 8.31348C5.60138 8.17927 5.79048 8.08429 5.99317 8.03613C6.14519 8 6.30835 8 6.6364 8H25.3622C25.6903 8 25.855 8 26.007 8.03613C26.2097 8.08429 26.3976 8.17927 26.557 8.31348C26.6765 8.41413 26.7745 8.54598 26.9697 8.80957C27.6448 9.72088 27.9823 10.1766 28.0146 10.5529C28.0575 11.0546 27.8145 11.5378 27.3857 11.8019C27.0641 12 26.4964 12 25.3622 12Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 14.333C11 13.0069 11.5268 11.7352 12.4645 10.7975C13.4021 9.85979 14.6739 9.33301 16 9.33301C17.3261 9.33301 18.5979 9.85979 19.5355 10.7975C20.4732 11.7352 21 13.0069 21 14.333C21 17.0947 22.02 19.4697 22.6667 20.9997"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16.0003 14.3337V17.2503C15.9987 19.1003 17.102 20.927 17.667 22.667M11.0003 19.7503C11.1137 20.717 11.597 21.727 11.8337 22.667M2.66699 9.33366V6.00033C2.66699 5.11627 3.01818 4.26842 3.6433 3.6433C4.26842 3.01818 5.11627 2.66699 6.00033 2.66699H9.33366M2.66699 22.667V26.0003C2.66699 26.8844 3.01818 27.7322 3.6433 28.3573C4.26842 28.9825 5.11627 29.3337 6.00033 29.3337H9.33366M22.667 2.66699H26.0003C26.8844 2.66699 27.7322 3.01818 28.3573 3.6433C28.9825 4.26842 29.3337 5.11627 29.3337 6.00033V9.33366M22.667 29.3337H26.0003C26.8844 29.3337 27.7322 28.9825 28.3573 28.3573C28.9825 27.7322 29.3337 26.8844 29.3337 26.0003V22.667"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
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
