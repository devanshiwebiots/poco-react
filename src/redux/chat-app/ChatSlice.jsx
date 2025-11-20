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