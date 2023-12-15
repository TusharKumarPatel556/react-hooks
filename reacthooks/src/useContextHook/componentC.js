import React from "react";
import { UserContext, ChannelContext } from "../App";

const CompC = () => {
  return (
    <div>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContext.Consumer>
              {(channel) => {
                console.log("channel:", channel);
                return (
                  <div>
                    {user} <br /> jyff {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default CompC;
