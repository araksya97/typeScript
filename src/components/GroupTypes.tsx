import React, { Component } from "react";
import { connect } from "react-redux";
import SingleType from "./SingleType";

type TStateType = {};

type TPropType = {} & TReduxType;

type TReduxType = {
  types: Array<{ type: string; name: string; id: number; file: string }>;
};

class GroupTypes extends Component<TPropType, TStateType> {
    static defaultProps = {
        types: [],
    }

  render() {
      console.log(this.props.types)
    let groupData = this.props.types.map((data) => {
      return <SingleType 
      item={data}
      key={data.id} 
      />;
    });
    return <div>{groupData}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return {
    types: state.types,
    id: state.types.id,
  };
};

export default connect<TReduxType>(mapStateToProps)(GroupTypes);
