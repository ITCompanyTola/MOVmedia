import { useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import type { LocationScreenProps } from "./types";
import styles from "./OlympicCenterRepresentativeLocation.module.css";
import { ChevronRight, Check, Pencil } from "lucide-react";

import representativeMain from "../../assets/images/persons/representative/main.png";
import representativeFocused from "../../assets/images/persons/representative/focused.png";
import representativeTalk from "../../assets/images/persons/representative/talk.png";

const PARAMETER_ITEMS = [
  "Количество участников",
  "Форма участия (индивидуальная / командная)",
  "Тип заданий",
  "Критерии оценки",
  "Состав и права жюри",
  "Период проведения",
  "Номинации и категории",
];

const ANSWER_TYPE_ITEMS = [
  { id: "1", label: "Одиночный выбор" },
  { id: "2", label: "Множественный выбор" },
  { id: "3", label: "Текстовый ответ" },
  { id: "4", label: "Числовой ответ" },
  { id: "5", label: "Ранжирование", correct: true },
  { id: "6", label: "Сопоставление" },
  { id: "7", label: "Заполнение пропусков" },
  { id: "8", label: "Загрузка файла" },
  { id: "9", label: "Развёрнутый ответ" },
];

type Step = "intro" | "parameters" | "answer-type";
type AnswerState = "idle" | "correct" | "wrong";

export function OlympicCenterRepresentativeScreen({
  person,
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
      image: representativeTalk,
      text: "Здесь вы можете настроить параметры олимпиады. Выберите нужные типы параметров",
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
    setReply({
      image: representativeFocused,
      text: "Отлично! Теперь выберите подходящий тип ответа для вопроса",
    });
  };

  const handleAnswerSelect = (id: string) => {
    if (answerState === "correct") return;

    const item = ANSWER_TYPE_ITEMS.find((a) => a.id === id);
    if (!item) return;

    setSelectedAnswerId(id);

    if (item.correct) {
      setAnswerState("correct");
      completeLocation();
      setReply({
        image: representativeMain,
        text: "**Верно!** Ранжирование позволяет участникам расставить элементы в нужном порядке — это один из самых наглядных типов ответа",
      });
    } else {
      setAnswerState("wrong");
      setReply({
        image: representativeTalk,
        text: "Не совсем. Подумайте, какой тип лучше всего подходит для упорядочивания элементов",
      });
      setTimeout(() => {
        setAnswerState("idle");
        setSelectedAnswerId(null);
      }, 2000);
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 2v6h6M16 13H8M16 17H8M10 9H8"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={styles.serviceBulletText}>
                    определить количество номинаций
                  </span>
                </div>
                <div className={styles.serviceBulletRow}>
                  <div className={styles.serviceBulletIconBox}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="9"
                        cy="7"
                        r="4"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={styles.serviceBulletText}>
                    назначить членов жюри
                  </span>
                </div>
                <div className={styles.serviceBulletRow}>
                  <div className={styles.serviceBulletIconBox}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect
                        x="3"
                        y="4"
                        width="18"
                        height="18"
                        rx="2"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 2v4M8 2v4M3 10h18"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
            <div className={styles.checkboxList}>
              {PARAMETER_ITEMS.map((item) => (
                <label
                  key={item}
                  className={styles.checkboxItem}
                  onClick={() => toggleCheck(item)}
                >
                  <div
                    className={`${styles.checkboxBox} ${checkedItems.has(item) ? styles.checkboxBoxChecked : ""
                      }`}
                  >
                    {checkedItems.has(item) && (
                      <Check size={12} color="white" strokeWidth={3} />
                    )}
                  </div>
                  <span className={styles.checkboxLabel}>{item}</span>
                </label>
              ))}
            </div>
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
          <Pencil size={18} color="#F46248" />
        </div>
        <div className={styles.quizBody}>
          <div className={styles.quizBodyTitle}>Тип ответа</div>
          <div className={styles.radioList}>
            {ANSWER_TYPE_ITEMS.map((item) => {
              const isSelected = selectedAnswerId === item.id;
              const itemState =
                answerState === "correct" && isSelected
                  ? "correct"
                  : answerState === "wrong" && isSelected
                    ? "wrong"
                    : "idle";

              return (
                <div
                  key={item.id}
                  className={`${styles.radioItem} ${itemState === "correct"
                      ? styles.radioItemCorrect
                      : itemState === "wrong"
                        ? styles.radioItemWrong
                        : isSelected && answerState === "idle"
                          ? styles.radioItemSelected
                          : ""
                    }`}
                  onClick={() => handleAnswerSelect(item.id)}
                >
                  <div
                    className={`${styles.radioCircle} ${itemState === "correct"
                        ? styles.radioCircleCorrect
                        : isSelected
                          ? styles.radioCircleFilled
                          : ""
                      }`}
                  >
                    {isSelected && (
                      <div
                        className={`${styles.radioDot} ${itemState === "correct" ? styles.radioDotCorrect : ""
                          }`}
                      />
                    )}
                  </div>
                  <span className={styles.radioLabel}>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        {answerState === "correct" && (
          <div className={styles.quizActions}>
            <Button size="s" fullWidth onClick={closeLocation}>
              Продолжить <ChevronRight />
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
