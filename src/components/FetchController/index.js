import { Spinner } from "react-bootstrap";
import React from "react";

export default function FetchController(props) {
  const { isLoading, children, error, done } = props;

  if (done) {
    return children;
  }

  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Spinner animation="grow" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p>Error details:</p>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>
    );
  }
  return <div>Algo fallo</div>;
}
