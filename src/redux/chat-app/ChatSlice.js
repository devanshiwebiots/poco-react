// /* eslint-disable import/no-anonymous-default-export */
// import {
//   GET_MEMBERS,
//   GET_MEMBERS_SUCCESS,
//   GET_CHATS,
//   GET_CHATS_SUCCESS,
//   CHANGE_CHAT,
//   CREATE_CHAT,
//   UPDATE_SELECTED_USER,
//   SEARCH_MEMBER,
//   SEND_MESSAGE,
//   REPLY_BY_SELECTED_USER,
// } from "../actionType";

// import contactsData from "../../data/chat/chatMember";
// import Chatdata from "../../data/chat/chat.chats.json";

// const initial_state = {
//   allMembers: null,
//   members: null,
//   chats: Chatdata,
//   loading: false,
//   currentUser: null,
//   selectedUser: null,
// };

// export default (state = initial_state, action) => {
//   switch (action.type) {
//     case GET_MEMBERS:
//       return { ...state, loading: true };

//     case GET_MEMBERS_SUCCESS:
//       const members = contactsData;
//       const currentUser = members[0];
//       return {
//         ...state,
//         loading: false,
//         allMembers: members,
//         members: members,
//         currentUser: currentUser,
//       };

//     case GET_CHATS:
//       return { ...state, loading: true };

//     case GET_CHATS_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         chats: action.payload.chats,
//         selectedUser: state.allMembers.find(
//           (x) => x.id === action.payload.selectedUser
//         ),
//       };

//     case CHANGE_CHAT:
//       return {
//         ...state,
//         selectedUser: state.allMembers.find((x) => x.id === action.payload),
//       };

//     case CREATE_CHAT:
//       return { ...state };

//     case SEARCH_MEMBER:
//       if (action.payload === "") {
//         return { ...state, members: state.allMembers };
//       } else {
//         const keyword = action.payload.toLowerCase();
//         const searchedMembers = state.allMembers.filter(
//           (member) => member.name.toLowerCase().indexOf(keyword) > -1
//         );
//         return { ...state, members: searchedMembers };
//       }

//     case SEND_MESSAGE:
//       return { ...state };

//     case REPLY_BY_SELECTED_USER:
//       return { ...state };

//     case UPDATE_SELECTED_USER:
//       return {
//         ...state,
//         updateSelectedUser: state.allMembers.find(
//           (x) => x.id === action.payload.selectedUser
//         ),
//       };

//     default:
//       return { ...state };
//   }
// };

// import { createSlice } from "@reduxjs/toolkit";
// import contactsData from "../../data/chat/chatMember";
// import chatsData from "../../data/chat/chat.chats.json";

// const initialState = {
//   allMembers: null,
//   members: null,
//   chats: chatsData,
//   loading: false,
//   currentUser: null,
//   selectedUser: null,
// };

// const chatSlice = createSlice({
//   name: "chat",
//   initialState,
//   reducers: {
//     GET_MEMBERS: (state) => {
//       state.loading = true;
//     },
//     GET_MEMBERS_SUCCESS: (state) => {
//       state.loading = false;
//       state.allMembers = contactsData;
//       state.members = contactsData;
//       state.currentUser = contactsData[0];
//     },
//     GET_CHATS: (state) => {
//       state.loading = true;
//     },
//     GET_CHATS_SUCCESS: (state, action) => {
//       state.loading = false;
//       state.chats = action.payload.chats;
//       state.selectedUser = state.allMembers.find((x) => x.id === action.payload.selectedUser);
//     },
//     CHANGE_CHAT: (state, action) => {
//       state.selectedUser = state.allMembers.find((x) => x.id === action.payload);
//     },
//     SEARCH_MEMBER: (state, action) => {
//       const keyword = action.payload.toLowerCase();
//       state.members = keyword ? state.allMembers.filter((member) => member.name.toLowerCase().includes(keyword)) : state.allMembers;
//     },
//     SEND_MESSAGE: (state, action) => {
//       const { currentUserId, selectedUserId, message, allChats, online } = action.payload;
//       let chat = allChats.find((x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId));
//       if (chat) {
//         const now = new Date();
//         const time = `${now.getHours()}:${now.getMinutes()}`;
//         chat.messages.push({ sender: currentUserId, time, text: message, status: true });
//         chat.lastMessageTime = time;
//         chat.online = online;
//       }
//     },
//     REPLY_BY_SELECTED_USER: (state, action) => {
//       const { currentUserId, selectedUserId, message, allChats, online } = action.payload;
//       let chat = allChats.find((x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId));
//       if (chat) {
//         const now = new Date();
//         const time = `${now.getHours()}:${now.getMinutes()}`;
//         chat.messages.push({ sender: selectedUserId, time, text: message, status: true });
//         chat.lastMessageTime = time;
//         chat.online = online;
//       }
//     },
//     CREATE_CHAT: (state, action) => {
//       const { currentUserId, selectedUserId, allChats } = action.payload;
//       const conversation = {
//         id: allChats.length + 1,
//         users: [currentUserId, selectedUserId],
//         lastMessageTime: "-",
//         messages: [],
//       };
//       allChats.unshift(conversation);
//     },
//     UPDATE_SELECTED_USER: (state, action) => {
//       state.selectedUser = state.allMembers.find((x) => x.id === action.payload.selectedUser);
//     },
//   },
// });

