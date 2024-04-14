import { useEffect, useState } from "react";
import { Routes, Route} from "react-router-dom";
import MainPages from "../Const/MainPages";

const Pages = () => {

    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        MainPages.forEach((page) => {
            setRoutes((prevState) => (
                [
                    ...prevState, 
                    {
                        element: <page.component/>,
                        path: page.path
                    },
                    {
                        element: <page.component/>,
                        path: page.path + '/:itemId'
                    }
                ]
            ));
            if (page.children) {
                page.children.forEach((page) => {
                    setRoutes((prevState) => (
                        [
                            ...prevState, 
                            {
                                element: <page.component/>,
                                path: page.path
                            },
                            {
                                element: <page.component/>,
                                path: page.path + '/:itemId'
                            }
                        ]
                    ));
                    if (page.children) {
        
                    }
                });
            }
        });
    }, []);

    return (
        <Routes>
            {routes.map((route) => {
                return <Route key={route.path} path={route.path} element={route.element}></Route>;
            })}
        </Routes>
    );
}

export default Pages;