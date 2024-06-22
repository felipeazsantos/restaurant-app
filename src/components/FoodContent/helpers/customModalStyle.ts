export const customModalStyle = (isMobScreen: boolean) => {
    return {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: isMobScreen ? '100%' : '30%',
        height: isMobScreen ? '100%' : '90%',
        bgcolor: '#F8F9FA',
        boxShadow: 24,
        overflowY: 'scroll',
        overflowX: 'hidden'
    }
};
