import React from "react";
import { Button, Progress } from "reactstrap";

export default ({
  isLoading,
  text,
  loadingText,
  className = "",
  disabled = false,
  ...props
}) =>
  <Button
    className={`LoaderButton ${className}`}
    disabled={disabled || isLoading}
    {...props}
  >
    {isLoading && <Progress striped value={2 * 5} />}
    {!isLoading ? text : loadingText}
  </Button>;