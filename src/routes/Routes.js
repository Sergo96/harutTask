import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const MainPage = lazy(() => import('../pages/MainPage'));

export const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                </Switch>
            </Suspense>
        </BrowserRouter>
    )
}