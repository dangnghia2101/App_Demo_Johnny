import React, { FC } from "react";
import {
  BottomHomeIcon,
  BottomHistoryIcon,
  BottomPhonebookIcon,
  BottomSettingIcon,
} from "@assets";
import { RenderIconProps } from "@utils/types";

// Render icon for the teacher role in the bottom bar
export const RenderIconMenu: FC<RenderIconProps> = ({ index, color }) => {
  switch (index) {
    case 0:
      return <BottomHomeIcon color={color} />;
    case 1:
      return <BottomHistoryIcon color={color} />;
    case 2:
      return <BottomHistoryIcon color={color} />;
    case 3:
      return <BottomSettingIcon color={color} />;
    default:
      return <BottomHomeIcon color={color} />;
  }
};
