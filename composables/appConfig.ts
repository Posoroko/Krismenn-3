export const useTheme = () => {
    return useState<string>('theme', () => "1")
}