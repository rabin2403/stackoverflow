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
      className={`btn-tertiary w-fit capitalize px-3 rounded-lg  py-2 dark:text-white text-dark-400 ${classNames}`}
    >
      {title}
    </div>
  );
};

export default Tags;
