import iconsSprite from "../../assets/sprite/sprite.svg"

type SpriteProps = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({iconId, width, height, viewBox}: SpriteProps) => {
    return (
        <svg width={width || "100"}
             height={height || "100"}
             viewBox={viewBox || "0 0 100 100"}
             fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconsSprite}#${iconId}`}></use>
        </svg>
    );
};
