import React from 'react'
import List from './components/list'
import Details from './components/details'
import Repos from './components/repos'
import { Link, Route, Switch, withRouter } from 'react-router-dom'

export default function routes() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={List} />
                <Route exact path="/:name" component={Details} />
                <Route path="/:full_name" component={Repos} />
            </Switch>

        </>
    )
}
