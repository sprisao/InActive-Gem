import React from "react";

const { Kakao } = window;

/*
title: string;
imageUrl: string;
*/
export const shareKakao = () => {
  const sharedUrl = `${window.location.href}?shared=true`;
  // const sharedImageUrl = `$('meta[property="og:image"]')`.attr("content");
  // console.log("sharedImageUrl : " + sharedImageUrl);
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: "",
      description: "어디가지? 고민할 땐, 젬-!",
      imageUrl:
        "https://res.cloudinary.com/diimwnnmj/image/upload/v1623204261/gem-seo_tbulga.jpg",
      link: {
        webUrl: sharedUrl,
        mobileWebUrl: sharedUrl,
      },
    },
    buttons: [
      {
        title: "홈페이지로 보기",
        link: {
          webUrl: sharedUrl,
          mobileWebUrl: sharedUrl,
        },
      },
    ],
  });
};

// export default share;
