import { useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import {
  Card,
  CardCards,
  CardsCard,
  CardTitle,
} from "../../components/ui/Card/Card";
import { Text } from "../../components/ui/Text/Text";
import type { LocationScreenProps } from "./types";
import styles from "./PosterSquareLocation.module.css";
import expertStyles from "./PosterSquareExpertScreen.module.css";
import { ChevronRight, Airplay, Filter, Heart } from "lucide-react";

import expertMain from "../../assets/images/persons/expert/main.png";
import expertTalk2 from "../../assets/images/persons/expert/talk-2.png";
import eventsListItem1 from "../../assets/images/city/locations/poster-square/events-list-item-1.png";
import eventsListItem2 from "../../assets/images/city/locations/poster-square/events-list-item-2.png";
import eventsListItem3 from "../../assets/images/city/locations/poster-square/events-list-item-3.png";
import clsx from "clsx";

const arrowDownIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 5V19M6 13L12 19L18 13"
      stroke="#4F525A"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const chevronUpIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#poster-expert-chevron)">
      <path
        d="M12 7.584L6 13.584L8.001 15.584L12 11.583L15.999 15.584L18 13.584L12 7.584Z"
        fill="#95989F"
      />
    </g>
    <defs>
      <clipPath id="poster-expert-chevron">
        <rect
          width="24"
          height="24"
          fill="white"
          transform="matrix(1 0 0 -1 0 24)"
        />
      </clipPath>
    </defs>
  </svg>
);

type Step = "intro" | "choice" | "events";

