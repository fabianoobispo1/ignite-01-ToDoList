import todoLogo from "../../assets/todoLogo.svg";

import styles from "./header.module.css";
import { ChangeEvent, FormEvent, useState } from "react";



export function Header() {
  const [title, setTitle] = useState("");

  

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      <form className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          type="text"
          value={title}
          onChange={onChangeTitle}
        />
        <button>
          Criar
        {/*   <AiOutlinePlusCircle size={20} /> */}
        </button>
      </form>
    </header>
  );
}
