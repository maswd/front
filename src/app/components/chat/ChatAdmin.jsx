import React from "react";
import "./chat.css";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

const ChatAdmin = () => {
  const [rooms,setRooms]=useState([]);
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    const fetchRooms = async () => {
      try {
        const accessToken=localStorage.getItem('access_token');
        const response = await axios.get('https://taktamir.mohamadrezakiani.ir/api/Chats',{
            headers:{
                      Authorization: `Bearer ${accessToken}`,
            }
        }); // Replace 'your-endpoint' with the actual API endpoint URL
        console.log("get rooms", response.data);
        setRooms(response.data);
      } catch (error) {
        console.error('Error fetching rooms:', error);
      }
    };
    fetchRooms();
   
  },[])
  const jonAdminroom=async (Nameroom)=>{
    const token =localStorage.getItem('access_token');;
    const headers = {
      Authorization: `Bearer ${token}`
    }
  
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://taktamir.mohamadrezakiani.ir/chats",{ headers: headers })
        .configureLogging(LogLevel.Information)
        .build();
   
        connection.on('ReceiveRooms', rooms => {
          console.log(rooms)
          setRooms({ rooms });
        });
        // connection.on("ReceivenewMessage",(messge)=>{
        //   console.log("new message"+messge)
        // })
        connection.on("notification",(msg)=>{
          alert(msg);
      });
      connection.on("ReceiveMessage", (user, message) => {
        console.log("Message Recived:",message)
        setMessages(messages => [...messages, { user, message }]);
      });
      connection.on("AllMessage",(messagesroom)=>{
        messagesroom.forEach(msg => {
            console.log("mesage is"+ msg);
          });
      });
      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });
      connection.on("Erorr",(eror)=>{
        console.log(eror)
      })
  
      connection.onclose(e => {
        setConnection();
        setMessages([]);
        setUsers([]);
      });
  
      await connection.start();
     
    
      await connection.invoke("JonAdmintoroom",Nameroom);
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
    // try {
    //   await connection.invoke("JonAdmintoroom",Nameroom)
      
    // } catch (error) {
    //   console.log(error);
    // }
  }
  const handelClick= (item)=>{
    jonAdminroom(item);
  }
  return (
    <div>
      <div className="card">
        <div className="row ">
          <div className="col-12 col-lg-5 col-xl-3  ">
            <div className="px-4 d-block">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1 ">
                  <input
                    type="text"
                    className="form-control mt-3"
                    placeholder="جستجو..."
                  />
                </div>
              </div>
            </div>
            <p className="px-4 py-2 border-bottom">لیست کاربران :</p>
            <span
              className=""
              style={{ maxHeight: "540px", overflowY: "scroll" }}
            >
              {rooms.map((item,index)=>(
                <button 
                className="list-group-item list-group-item-action  border-0"
                style={{backgroundColor: "transparent"}}
                key={index}
                onClick={()=> handelClick(item.nameRoom)}
              >
                <div className="badge bg-success float-right">5</div>
                <div className="d-flex align-items-star border-bottom pb-2  " >
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    className="rounded-circle mr-1"
                    alt="Vanessa Tucker"
                    width="40"
                    height="40"
                  />
                  <div className="flex-grow-1 mr-3 " >
                     {item.nameRoom}
                    <div className="small">
                      <span className="fas fa-circle chat-online"></span> Online
                    </div>
                  </div>
                </div>
              </button>
              ))}
              <a
                href="#"
                className="list-group-item list-group-item-action  border-0"
                style={{backgroundColor: "transparent"}}
              >
                <div className="badge bg-success float-right">5</div>
                <div className="d-flex align-items-star border-bottom pb-2 ">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    className="rounded-circle mr-1"
                    alt="Vanessa Tucker"
                    width="40"
                    height="40"
                  />
                  <div className="flex-grow-1 mr-3 ">
                    Vanessa Tucker
                    <div className="small">
                      <span className="fas fa-circle chat-online"></span> Online
                    </div>
                  </div>
                </div>
              </a>
              <a
                href="#"
                className="list-group-item list-group-item-action  border-0"
                style={{backgroundColor: "transparent"}}
              >
                <div className="badge bg-danger text-light float-right">5</div>
                <div className="d-flex align-items-star border-bottom pb-2 ">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                    className="rounded-circle mr-1"
                    alt="Vanessa Tucker"
                    width="40"
                    height="40"
                  />
                  <div className="flex-grow-1 mr-3 ">
                    Vanessa Tucker
                    <div className="small">
                      <span className="fas fa-circle chat-offline"></span> offline
                    </div>
                  </div>
                </div>
              </a>
            </span>
          </div>
          <div className="col-12 col-lg-7 col-xl-9">
            <div className="py-2 px-4 border-bottom">
              <div className="d-flex align-items-center py-1">
                <div className="position-relative ">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                    className="rounded-circle ml-1 "
                    alt="Sharon Lessman"
                    width="40"
                    height="40"
                  />
                </div>
                <div className="flex-grow-1 pr-3">
                  <strong>Sharon Lessman</strong>
                  <div className="text-muted small">
                    <em>Typing...</em>
                  </div>
                </div>
                <div>
                  <button className="btn btn-light border btn-lg px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                     strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-more-horizontal feather-lg"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="position-relative">
              <div className="chat-messages p-4">
                <div className="chat-message-right pb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="rounded-circle ml-1"
                      alt="Chris Wood"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:33 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1">You</div> Lorem ipsum
                    dolor sit amet, vis erat denique in, dicunt prodesset te
                    vix.
                  </div>
                </div>
                <div className="chat-message-left pb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="rounded-circle ml-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:34 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">Sharon Lessman</div> Sit
                    meis deleniti eu, pri vidit meliore docendi ut, an eum erat
                    animal commodo.
                  </div>
                </div>
                <div className="chat-message-right mb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="rounded-circle ml-1"
                      alt="Chris Wood"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:35 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1">You</div> Cum ea graeci
                    tractatos.
                  </div>
                </div>
                <div className="chat-message-left pb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="rounded-circle ml-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:36 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">Sharon Lessman</div> Sed
                    pulvinar, massa vitae interdum pulvinar, risus lectus
                    porttitor magna, vitae commodo lectus mauris et velit. Proin
                    ultricies placerat imperdiet. Morbi varius quam ac venenatis
                    tempus.
                  </div>
                </div>
                <div className="chat-message-left pb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="rounded-circle ml-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:37 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">Sharon Lessman</div> Cras
                    pulvinar, sapien id vehicula aliquet, diam velit elementum
                    orci.
                  </div>
                </div>
                <div className="chat-message-right mb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="rounded-circle ml-1"
                      alt="Chris Wood"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:38 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1">You</div> Lorem ipsum
                    dolor sit amet, vis erat denique in, dicunt prodesset te
                    vix.
                  </div>
                </div>
                <div className="chat-message-left pb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="rounded-circle ml-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:39 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">Sharon Lessman</div> Sit
                    meis deleniti eu, pri vidit meliore docendi ut, an eum erat
                    animal commodo.
                  </div>
                </div>
                <div className="chat-message-right mb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="rounded-circle ml-1"
                      alt="Chris Wood"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:40 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1">You</div> Cum ea graeci
                    tractatos.
                  </div>
                </div>
                <div className="chat-message-right mb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="rounded-circle ml-1"
                      alt="Chris Wood"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:41 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1">You</div> Morbi finibus,
                    lorem id placerat ullamcorper, nunc enim ultrices massa, id
                    dignissim metus urna eget purus.
                  </div>
                </div>
                <div className="chat-message-left pb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="rounded-circle ml-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:42 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">Sharon Lessman</div> Sed
                    pulvinar, massa vitae interdum pulvinar, risus lectus
                    porttitor magna, vitae commodo lectus mauris et velit. Proin
                    ultricies placerat imperdiet. Morbi varius quam ac venenatis
                    tempus.
                  </div>
                </div>
                <div className="chat-message-right mb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      className="rounded-circle ml-1"
                      alt="Chris Wood"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:43 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 ml-3">
                    <div className="font-weight-bold mb-1">You</div> Lorem ipsum
                    dolor sit amet, vis erat denique in, dicunt prodesset te
                    vix.
                  </div>
                </div>
                <div className="chat-message-left pb-4">
                  <div>
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                      className="rounded-circle ml-1"
                      alt="Sharon Lessman"
                      width="40"
                      height="40"
                    />
                    <div className="text-muted small text-nowrap mt-2">2:44 am</div>
                  </div>
                  <div className="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
                    <div className="font-weight-bold mb-1">Sharon Lessman</div> Sit
                    meis deleniti eu, pri vidit meliore docendi ut, an eum erat
                    animal commodo.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-grow-0  py-3 px-4 border-top">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="پیام خود را ارسال کنید !"
                />
                <button className="btn btn-primary">ارسال</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAdmin;
