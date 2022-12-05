import "./cardUpload.css"

function cardUpload({ title, image }) {
  return (
    <>
      <div className="card-admin">
        <img className="image" src={image}></img>
        <div className="card-admin-bottom">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}

export default cardUpload;
