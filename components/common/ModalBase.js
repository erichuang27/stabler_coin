import React from "react";

export default class ModalBase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  closeWhenClickedOutside = (event) => {
    if (event.target.classList.contains("outside-modal")) {
      this.props.exitFunction();
    }
  };

  componentDidMount() {
    if (this.state.open) {
      document.body.style.overflow = 'hidden';
    }
    window.addEventListener("click", this.closeWhenClickedOutside);
  }

  componentWillUnmount() {
    document.body.style.overflow = 'unset';
    window.removeEventListener("click", this.closeWhenClickedOutside);
  }

  render() {
    return (
      <div className="outside-modal overflow-hidden fixed inset-0 bg-gray-600 bg-opacity-50">
        <div className="outside-modal flex justify-center relative top-[50%] translate-y-[-50%]">
          <div>{this.props.modalInput}</div>
        </div>
      </div>
    );
  }
}