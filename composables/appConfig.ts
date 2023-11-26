export const useActiveThemeId = () => {
    return useState<number>('activeThemeId', () => 0);
}

export const useThemes =  () => {
    const themes = [
        {   
            id: 0,
            name: "blue",
            backgroundImage: "blue.webp",
            buttonColor: "#0a2d51",
            shadowColor: "0 0 10px 5px rgba(112, 248, 255, 0.569)",
            insetShadowColor: "inset 0 0 20px 5px rgba(211, 253, 255, 0.164)",
            borderColor: "rgb(255, 255, 255)",
            panelTitleBackgroundColor: "linear-gradient(0deg, transparent 0%, rgba(70, 180, 253, 0.274) 100%)"
        },
        {
            id: 1,
            name: "orange",
            backgroundImage: "orange.webp",
            buttonColor: "#ff7b00",
            shadowColor: "0 0 10px 5px rgba(255, 225, 57, 0.450)",
            insetShadowColor: "inset 0 0 20px 5px rgba(255, 225, 57, 0.250)",
            borderColor: "rgb(255, 255, 255)",
            panelTitleBackgroundColor: "linear-gradient(0deg, transparent 0%, rgba(255, 217, 146, 0.300) 100%)"
        }
    ]

    return useState<typeof themes>('themes', () => themes);
}