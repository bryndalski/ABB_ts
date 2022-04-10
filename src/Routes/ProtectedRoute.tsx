import React from "react";
import ProtectedRouteInterface from "./ProtectedRouteInterface";

export default function ProtectedRoute(props: ProtectedRouteInterface) {
  return props.condition ? props.renderTrue : props.renderFalse;
}
