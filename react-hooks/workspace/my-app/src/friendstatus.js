import React, { useState, useEffect } from "react";

const FriendStatusWithCounter = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    handleStatusChange(true);
    // when component dismounts
    return () => {
      handleStatusChange(false);
    };
  });

  const handleStatusChange = (status) => {
    setIsOnline(status);
  };
};
