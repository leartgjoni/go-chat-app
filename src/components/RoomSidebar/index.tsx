import React from 'react';
import { InfoDiv, Image, RoomName, UserName } from './styled';

export const RoomSidebar = ({
  chatName,
  users
}: {
  chatName: string;
  users: Record<string, { name: string; id: string }>;
}) => {
  return (
    <InfoDiv>
      <Image src="https://cdn.pixabay.com/photo/2018/01/20/10/14/blogging-3094201_1280.jpg"></Image>

      <RoomName>
        <i className="fa fa-commenting-o" aria-hidden="true">
          {chatName}
        </i>
      </RoomName>

      <div>
        {Object.values(users).map(user => (
          <UserName key={user.id}>
            <i className="fa fa-user-o" aria-hidden="true" /> {user.name}
          </UserName>
        ))}
      </div>
    </InfoDiv>
  );
};
