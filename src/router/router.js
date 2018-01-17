import React from 'react';

import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// import Bundle from './Bundle';
import AsyncComponent from './asyncComponent'

const Home = AsyncComponent(() => import('pages/Home'))
const ProducttDetail = AsyncComponent(() => import('pages/ProducttDetail'))
const RouteOrder = AsyncComponent(() => import('pages/Order/RouteOrder'))
const SelectContact = AsyncComponent(() => import('pages/Member/SelectContact/Index'))
const SelectTourist = AsyncComponent(() => import('pages/Member/SelectTourist/Index'))
const UpdateContact = AsyncComponent(() => import('pages/Member/UpdateContact/Index'))
const UpdateTourist = AsyncComponent(() => import('pages/Member/UpdateTourist/Index'))
// import Home from 'bundle-loader?lazy&name=Home!pages/Home';
// import ProducttDetail from 'bundle-loader?lazy&name=ProducttDetail!pages/ProducttDetail/ProducttDetail.js';
// import Page1 from 'bundle-loader?lazy&name=page1!pages/Page1';
// import Counter from 'bundle-loader?lazy&name=counter!pages/Counter/Counter';
const UserInfo = AsyncComponent(() => import('pages/UserInfo/UserInfo'));

// const Loading = function () {
//     return <div>Loading...</div>
// };

// const createComponent = (component) => () => (
//     <Bundle load={component}>
//         {
//             (Component) => Component ? <Component/> : <Loading/>
//         }
//     </Bundle>
// );

const getRouter = () => (
    <Router>
        <div>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/producttDetail/:goodsPromotionId/:goodsType/:goodsId" render={props => <ProducttDetail {...props} />} />
            <Route path="/orderRoute/:goodsPromotionId/:priceDate?" render={props => <RouteOrder {...props} />} />
            <Route path="/selectContact"  render={props => <SelectContact {...props} />}/>
            <Route path="/selectTourist" render={props => <SelectTourist {...props} />} />
            <Route path="/userinfo" render={props => <UserInfo {...props} />}/>
            <Route path="/updateContact/:type" render={props => <UpdateContact {...props} />} />
            <Route path="/updateTourist/:type" render={props => <UpdateTourist {...props} />} />
          </Switch>
        </div>
    </Router>
    // <Router>
    //     <Switch>
    //         <Route exact path="/" component={createComponent(Home)}/>
    //         <Route path="/producttDetail/:goodsPromotionId/:goodsType/:goodsId" component={createComponent(ProducttDetail)} />
    //         <Route path="/page1" component={createComponent(Page1)}/>
    //         <Route path="/counter" component={createComponent(Counter)}/>
    //         <Route path="/userinfo" component={createComponent(UserInfo)}/>
    //     </Switch>
    // </Router>
);

export default getRouter;