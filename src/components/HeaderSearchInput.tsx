import type { ChangeEvent, FormEvent } from "react";
import "./HeaderSearchInput.scss";

interface Props {
  value: string;
  name?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => unknown;
}

export default function HeaderSearchInput({
  value,
  onChange,
  name = "header-search",
  placeholder = "O que você está buscando?",
  onSubmit,
}: Props) {
  return (
    <form className="search-container" onSubmit={onSubmit}>
      <input
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <button>
        <img src="/img/MagnifyingGlass.png" alt="" />
      </button>
    </form>
  );
}
