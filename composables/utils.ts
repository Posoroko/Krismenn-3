export const useDateToLocale = () => {
    return (locale: string, _date: Date) => {
        let date = new Date(_date);
        const month = ("0" + (date.getMonth() + 1)).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const year = date.getFullYear();

        if(locale === 'fr') {
            return `${day}|${month}|${year}`;
        }

        return `${month}|${day}|${year}`;

    }
};