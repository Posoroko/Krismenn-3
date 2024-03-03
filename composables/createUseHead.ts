export const useCreateUseHead = (pageRef: string, ogUrl: string, t: Function) => {
    return {
        title: t(`pages.${pageRef}.ogTitle`),
        description: t(`pages.${pageRef}.ogDescription`),
        meta: [
            {
                property: 'title',
                content: t(`pages.${pageRef}.ogTitle`)
            },
            {
                property: 'og:title',
                content: t(`pages.${pageRef}.ogTitle`)
            },
            {
                property: 'description',
                content: t(`pages.${pageRef}.ogDescription`)
            },
            {
                property: 'og:description',
                content: t(`pages.${pageRef}.ogDescription`)
            },
            {
                property: 'og:url',
                content: ogUrl
            },
            {
                property: 'twitter:title',
                content: t(`pages.${pageRef}.ogTitle`)
            },
            {
                property: 'twitter:description',
                content: t(`pages.${pageRef}.ogDescription`)
            },
        ]
    }
}