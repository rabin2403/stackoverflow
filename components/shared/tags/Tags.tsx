import React from "react";

const Tags = ({
  title,
  classNames,
}: {
  title: String;
  classNames?: String;
}) => {
  return (
    <div
      className={`btn-tertiary w-fit rounded-lg px-3 py-2  capitalize text-dark-400 dark:text-white ${classNames}`}
    >
      {title}
    </div>
  );
};

export default Tags;
