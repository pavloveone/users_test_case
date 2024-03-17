export const convertDate = (str: string): string => {
    const date: Date = new Date(str);
    const day: number = date.getDate();
    const month: string = date.toLocaleString("en-US", { month: "long" });
    const year: number = date.getFullYear();
    return `${day} ${month} ${year}`;
};

export const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned = phoneNumber.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(.*)$/);
    if (match) {
        return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return phoneNumber;
}