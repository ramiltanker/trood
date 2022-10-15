import { RouteProps } from "react-router-dom";
import { TaskOne } from "../../../pages/TaskOne";
import { TaskTwo } from "../../../pages/TaskTwo";

export enum AppRoutes {
  TASK_ONE = "task-one",
  TASK_TWO = "task-two",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.TASK_ONE]: "/1",
  [AppRoutes.TASK_TWO]: "/2",
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.TASK_ONE]: {
    path: RoutePath["task-one"],
    element: <TaskOne />,
  },
  [AppRoutes.TASK_TWO]: {
    path: RoutePath["task-two"],
    element: <TaskTwo />,
  },
};
