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

export const useFormatItems = () => {
    return (items: any[], key: string) => {
        let formatedItems: [] = [];
        items.forEach((item) => {

            let temp: object = {
                id: `${item.id}`,
                name: item.name,
                slug: item.slug,
                logo: item.logo,
                image: item.image,
                fr: {},
                en: {},
                bzh: {}
            }

            item.translations.forEach((translation: object) => {
                let keys = Object.keys(translation);
                
                keys.forEach((key) => {
                    temp[translation.language_key][key] = translation[key];
                })

            })

            formatedItems.push(temp);
        })

        return formatedItems;
    }
}