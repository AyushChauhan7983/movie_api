import React from "react";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
} from "semantic-ui-react";
import "./App.css";
import ConfirmExampleConfirm from "./DeleteConfirm";
import UpdateModal from "./UpdateModal";

const CardExampleCard = (props) => {
  return (
    <Card>
      <div className="card-image-container">
        <Image src={props.image} wrapped ui={false} />
      </div>
      <CardContent>
        <CardHeader>{props.title}</CardHeader>
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <div className="rating">
          <Icon name="star" color="yellow" />
          <span>{props.rating}</span>
          <span className="year">{props.year}</span>
        </div>
      </CardContent>

      <div className="card-actions">
        <ConfirmExampleConfirm onConfirm={() => props.removeMovie(props.id)} />

        <UpdateModal
          product={{ id: props.id, title: props.title }}
          onUpdateProduct={props.updateMovie}
        />
      </div>
    </Card>
  );
};

export default CardExampleCard;
