import React from "react";
const withErrorHandler = (wrappedComponents, axios) => {
  return class extends React.Component {
    state = {
      error: null,
      errorDisplay: false
    };

    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({ error: null });
      });
      axios.interceptors.response.use(null, error => {
        this.setState({ error });
      });
    }

    render() {
      return <wrappedComponents {...this.props} />;
    }
  };
};

export default withErrorHandler;
