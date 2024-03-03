import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Friends = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  let allUsers = []; // Array to store all users
  let currentPage = 1; // Start with the first page

  const [myUserId, setMyUserId] = useState(null);
  const token = localStorage.getItem("jwtToken");
  

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        if (token) {
          const userResponse = await fetch("http://localhost:3001/users/me", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (userResponse.ok) {
            const userData = await userResponse.json();
            setMyUserId(userData.uuid);
            // setFriends(userData.friendsList.filter(user => user.uuid !== myUserId)); 
            setFriends(userData.friendsList.map(friend => friend));
            console.log(userData.friendsList);
          } else {
            throw new Error("Errore nel recupero dei dati dell'utente");
          }
        } else {
          window.location.href = "/"; 
        }
      } catch (error) {
        console.error(error);
      } 
    };
  
    getUserInfo();
  }, [token]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        if (token  && myUserId) {
          const userResponse = await fetch("http://localhost:3001/users", {
            method: "GET",
            headers: {
              "Content-type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          });

          if (userResponse.ok) {
            const userData = await userResponse.json();
          setUsers(userData.content.filter(user => {
            return user.uuid !== myUserId &&  !friends.some(friend => friend.uuid === user.uuid);
          }));
          } else {
            throw new Error("Error retrieving user data");
          }
        } 
      } catch (error) {
        console.error(error);
      } 
    };

    getUsers();
  },  [token, myUserId, friends]); 
  

  return (
    <div className="h-100  mx-5 mt-4">
       <h2 className="text-white">Your Friends</h2>
      <Row className="text-white g-5 p-2 mx-4 mb-4">
        
      {friends
  .filter(friends => friends.email && friends.email.length > 0 && friends.uuid !== myUserId ) 
  .map(friends => (
    <Col xs={6} md={4} xl={3} key={friends.uuid} className="text-center">
      {friends.username && <p>{friends.username}</p>}
      {friends.email && <p>{friends.email}</p>}
      <Button className="bg-danger border border-white border-2 text-white">Remove Friend &#128577;</Button>
      
    </Col>
  ))}
      </Row>
      <h2 className="text-white">People you might know</h2>
      <Row className="text-white g-5 p-2 mx-4">
        
      {users
  .filter(user => user.email && user.email.length > 0 && user.uuid !== myUserId && !friends.includes(user.uuid)) 
  .map(user => (
    <Col xs={6} md={4} xl={3} key={user.uuid} className="text-center">
      {user.username && <p>{user.username}</p>}
      {user.email && <p>{user.email}</p>}
      <Button className="bg-dark border border-white border-2">Add Friend  </Button>
    </Col>
  ))}
      </Row>


     
    </div>
  );
};

export default Friends;