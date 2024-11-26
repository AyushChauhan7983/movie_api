import React, { useState } from "react";
import { Modal, Button } from "semantic-ui-react";

const UpdateModal = ({ product, onUpdateProduct }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(product?.title || "");
  const [error, setError] = useState("");

  const handleUpdateProduct = () => {
    if (!title.trim()) {
      setError("Please enter a valid title.");
      return;
    }
    const updatedProduct = { title };
    onUpdateProduct(product.id, updatedProduct);
    resetFields();
    setOpen(false);
  };

  const resetFields = () => {
    setTitle(product?.title || "");
    setError("");
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        resetFields();
        setOpen(false);
      }}
      onOpen={() => setOpen(true)}
      trigger={<Button color="blue">Update</Button>}
    >
      <Modal.Header>Update Movie Title</Modal.Header>
      <Modal.Content>
        <div className="form">
          <input
            type="text"
            placeholder="Enter Title"
            value={title}
            onChange={(e) => {
              setError("");
              setTitle(e.target.value);
            }}
            className="title-input"
          />
        </div>
      </Modal.Content>

      <Modal.Actions>
        <Button primary onClick={handleUpdateProduct}>
          Update
        </Button>
        <Button
          onClick={() => {
            resetFields();
            setOpen(false);
          }}
        >
          Cancel
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default UpdateModal;
