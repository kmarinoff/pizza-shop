import React from "react";
import { Task } from "src/components";

interface TaskListProps {
  loading: boolean;
  tasks: Array<{ id: number; title: string; state: any }>;
  onPinTask: () => void;
  onArchiveTask: () => void;
}

const TaskList: React.FC<TaskListProps> = ({
  loading = false,
  tasks,
  onPinTask,
  onArchiveTask,
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
};

export { TaskList };
