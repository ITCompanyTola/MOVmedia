import { useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import { Card } from "../../components/ui/Card/Card";
import type { LocationScreenProps } from "./types";
import styles from "./SpaceCommonwealthLocation.module.css";
import { ChevronRight, ChevronUp, ChevronDown, Filter } from "lucide-react";
import { Text } from "../../components/ui/Text/Text";

import representativeFocused from "../../assets/images/persons/representative/focused.png";
import podlozhka from "../../assets/images/city/locations/space-commonwealth/podlozhka.png";
import profileImg from "../../assets/images/city/locations/space-commonwealth/profile.jpg";
import clsx from "clsx";

export function SpaceCommonwealthRepresendScreen({
  setReply,
  completeLocation,
  closeLocation,
}: LocationScreenProps) {
  const [step, setStep] = useState<"intro" | "screen">("intro");
  const [isCorrectChecked, setIsCorrectChecked] = useState(false);

  const handleNext = () => {
    setStep("screen");
    setReply({
      image: representativeFocused,
      text: "**Посмотрите, как удобно устроен поиск.** \nСразу видны достижения студента. Вы можете написать ему и пригласить на день открытых дверей",
    });
    completeLocation();
  };

  if (step === "screen") {
    return (
      <div className={styles.screen}>
        <div className={styles.screenImages}>
          <img src={podlozhka} className={styles.screenPodlozhka} alt="" />
          <img src={profileImg} className={styles.screenProfile} alt="" />
        </div>
        <Button
          size="s"
          onClick={closeLocation}
          className={styles.screenButton}
        >
          Продолжить <ChevronRight />
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.intro}>
      <Card className={clsx(styles.introCard, styles.selectCard)}>
        {/* Hint row */}
        <div className={styles.hintRow}>
          <div className={styles.hintIcon}>
            <Filter size={28} color="white" strokeWidth={1.5} />
          </div>
          <p className={styles.hintText}>
            Чтобы найти таланты, можно отфильтровать участников платформы
            по интересам или достижениям.{" "}
            <strong>
              Попробуйте выбрать фильтр «Международная Олимпиада (Китай)»
            </strong>
          </p>
        </div>

        {/* Filter section */}
        <div className={styles.filterSection}>
          {/* Олимпиада — expanded */}
          <div className={styles.filterGroup}>
            <div className={styles.filterGroupHeader}>
              <span className={styles.filterGroupTitle}>Олимпиада</span>
              <svg
                width="12"
                height="14"
                viewBox="0 0 14 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginRight: "10px" }}
              >
                <path
                  d="M7 15L7 1M13 7L7 1L1 7"
                  stroke="#4F525A"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            {/* Dropdown trigger */}
            <div className={styles.dropdownTrigger}>
              <span className={styles.dropdownTriggerText}>
                Выбрать олимпиаду
              </span>
              <ChevronUp size={20} color="#4F525A" />
            </div>

            {/* Dropdown list */}
            <div className={styles.dropdownList}>
              <label>
                <input type="checkbox" disabled />
                <span></span>
                <Text variant="body-s">СНГ дополнительный тур</Text>
              </label>
              <label>
                <input type="checkbox" disabled />
                <span></span>
                <Text variant="body-s">Международная Олимпиада (ОАЭ)</Text>
              </label>
              <label>
                <input
                  type="checkbox"
                  checked={isCorrectChecked}
                  onChange={(e) => setIsCorrectChecked(e.target.checked)}
                />
                <span></span>
                <Text variant="body-s">Международная Олимпиада (Китай)</Text>
              </label>
              <label>
                <input type="checkbox" disabled />
                <span></span>
                <Text variant="body-s">
                  Республиканская Олимпиада по физике
                </Text>
              </label>
            </div>
          </div>

          {/* Учебное заведение — collapsed */}
          <div className={styles.filterGroupCollapsed}>
            <span className={styles.filterGroupTitle}>Учебное заведение</span>
            <ChevronDown size={20} color="#4F525A" />
          </div>
        </div>

        <Button
          size="s"
          fullWidth
          disabled={!isCorrectChecked}
          onClick={handleNext}
          className={styles.introButton}
        >
          Продолжить <ChevronRight />
        </Button>
      </Card>
    </div>
  );
}
