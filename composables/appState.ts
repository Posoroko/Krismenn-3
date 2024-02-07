export const useAppState = () => {
    return useState<{ 
        languageSelectorOpen: boolean; 
        infoBoxOpen: boolean 
    }>('componentState', 
        () => ({ 
            languageSelectorOpen: false, 
            infoBoxOpen: false 
        })
    );
}