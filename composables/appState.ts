export const useAppState = () => {
    return useState<{ 
        colorMode: string,
        languageSelectorOpen: boolean; 
        infoBoxOpen: boolean,
        homepageUrls: Array<string>,
        backgroundFaded: boolean,
        pageTransition: string
    }>('appState', 
        () => ({ 
            colorMode: 'blue',
            languageSelectorOpen: false, 
            infoBoxOpen: false,
            homepageUrls: [ '/en', '/fr', '/bzh', '/'],
            backgroundFaded: false,
            pageTransition: ''
        })
    );
}