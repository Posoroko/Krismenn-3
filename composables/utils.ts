export const useDateToFrench = () => {
    return (_date: Date) => {
        let date = new Date(_date);
        const month = ("0" + date.getMonth()).slice(-2);
        const day = ("0" + date.getDate()).slice(-2);
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    }
};