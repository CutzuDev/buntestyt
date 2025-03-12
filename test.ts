
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
  
  // Single video data
  const videoData: VideoData = {
    "data": {
      "video": {
        "title": "Reddit Is In A Really Bad Spot...",
        "url": "https://www.youtube.com/watch?v=7w5gN-x8eyU",
        "id": "7w5gN-x8eyU",
        "viewCount": 238403,
        "likeCount": 10712,
        "thumbnail": "https://i.ytimg.com/vi/7w5gN-x8eyU/maxresdefault.jpg",
        "date": "Mar 11 2025"
      },
      "channel": {
        "name": "SomeOrdinaryGamers",
        "url": "https://www.youtube.com/channel/UCtMVHI3AJD4Qk4hcbZnI9ZQ",
        "subCount": "3.86M subscribers",
        "id": "UCtMVHI3AJD4Qk4hcbZnI9ZQ",
        "pfp": "https://yt3.ggpht.com/ytc/AIdro_m9CJFVl3bEWvGnNnN4G9ErBO2lTpKePWCjx_FQtLWaDww=s176-c-k-c0x00ffffff-no-rj"
      }
    }
  };
  