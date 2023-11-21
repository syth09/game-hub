import { List, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreSkeleton = () => {
  return (
    <List>
      <Skeleton width={"200px"} />
      <ListItem>
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreSkeleton;
