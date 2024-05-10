import { useEffect, useState } from "react";
import Menu from "../components/Menu.js";
import "./dashboard.css";
import { auth, db } from "../Firebase-config";
import { getDoc, doc, getDocs, collection } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Dashboard() {
  const [student, setStudent] = useState([]);
  const [teacher, setTeacher] = useState([]);
  let count = 0;
  const fetchStudent = async () => {
    try {
      const getstd = await getDocs(collection(db, "Users"));
      setStudent(getstd.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      const getthr = await getDocs(collection(db, "teachers"));
      setTeacher(getthr.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchStudent();
  }, []);
  return (
    <>
      <Menu></Menu>
      <div class="side-menu">
        <div class="brand-name">
          <h1 style={{ marginLeft: "2rem" }}>Acharya Abacus Classes</h1>
        </div>
        <ul>
          <li>
            <img
              src={require("../assets/images/dashboard.gif")}
              alt=""
              style={{
                width: "10%",
                borderRadius: "50%",
              }}
            />
            &nbsp; <span>Dashboard</span>{" "}
          </li>
          <li>
            <img
              src={require("../assets/images/notification.gif")}
              alt=""
              style={{
                width: "10%",
                borderRadius: "50%",
              }}
            />
            &nbsp;<span>Admission Requests</span>{" "}
          </li>
          <li>
            <img
              src={require("../assets/images/message.gif")}
              alt=""
              style={{
                width: "10%",
                borderRadius: "50%",
              }}
            />
            &nbsp;<span>Teachers Requests</span>{" "}
          </li>
        </ul>
      </div>
      <div class="container-dashboard">
        <div class="content">
          <div class="dash-cards">
            <div class="card-d">
              <div class="box-d">
                <h1>5</h1>
                <h3>Students</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>2</h1>
                <h3>Teachers</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>8</h1>
                <h3>Staff</h3>
              </div>
            </div>
            <div class="card-d">
              <div class="box-d">
                <h1>3</h1>
                <h3>Admitted</h3>
              </div>
            </div>
          </div>

          <div class="content-2">
            <div class="new-students">
              <div class="title">
                <h2>Student Requests</h2>
              </div>
              <div className="scroll-info">
                <table>
                  <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>DOB</th>
                    <th>Gender</th>
                  </tr>
                  {student.map((doc, index) => {
                    return (
                      <tr key={doc.id}>
                        <td>{index + 1}</td>
                        <td>{doc.name}</td>
                        <td>{doc.email}</td>
                        <td>{doc.phone}</td>
                        <td>{doc.dob}</td>
                        <td>{doc.gender}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
          <div class="content-2">
            <div class="new-students">
              <div class="title">
                <h2>Teacher Requests</h2>
              </div>
              <div className="scroll-info">
                <table>
                  <tr>
                    <th>Sr.</th>
                    <th>Name</th>
                    <th>EmailId</th>
                    <th>Phone</th>
                    <th>Institute</th>
                  </tr>
                  {teacher.map((doc, index) => {
                    return (
                      <tr key={doc.id}>
                        <td>{index + 1}</td>
                        <td>{doc.name}</td>
                        <td>{doc.email}</td>
                        <td>{doc.phone}</td>
                        <td>{doc.institute}</td>
                      </tr>
                    );
                  })}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
