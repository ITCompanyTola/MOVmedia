// data.ts
import schoolboyMain from "../assets/images/persons/schoolboy/main.png";
import studentMain from "../assets/images/persons/student/main.png";
import expertMain from "../assets/images/persons/expert/main.png";
import representativeMain from "../assets/images/persons/representative/main.png";

const data = {
    data: {
        persons: [
            {
                id: "schoolboy",
                name: "Артем",
                role: "Школьник",
                images: {
                    main: schoolboyMain,
                },
            },
            {
                id: "student",
                role: "Студент",
                name: "Диана",
                images: {
                    main: studentMain,
                },
            },
            {
                id: "expert",
                role: "Эксперт",
                name: "Екатерина",
                images: {
                    main: expertMain,
                },
            },
            {
                id: "representative",
                role: "Представитель вуза",
                name: "Алексей",
                images: {
                    main: representativeMain,
                },
            },
        ],
    },
};

export default data;
