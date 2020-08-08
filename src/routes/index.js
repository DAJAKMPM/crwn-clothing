import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Homepage from "../pages/homepage/homepage.component";
import ShopPage from "../pages/shop/shop.component";
import CheckoutPage from "../pages/checkout/checkout.component";
import SignInAndSignUpPage from "../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { selectCurrentUser } from "../redux/user/selectors";

const IndexRoute = ({ currentUser }) => {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
      <Route exact path="/checkout" component={CheckoutPage} />
      <Route
        exact
        path="/signin-signup"
        render={() =>
          currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
        }
      />
    </Switch>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(IndexRoute);