export function PosterSquareExpertScreen({
  isCompleted,
  setReply,
  completeLocation,
  closeLocation,
}: LocationScreenProps) {
  const [step, setStep] = useState<Step>(isCompleted ? "events" : "intro");
  const [isCybersecurityChecked, setIsCybersecurityChecked] = useState(false);

  const handleStart = () => {
    setStep("choice");
    setReply({
      image: expertMain,
      text: "Попробуйте выбрать фильтр **«Кибербезопасность»**, чтобы узнать о ближайших мероприятиях по этой теме",
    });
  };

  const handleChoice = () => {
    if (!isCybersecurityChecked) return;
    completeLocation();
    setStep("events");
    setReply({
      image: expertTalk2,
      text: "Вот так платформа помогает находить события, которые подходят именно вам. Осталось выбрать, что ближе: вебинар, мастер-класс или форум.\n**Можем двигаться дальше**",
    });
  };

  if (step === "choice") {
    return (
      <div className={styles.choice}>
        <Card className={clsx(styles.expertChoiceCard)}>
          <div className={styles.choiceBlocks}>
            <div className={styles.choiceBlock}>
              <Text variant="body-m" className={styles.choiceBlockTitle}>
                Направления
              </Text>
              <div className={styles.choiceBlockIcon}>{arrowDownIcon}</div>
              <div className={styles.choiceBlockSelect}>
                <Text variant="body-s" className={styles.choiceBlockSelectText}>
                  Выбрать направления
                </Text>
                <div>{chevronUpIcon}</div>
                <div className={styles.choiceBlockDropdown}>
                  <label>
                    <input type="checkbox" disabled />
                    <span></span>
                    <Text variant="body-s">Финансовая грамотность</Text>
                  </label>
                  <label>
                    <input type="checkbox" disabled />
                    <span></span>
                    <Text variant="body-s">Управление проектами</Text>
                  </label>
                  <label>
                    <input type="checkbox" disabled />
                    <span></span>
                    <Text variant="body-s">Экономика</Text>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={isCybersecurityChecked}
                      onChange={(e) =>
                        setIsCybersecurityChecked(e.target.checked)
                      }
                    />
                    <span></span>
                    <Text variant="body-s">Кибербезопасность</Text>
                  </label>
                  <label>
                    <input type="checkbox" disabled />
                    <span></span>
                    <Text variant="body-s">Исследования</Text>
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.choiceBlock}></div>
            <div className={styles.choiceBlock}>
              <Text variant="body-m" className={styles.choiceBlockTitle}>
                Формат
              </Text>
              <div className={styles.choiceBlockIcon}>{arrowDownIcon}</div>
            </div>
            <div className={styles.choiceBlock}>
              <Text variant="body-m" className={styles.choiceBlockTitle}>
                Статус
              </Text>
              <div className={styles.choiceBlockIcon}>{arrowDownIcon}</div>
            </div>
          </div>
          <Button
            size="s"
            fullWidth
            disabled={!isCybersecurityChecked}
            onClick={handleChoice}
          >
            Продолжить <ChevronRight />
          </Button>
        </Card>
      </div>
    );
  }

  if (step === "events") {
    return (
      <div className={styles.events}>
        <Card className={styles.expertEventsCard}>
          <div className={styles.filter}>
            <Text variant="body-s">Направления</Text>
            <div className={styles.filterBadge}>
              <Text variant="caption">Кибербезопасность</Text>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 16L8 8M16 8L8 16"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <div className={styles.eventsList}>
            <Text variant="body-m" className={styles.eventsListTitle}>
              Мероприятия
            </Text>
            <div className={styles.eventsListItems}>
              <div className={styles.eventsListItem}>
                <div className={styles.eventsListItemText}>
                  <div className={styles.eventsListItemHash}>
                    <Text variant="caption">#Кибербезопасность</Text>
                    <Text variant="caption">#Форум</Text>
                    <Text variant="caption">#Оффлайн</Text>
                  </div>
                  <Text variant="body-m" className={styles.eventsListItemTitle}>
                    Конференция GLOBAL <br /> TЕCH FORUM 2026
                  </Text>
                </div>
                <div className={styles.eventsListItemImage}>
                  <img src={eventsListItem1} alt="" />
                </div>
              </div>
              <div className={styles.eventsListItem}>
                <div className={styles.eventsListItemText}>
                  <div className={styles.eventsListItemHash}>
                    <Text variant="caption">#Кибербезопасность</Text>
                    <Text variant="caption">#Воркшоп</Text>
                    <Text variant="caption">#Онлайн</Text>
                  </div>
                  <Text variant="body-m" className={styles.eventsListItemTitle}>
                    Международняя летняя онлайн-школа финансовой разведки
                  </Text>
                </div>
                <div className={styles.eventsListItemImage}>
                  <img src={eventsListItem2} alt="" />
                </div>
              </div>
              <div className={styles.eventsListItem}>
                <div className={styles.eventsListItemText}>
                  <div className={styles.eventsListItemHash}>
                    <Text variant="caption">#Кибербезопасность</Text>
                    <Text variant="caption">#Конференция</Text>
                    <Text variant="caption">#Оффлайн</Text>
                  </div>
                  <Text variant="body-m" className={styles.eventsListItemTitle}>
                    Уральский форум «Кибербезопасность в финансах»
                  </Text>
                </div>
                <div className={styles.eventsListItemImage}>
                  <img src={eventsListItem3} alt="" />
                </div>
              </div>
            </div>
          </div>
          <Button size="s" fullWidth onClick={closeLocation}>
            Продолжить <ChevronRight />
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.intro}>
      <Card className={expertStyles.introCard}>
        <CardTitle>
          Будьте в курсе ярких событий платформы Содружество
        </CardTitle>
        <CardCards direction="vertical">
          <CardsCard
            direction="horizontal"
            fill
            icon={<Airplay size={32} color="#1D5184" />}
          >
            Смотрите анонсы конференций, мастер-классов, форумов
          </CardsCard>
          <CardsCard
            direction="horizontal"
            fill
            icon={<Filter size={32} color="#1D5184" />}
          >
            Фильтруйте события по теме и формату
          </CardsCard>
          <CardsCard
            direction="horizontal"
            fill
            icon={<Heart size={32} color="#1D5184" />}
          >
            Выбирайте мероприятия, на которые хотите пойти
          </CardsCard>
        </CardCards>
        <Button size="s" fullWidth onClick={handleStart}>
          Продолжить <ChevronRight />
        </Button>
      </Card>
    </div>
  );
}
