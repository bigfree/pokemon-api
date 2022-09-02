import {FC, Fragment} from "react";
import {Button} from "@mui/joy";
import {useNavigate} from "react-router-dom";

type AsideButtonType = {
    iconUrl: string;
    navigate: string;
    name: string;
}

const AsideButton: FC<AsideButtonType> = (props: AsideButtonType): JSX.Element => {
    const navigate = useNavigate();

    return (
        <Fragment>
            <Button
                variant={'outlined'}
                color={'neutral'}
                startIcon={<img src={props.iconUrl} loading={'lazy'} alt=""/>}
                onClick={() => navigate(props.navigate)}
                sx={{
                    fontSize: 13,
                    borderColor: '#e6da6e',
                    backgroundColor: '#f5e975',
                    height: 'auto',
                    display: 'flex',
                    flexFlow: 'column',
                    alignItems: 'center',
                    borderRadius: 4,
                    boxShadow: '2px 2px #f5e975',
                    p: 1,
                    maxWidth: 1,
                    mb: 2,
                    '& > span': {
                        mx: 0,
                        mb: 0.5
                    },
                    '& img': {
                        maxHeight: 34
                    },
                    '&:hover': {
                        boxShadow: '2px 2px #e6da6e',
                        borderColor: '#e6da6e',
                        backgroundColor: '#f5e975',
                    }
                }}
            >{props.name}</Button>
        </Fragment>
    );
}
export default AsideButton;