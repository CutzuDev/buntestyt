// Define the VideoData interface if you haven't already
interface VideoData {
  data: {
    video: {
      title: string;
      url: string;
      id: string;
      viewCount: number;
      likeCount: number;
      thumbnail: string;
      date: string;
    };
    channel: {
      name: string;
      url: string;
      subCount: string;
      id: string;
      pfp: string;
    };
  };
}

// Video data arrays
const c1Data: VideoData[] = [
  {
    data: {
      video: {
        title: "My Daughter's Emotional Surprise *No Phone for 24 Hours*",
        url: "https://www.youtube.com/watch?v=E6W83SpUEzU",
        id: "E6W83SpUEzU",
        viewCount: 51272970,
        likeCount: 345392,
        thumbnail:
          "https://i.ytimg.com/vi/E6W83SpUEzU/maxresdefault.jpg?v=6517be3f",
        date: "May 6 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "MY DAUGHTER TURNS 21 YEARS OLD!",
        url: "https://www.youtube.com/watch?v=AEx0jR-yWcg",
        id: "AEx0jR-yWcg",
        viewCount: 50927113,
        likeCount: 1009709,
        thumbnail:
          "https://i.ytimg.com/vi/AEx0jR-yWcg/maxresdefault.jpg?v=6442bf8a",
        date: "Apr 15 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title:
          "Transforming My Daughter Into Wednesday Addams *not emotional ðŸ˜‚*",
        url: "https://www.youtube.com/watch?v=aq51y4meMOo",
        id: "aq51y4meMOo",
        viewCount: 27348174,
        likeCount: 234065,
        thumbnail:
          "https://i.ytimg.com/vi/aq51y4meMOo/maxresdefault.jpg?v=640c440f",
        date: "Mar 11 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "MY DAUGHTER'S NEW JOB ft/ Brent Rivera & Royalty Family",
        url: "https://www.youtube.com/watch?v=pe1tMR0TUX0",
        id: "pe1tMR0TUX0",
        viewCount: 30976845,
        likeCount: 340938,
        thumbnail:
          "https://i.ytimg.com/vi/pe1tMR0TUX0/maxresdefault.jpg?v=6427e362",
        date: "Apr 1 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "MY DAUGHTER'S DREAM VACATION in Alphabetical Order",
        url: "https://www.youtube.com/watch?v=oWc6RY8U6KQ",
        id: "oWc6RY8U6KQ",
        viewCount: 33632129,
        likeCount: 225608,
        thumbnail:
          "https://i.ytimg.com/vi/oWc6RY8U6KQ/maxresdefault.jpg?v=6443971c",
        date: "Apr 22 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "Extreme Hide & Seek in World's Largest Bounce House",
        url: "https://www.youtube.com/watch?v=JYI95jCLBPk",
        id: "JYI95jCLBPk",
        viewCount: 21733876,
        likeCount: 199036,
        thumbnail:
          "https://i.ytimg.com/vi/JYI95jCLBPk/maxresdefault.jpg?v=63f554c4",
        date: "Feb 18 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "Can My Daughter Find Her Valentine Blindfolded? *emotional*",
        url: "https://www.youtube.com/watch?v=Q5rYzTVh7I8",
        id: "Q5rYzTVh7I8",
        viewCount: 39405973,
        likeCount: 417144,
        thumbnail:
          "https://i.ytimg.com/vi/Q5rYzTVh7I8/maxresdefault.jpg?v=63e75718",
        date: "Feb 11 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "My Daughter's First Day at a NEW SCHOOL",
        url: "https://www.youtube.com/watch?v=V7kXMTflQKU",
        id: "V7kXMTflQKU",
        viewCount: 24068753,
        likeCount: 181911,
        thumbnail:
          "https://i.ytimg.com/vi/V7kXMTflQKU/maxresdefault.jpg?v=644cf302",
        date: "Apr 29 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "BUSTING 100 MYTHS IN 24 HOURS!",
        url: "https://www.youtube.com/watch?v=0NXvJ2rLmbo",
        id: "0NXvJ2rLmbo",
        viewCount: 28549385,
        likeCount: 308453,
        thumbnail:
          "https://i.ytimg.com/vi/0NXvJ2rLmbo/maxresdefault.jpg?v=63fa3ed7",
        date: "Feb 25 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "GUESS THE MOM! *Emotional*",
        url: "https://www.youtube.com/watch?v=F16odXHkjd8",
        id: "F16odXHkjd8",
        viewCount: 30096174,
        likeCount: 233902,
        thumbnail:
          "https://i.ytimg.com/vi/F16odXHkjd8/maxresdefault.jpg?v=645f4586",
        date: "May 13 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "MY DAUGHTERâ€™S EMOTIONAL FIRST DATE",
        url: "https://www.youtube.com/watch?v=fG1l2Kd02tM",
        id: "fG1l2Kd02tM",
        viewCount: 43583729,
        likeCount: 442455,
        thumbnail:
          "https://i.ytimg.com/vi/fG1l2Kd02tM/maxresdefault.jpg?v=659a74bc",
        date: "Mar 25 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "RIDING EVERY RIDE IN EPIC THEME PARK WITH BEST FRIEND!",
        url: "https://www.youtube.com/watch?v=uAOcPiT1k6g",
        id: "uAOcPiT1k6g",
        viewCount: 6942917,
        likeCount: 71726,
        thumbnail:
          "https://i.ytimg.com/vi/uAOcPiT1k6g/maxresdefault.jpg?v=648e21ca",
        date: "Jun 10 2023",
      },
      channel: {
        name: "Nidal Wonder",
        url: "https://www.youtube.com/channel/UCF3D1D3RL6z8QJzgc6dtQRg",
        subCount: "3.54M subscribers",
        id: "UCF3D1D3RL6z8QJzgc6dtQRg",
        pfp: "https://yt3.ggpht.com/TlfnOdCJoCoYzP0xkraG7FOFaWb9pxktplpBqgUQK0xaPlIC0NF2sN-QM7rIP-xG8ok-4ig6=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "30 Day Natural STEROID Transformation! (15 Year Old)",
        url: "https://www.youtube.com/watch?v=RWhjSSyqK6M",
        id: "RWhjSSyqK6M",
        viewCount: 108272,
        likeCount: 2091,
        thumbnail: "https://i.ytimg.com/vi/RWhjSSyqK6M/maxresdefault.jpg",
        date: "Jun 29 2023",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "I Took Ice Baths Everyday for 14 Days and This Happened..",
        url: "https://www.youtube.com/watch?v=5n6t_e9itB0",
        id: "5n6t_e9itB0",
        viewCount: 46593,
        likeCount: 1018,
        thumbnail: "https://i.ytimg.com/vi/5n6t_e9itB0/maxresdefault.jpg",
        date: "Jul 4 2023",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "My Daughter's $1 vs $100,000 Vacation",
        url: "https://www.youtube.com/watch?v=HR7zM5FNoGY",
        id: "HR7zM5FNoGY",
        viewCount: 24374703,
        likeCount: 186311,
        thumbnail:
          "https://i.ytimg.com/vi/HR7zM5FNoGY/maxresdefault.jpg?v=63d18b46",
        date: "Jan 14 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "Emotional New Home Reveal",
        url: "https://www.youtube.com/watch?v=clH23njRT-k",
        id: "clH23njRT-k",
        viewCount: 21721539,
        likeCount: 271997,
        thumbnail:
          "https://i.ytimg.com/vi/clH23njRT-k/maxresdefault.jpg?v=64745181",
        date: "May 27 2023",
      },
      channel: {
        name: "Jordan Matter",
        url: "https://www.youtube.com/channel/UCKaCalz5N5ienIbfPzEbYuA",
        subCount: "28.6M subscribers",
        id: "UCKaCalz5N5ienIbfPzEbYuA",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_lDjDRPwwtga_q3VbrMyDHbpETZ28gejqUoD1Codxft3TA=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "Trolling At The XL BULLY Protest!",
        url: "https://www.youtube.com/watch?v=lYJk_0Qg10o",
        id: "lYJk_0Qg10o",
        viewCount: 18022,
        likeCount: 887,
        thumbnail:
          "https://i.ytimg.com/vi/lYJk_0Qg10o/maxresdefault.jpg?v=65a3c54d",
        date: "Oct 22 2023",
      },
      channel: {
        name: "BillyTheGoat",
        url: "https://www.youtube.com/channel/UCUSZuKsJvjAVZKaOcCUQgLQ",
        subCount: "29.7K subscribers",
        id: "UCUSZuKsJvjAVZKaOcCUQgLQ",
        pfp: "https://yt3.ggpht.com/lSbWy191LmzVI2ZM5oDzQV2v-rRlOdD2giOQFIBqRknbowvotEBsc1j9MzeHWznjY9jGWCK4=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "My Daughter Walks for the First Time!",
        url: "https://www.youtube.com/watch?v=s1Etw0X_h24",
        id: "s1Etw0X_h24",
        viewCount: 9126793,
        likeCount: 93470,
        thumbnail: "https://i.ytimg.com/vi/s1Etw0X_h24/maxresdefault.jpg",
        date: "Dec 10 2023",
      },
      channel: {
        name: "The Royalty Family",
        url: "https://www.youtube.com/channel/UCja7QUMRG9AD8X2F_vXFb9A",
        subCount: "29M subscribers",
        id: "UCja7QUMRG9AD8X2F_vXFb9A",
        pfp: "https://yt3.ggpht.com/2Zfi0iwOh5bEjVUlNlOPd5fAHGsgRtwBZwA75MIz11GBiQripRbXp3fQAmc_QPoXUOpFKvmAOg=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "RUSHED MY PUPPY To The EMERGENCY ROOM! *EMOTIONAL*ðŸ’”",
        url: "https://www.youtube.com/watch?v=vSf6ScPJYDY",
        id: "vSf6ScPJYDY",
        viewCount: 849076,
        likeCount: 12745,
        thumbnail:
          "https://i.ytimg.com/vi/vSf6ScPJYDY/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDdpfuLQHxstyRDY7lPd7TiDHNpeA",
        date: "Jan 19 2025",
      },
      channel: {
        name: "Familia Diamond",
        url: "https://www.youtube.com/channel/UC5ZOSZ-Bpass2ZkJY9q9ISg",
        subCount: "11M subscribers",
        id: "UC5ZOSZ-Bpass2ZkJY9q9ISg",
        pfp: "https://yt3.ggpht.com/02_tYR9IIzhPL7KOHet7GjIvl0Csq4HyFzsRdJskn0moc93igmHQ9I838a4hW-WdV7OUxq14iw=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
];

const c2Data: VideoData[] = [
  {
    data: {
      video: {
        title: "The Truth About FaZe H1ghSky1...",
        url: "https://www.youtube.com/watch?v=swrX75UmyHM",
        id: "swrX75UmyHM",
        viewCount: 225402,
        likeCount: 5765,
        thumbnail: "https://i.ytimg.com/vi/swrX75UmyHM/maxresdefault.jpg",
        date: "Jul 23 2023",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
];

const c3Data: VideoData[] = [
  {
    data: {
      video: {
        title: "FaZe H1ghSky1 Reacts to OG Fortnite Season...",
        url: "https://www.youtube.com/watch?v=9czBJGnuU1Y",
        id: "9czBJGnuU1Y",
        viewCount: 63393,
        likeCount: 1723,
        thumbnail: "https://i.ytimg.com/vi/9czBJGnuU1Y/maxresdefault.jpg",
        date: "Nov 4 2023",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "Operation FaZe H1ghSky1",
        url: "https://www.youtube.com/watch?v=zHtS04QOvJ8",
        id: "zHtS04QOvJ8",
        viewCount: 16960,
        likeCount: 384,
        thumbnail: "https://i.ytimg.com/vi/zHtS04QOvJ8/maxresdefault.jpg",
        date: "Feb 10 2024",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "The CRAZIEST OG Fortnite Challenge...",
        url: "https://www.youtube.com/watch?v=c6RhrzXepQ0",
        id: "c6RhrzXepQ0",
        viewCount: 82364,
        likeCount: 1152,
        thumbnail: "https://i.ytimg.com/vi/c6RhrzXepQ0/maxresdefault.jpg",
        date: "Nov 16 2023",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "OG FORTNITE IS BACK... (EVERYTHING you NEED to know)",
        url: "https://www.youtube.com/watch?v=V6W1PSipczk",
        id: "V6W1PSipczk",
        viewCount: 53965,
        likeCount: 870,
        thumbnail: "https://i.ytimg.com/vi/V6W1PSipczk/maxresdefault.jpg",
        date: "Nov 8 2023",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "I Survived 100 Days as the WARHAMMER TITAN in Minecraft...",
        url: "https://www.youtube.com/watch?v=SLrqMaVelRM",
        id: "SLrqMaVelRM",
        viewCount: 394563,
        likeCount: 6754,
        thumbnail: "https://i.ytimg.com/vi/SLrqMaVelRM/maxresdefault.jpg",
        date: "Oct 15 2022",
      },
      channel: {
        name: "Dr Duke",
        url: "https://www.youtube.com/channel/UC6QVCsU56eYp7DQt9AL_3Tw",
        subCount: "229K subscribers",
        id: "UC6QVCsU56eYp7DQt9AL_3Tw",
        pfp: "https://yt3.ggpht.com/mfKLHMGYW3V-uiXqytVjCTJ17-TYIvvhQpxSuRX1m45pKYORnBmiAZywV0PahiIl0Vux1jAjfw=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "I Survived 100 Days as a DRAGON TRAINER in HARDCORE Minecraft!",
        url: "https://www.youtube.com/watch?v=dSjtRr796j8",
        id: "dSjtRr796j8",
        viewCount: 971520,
        likeCount: 14093,
        thumbnail: "https://i.ytimg.com/vi/dSjtRr796j8/maxresdefault.jpg",
        date: "Dec 9 2022",
      },
      channel: {
        name: "Dr Duke",
        url: "https://www.youtube.com/channel/UC6QVCsU56eYp7DQt9AL_3Tw",
        subCount: "229K subscribers",
        id: "UC6QVCsU56eYp7DQt9AL_3Tw",
        pfp: "https://yt3.ggpht.com/mfKLHMGYW3V-uiXqytVjCTJ17-TYIvvhQpxSuRX1m45pKYORnBmiAZywV0PahiIl0Vux1jAjfw=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "I CHEATED With //PASTE in a CARS Build Challenge!",
        url: "https://www.youtube.com/watch?v=iYQKbxOKzfc",
        id: "iYQKbxOKzfc",
        viewCount: 2209001,
        likeCount: 26446,
        thumbnail: "https://i.ytimg.com/vi/iYQKbxOKzfc/maxresdefault.jpg",
        date: "Mar 5 2023",
      },
      channel: {
        name: "Shiny",
        url: "https://www.youtube.com/channel/UClpa8QglcnmzK3zREDYwWSA",
        subCount: "75K subscribers",
        id: "UClpa8QglcnmzK3zREDYwWSA",
        pfp: "https://yt3.ggpht.com/V2f4CiS7JOY3-L-7p3D_DLp576Vb-FCEn741W_Uge7fsrd9-MwyUxMiTeIxcF5OCv3BPjZSS=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "W-Keying In Unreal Ranked Ft. FaZe H1ghSky1",
        url: "https://www.youtube.com/watch?v=OSFyEa-Z9C4",
        id: "OSFyEa-Z9C4",
        viewCount: 82327,
        likeCount: 918,
        thumbnail: "https://i.ytimg.com/vi/OSFyEa-Z9C4/maxresdefault.jpg",
        date: "Feb 23 2024",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "Zero Build FNCS Ft. FaZe H1ghsky1",
        url: "https://www.youtube.com/watch?v=XaVs6OLP5eE",
        id: "XaVs6OLP5eE",
        viewCount: 18327,
        likeCount: 302,
        thumbnail: "https://i.ytimg.com/vi/XaVs6OLP5eE/maxresdefault.jpg",
        date: "Feb 19 2024",
      },
      channel: {
        name: "FaZe H1ghSky1",
        url: "https://www.youtube.com/channel/UCF4ZlYOYWH9QDkQakPpyEww",
        subCount: "2.44M subscribers",
        id: "UCF4ZlYOYWH9QDkQakPpyEww",
        pfp: "https://yt3.ggpht.com/ytc/AIdro_mmKTZ0ZXMkBUzd2STV0gzEbKxQAXS5JHWvaPU0XZPZHI8=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
];

const c4Data: VideoData[] = [
  {
    data: {
      video: {
        title: "MVSI & YVNG - Kaly ft. FRVNCO , COMANN (Official Video)",
        url: "https://www.youtube.com/watch?v=aUyys7kdKXE",
        id: "aUyys7kdKXE",
        viewCount: 5939,
        likeCount: 253,
        thumbnail:
          "https://i.ytimg.com/vi/aUyys7kdKXE/maxresdefault.jpg?v=65a95fbc",
        date: "Jan 18 2024",
      },
      channel: {
        name: "MVSI",
        url: "https://www.youtube.com/channel/UCpA59WeJi47WOwkJhGLw4IQ",
        subCount: "546 subscribers",
        id: "UCpA59WeJi47WOwkJhGLw4IQ",
        pfp: "https://yt3.ggpht.com/etPfklnwZ2RiCjDhCD6sW76lBSC4HTICrENN8V2Lby1F5DPZM96WeDppRamrII1W2MWh8-nwO6I=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "CMMG x RAYMY - Unghii Albe (Official Video)",
        url: "https://www.youtube.com/watch?v=6ZZIlFc45sk",
        id: "6ZZIlFc45sk",
        viewCount: 25356,
        likeCount: 725,
        thumbnail:
          "https://i.ytimg.com/vi/6ZZIlFc45sk/maxresdefault.jpg?v=667c9b03",
        date: "Jun 28 2024",
      },
      channel: {
        name: "CMMG",
        url: "https://www.youtube.com/channel/UC9oFlbv3QMLkKfFTo32U9JA",
        subCount: "2.51K subscribers",
        id: "UC9oFlbv3QMLkKfFTo32U9JA",
        pfp: "https://yt3.ggpht.com/QkzgoO3YywQwOUK4seZn6KjcrSvdyhp-Db0G9mHLy2N8Vp26LlFjWTDRtEOyjDfI1gZqyOS7=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "CMMG - Esti Printesa (Official Video)",
        url: "https://www.youtube.com/watch?v=lAKeIULuvJI",
        id: "lAKeIULuvJI",
        viewCount: 61479,
        likeCount: 195,
        thumbnail:
          "https://i.ytimg.com/vi/lAKeIULuvJI/maxresdefault.jpg?v=65fd8334",
        date: "Mar 22 2024",
      },
      channel: {
        name: "CMMG",
        url: "https://www.youtube.com/channel/UC9oFlbv3QMLkKfFTo32U9JA",
        subCount: "2.51K subscribers",
        id: "UC9oFlbv3QMLkKfFTo32U9JA",
        pfp: "https://yt3.ggpht.com/QkzgoO3YywQwOUK4seZn6KjcrSvdyhp-Db0G9mHLy2N8Vp26LlFjWTDRtEOyjDfI1gZqyOS7=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "CMMG x Maili - Zile&Nopti (Official Video)",
        url: "https://www.youtube.com/watch?v=u-hSiJu_diI",
        id: "u-hSiJu_diI",
        viewCount: 6386,
        likeCount: 134,
        thumbnail:
          "https://i.ytimg.com/vi/u-hSiJu_diI/maxresdefault.jpg?v=662fa7c6",
        date: "Apr 29 2024",
      },
      channel: {
        name: "CMMG",
        url: "https://www.youtube.com/channel/UC9oFlbv3QMLkKfFTo32U9JA",
        subCount: "2.51K subscribers",
        id: "UC9oFlbv3QMLkKfFTo32U9JA",
        pfp: "https://yt3.ggpht.com/QkzgoO3YywQwOUK4seZn6KjcrSvdyhp-Db0G9mHLy2N8Vp26LlFjWTDRtEOyjDfI1gZqyOS7=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "MVSI X YVNG - SUNA MA (Official Video)",
        url: "https://www.youtube.com/watch?v=ZpUIIK1iF1Y",
        id: "ZpUIIK1iF1Y",
        viewCount: 2803,
        likeCount: 177,
        thumbnail:
          "https://i.ytimg.com/vi/ZpUIIK1iF1Y/hqdefault.jpg?sqp=-oaymwEjCNACELwBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLBiWk_IntgQl8fzGKsKAuoq4KyIfg",
        date: "Sep 1 2024",
      },
      channel: {
        name: "MVSI",
        url: "https://www.youtube.com/channel/UCpA59WeJi47WOwkJhGLw4IQ",
        subCount: "546 subscribers",
        id: "UCpA59WeJi47WOwkJhGLw4IQ",
        pfp: "https://yt3.ggpht.com/etPfklnwZ2RiCjDhCD6sW76lBSC4HTICrENN8V2Lby1F5DPZM96WeDppRamrII1W2MWh8-nwO6I=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "CMMG x dnS - Pentru Tine (Official Video)",
        url: "https://www.youtube.com/watch?v=8DkjFZgvu0o",
        id: "8DkjFZgvu0o",
        viewCount: 10279,
        likeCount: 212,
        thumbnail:
          "https://i.ytimg.com/vi/8DkjFZgvu0o/maxresdefault.jpg?v=66bc89f6",
        date: "Aug 23 2024",
      },
      channel: {
        name: "CMMG",
        url: "https://www.youtube.com/channel/UC9oFlbv3QMLkKfFTo32U9JA",
        subCount: "2.51K subscribers",
        id: "UC9oFlbv3QMLkKfFTo32U9JA",
        pfp: "https://yt3.ggpht.com/QkzgoO3YywQwOUK4seZn6KjcrSvdyhp-Db0G9mHLy2N8Vp26LlFjWTDRtEOyjDfI1gZqyOS7=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "DZWS - BOSS (Official Video)",
        url: "https://www.youtube.com/watch?v=7sNzGYJHOYY",
        id: "7sNzGYJHOYY",
        viewCount: 783545,
        likeCount: 8841,
        thumbnail:
          "https://i.ytimg.com/vi/7sNzGYJHOYY/maxresdefault.jpg?v=66f18a50",
        date: "Sep 24 2024",
      },
      channel: {
        name: "DZWS",
        url: "https://www.youtube.com/channel/UCds-os7lY_NhvgY0IvE_tzg",
        subCount: "16.9K subscribers",
        id: "UCds-os7lY_NhvgY0IvE_tzg",
        pfp: "https://yt3.ggpht.com/IeyeRYec_V4UC3hVoExgnk6ImTsdqu8sF2wORQUnBFA82tcZ4vx76cJ-CP8rOQJKFFP7M6gI=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
  {
    data: {
      video: {
        title: "DZWS x SISU TUDOR - CHARLEROI (Official Video)",
        url: "https://www.youtube.com/watch?v=IV9mUcFW0i8",
        id: "IV9mUcFW0i8",
        viewCount: 255580,
        likeCount: 7145,
        thumbnail:
          "https://i.ytimg.com/vi/IV9mUcFW0i8/maxresdefault.jpg?v=67aa2c08",
        date: "Feb 10 2025",
      },
      channel: {
        name: "DZWS",
        url: "https://www.youtube.com/channel/UCds-os7lY_NhvgY0IvE_tzg",
        subCount: "16.9K subscribers",
        id: "UCds-os7lY_NhvgY0IvE_tzg",
        pfp: "https://yt3.ggpht.com/IeyeRYec_V4UC3hVoExgnk6ImTsdqu8sF2wORQUnBFA82tcZ4vx76cJ-CP8rOQJKFFP7M6gI=s176-c-k-c0x00ffffff-no-rj",
      },
    },
  },
];
