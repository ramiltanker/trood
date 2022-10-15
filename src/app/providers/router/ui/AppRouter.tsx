import React from "react";
import { Routes, Route } from "react-router-dom";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ path, element }) => {
        return (
          <Route
            key={path}
            path={path}
            element={<div className="page-wrapper">{element}</div>}
          />
        );
      })}
    </Routes>
  );
};

export { AppRouter };
