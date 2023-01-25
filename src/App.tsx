import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Container from "./components/Container";
import Input from "./components/Input";
import Summary from "./components/Summary/Summary";
import Tasks from "./components/Tasks/Tasks";

export interface Task {
  name: string;
  done: boolean;
  id: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask = {
      name: value,
      done: false,
      id: uuidv4(),
    };
    setTasks((tasks) => [...tasks, newTask]);
  };

  const toggleDoneTask = (id: string, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };

  const handleDeleteTask = (id: string) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="flex justify-center m-5">
      <div className="flex flex-col items-center">
        <div className="border shadow p-10 flex flex-col gap-10 sm:w-[640px]">
          <Container title={"Summary"}>
            <Summary tasks={tasks} />
          </Container>
          <Container>
            <Input handleSubmit={handleSubmit} />
          </Container>
          <Container title={"Tasks"}>
            <Tasks
              tasks={tasks}
              toggleDone={toggleDoneTask}
              handleDelete={handleDeleteTask}
            />
          </Container>
        </div>
      </div>
    </div>
  );
}

export default App;
