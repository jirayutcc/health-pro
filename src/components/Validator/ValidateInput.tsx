const ValidateInput = (value: string | number | null | undefined): boolean => {
    if (value === null || value === undefined) {
        return false;
    }

    if (typeof value === "string") {
        value = value.trim();
    }

    return value !== "" && !isNaN(Number(value));
};

export default ValidateInput;
