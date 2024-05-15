export default function ErrorPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {" "}
      <img
        src={require("./assets/images/Error404.jpg")}
        alt=""
        style={{
          width: "40%",
          marginTop: "5%",
          borderRadius: "50%",
          boxShadow: "0 0 50px 15px rgba(255, 0, 0, 0.755)",
        }}
      />{" "}
    </div>
  );
}
