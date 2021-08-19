import React, { Component } from "react";
import { connect } from "react-redux";

type TStateType = {};

type TPropType = {
  item: {
    type: string;
    name: string;
    id: number;
    file: string;
  };
};

type TReduxType = {
  types: Array<{ type: string; name: string; id: number; file: string }>;
};
class SingleType extends Component<TPropType, TStateType> {
  render() {
      const {file, name } = this.props.item
    return (
      <div>
        <div>
          <img src={file} alt="" width={"200px"} height={"200px"} />
        </div>
        <div>{name}</div>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    file: state.types.file,
    name: state.types.name,
  };
};
export default connect(mapStateToProps)(SingleType); // TReduxType
