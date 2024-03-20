import React, { useEffect, useMemo, useRef, useState} from "react";
import { Text, View } from "react-native";
import { io } from "socket.io-client";
import NetInfo from "@react-native-community/netinfo";
import { fetch } from "@react-native-community/netinfo";



const Home = () => {
  // const socket = useMemo(
  //   () =>
  //     io("http://10.0.2.16:4000/", {
  //       transports:['websocket'],
  //       withCredentials: true,
  //     }),
  //   []
  // );

  const [messages, setMessages] = useState(["fdsfg",'dergtde']);
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("465656");
  const [socketID, setSocketId] = useState("");
  const [roomName, setRoomName] = useState("465656");

  const inputref = useRef()

  // const handleSubmit = () => {
  //   // e.preventDefault();
  //   let value = inputref?.current.value
  //   socket.emit("message", { message:value, room });
  //   // setMessage("");
  // };

  // const joinRoomHandler = (e) => {
  //   e.preventDefault();
  //   socket.emit("join-room", roomName);
  //   // setRoomName("");
  // };

  const getdevicedata = async()=>{
    const data = await fetch()
    console.log(data)
  }

  useEffect(() => {

    getdevicedata()
    const socket = io("http://192.168.1.117:3000/", {      
      transports: ['websocket']
    })
    // socket.connect()
    socket.on("connect", () => {
      console.log("connected", socket.id);
      setSocketId(socket.id);
    });

    socket.emit("join-room", roomName);

    socket.on("receive-message", (data) => {
      console.log(data);
      setMessages((messages) => [...messages, data]);
    });

    socket.on("welcome", (s) => {
      console.log(s);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <View>
      <Text>fgdfg</Text>
    </View>
  );
};

export default Home;