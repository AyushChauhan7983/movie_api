import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import "./App.css";

const AddModal = ({ onAddMovie }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [year, setYear] = useState("");

  const handleAddMovie = () => {
    const newMovie = {
      id: Math.floor(Math.random() * 1000),
      title,
      image,
      description,
      rating,
      year,
    };
    onAddMovie(newMovie);
    resetFields();
    setOpen(false);
  };

  const resetFields = () => {
    setTitle("");
    setImage("");
    setDescription("");
    setRating("");
    setYear("");
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button primary>Add New Movie</Button>}
    >
      <Modal.Header>Add New Movie</Modal.Header>
      <Modal.Content>
        <div className="form">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <input
            type="number"
            placeholder="Enter Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
      </Modal.Content>

      <Modal.Actions>
        <Button primary onClick={handleAddMovie}>
          Add
        </Button>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
      </Modal.Actions>
    </Modal>
  );
};

export default AddModal;
