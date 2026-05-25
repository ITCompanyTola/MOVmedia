import clsx from "clsx";

import styles from "./MapPage.module.css";
import { Footer } from "../../components/ui/Footer/Footer";
import { useAppStore } from "../../store/useAppStore";
import data from "../../data/data";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Reply } from "../../components/ui/Reply/Reply";

export function MapPage() {
    const navigate = useNavigate();
    const { person } = useAppStore();
    const [startStep, setStartStep] = useState(0);

    const handleNextStartStep = () => {
        setStartStep((prev) => prev + 1);
    };

    if (!person) {
        navigate("/");
        return null;
    }

    const personData = data.data.persons.find((p) => p.id === person.id);

    if (!personData) {
        return null;
    }

    const reply = personData.replies?.start[startStep];

    return (
        <div className={clsx(styles.mapPage)}>
            <div className={clsx("layout", styles.mapPageLayout)}>
                {reply && (
                    <Reply
                        align={
                            (personData.replies?.align as "left" | "right") ||
                            "left"
                        }
                        message="aside"
                        // @ts-ignore
                        reply={reply}
                        onClick={handleNextStartStep}
                    />
                )}
                <div></div>
                <Footer theme="light" />
            </div>
        </div>
    );
}
