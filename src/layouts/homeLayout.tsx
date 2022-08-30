import {FC, Fragment} from "react";
import {Outlet} from "react-router-dom";

const HomeLayout: FC = (): JSX.Element => {
    return (
        <Fragment>
            <Outlet/>
        </Fragment>
    )
}
export default HomeLayout;