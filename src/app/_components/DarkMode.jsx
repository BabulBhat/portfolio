import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DarkMode({dark,toggleMode}) {
  return (
    <div
      className="flex items-center justify-center text-xl px-4 cursor-pointer"
      onClick={toggleMode}
    >
      {dark === "dark" ? (
        <FontAwesomeIcon icon={faSun} />
      ) : (
        <FontAwesomeIcon icon={faMoon} />
      )}
    </div>
  );
}
