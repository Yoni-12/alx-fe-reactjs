const UserProfile = (props) => {
  return (
    <div style={{ border: "1px solid gray", padding: "15px", margin: "20px auto", maxWidth: "300px", borderRadius: "10px", boxShadow: "0px 4px 6px rgba(0,0,0,0.1)" }}>
      <h2 style={{ color: "blue", marginBottom: "10px" }}>{props.name}</h2>
      <p>
        Age: <span style={{ fontWeight: "bold" }}>{props.age}</span>
      </p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

export default UserProfile;
