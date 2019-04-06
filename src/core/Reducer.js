import { connect }  from "react-redux";

export default class Reducer {
  /**
   * Create default reducer.
   * @param {string} reducerKeys (Ellipsis)
   * @returns {reducer}
   */
  static create(...reducerKeys) {
    return (state = {}, action) => {
      state   = {
        ...state,
        ...action.payload
      };
      const newState = {};
      reducerKeys.forEach(
        reducerKey => {
          newState[reducerKey] = state[reducerKey];
        }
      );
      return newState;
    };
  }

  /**
   * Connect Component and Presenter which will be connected to reducer too.
   * @param {Component} component Current React Component.
   * @param {Presenter} presenter Current Presenter.
   */
  static connect(component, presenter) {
    return connect(
      presenter.mapStateToProps, 
      presenter.mapDispatchToProps
    )(component);
  }
}