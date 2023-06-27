import React from 'react'
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const StarButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined
  
  return <Button
    icon={<Icon />}
    onClick={onClick}
  />
}