import React, { Component } from "react";
import { Request } from "./Request";
import { connect } from "react-redux";
import GroupTypes from "../components/GroupTypes"
type TStateType = {};

type TPropType = {
  addValues: any;
};

class Container extends Component<TPropType, TStateType> {
  public state: TStateType = {};
  async componentDidMount() {
    let request = await Request(
      "http://192.168.0.108:3002/api/v1/social-media/juniors/files"
    );
    let res = await request.json();
    this.props.addValues(res);
  }

  render() {
    return <GroupTypes />;
  }
}
const mapStateToProps = (state: any) => {
  console.log(state.types);

  return {
    types: state.types,
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    addValues: (val: any) => dispatch({ type: "CHANGE_VALUE", value: val }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
