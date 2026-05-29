import { useState } from "react";
import { Button } from "../../components/ui/Button/Button";
import type { LocationScreenProps } from "./types";
import styles from "./LibraryExpertLocation.module.css";
import { ChevronDown, ChevronUp, ChevronRight } from "lucide-react";

import expertNotBottom from "../../assets/images/persons/expert/not-bottom.png";

type TabId = "corruption" | "financial" | "terrorism";

const TABS: {
  id: TabId;
  label: string;
  iconBg: string;
  icon: React.ReactNode;
  cards: { type: string; title: string; text?: string }[];
}[] = [
    {
      id: "corruption",
      label: "Коррупция",
      iconBg: "#F46248",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M8.49992 15.5834H11.0046C12.1559 15.5833 13.2953 15.817 14.3536 16.2705L21.0473 19.1392C21.5274 19.3458 21.9365 19.6883 22.2242 20.1246C22.5119 20.5608 22.6657 21.0717 22.6666 21.5943C22.6666 22.5775 21.869 23.3751 20.8858 23.3751H19.9749C18.9466 23.3753 17.9277 23.1791 16.973 22.7971L14.8749 21.9584M2.83325 25.5001V17.0001C2.83325 16.3413 2.83325 16.0127 2.9055 15.7421C3.00211 15.3821 3.19172 15.0538 3.45529 14.7902C3.71887 14.5266 4.04715 14.337 4.40717 14.2404C4.68059 14.1667 5.00925 14.1667 5.66659 14.1667C6.32392 14.1667 6.654 14.1667 6.92459 14.239C7.28461 14.3356 7.61288 14.5252 7.87646 14.7888C8.14004 15.0524 8.32965 15.3806 8.42625 15.7407C8.49992 16.0127 8.49992 16.3427 8.49992 17.0001V25.5001C8.49992 26.1588 8.49992 26.4889 8.42767 26.7581C8.33106 27.1181 8.14146 27.4464 7.87788 27.71C7.6143 27.9735 7.28602 28.1631 6.926 28.2597C6.65259 28.3334 6.32392 28.3334 5.66659 28.3334C5.00925 28.3334 4.67917 28.3334 4.40859 28.2612C4.04856 28.1646 3.72029 27.975 3.45671 27.7114C3.19313 27.4478 3.00352 27.1195 2.90692 26.7595C2.83325 26.4875 2.83325 26.1574 2.83325 25.5001Z"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.8333 23.375H29.1479C29.6346 23.3754 30.1048 23.5515 30.4719 23.8711C30.839 24.1907 31.0782 24.6321 31.1457 25.1141C31.2131 25.5961 31.1041 26.0862 30.8388 26.4942C30.5735 26.9022 30.1697 27.2007 29.7018 27.3346L22.3068 29.4483C20.9441 29.838 19.5013 29.8507 18.1319 29.4851L8.5 26.9167"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M25.4999 15.5833C28.6295 15.5833 31.1666 13.0463 31.1666 9.91667C31.1666 6.78705 28.6295 4.25 25.4999 4.25C22.3703 4.25 19.8333 6.78705 19.8333 9.91667C19.8333 13.0463 22.3703 15.5833 25.4999 15.5833Z"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      cards: [
        {
          type: "Книга",
          title:
            "Методологические основы борьбы с коррупцией применительно к сфере противодействия отмыванию преступных доходов и финансированию терроризма",
        },
        {
          type: "Документ",
          title: "Конвенция против коррупции (2003 г.)",
          text: "Конвенция Организации Объединённых Наций против коррупции (англ. United Nations Convention Against Corruption; UNCAC) — международно-правовой документ против коррупции, принятый Генеральной Ассамблеей ООН.",
        },
      ],
    },
    {
      id: "financial",
      label: "Финансовая безопасность",
      iconBg: "#3990F9",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
        >
          <path
            d="M33 18C33 9.7155 26.2845 3 18 3C9.7155 3 3 9.7155 3 18C3 26.2845 9.7155 33 18 33"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.5001 3.07495C19.5001 3.07495 24.0001 8.99995 24.0001 18M16.5001 32.925C16.5001 32.925 12.0001 27 12.0001 18C12.0001 8.99995 16.5001 3.07495 16.5001 3.07495M3.94507 23.25H18.0001M3.94507 12.75H32.0551"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M28 34C31.3137 34 34 31.3137 34 28C34 24.6863 31.3137 22 28 22C24.6863 22 22 24.6863 22 28C22 31.3137 24.6863 34 28 34Z"
            stroke="white"
            stroke-width="2.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      cards: [
        {
          type: "Книга",
          title:
            "Современная система противодействия отмыванию преступных доходов и финансированию терроризма",
        },
        {
          type: "Статья",
          title:
            "Влияние нерегулируемого рынка криптовалют на экономическую безопасность Российской Федерации",
        },
      ],
    },
    {
      id: "terrorism",
      label: "Финансирование терроризма",
      iconBg: "#82c7e1",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
        >
          <path
            d="M21.3334 4H25.3334C26.0407 4 26.7189 4.28095 27.219 4.78105C27.7191 5.28115 28.0001 5.95942 28.0001 6.66667V10.6667M10.6667 28H6.66675C5.9595 28 5.28123 27.719 4.78113 27.219C4.28103 26.7189 4.00008 26.0406 4.00008 25.3333V21.3333M14.6667 5.33333V13.3333C14.6667 14.8067 11.9801 16 8.66675 16C5.35341 16 2.66675 14.8067 2.66675 13.3333V5.33333M26.0001 18.6667V21.3333H20.6667V18.6667C20.6667 17.9594 20.9477 17.2811 21.4478 16.781C21.9479 16.281 22.6262 16 23.3334 16C24.0407 16 24.7189 16.281 25.219 16.781C25.7191 17.2811 26.0001 17.9594 26.0001 18.6667ZM17.3334 21.3333H29.3334V29.3333H17.3334V21.3333Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M14.6667 9.33341C14.6667 10.8067 11.9801 12.0001 8.66675 12.0001C5.35341 12.0001 2.66675 10.8067 2.66675 9.33341M14.6667 5.33341C14.6667 6.80675 11.9801 8.00008 8.66675 8.00008C5.35341 8.00008 2.66675 6.80675 2.66675 5.33341C2.66675 3.86008 5.35341 2.66675 8.66675 2.66675C11.9801 2.66675 14.6667 3.86008 14.6667 5.33341Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      cards: [
        {
          type: "Документ",
          title:
            "Цифровая идентификация как инструмент противодействия отмыванию доходов и финансированию терроризма",
        },
        {
          type: "Книга",
          title:
            "Особенности национальных систем ПОД/ФТ государств Евразийского региона. Том 3. Республика Таджикистан",
        },
      ],
    },
  ];

