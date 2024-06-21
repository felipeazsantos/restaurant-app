export const selectedStyle = (selected?: boolean, primaryColour?: string) => {
    if (selected) {
        return { height: 86, width: 86, borderRadius: '50%', outline: `2px solid ${primaryColour}` }
    }
    return {}
}