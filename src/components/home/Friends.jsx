import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";

const Friends = () => {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  let allUsers = []; // Array to store all users
  let currentPage = 1; // Start with the first page

  const [myUserId, setMyUserId] = useState(null);
  const token = localStorage.getItem("jwtToken");
  const [loading, setLoading] = useState(true);
  const handleImageLoad = () => {
    console.log('Image loaded successfully!');
};
	const index = 0;
	useEffect(() => {
	  document.querySelectorAll('.ball4, .ball5, .ball6').forEach((ball, index) => {
		ball.classList.add(`animate-roll${index + 1}`);
	  });
	  const timeout = setTimeout(() => {
		  setLoading(false);
	  }, 1000);
  
	  return () => clearTimeout(timeout);
  }, []);
  let picId = 50;
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
  


  const handleAddFriend = async (friendUuid) => {
    try {
      const response = await fetch(`http://localhost:3001/users/me/add-friend/${friendUuid}`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Friend added successfully, fetch updated friend list
        const userResponse = await fetch("http://localhost:3001/users/me", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (userResponse.ok) {
          const userData = await userResponse.json();
          setFriends(userData.friendsList.map(friend => friend));
        } else {
          throw new Error("Errore nel recupero dei dati dell'utente");
        }
      } else {
        throw new Error("Error adding friend");
      }
    } catch (error) {
      console.error(error);
    }
  };



  return (
   
       <div class="container">
{loading ? (
            
			<div className="d-flex justify-content-center align-items-center text-white" style={{ minHeight:"100vh"}}>
			 
			  <div className="ball4 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
			  <div className="ball5 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
			  <div className="ball6 bg-white mx-2 rounded rounded-circle" style={{ minHeight:"5rem",minWidth:"5rem"}}></div>
			  </div>
		) : (
      <div className="h-100  mx-5 mt-4">
       <h2 className="text-white">Your Friends:</h2>
       <br />
      <Row className="text-white g-5 p-2 mx-4 mb-4">
        
      {friends
  .filter(friends => friends.email && friends.email.length > 0 && friends.uuid !== myUserId ) 
  .map(friends => (
    <Col xs={6} md={4} xl={3} key={friends.uuid} className="text-center">
      <Row className="">
      <Col xs={12} sm={12} md={5}>
      <img src={`https://picsum.photos/id/${picId++}/100` } alt=""  onLoad={handleImageLoad}/>
      </Col>
      <Col xs={12} sm={12} md={7}>
      {friends.username && <p>{friends.username}</p>}
      <Button className="bg-danger border border-white border-2 text-white">Remove Friend &#128577;</Button>
      </Col>
      </Row>
    </Col>
  ))}
      </Row>
      <h2 className="text-white">People you might know</h2>
      <Row className="text-white g-5 p-2 mx-4">
        
      {users
  .filter(user => user.email && user.email.length > 0 && user.uuid !== myUserId && !friends.includes(user.uuid)) 
  .map(user => (
    <Col xs={6} md={4} xl={3} key={user.uuid} className="text-center">
         <Row className="g-2 ">
          <Col xs={12} sm={12} md={5} >
          <img src={`https://picsum.photos/id/${picId++}/150`} onLoad={handleImageLoad} alt="" style={{minWidth: "50px"}}   className="img-fluid "/>
        </Col>
        <Col xs={12} sm={12} md={7}>
      {user.username && <h3 className="mb-3 mt-2">{user.username}</h3>}
      <Button className="bg-dark border border-white border-2"  onClick={() => handleAddFriend(user.uuid)}>Add Friend  </Button>
      </Col>
      </Row>
    </Col>

    
  ))}
      
      </Row>

    </div>
    )}
      </div> 
  );
};

export default Friends;