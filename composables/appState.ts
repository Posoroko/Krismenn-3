export const useAppState = () => {
    return useState<{ 
        languageSelectorOpen: boolean; 
        infoBoxOpen: boolean,
        backgroundFaded: boolean
    }>('componentState', 
        () => ({ 
            languageSelectorOpen: false, 
            infoBoxOpen: false,
            backgroundFaded: false
        })
    );
}