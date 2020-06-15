import { AppColors } from "./AppConst";

export const randomColor = () => {
    const colors = [
        AppColors.Primary,
        AppColors.Secondary,
        AppColors.Green,
        AppColors.Red,
    ];
    const randomIndex = Math.floor(Math.random() * 4) + 0;

    return colors[randomIndex];
};