// export const { GET_MEMBERS, GET_MEMBERS_SUCCESS, GET_CHATS, GET_CHATS_SUCCESS, CHANGE_CHAT, SEARCH_MEMBER, SEND_MESSAGE, REPLY_BY_SELECTED_USER, CREATE_CHAT, UPDATE_SELECTED_USER } = chatSlice.actions;

// export default chatSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import contactsData from "../../data/chat/chatMember";
import chatsData from "../../data/chat/chat.chats.json";

// Initial State
const initialState = {
  allMembers: contactsData,
  members: contactsData,
  chats: chatsData.data,
  currentUser: null,
  selectedUser: null,
};

// Chat Slice
const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    changeChat: (state, action) => {
      state.selectedUser = state.allMembers.find((x) => x.id === action.payload);
    },
    createChat: (state, action) => {
      const { currentUserId, selectedUserId } = action.payload;
      const newChat = {
        id: state.chats.length + 1,
        users: [currentUserId, selectedUserId],
        lastMessageTime: "-",
        messages: [],
      };
      state.chats.unshift(newChat);
      if (state.allMembers.length > 0) {
        let selectUsers = state.allMembers.find((x) => x.id === selectedUserId);
        state.selectedUser = selectUsers;
      }
    },
    searchMember: (state, action) => {
      if (action.payload === "") {
        state.members = state.allMembers;
      } else {
        const keyword = action.payload.toLowerCase();
        const searchedMembers = state.allMembers.filter((member) => member.name.toLowerCase().indexOf(keyword) > -1);
        state.members = searchedMembers;
      }
    },
    sendMessage: (state, action) => {
      const { currentUserId, selectedUserId, messageInput, online } = action.payload;
      let chat = state.chats.find((x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId));
      const now = new Date();
      const time = now.getHours() + ":" + now.getMinutes();
      if (chat) {
        chat.messages.push({ sender: currentUserId, time, text: messageInput, status: true });
        chat.time = time;
        chat.online = online;
        let chats_data = state.chats.filter((x) => x.id !== chat?.id);
        chats_data.splice(0, 0, chat);
        if (state.allMembers.length > 0) {
          let selectedUser = state.allMembers.find((x) => x.id === selectedUserId);
          state.selectedUser = selectedUser;
        }
      }
    },
    replyMessage: (state, action) => {
      const { currentUserId, selectedUserId, replyByUserMessage, online } = action.payload;
      let chat = state.chats.find((x) => x.users.includes(currentUserId) && x.users.includes(selectedUserId));
      const now = new Date();
      const time = now.getHours() + ":" + now.getMinutes();
      if (chat) {
        chat.messages.push({ sender: selectedUserId, time, text: replyByUserMessage, status: true });
        chat.lastMessageTime = time;
        chat.online = online;
        let chats_data = state.chats.filter((x) => x.id !== chat?.id);
        chats_data.splice(0, 0, chat);
      }
    },
    updateSelectedUser: (state, action) => {
      state.selectedUser = state.allMembers.chats.find((x) => x.id === action.payload.selectedUser);
    },
    fetchChatMemberAsync: (state) => {
      if (state.allMembers.length > 0) {
        state.currentUser = state.allMembers[0];
        state.members = state.allMembers;
      }
    },
    setChats: (state, action) => {
      state.chats = action.payload;
    },
    setSelectedUser: (state, action) => {
      state.selectedUser = action.payload;
    },
    setAllMembers: (state, action) => {
      state.allMembers = action.payload;
    },
  }
});

export const { fetchChatMemberAsync, setAllMembers, setSelectedUser, setChats, changeChat, createChat, searchMember, sendMessage, replyMessage, updateSelectedUser } = chatSlice.actions;
export default chatSlice.reducer;