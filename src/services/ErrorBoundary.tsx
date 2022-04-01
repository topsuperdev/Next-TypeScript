import React from "react";
import { Notifier } from "@airbrake/browser";
import BASE_CONFIG from "src/config/base.config";
import ErrorThrowCard from "src/components/molecules/Cards/ErrorThrowCard";

type ErrorBoundaryState = {
  hasError: boolean;
};

type ErrorBoundaryProps = {};

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  airbrake: Notifier;
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
    this.airbrake = new Notifier({
      projectId: BASE_CONFIG.ERROR_BOUNDRAY_PROJECT_ID,
      projectKey: BASE_CONFIG.ERORR_BOUNDARY_PROJECT_KEY,
    });
  }

  componentDidCatch(error: any, info: any) {
    // Display fallback UI
    this.setState({ hasError: true });
    // Send error to Airbrake
    this.airbrake.notify({
      error: error,
      params: { info: info },
    });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <ErrorThrowCard />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
