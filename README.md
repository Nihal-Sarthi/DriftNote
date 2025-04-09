# DriftNote

**DriftNote** is a simple and aesthetic note-taking app built with **React**. It allows users to create and delete notes dynamically. The app demonstrates the use of React components, state management, and **Material-UI** for icons.

---

## ✨ Features

- Add notes with a title and content
- Delete notes dynamically
- Responsive design
- Material-UI icons for a modern look
- Dynamic copyright year

---

## 🚀 Installation

Follow these steps to run the project locally:

```bash
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
npm install
npm start
```

The app will be available at: [http://localhost:3000](http://localhost:3000)

---

## 📁 File Structure

```
src/
├── components/
│   ├── Header.jsx       // Header with Material-UI icon
│   ├── Footer.jsx       // Footer with dynamic year
│   ├── CreateArea.jsx   // Form to create new notes
│   ├── Note.jsx         // Individual note component
├── App.jsx              // Main app component
├── index.js             // Entry point
```

---

## 🧩 Components Overview

### 1. Header

Displays the app title with a Material-UI icon.

```jsx
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";

function Header() {
  return (
    <header>
      <h1>
        <AssignmentOutlinedIcon fontSize="large" aria-label="App Logo" />
        DriftNote
      </h1>
    </header>
  );
}

export default Header;
```

### 2. Footer

Dynamically displays the current year.

```jsx
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⒲ {year}</p>
    </footer>
  );
}

export default Footer;
```

### 3. CreateArea

Form for adding new notes. Validates that both title and content are filled.

```jsx
import { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({ title: "", content: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function addNote(e) {
    if (note.title.trim() === "" || note.content.trim() === "") {
      alert("Both title and content are required!");
    } else {
      props.sendNote(note);
      setNote({ title: "", content: "" });
    }
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={addNote}>
        <input
          name="title"
          placeholder="Title"
          aria-label="Note Title"
          onChange={handleChange}
          value={note.title}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          aria-label="Note Content"
          onChange={handleChange}
          value={note.content}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
```

### 4. Note

Displays individual notes with a delete button.

```jsx
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}

export default Note;
```

### 5. App

Manages the state of all notes and renders the components.

```jsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import { useState } from "react";

function App() {
  const [noteArray, setNoteArray] = useState([]);

  function addNote(note) {
    setNoteArray((prevValue) => [...prevValue, note]);
  }

  function deleteNote(id) {
    setNoteArray((prevValue) =>
      prevValue.filter((noteItem, index) => index !== id)
    );
  }

  return (
    <div>
      <Header />
      <CreateArea sendNote={addNote} />
      {noteArray.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
```

---

## 🔮 Future Enhancements

- Add a search bar to filter notes
- Allow users to edit existing notes
- Use `localStorage` or backend API for persistent data
- Add dark mode toggle for better UX

---
