"use server";
import { Client, VideoCompact } from "youtubei";

export type VideoData = {
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
};

export type ChannelData = {
  name: string;
  url: string;
  subCount: string;
  id: string;
  pfp: string;
};

const youtube = new Client();

export async function getVideoInfo(videoID: string) {
  const result = await youtube.getVideo(videoID);
  if (
    result &&
    result.viewCount &&
    result.likeCount &&
    result.channel.subscriberCount &&
    result.channel.thumbnails &&
    result.uploadDate
  ) {
    if (result.uploadDate.includes("Premiered on ")) {
      result.uploadDate = result.uploadDate.replace("Premiered on ", "");
    }
    if (result.uploadDate.includes("Premiered ")) {
      result.uploadDate = result.uploadDate.replace("Premiered ", "");
    }
    if (result.uploadDate.includes("Premiera a avut loc pe ")) {
      result.uploadDate = result.uploadDate.replace(
        "Premiera a avut loc pe ",
        ""
      );
    }
    if (result.uploadDate.includes(".")) {
      result.uploadDate = result.uploadDate.replace(".", "");
    }
    if (result.uploadDate.includes(",")) {
      result.uploadDate = result.uploadDate.replace(",", "");
    }
    const videoObj: VideoData = {
      data: {
        video: {
          title: result.title,
          url: `https://www.youtube.com/watch?v=${result.id}`,
          id: result.id,
          viewCount: result.viewCount,
          likeCount: result.likeCount,
          thumbnail: result.thumbnails[result.thumbnails.length - 1].url,
          date: result.uploadDate,
        },
        channel: {
          name: result.channel.name,
          url: result.channel.url,
          subCount: result.channel.subscriberCount,
          id: result.channel.id,
          pfp: result.channel.thumbnails[result.channel.thumbnails.length - 1]
            .url,
        },
      },
    };
    return videoObj;
  }
}

export async function getPlaylistInfo(playlistID: string) {
  const result = await youtube.getPlaylist(playlistID);
  if (result && "items" in result.videos) {
    const videos: VideoCompact[] = result?.videos.items;
    const promises = videos.map(async (e) => {
      return await getVideoInfo(e.id);
    });
    const videoData = (await Promise.all(promises)) as VideoData[];
    return videoData;
  }
}
async function getChannelData({ id, name }: { id: string; name?: string }) {
  const data = await getPlaylistInfo(id);
  if (data) {
    const filter: ChannelData[] = data.map((e) => ({ ...e.data.channel }));
    const result = filter.filter((element, index) => {
      return filter.findIndex((el) => el.name === element.name) === index;
    });
    if (name) {
      return `const ${name}: ChannelData[] = ${JSON.stringify(result)}`;
    } else {
      return `const singleArray: ChannelData[] = ${JSON.stringify(result)}`;
    }
  }
}

async function getVideoData({ id, name }: { id: string; name?: string }) {
  const data = await getVideoInfo(id);
  if (name) {
    return `const ${name}: VideoData[] = ${JSON.stringify(data)}`;
  } else {
    return `const singleArray: VideoData[] = ${JSON.stringify(data)}`;
  }
}
async function getPlayListData({ id, name }: { id: string; name?: string }) {
  const data = await getPlaylistInfo(id);
  if (name) {
    return `const ${name}: VideoData[] = ${JSON.stringify(data)}`;
  } else {
    return `const singleArray: VideoData[] = ${JSON.stringify(data)}`;
  }
}

const server = Bun.serve({
  port: 6969,
  async fetch(request) {
    // const path = "./folder/test.ts";
    // const file = Bun.file(path);
    const serverURL = new URL(request.url);
    // console.log(test1.searchParams);
    if (serverURL.pathname === "/v" && request.method === "GET") {
      const id = serverURL.searchParams.get("id");
      const name = serverURL.searchParams.get("name");
      // console.log(serverURL.searchParams)
      if (id) {
        let msg;
        if (name) {
          msg = await getVideoData({ id: id, name: name });
        } else {
          msg = await getVideoData({ id: id });
          // console.log(msg)
        }
        return new Response(
          `<html>
          <style>
            .container {
              display: flex;
              justify-items: center;
              align-items: center;
              flex-direction: column;
              width: 100%;
              gap: 2rem;
            }
          </style>
          <body>
            <div class="container">
              <button style="width: fit-content" onclick="main()">Copy</button>
              <span>${msg}</span>
            </div>
            <script >
              function main() {
                navigator.clipboard.writeText(${JSON.stringify(msg)});
              }
            </script>
          </body>
        </html>
        `,
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
      }
    }
    if (serverURL.pathname === "/p" && request.method === "GET") {
      const id = serverURL.searchParams.get("id");
      const name = serverURL.searchParams.get("name");
      if (id) {
        let msg;
        if (name) {
          msg = await getPlayListData({ id: id, name: name });
        } else {
          msg = await getPlayListData({ id: id });
        }
        return new Response(
          `<html>
          <style>
            .container {
              display: flex;
              justify-items: center;
              align-items: center;
              flex-direction: column;
              width: 100%;
              gap: 2rem;
            }
          </style>
          <body>
            <div class="container">
              <button style="width: fit-content" onclick="main()">Copy</button>
              <span>${msg}</span>
            </div>
            <script >
              function main() {
                navigator.clipboard.writeText(${JSON.stringify(msg)});
              }
            </script>
          </body>
        </html>
        `,
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
      }
    }
    if (serverURL.pathname === "/c" && request.method === "GET") {
      const id = serverURL.searchParams.get("id");
      const name = serverURL.searchParams.get("name");
      if (id) {
        let msg;
        if (name) {
          msg = await getChannelData({ id: id, name: name });
        } else {
          msg = await getChannelData({ id: id });
        }
        return new Response(
          `<html>
          <style>
            .container {
              display: flex;
              justify-items: center;
              align-items: center;
              flex-direction: column;
              width: 100%;
              gap: 2rem;
            }
          </style>
          <body>
            <div class="container">
              <button style="width: fit-content" onclick="main()">Copy</button>
              <span>${msg}</span>
            </div>
            <script >
              function main() {
                navigator.clipboard.writeText(${JSON.stringify(msg)});
              }
            </script>
          </body>
        </html>
        `,
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
      }
    }

    // return new Response(
    //   "Usage: url.com/fetch?id=playlistID\n\nOptional: url.com/fetch?name=arrayName&id=playlistID"
    // );
    // return new Response(JSON.stringify({ hi: "test" }), {
    //   headers: { "Content-Type": "application/json" },
    // });
    return Response.json({
      Usage1: "url.com/v?id=videoID",
      Optional1: "url.com/v?name=arrayName&id=videoID",
      Usage2: "url.com/p?id=playlistID",
      Optional2: "url.com/p?name=arrayName&id=playlistID",
      Usage3: "url.com/c?id=playlistID",
      Optional3: "url.com/c?name=arrayName&id=channelID",
    });
  },
});

console.log(`Listening on ${server.url}`);

// getData()
