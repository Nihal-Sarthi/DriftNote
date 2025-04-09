import DeleteIcon from "@mui/icons-material/Delete";
import { Fab } from "@mui/material";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={handleClick} aria-label="delete">
        <DeleteIcon />
      </Fab>
    </div>
  );
}

export default Note;
