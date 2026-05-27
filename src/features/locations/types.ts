import type { ReactNode } from "react";
import type { LocationData, LocationId, PersonData, ReplyData } from "../../data/data";

export type LocationBackgroundVariant = "main" | "error" | "complete";

export type LocationScreenProps = {
    location: LocationData;
    person: PersonData;
    isCompleted: boolean;
    setReply: (reply: ReplyData) => void;
    setBackgroundVariant: (variant: LocationBackgroundVariant) => void;
    completeLocation: () => void;
    closeLocation: () => void;
};

export type LocationModule = {
    id: LocationId;
    background?: string;
    backgroundError?: string;
    backgroundComplete?: string;
    getInitialReply: (person: PersonData) => ReplyData;
    render: (props: LocationScreenProps) => ReactNode;
};
