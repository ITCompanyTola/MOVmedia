import { useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import type { LocationScreenProps } from "./types";
import styles from "./OlympicCenterRepresentativeLocation.module.css";
import { ChevronRight, Check } from "lucide-react";

import representativeFocused from "../../assets/images/persons/representative/focused.png";
import representativeMain from "../../assets/images/persons/representative/main.png";
import representativeNotBottom from "../../assets/images/persons/representative/not-bottom.png";
import { publishBroadcastState } from "../../utils/broadcast";

const PARAMETER_ITEMS = [
  { label: "Количество проходных баллов теста", disabled: true },
  { label: "Порядок показов вопросов теста", disabled: true },
  { label: "Порядок ответов на вопросы теста", disabled: true },
  { label: "Время ответа на вопрос теста", disabled: true },
  { label: "Количество вопросов в тесте", disabled: false },
  { label: "Количество попыток прохождения теста", disabled: true },
  { label: "Зачетная попытка прохождения теста", disabled: true },
];

const ANSWER_TYPE_ITEMS = [
  { id: "1", label: "Единичный выбор" },
  { id: "2", label: "Множественный выбор" },
  { id: "3", label: "Бинарный выбор (ДА / НЕТ)" },
  { id: "4", label: "Числовой ответ" },
  { id: "5", label: "Ранжирование", correct: true },
  { id: "6", label: "Сопоставление" },
  { id: "7", label: "Короткий текстовый ответ" },
  { id: "8", label: "Развернутый текстовый ответ" },
  { id: "9", label: "Загрузка файла" },
];

type Step = "intro" | "parameters" | "answer-type";
type AnswerState = "idle" | "correct" | "wrong";

type SelectListItem = {
  id: string;
  label: string;
  correct?: boolean;
  disabled?: boolean;
};

type SelectListProps = {
  items: SelectListItem[];
  type: "checkbox" | "radio";
  selected: Set<string>;
  answerState?: AnswerState;
  onSelect: (id: string) => void;
};

function SelectList({
  items,
  type,
  selected,
  answerState = "idle",
  onSelect,
}: SelectListProps) {
  return (
    <div className={styles.checkboxList}>
      {items.map((item) => {
        const isSelected = selected.has(item.id);
        const isCorrect =
          type === "radio" && answerState === "correct" && isSelected;
        const isWrong =
          type === "radio" && answerState === "wrong" && isSelected;

        return (
          <div
            key={item.id}
            className={`${styles.checkboxItem} ${isCorrect ? styles.selectItemCorrect : ""} ${isWrong ? styles.selectItemWrong : ""} ${item.disabled ? styles.checkboxItemDisabled : ""}`}
            onClick={() => !item.disabled && onSelect(item.id)}
          >
            <div
              className={`${styles.checkboxBox} ${isSelected ? styles.checkboxBoxChecked : ""} ${type === "radio" ? styles.checkboxBoxRadio : ""} ${isCorrect ? styles.checkboxBoxCorrect : ""}`}
            >
              {type === "checkbox" && isSelected && (
                <Check size={12} color="white" strokeWidth={3} />
              )}
              {type === "radio" && isSelected && (
                <div className={styles.radioDotInner} />
              )}
            </div>
            <span className={styles.checkboxLabel}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}

export function OlympicCenterRepresentativeScreen({
  isCompleted,
  setReply,
  completeLocation,
  closeLocation,
}: LocationScreenProps) {
  const [step, setStep] = useState<Step>(isCompleted ? "answer-type" : "intro");
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [answerState, setAnswerState] = useState<AnswerState>("idle");

  const handleIntroNext = () => {
    setStep("parameters");
    setReply({
      image: representativeMain,
      text: "Представим, что вы решили  создать тест и определить уровнь знаний студентов. \n**Давайте настроим «Количество вопросов в тесте»**",
    });
  };

  const toggleCheck = (item: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(item)) {
        next.delete(item);
      } else {
        next.add(item);
      }
      return next;
    });
  };

  const handleParametersNext = () => {
    setStep("answer-type");
    publishBroadcastState({
      screen: "quiz",
      personId: "representative",
      quizId: "quiz2",
      result: "idle",
    });
    setReply({
      image: representativeMain,
      text: "Отлично! Еще есть возможность задать тип ответа для каждого вопроса. \n**Какой выбрать, чтобы студент смог упорядочить ответы от большего к меньшему?**",
    });
  };

  const handleAnswerSelect = (id: string) => {
    if (answerState === "correct") return;
    setAnswerState("idle");
    setSelectedAnswerId(null);

    const item = ANSWER_TYPE_ITEMS.find((a) => a.id === id);
    if (!item) return;

    setSelectedAnswerId(id);

    if (item.correct) {
      setAnswerState("correct");
      publishBroadcastState({
        screen: "quiz",
        personId: "representative",
        quizId: "quiz2",
        result: "true",
      });
      completeLocation();
      setReply({
        image: representativeNotBottom,
        text: "**Правильно!** \nФункционал платформы может показаться сложным на первый взгляд. \nНа самом деле всё просто: зайдите на сайт, зарегистрируйтесь в личном кабинете и начните знакомиться с возможностями",
      });
    } else {
      setAnswerState("wrong");
      publishBroadcastState({
        screen: "quiz",
        personId: "representative",
        quizId: "quiz2",
        result: "false",
      });
      setReply({
        image: representativeFocused,
        text: "Может ещё раз попробуем?",
      });
    }
  };

  if (step === "intro") {
    return (
      <div className={styles.intro}>
        <div className={styles.introCards}>
          <Card className={styles.introCard}>
            <div className={styles.introCardHeader}>
              <span className={styles.serviceLabel}>Сервис</span>
              <span className={styles.introCardTitle}>
                Конструктор олимпиады
              </span>
            </div>
            <div>
              <p className={styles.serviceDescription}>
                Инструмент позволяет настраивать{" "}
                <strong>20+ параметров олимпиады</strong> в зависимости от
                вашего запроса
              </p>
            </div>
            <div className={styles.serviceCanSection}>
              <span className={styles.serviceCanTitle}>Вы можете:</span>
              <div className={styles.serviceBulletItems}>
                <div className={styles.serviceBulletRow}>
                  <div className={styles.serviceBulletIconBox}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="18"
                      viewBox="0 0 16 20"
                      fill="none"
                    >
                      <path
                        d="M5 15H11M5 12H11M14.9996 7H10.5996C10.0396 7 9.75981 6.99998 9.5459 6.89099C9.35774 6.79512 9.20487 6.64218 9.10899 6.45401C9 6.2401 9 5.96005 9 5.4V1M15 15.8V7.65399C15 7.19048 15.0002 6.95872 14.9502 6.73932C14.9059 6.54475 14.8328 6.35788 14.7332 6.18499C14.6208 5.99002 14.4632 5.81997 14.1483 5.47986L10.9502 2.02588C10.6002 1.64789 10.425 1.45888 10.2168 1.32343C10.0322 1.20337 9.82865 1.11464 9.61515 1.06077C9.37428 1 9.11721 1 8.60207 1H4.2002C3.08009 1 2.51962 1 2.0918 1.21799C1.71547 1.40973 1.40973 1.71572 1.21799 2.09204C1 2.51986 1 3.07991 1 4.20001V15.8C1 16.9201 1 17.4801 1.21799 17.908C1.40973 18.2843 1.71547 18.5902 2.0918 18.782C2.51962 19 3.08009 19 4.2002 19H11.8002C12.9203 19 13.48 19 13.9078 18.782C14.2841 18.5902 14.5905 18.2843 14.7822 17.908C15.0002 17.4801 15 16.9201 15 15.8Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={styles.serviceBulletText}>
                    определить количество номинаций
                  </span>
                </div>
                <div className={styles.serviceBulletRow}>
                  <div className={styles.serviceBulletIconBox}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 16.9999C21 15.7697 19.7659 14.7124 18 14.2495M3 16.9999C3 15.7697 4.2341 14.7124 6 14.2495M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={styles.serviceBulletText}>
                    назначить членов жюри
                  </span>
                </div>
                <div className={styles.serviceBulletRow}>
                  <div className={styles.serviceBulletIconBox}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="18"
                      viewBox="0 0 18 20"
                      fill="none"
                    >
                      <path
                        d="M1 6C0.447715 6 0 6.44772 0 7C0 7.55228 0.447715 8 1 8V7V6ZM17 8C17.5523 8 18 7.55228 18 7C18 6.44772 17.5523 6 17 6V7V8ZM2.0918 18.782L2.54579 17.891H2.54579L2.0918 18.782ZM1.21799 17.908L0.32698 18.362H0.32698L1.21799 17.908ZM16.7822 17.908L15.8912 17.454L16.7822 17.908ZM15.9078 18.782L15.4538 17.891L15.9078 18.782ZM15.9078 3.21799L16.3618 2.32698V2.32698L15.9078 3.21799ZM16.7822 4.09204L15.8912 4.54603V4.54603L16.7822 4.09204ZM2.0918 3.21799L2.54579 4.10899L2.0918 3.21799ZM1.21799 4.09204L2.10899 4.54603L1.21799 4.09204ZM14 1C14 0.447715 13.5523 0 13 0C12.4477 0 12 0.447715 12 1H13H14ZM12 3C12 3.55228 12.4477 4 13 4C13.5523 4 14 3.55228 14 3H13H12ZM6 1C6 0.447715 5.55228 0 5 0C4.44772 0 4 0.447715 4 1H5H6ZM4 3C4 3.55228 4.44772 4 5 4C5.55228 4 6 3.55228 6 3H5H4ZM1 7V8H17V7V6H1V7ZM4.2002 3V4H13.8002V3V2H4.2002V3ZM17 6.19995H16V15.8H17H18V6.19995H17ZM13.8002 19V18H4.2002V19V20H13.8002V19ZM1 15.8H2V6.19995H1H0V15.8H1ZM4.2002 19V18C3.62367 18 3.25127 17.9992 2.96782 17.9761C2.69598 17.9538 2.59519 17.9161 2.54579 17.891L2.0918 18.782L1.63781 19.673C2.01623 19.8658 2.40959 19.9371 2.80496 19.9694C3.18873 20.0008 3.65662 20 4.2002 20V19ZM1 15.8H0C0 16.3435 -0.000777602 16.8113 0.030569 17.195C0.0628681 17.5904 0.134179 17.9836 0.32698 18.362L1.21799 17.908L2.10899 17.454C2.08381 17.4046 2.04613 17.3039 2.02393 17.0322C2.00078 16.7488 2 16.3765 2 15.8H1ZM2.0918 18.782L2.54579 17.891C2.35778 17.7952 2.20494 17.6424 2.10899 17.454L1.21799 17.908L0.32698 18.362C0.614523 18.9264 1.07317 19.3853 1.63781 19.673L2.0918 18.782ZM17 15.8H16C16 16.3766 15.9993 16.7489 15.9762 17.0323C15.954 17.3041 15.9163 17.4047 15.8912 17.454L16.7822 17.908L17.6732 18.362C17.8661 17.9835 17.9373 17.5902 17.9696 17.1949C18.0008 16.8112 18 16.3434 18 15.8H17ZM13.8002 19V20C14.3438 20 14.8115 20.0008 15.1951 19.9694C15.5904 19.9371 15.9835 19.8657 16.3618 19.673L15.9078 18.782L15.4538 17.891C15.4043 17.9162 15.3036 17.9539 15.0321 17.9761C14.7489 17.9992 14.3767 18 13.8002 18V19ZM16.7822 17.908L15.8912 17.454C15.7956 17.6417 15.6425 17.7948 15.4538 17.891L15.9078 18.782L16.3618 19.673C16.9257 19.3856 17.3853 18.927 17.6732 18.362L16.7822 17.908ZM13.8002 3V4C14.3768 4 14.7489 4.00078 15.0321 4.02393C15.3036 4.04611 15.4043 4.08377 15.4538 4.10899L15.9078 3.21799L16.3618 2.32698C15.9835 2.13421 15.5904 2.06288 15.1951 2.03057C14.8115 1.99922 14.3437 2 13.8002 2V3ZM17 6.19995H18C18 5.6565 18.0008 5.1887 17.9695 4.80511C17.9373 4.40983 17.8661 4.01653 17.6732 3.63805L16.7822 4.09204L15.8912 4.54603C15.9164 4.59537 15.954 4.69598 15.9762 4.96767C15.9993 5.25105 16 5.6233 16 6.19995H17ZM15.9078 3.21799L15.4538 4.10899C15.6424 4.20508 15.7956 4.35828 15.8912 4.54603L16.7822 4.09204L17.6732 3.63805C17.3854 3.07315 16.9259 2.61439 16.3618 2.32698L15.9078 3.21799ZM4.2002 3V2C3.65663 2 3.18874 1.99922 2.80498 2.03057C2.40962 2.06286 2.01624 2.13416 1.63781 2.32698L2.0918 3.21799L2.54579 4.10899C2.59517 4.08383 2.69595 4.04613 2.9678 4.02393C3.25126 4.00078 3.62365 4 4.2002 4V3ZM1 6.19995H2C2 5.6234 2.00078 5.25114 2.02393 4.96783C2.04612 4.6962 2.0838 4.59549 2.10899 4.54603L1.21799 4.09204L0.32698 3.63805C0.134191 4.01642 0.0628722 4.40961 0.0305698 4.80495C-0.000777841 5.18861 0 5.6564 0 6.19995H1ZM2.0918 3.21799L1.63781 2.32698C1.07306 2.61473 0.614469 3.07382 0.32698 3.63805L1.21799 4.09204L2.10899 4.54603C2.205 4.35761 2.35788 4.20474 2.54579 4.10899L2.0918 3.21799ZM8.75 15V16C9.44036 16 10 15.4404 10 14.75H9H8C8 14.3358 8.33579 14 8.75 14V15ZM9 14.75H10V11.25H9H8V14.75H9ZM9 11.25H10C10 10.5596 9.44036 10 8.75 10V11V12C8.33579 12 8 11.6642 8 11.25H9ZM8.75 11V10H5.25V11V12H8.75V11ZM5.25 11V10C4.55964 10 4 10.5596 4 11.25H5H6C6 11.6642 5.66421 12 5.25 12V11ZM5 11.25H4V14.75H5H6V11.25H5ZM5 14.75H4C4 15.4404 4.55964 16 5.25 16V15V14C5.66421 14 6 14.3358 6 14.75H5ZM5.25 15V16H8.75V15V14H5.25V15ZM13 1H12V3H13H14V1H13ZM5 1H4V3H5H6V1H5Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <span className={styles.serviceBulletText}>
                    выбрать дату регистрации участников
                  </span>
                </div>
              </div>
            </div>
          </Card>

          <Card className={styles.introCard}>
            <div className={styles.introCardHeader}>
              <span className={styles.serviceLabel}>Сервис</span>
              <span className={styles.introCardTitle}>Редактор текстов</span>
            </div>
            <p className={styles.serviceDescription}>
              Позволяет создавать и редактировать 9 типов тестовых заданий и
              настраивать их по 7 параметрам
            </p>
            <Button size="s" fullWidth onClick={handleIntroNext}>
              Узнать больше о сервисе <ChevronRight />
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  if (step === "parameters") {
    return (
      <div className={styles.parameters}>
        <Card className={styles.parametersCard}>
          <div className={styles.parametersInner}>
            <div className={styles.parametersTitle}>Типы параметров:</div>
            <SelectList
              type="checkbox"
              items={PARAMETER_ITEMS.map(({ label, disabled }) => ({
                id: label,
                label,
                disabled,
              }))}

              selected={checkedItems}
              onSelect={toggleCheck}
            />
          </div>
          <Button
            size="s"
            disabled={checkedItems.size === 0}
            onClick={handleParametersNext}
            className={styles.parametersButton}
          >
            Продолжить <ChevronRight />
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.quiz}>
      <Card className={styles.quizCard}>
        <div className={styles.quizHeader}>
          <span className={styles.quizHeaderTitle}>Вопрос 1</span>
          <span className={styles.quizHeaderPecil}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                d="M1 16.5858H0C0 16.851 0.105358 17.1054 0.292895 17.2929C0.480433 17.4805 0.734788 17.5858 1.00001 17.5858L1 16.5858ZM1 12.5858L0.292892 11.8787C0.105357 12.0662 0 12.3206 0 12.5858H1ZM11.8686 1.71716L11.1615 1.01005L11.1615 1.01005L11.8686 1.71716ZM14.1313 1.71716L13.4242 2.42426V2.42426L14.1313 1.71716ZM15.8686 3.45442L16.5757 2.74731V2.74731L15.8686 3.45442ZM15.8686 5.71716L15.1615 5.01005V5.01005L15.8686 5.71716ZM5 16.5858L5.00001 17.5858C5.26522 17.5858 5.51957 17.4804 5.70711 17.2929L5 16.5858ZM16.5369 4.27681L17.4879 3.9678V3.9678L16.5369 4.27681ZM16.5369 4.89477L15.5858 4.58575V4.58575L16.5369 4.89477ZM12.691 1.04894L12.382 0.0978869V0.097887L12.691 1.04894ZM13.3091 1.04894L13.6181 0.097887V0.0978869L13.3091 1.04894ZM9.70711 3.8787C9.31658 3.48818 8.68342 3.48818 8.29289 3.8787C7.90237 4.26923 7.90237 4.90239 8.29289 5.29292L9 4.58581L9.70711 3.8787ZM12.2929 9.29292C12.6834 9.68344 13.3166 9.68344 13.7071 9.29292C14.0976 8.90239 14.0976 8.26923 13.7071 7.8787L13 8.58581L12.2929 9.29292ZM1 16.5858H2V12.5858H1H0V16.5858H1ZM1 12.5858L1.70711 13.2929L12.5757 2.42426L11.8686 1.71716L11.1615 1.01005L0.292892 11.8787L1 12.5858ZM14.1313 1.71716L13.4242 2.42426L15.1615 4.16152L15.8686 3.45442L16.5757 2.74731L14.8385 1.01005L14.1313 1.71716ZM15.8686 5.71716L15.1615 5.01005L4.29289 15.8787L5 16.5858L5.70711 17.2929L16.5757 6.42426L15.8686 5.71716ZM5 16.5858L4.99999 15.5858L0.999994 15.5858L1 16.5858L1.00001 17.5858L5.00001 17.5858L5 16.5858ZM15.8686 3.45442L15.1615 4.16152C15.3712 4.3712 15.4854 4.48649 15.5611 4.57568C15.6292 4.65596 15.6058 4.64724 15.5858 4.58583L16.5369 4.27681L17.4879 3.9678C17.3938 3.67806 17.2342 3.45615 17.0858 3.28131C16.9449 3.11539 16.7621 2.93365 16.5757 2.74731L15.8686 3.45442ZM15.8686 5.71716L16.5757 6.42426C16.7621 6.23792 16.9449 6.05618 17.0858 5.89025C17.2342 5.71541 17.3938 5.49351 17.4879 5.20379L16.5369 4.89477L15.5858 4.58575C15.6058 4.52436 15.6292 4.51565 15.5611 4.59591C15.4854 4.68509 15.3712 4.80038 15.1615 5.01005L15.8686 5.71716ZM16.5369 4.27681L15.5858 4.58583L15.5858 4.58575L16.5369 4.89477L17.4879 5.20379C17.6184 4.8021 17.6184 4.36948 17.4879 3.9678L16.5369 4.27681ZM11.8686 1.71716L12.5757 2.42426C12.7854 2.2146 12.9007 2.10042 12.9899 2.02472C13.0701 1.9566 13.0614 1.98006 13 2L12.691 1.04894L12.382 0.097887C12.0923 0.192017 11.8704 0.351577 11.6955 0.50001C11.5296 0.640867 11.3479 0.823696 11.1615 1.01005L11.8686 1.71716ZM14.1313 1.71716L14.8385 1.01005C14.6522 0.823753 14.4704 0.640915 14.3046 0.500081C14.1298 0.351649 13.9079 0.192038 13.6181 0.097887L13.3091 1.04894L13.0001 2C12.9386 1.98004 12.9299 1.95653 13.0101 2.02465C13.0993 2.10037 13.2145 2.21455 13.4242 2.42426L14.1313 1.71716ZM12.691 1.04894L13 2H13.0001L13.3091 1.04894L13.6181 0.0978869C13.2164 -0.032629 12.7837 -0.032629 12.382 0.0978869L12.691 1.04894ZM9 4.58581L8.29289 5.29292L12.2929 9.29292L13 8.58581L13.7071 7.8787L9.70711 3.8787L9 4.58581Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div className={styles.quizBody}>
          <div className={styles.quizBodyTitle}>Тип ответа</div>
          <SelectList
            type="radio"
            items={ANSWER_TYPE_ITEMS}
            selected={new Set(selectedAnswerId ? [selectedAnswerId] : [])}
            answerState={answerState}
            onSelect={handleAnswerSelect}
          />
        </div>
        <div className={styles.quizActions}>
          <Button
            size="s"
            fullWidth
            disabled={answerState !== "correct"}
            onClick={closeLocation}
          >
            Продолжить <ChevronRight />
          </Button>
        </div>
      </Card>
    </div>
  );
}
