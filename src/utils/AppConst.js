export const AppColors = {
    Primary: '#3498db',
    Secondary: '#f1c40f',
    Dark: '#34495e',
    Red: '#e74c3c',
    Green: '#2ecc71',
};

export const randomColor = () => {
    const colors = [
        AppColors.Primary,
        AppColors.Secondary,
        AppColors.Green,
        AppColors.Red,
    ];

    const randomIndex = Math.floor(Math.random() * 4) + 0;
    return colors[randomIndex];
}