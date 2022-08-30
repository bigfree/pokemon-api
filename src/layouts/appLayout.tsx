import {Box} from "@mui/joy";
import Aside from "../aside";
import {FC, Fragment} from "react";
import {Outlet} from "react-router-dom";

const AppLayout: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Box
                sx={{
                    display: 'flex',
                    flexFlow: 'row',
                    height: '100vh',
                    maxHeight: '100vh',
                    width: 1,
                    overflow: 'hidden',
                }}
            >
                <Aside/>
                <Box
                    sx={{
                        flex: 1,
                        height: '100vh'
                    }}
                >
                    <Outlet/>
                </Box>
            </Box>
        </Fragment>
    )
}
export default AppLayout;