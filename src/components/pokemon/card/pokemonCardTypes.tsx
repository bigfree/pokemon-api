import {FC, Fragment, useState} from "react";
import {PokemonType} from "pokenode-ts";
import {Box} from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";

type PokemonCardTypesProps = {
    size?: number;
    pokemonType: PokemonType;
}

const PokemonCardTypes: FC<PokemonCardTypesProps> = (props: PokemonCardTypesProps): JSX.Element => {
    const [sizeWidth] = useState<number>(props.size ?? 32);
    const [sizeHeight] = useState<number>(props.size ?? 32);
    const [typeName] = useState<string>(props.pokemonType.type.name);

    const typeSrc: string = new URL(
        `/src/assets/moves/types/${typeName}.svg`,
        import.meta.url
    ).href;

    return (
        <Fragment>
            <Box sx={{
                backgroundColor: `types.${typeName}.background`,
                borderRadius: '100%',
                border: '2px solid',
                borderColor: `types.${typeName}.border`,
                boxShadow: 'inset 2px 2px',
                color: `types.${typeName}.shadow`,
                width: sizeWidth,
                height: sizeHeight,
                mr: 0.5,
            }}>
                <AspectRatio variant={'plain'} ratio={1} objectFit={'contain'} maxHeight={sizeHeight}>
                    <img src={typeSrc} alt={`Pokemon type ${typeName}`} loading={'lazy'}/>
                </AspectRatio>
            </Box>
        </Fragment>
    );
}
export default PokemonCardTypes;