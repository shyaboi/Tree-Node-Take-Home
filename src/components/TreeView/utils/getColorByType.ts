export const getColorByType = (type: string | null | undefined): string => {
    switch (type) {
        case "db":
        case "data":
            return "text-blue-600";
        case "table":
            return "text-red-600";
        case "model":
            return "text-purple-600";
        case "view":
            return "text-green-600";
        case "agent":
            return "text-orange-400";
        default:
            return "text";
    }
};
