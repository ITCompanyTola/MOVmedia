import { useEffect } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import styles from "./Modal.module.css";
import { useAppStore } from "../../../store/useAppStore";
import { Text } from "../Text/Text";

import qr from "../../../assets/images/components/modal/qr.png";
import { Button } from "../Button/Button";

export function Modal() {
    const { activeModal, closeModal } = useAppStore();

    useEffect(() => {
        if (!activeModal) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeModal();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [activeModal, closeModal]);

    if (!activeModal) {
        return null;
    }

    return createPortal(
        <div className={styles.modal}>
            <div className={clsx(styles.overlay, "bg")} onClick={closeModal} />
            <div className={styles.dialog} role="dialog" aria-modal="true">
                {activeModal === "merch" && (
                    <div className={styles.content}>
                        <div className={styles.header}>
                            <Text variant="body-l" className={styles.title}>
                                Регистируйтесь на сайте и попробуйте все
                                возможности платформы Содружество!
                            </Text>
                            <Text variant="body-m">
                                Сканируйте QR-код и получайте мерч
                                за регистрацию
                            </Text>
                        </div>
                        <div className={styles.qr}>
                            <img src={qr} alt="QR" />
                            <Text variant="body-m" className={styles.site}>
                                sodrujestvo.org/ru
                            </Text>
                        </div>
                        <Button size="s" onClick={closeModal}>
                            Закрыть
                        </Button>
                    </div>
                )}
            </div>
        </div>,
        document.body,
    );
}
