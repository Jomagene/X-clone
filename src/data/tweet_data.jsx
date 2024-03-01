import {
  React,
  Reply,
  Retweet,
  Share,
  Verified,
  CNNp,
  NewYorkTimes,
  Principal3,
  TweeterPic,
} from "./icons_images";

const TweetDatas = [
  {
    avatar: CNNp,
    content: {
      body: {
        title: {
          author: "CNN",
          verification: Verified,
          reference: "@CNN",
          dot: ".",
          date: "7m",
        },
        text: 'President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.',
        image: undefined,
      },
      action: {
        actions: [
          { img: Reply, count: "57" },
          { img: Retweet, count: "144" },
          { img: React, count: "184" },
          { img: Share, count: "" },
        ],
      },
    },
  },
  {
    avatar: NewYorkTimes,
    content: {
      body: {
        title: {
          author: "The New York Times",
          verification: Verified,
          reference: "@nytimes",
          dot: ".",
          date: "2h",
        },
        text: "Gardenin boomed during the pandemic. Six Black writers share how has helped them re-establish, and reimagine, a connection to cultivation and the land",
        image: Principal3,
      },
      action: {
        actions: [
          { img: Reply, count: "19" },
          { img: Retweet, count: "48" },
          { img: React, count: "482" },
          { img: Share, count: "" },
        ],
      },
    },
  },
  {
    avatar: TweeterPic,
    content: {
      body: {
        title: {
          author: "Twitter",
          verification: Verified,
          reference: "@Twitter",
          dot: ".",
          date: "Oct 29",
        },
        text: "BIG NEWS lol jk still Twitter",
        image: undefined,
      },
      action: {
        actions: [
          { img: Reply, count: "6.8K" },
          { img: Retweet, count: "36.6K" },
          { img: React, count: "267.1K" },
          { img: Share, count: "" },
        ],
      },
    },
  },
  {
    avatar: TweeterPic,
    content: {
      body: {
        title: {
          author: "Twitter",
          verification: Verified,
          reference: "@Twitter",
          dot: ".",
          date: "Oct 4",
        },
        text: "hello literally everyone",
        image: undefined,
      },
      action: {
        actions: [
          { img: Reply, count: "118.7K" },
          { img: Retweet, count: "785.4K" },
          { img: React, count: "3.3M" },
          { img: Share, count: "" },
        ],
      },
    },
  },
  {
    avatar: TweeterPic,
    content: {
      body: {
        title: {
          author: "Twitter",
          verification: Verified,
          reference: "@Twitter",
          dot: ".",
          date: "Oct 4",
        },
        text: "hello literally everyone",
        image: "",
      },
      action: {
        actions: [
          { img: Reply, count: "57K" },
          { img: Retweet, count: "14.4K" },
          { img: React, count: "184.8K" },
          { img: Share, count: "" },
        ],
      },
    },
  },
];

export default TweetDatas;
