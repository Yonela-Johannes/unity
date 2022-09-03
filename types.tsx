export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  Contacts: undefined;
  ChatRoom: undefined;
  Users: undefined;

};

export type RoomsNavigatorParamList = {
  ChambersScreen: undefined;
};

export type MainTabParamList = {
  Login: undefined;
  Register: undefined;
  Chats: undefined;
  Chambers: undefined;
  Rooms: undefined;
  Users: undefined;
  FeedRoom: undefined;
  Music: undefined;
  UserProfileScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};
export type User = {
  id: String;
  name: String;
  imageUri: String;
}

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
}

export type ChatRoom = {
  id: String,
  users: User[];
  notification: string;
  lastMessage: Message;
}

export type LocalArea = {
  name: String,
  key: number;
  users: User[];
}


export type AreaRoom = {
  id: string,
  name: string,
  status: string,
  imageUri: string,
  lastMessage: Message;
}

export type ChamberRoom = {
  id: String,
  users: User[];
  lastMessage: Message;
}
export type Room = {
  id: String,
  users: User[];
  lastMessage: Message;
}

export type UserType = {
  id: string,
  name: string,
  username: string,
  createdAt: string,
  image?: string,
}
export type SelectYourTown = {
  id: string,
  name: string,
  town: string,
  username: string,
  key: number,
}

