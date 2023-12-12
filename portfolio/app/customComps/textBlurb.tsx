import React from "react";

const TextBlurb = (props: { children: string }) => {
  return (
    <div className=" flex flex-wrap relative w-full break-words justify-center p-4">
      {props.children}
    </div>
  );
};

export default TextBlurb;
