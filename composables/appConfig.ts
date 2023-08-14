export const useActiveTheme = () => {
    return useState<string>('activeTheme', () => "blue")
}

export const useThemes =  () => {
    const themes = {
        blue: {
            backgroundImage: "blue.webp"
        },
        orange: {
            backgroundImage: "orange.webp"
        }
    }

    return useState<typeof themes>('themes', () => themes)
}