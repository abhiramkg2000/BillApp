import "./Notes.css";
export default function Notes(props) {
  return (
    <div className="para">
      <p className="text">
        No of &#8377;{props.no} note = {props.value}
      </p>
    </div>
  );
}