export function LibraryExpertScreen({
  isCompleted,
  setReply,
  completeLocation,
  closeLocation,
}: LocationScreenProps) {
  const [openTab, setOpenTab] = useState<TabId | null>(null);
  const [hasOpenedAny, setHasOpenedAny] = useState(isCompleted);

  const handleTabClick = (id: TabId) => {
    setOpenTab((prev) => (prev === id ? null : id));
    if (!hasOpenedAny) {
      setHasOpenedAny(true);
      setReply({
        image: expertNotBottom,
        text: "**Вот такие примеры материалов можете найти на сайте**\nКурсы, статьи, методички — всё структурировано по темам, и ваш материал не затеряется",
      });
    }
  };

  const handleContinue = () => {
    completeLocation();
    closeLocation();
  };

  return (
    <div className={styles.slot}>
      <div className={styles.card}>
        <div className={styles.tabs}>
          {TABS.map((tab) => {
            const isOpen = openTab === tab.id;
            return (
              <div key={tab.id} className={styles.tabGroup}>
                <div
                  className={`${styles.tabHeader} ${isOpen ? styles.tabHeaderActive : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <div className={styles.tabHeaderLeft}>
                    <div
                      className={styles.tabIcon}
                      style={{ background: tab.iconBg }}
                    >
                      {tab.icon}
                    </div>
                    <span className={styles.tabTitle}>{tab.label}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={24} color="#131418" />
                  ) : (
                    <ChevronDown size={24} color="#131418" />
                  )}
                </div>

                {isOpen && (
                  <div className={styles.tabContent}>
                    <div className={styles.tabCards}>
                      {tab.cards.map((card, i) => (
                        <div key={i} className={styles.tabCard}>
                          <span className={styles.tabCardBadge}>
                            {card.type}
                          </span>
                          <p className={styles.tabCardTitle}>{card.title}</p>
                          {card.text && (
                            <p className={styles.tabCardText}>{card.text}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {hasOpenedAny && (
          <Button size="s" fullWidth onClick={handleContinue}>
            Продолжить <ChevronRight />
          </Button>
        )}
      </div>
    </div>
  );
}
