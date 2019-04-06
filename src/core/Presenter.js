export default class Presenter {
  /**
   * Initialize Presenter layer of Component.
   * @param {Component} component Current React Component.
   */
  constructor(component) {
    this.component  = component;
  }

  /**
   * Get current state.
   * @returns {object}
   */
  get state() {
    return this.component.state;
  }

  /**
   * Get properties which has been passed to component.
   */
  get props() {
    return this.component.props;
  }

  /**
   * Set current state.
   * @param {object} state 
   * @param {function} callback
   */
  setState(state, callback) {
    this.component.setState(state, callback);
  }

  /**
   * Will be called while Component and Presenter are connected to reducer.
   * @param {Function} dispatch Dispatcher.
   * @returns {object}
   */
  static mapDispatchToProps(dispatch) {
    return {};
  }
  
  /**
   * Will be called while Component and Presenter are connected to reducer.
   * @param {object} state State of reducer.
   */
  static mapStateToProps(state) {
    return {};
  }
}