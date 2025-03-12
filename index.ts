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

const youtube = new Client({
  fetchOptions: {
    headers: { "Accept-Language": "en" },
  },
});

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

// Open browser function
function openBrowser(url: string) {
  const platform = process.platform;
  const command = 
    platform === "win32" ? `start ${url}` :
    platform === "darwin" ? `open ${url}` :
    `xdg-open ${url}`;
    
  try {
    Bun.spawn(command.split(" "), {
      stdout: "inherit",
      stderr: "inherit",
      shell: true,
    });
    console.log(`Browser opened to ${url}`);
  } catch (error) {
    console.error(`Failed to open browser: ${error}`);
  }
}

const server = Bun.serve({
  port: 6969,
  async fetch(request) {
    const serverURL = new URL(request.url);
    
    // Landing page with forms for each path
    if (serverURL.pathname === "/" || serverURL.pathname === "") {
      return new Response(
        `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>YouTube Data Fetcher</title>
          <style>
            :root {
              --primary-color: #4CAF50;
              --primary-hover: #45a049;
              --primary-active: #3e8e41;
              --secondary-color: #2196F3;
              --card-bg: #f9f9f9;
              --border-color: #e0e0e0;
            }
            
            * {
              box-sizing: border-box;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }
            
            body {
              margin: 0;
              padding: 0;
              background-color: #f5f5f5;
              color: #333;
            }
            
            .container {
              max-width: 1200px;
              margin: 0 auto;
              padding: 20px;
            }
            
            header {
              text-align: center;
              margin-bottom: 40px;
              padding: 20px;
              background-color: white;
              border-radius: 8px;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            }
            
            h1 {
              margin: 0;
              color: #333;
              font-size: 2.5rem;
            }
            
            h2 {
              margin-top: 0;
              color: #444;
              font-size: 1.5rem;
            }
            
            .cards {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
              gap: 20px;
              margin-bottom: 40px;
            }
            
            .card {
              background-color: var(--card-bg);
              border-radius: 8px;
              overflow: hidden;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              transition: transform 0.3s ease;
            }
            
            .card:hover {
              transform: translateY(-5px);
              box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            }
            
            .card-header {
              background-color: var(--primary-color);
              color: white;
              padding: 15px;
              font-size: 1.2rem;
              font-weight: bold;
            }
            
            .batch-card .card-header {
              background-color: var(--secondary-color);
            }
            
            .card-body {
              padding: 20px;
            }
            
            .form-group {
              margin-bottom: 15px;
            }
            
            label {
              display: block;
              margin-bottom: 5px;
              font-weight: 500;
            }
            
            input[type="text"] {
              width: 100%;
              padding: 10px;
              border: 1px solid var(--border-color);
              border-radius: 4px;
              font-size: 16px;
              transition: border-color 0.3s;
            }
            
            input[type="text"]:focus {
              border-color: var(--primary-color);
              outline: none;
              box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.2);
            }
            
            .btn {
              background-color: var(--primary-color);
              border: none;
              color: white;
              padding: 12px 20px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              font-weight: 600;
              border-radius: 4px;
              cursor: pointer;
              transition: background-color 0.3s, transform 0.1s;
              width: 100%;
              margin-top: 10px;
            }
            
            .btn:hover {
              background-color: var(--primary-hover);
            }
            
            .btn:active {
              background-color: var(--primary-active);
              transform: translateY(1px);
            }
            
            .batch-card .btn {
              background-color: var(--secondary-color);
            }
            
            .batch-card .btn:hover {
              background-color: #1976D2;
            }
            
            .batch-card .btn:active {
              background-color: #1565C0;
            }
            
            .optional {
              font-size: 0.8rem;
              color: #777;
              margin-top: 2px;
            }
            
            footer {
              text-align: center;
              margin-top: 40px;
              padding: 20px;
              color: #777;
              border-top: 1px solid var(--border-color);
            }

            .input-group {
              position: relative;
              display: flex;
              align-items: center;
            }

            .clear-btn {
              position: absolute;
              right: 10px;
              width: 25px;
              height: 25px;
              border: 1px solid rgba(0,0,0,0.1);
              border-radius: 25%;
              background: rgba(0,0,0,0.05);
              cursor: pointer;
              color: #999;
              font-size: 16px;
              display: none;
            }

            .clear-btn:hover {
              color: #666;
            }

            input[type="text"]:not(:placeholder-shown) + .clear-btn {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <header>
              <h1>YouTube Data Fetcher</h1>
              <p>Extract formatted TypeScript data from YouTube videos, playlists, and channels</p>
            </header>
            
            <div class="cards">
              <!-- Single Video Card -->
              <div class="card">
                <div class="card-header">
                  Single Video
                </div>
                <div class="card-body">
                  <form id="videoForm" action="/v" method="get">
                    <div class="form-group">
                      <label for="video-id">Video ID</label>
                      <div class="input-group">
                        <input type="text" id="video-id" name="id" placeholder="e.g. dQw4w9WgXcQ" required>
                        <button type="button" class="clear-btn" onclick="clearInput('video-id', 'videoID')">&times;</button>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="video-name">Variable Name</label>
                      <div class="input-group">
                        <input type="text" id="video-name" name="name" placeholder="e.g. videoData">
                        <button type="button" class="clear-btn" onclick="clearInput('video-name', 'videoName')">&times;</button>
                      </div>
                      <div class="optional">Optional - defaults to "videoData"</div>
                    </div>
                    <button type="submit" class="btn">Fetch Video Data</button>
                  </form>
                </div>
              </div>
              
              <!-- Playlist Card -->
              <div class="card">
                <div class="card-header">
                  Playlist
                </div>
                <div class="card-body">
                  <form id="playlistForm" action="/p" method="get">
                    <div class="form-group">
                      <label for="playlist-id">Playlist ID</label>
                      <div class="input-group">
                        <input type="text" id="playlist-id" name="id" placeholder="e.g. PL59FEE129ADFF8C5A" required>
                        <button type="button" class="clear-btn" onclick="clearInput('playlist-id', 'playlistID')">&times;</button>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="playlist-name">Variable Name</label>
                      <div class="input-group">
                        <input type="text" id="playlist-name" name="name" placeholder="e.g. playlistData">
                        <button type="button" class="clear-btn" onclick="clearInput('playlist-name', 'playlistName')">&times;</button>
                      </div>
                      <div class="optional">Optional - defaults to "playlistData"</div>
                    </div>
                    <button type="submit" class="btn">Fetch Playlist Data</button>
                  </form>
                </div>
              </div>
              
              <!-- Channel Card -->
              <div class="card">
                <div class="card-header">
                  Channel
                </div>
                <div class="card-body">
                  <form id="channelForm" action="/c" method="get">
                    <div class="form-group">
                      <label for="channel-id">Channel Playlist ID</label>
                      <div class="input-group">
                        <input type="text" id="channel-id" name="id" placeholder="e.g. UU-lHJZR3Gqxm24_Vd_AJ5Yw" required>
                        <button type="button" class="clear-btn" onclick="clearInput('channel-id', 'channelID')">&times;</button>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="channel-name">Variable Name</label>
                      <div class="input-group">
                        <input type="text" id="channel-name" name="name" placeholder="e.g. channelData">
                        <button type="button" class="clear-btn" onclick="clearInput('channel-name', 'channelName')">&times;</button>
                      </div>
                      <div class="optional">Optional - defaults to "channelData"</div>
                    </div>
                    <button type="submit" class="btn">Fetch Channel Data</button>
                  </form>
                </div>
              </div>
            </div>
            
            <!-- Batch Card -->
            <div class="card batch-card">
              <div class="card-header">
                Batch (Multiple Playlists)
              </div>
              <div class="card-body">
                <form id="batchForm" action="/b" method="get">
                  <div class="form-group">
                    <label for="batch-id1">Playlist ID 1 (c1Data)</label>
                    <div class="input-group">
                      <input type="text" id="batch-id1" name="id1" placeholder="First playlist ID" required>
                      <button type="button" class="clear-btn" onclick="clearInput('batch-id1', 'batchID1')">&times;</button>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="batch-id2">Playlist ID 2 (c2Data)</label>
                    <div class="input-group">
                      <input type="text" id="batch-id2" name="id2" placeholder="Second playlist ID" required>
                      <button type="button" class="clear-btn" onclick="clearInput('batch-id2', 'batchID2')">&times;</button>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="batch-id3">Playlist ID 3 (c3Data)</label>
                    <div class="input-group">
                      <input type="text" id="batch-id3" name="id3" placeholder="Third playlist ID" required>
                      <button type="button" class="clear-btn" onclick="clearInput('batch-id3', 'batchID3')">&times;</button>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="batch-id4">Playlist ID 4 (c4Data)</label>
                    <div class="input-group">
                      <input type="text" id="batch-id4" name="id4" placeholder="Fourth playlist ID" required>
                      <button type="button" class="clear-btn" onclick="clearInput('batch-id4', 'batchID4')">&times;</button>
                    </div>
                  </div>
                  <button type="submit" class="btn">Fetch Batch Data</button>
                </form>
              </div>
            </div>
            
            <footer>
              <p>YouTube Data Fetcher | Built with Bun and TypeScript</p>
            </footer>
          </div>

          <script>
            // Load saved data from localStorage when page loads
            document.addEventListener('DOMContentLoaded', function() {
              // Map of input IDs to their localStorage keys
              const inputMap = {
                'video-id': 'videoID',
                'video-name': 'videoName',
                'playlist-id': 'playlistID',
                'playlist-name': 'playlistName',
                'channel-id': 'channelID',
                'channel-name': 'channelName',
                'batch-id1': 'batchID1',
                'batch-id2': 'batchID2',
                'batch-id3': 'batchID3',
                'batch-id4': 'batchID4'
              };

              // For each input, load saved value if it exists
              Object.entries(inputMap).forEach(([inputId, storageKey]) => {
                const savedValue = localStorage.getItem(storageKey);
                if (savedValue) {
                  document.getElementById(inputId).value = savedValue;
                }
              });

              // Save input values on change
              Object.entries(inputMap).forEach(([inputId, storageKey]) => {
                const input = document.getElementById(inputId);
                input.addEventListener('input', function() {
                  if (this.value) {
                    localStorage.setItem(storageKey, this.value);
                  } else {
                    localStorage.removeItem(storageKey);
                  }
                });
              });
            });

            // Function to clear an input and remove from localStorage
            function clearInput(inputId, storageKey) {
              const input = document.getElementById(inputId);
              input.value = '';
              localStorage.removeItem(storageKey);
              input.focus();
            }
          </script>
        </body>
        </html>`,
        {
          headers: {
            "Content-Type": "text/html",
          },
        }
      );
    }
    
    // Common result page style and navbar for all routes
    const commonResultPageStyle = `
      /* Base styles */
      * {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      }
      
      body {
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
        color: #333;
      }
      
      /* Navbar styles */
      .navbar {
        background-color: #333;
        color: white;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        height: 60px;
        position: sticky;
        top: 0;
        z-index: 100;
      }
      
      .navbar-left {
        display: flex;
        align-items: center;
      }
      
      .navbar-brand {
        color: white;
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: bold;
        margin-right: 20px;
      }
      
      .navbar-right {
        display: flex;
        align-items: center;
      }
      
      .navbar-form {
        display: flex;
        align-items: center;
        flex: 1;
        max-width: 800px;
      }
      
      .navbar-input {
        padding: 8px 12px;
        border: none;
        border-radius: 4px 0 0 4px;
        font-size: 14px;
        flex: 1;
        height: 36px;
      }
      
      .navbar-input:focus {
        outline: none;
        box-shadow: 0 0 0 2px #4CAF50;
      }
      
      .navbar-button {
        background-color: #4CAF50;
        border: none;
        color: white;
        padding: 8px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 14px;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
        height: 36px;
        transition: background-color 0.3s;
      }
      
      .navbar-button:hover {
        background-color: #45a049;
      }
      
      .copy-btn {
        background-color: #2196F3;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        margin-left: 10px;
        cursor: pointer;
        font-size: 14px;
        transition: background-color 0.3s;
      }
      
      .copy-btn:hover {
        background-color: #1976D2;
      }
      
      .home-btn {
        display: flex;
        align-items: center;
        background-color: transparent;
        color: white;
        border: none;
        padding: 8px 16px;
        border-radius: 4px;
        margin-right: 10px;
        cursor: pointer;
        font-size: 14px;
        text-decoration: none;
        transition: background-color 0.3s;
      }
      
      .home-btn:hover {
        background-color: rgba(255, 255, 255, 0.1);
      }
      
      /* Main container */
      .container {
        max-width: 1200px;
        margin: 20px auto;
        padding: 0 20px;
      }
      
      pre {
        background-color: white;
        padding: 20px;
        overflow: auto;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        font-family: monospace;
        margin-top: 20px;
        white-space: pre-wrap;
      }
      
      .navbar-title {
        margin: 0 20px;
        font-size: 1.2rem;
        font-weight: 500;
      }
    `;
    
    // Single video route
    if (serverURL.pathname === "/v" && request.method === "GET") {
      const id = serverURL.searchParams.get("id");
      const name = serverURL.searchParams.get("name") || "videoData";
      
      if (id) {
        const videoData = await getVideoInfo(id);
        if (!videoData) return new Response("Video not found", { status: 404 });
        
        const output = `
// Single video data
const ${name}: VideoData = ${JSON.stringify(videoData, null, 2)};
`;

        return new Response(
          `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Video Data: ${id}</title>
            <style>${commonResultPageStyle}</style>
          </head>
          <body>
            <nav class="navbar">
              <div class="navbar-left">
                <a href="/" class="navbar-brand">YouTube Data Fetcher</a>
                <div class="navbar-title">Video Data</div>
              </div>
              <div class="navbar-right">
                <a href="/" class="home-btn">Home</a>
                <form class="navbar-form" action="/v" method="get">
                  <input type="text" class="navbar-input" name="id" placeholder="Enter video ID" value="${id}" required>
                  <input type="hidden" name="name" value="${name}">
                  <button type="submit" class="navbar-button">Fetch</button>
                </form>
                <button onclick="copyToClipboard()" class="copy-btn">Copy Code</button>
              </div>
            </nav>
            
            <div class="container">
              <pre id="codeOutput">${output}</pre>
            </div>
            
            <script>
              function copyToClipboard() {
                const code = document.getElementById('codeOutput').textContent;
                navigator.clipboard.writeText(code)
                  .then(() => {
                    const btn = document.querySelector('.copy-btn');
                    const originalText = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(() => {
                      btn.textContent = originalText;
                    }, 2000);
                  })
                  .catch(err => {
                    console.error('Failed to copy: ', err);
                  });
              }
            </script>
          </body>
          </html>`,
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
      }
    }
    
    // Playlist route
    if (serverURL.pathname === "/p" && request.method === "GET") {
      const id = serverURL.searchParams.get("id");
      const name = serverURL.searchParams.get("name") || "playlistData";
      
      if (id) {
        const playlistData = await getPlaylistInfo(id);
        if (!playlistData) return new Response("Playlist not found", { status: 404 });
        
        const output = `
// Playlist video data
const ${name}: VideoData[] = ${JSON.stringify(playlistData, null, 2)};
`;

        return new Response(
          `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Playlist Data: ${id}</title>
            <style>${commonResultPageStyle}</style>
          </head>
          <body>
            <nav class="navbar">
              <div class="navbar-left">
                <a href="/" class="navbar-brand">YouTube Data Fetcher</a>
                <div class="navbar-title">Playlist Data</div>
              </div>
              <div class="navbar-right">
                <a href="/" class="home-btn">Home</a>
                <form class="navbar-form" action="/p" method="get">
                  <input type="text" class="navbar-input" name="id" placeholder="Enter playlist ID" value="${id}" required>
                  <input type="hidden" name="name" value="${name}">
                  <button type="submit" class="navbar-button">Fetch</button>
                </form>
                <button onclick="copyToClipboard()" class="copy-btn">Copy Code</button>
              </div>
            </nav>
            
            <div class="container">
              <pre id="codeOutput">${output}</pre>
            </div>
            
            <script>
              function copyToClipboard() {
                const code = document.getElementById('codeOutput').textContent;
                navigator.clipboard.writeText(code)
                  .then(() => {
                    const btn = document.querySelector('.copy-btn');
                    const originalText = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(() => {
                      btn.textContent = originalText;
                    }, 2000);
                  })
                  .catch(err => {
                    console.error('Failed to copy: ', err);
                  });
              }
            </script>
          </body>
          </html>`,
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
      }
    }
    
    // Channel route
    if (serverURL.pathname === "/c" && request.method === "GET") {
      const id = serverURL.searchParams.get("id");
      const name = serverURL.searchParams.get("name") || "channelData";
      
      if (id) {
        const playlistData = await getPlaylistInfo(id);
        if (!playlistData) return new Response("Channel playlist not found", { status: 404 });
        
        const channelData: ChannelData[] = playlistData.map((e) => ({ ...e.data.channel }));
        const uniqueChannels = channelData.filter((element, index) => {
          return channelData.findIndex((el) => el.name === element.name) === index;
        });
        
        const output = `
// Channel data
const ${name}: ChannelData[] = ${JSON.stringify(uniqueChannels, null, 2)};
`;

        return new Response(
          `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Channel Data: ${id}</title>
            <style>${commonResultPageStyle}</style>
          </head>
          <body>
            <nav class="navbar">
              <div class="navbar-left">
                <a href="/" class="navbar-brand">YouTube Data Fetcher</a>
                <div class="navbar-title">Channel Data</div>
              </div>
              <div class="navbar-right">
                <a href="/" class="home-btn">Home</a>
                <form class="navbar-form" action="/c" method="get">
                  <input type="text" class="navbar-input" name="id" placeholder="Enter channel ID" value="${id}" required>
                  <input type="hidden" name="name" value="${name}">
                  <button type="submit" class="navbar-button">Fetch</button>
                </form>
                <button onclick="copyToClipboard()" class="copy-btn">Copy Code</button>
              </div>
            </nav>
            
            <div class="container">
              <pre id="codeOutput">${output}</pre>
            </div>
            
            <script>
              function copyToClipboard() {
                const code = document.getElementById('codeOutput').textContent;
                navigator.clipboard.writeText(code)
                  .then(() => {
                    const btn = document.querySelector('.copy-btn');
                    const originalText = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(() => {
                      btn.textContent = originalText;
                    }, 2000);
                  })
                  .catch(err => {
                    console.error('Failed to copy: ', err);
                  });
              }
            </script>
          </body>
          </html>`,
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
      }
    }
    
    // Batch route - multiple playlists
    if (serverURL.pathname === "/b" && request.method === "GET") {
      const id1 = serverURL.searchParams.get("id1");
      const id2 = serverURL.searchParams.get("id2");
      const id3 = serverURL.searchParams.get("id3");
      const id4 = serverURL.searchParams.get("id4");

      if (id1 && id2 && id3 && id4) {
        // Fetch the data for each playlist
        const c1Promise = getPlaylistInfo(id1);
        const c2Promise = getPlaylistInfo(id2);
        const c3Promise = getPlaylistInfo(id3);
        const c4Promise = getPlaylistInfo(id4);

        // Wait for all promises to resolve
        const [c1Data, c2Data, c3Data, c4Data] = await Promise.all([
          c1Promise,
          c2Promise,
          c3Promise,
          c4Promise,
        ]);

        // Create the output string with proper formatting
        const output = `
// Video data arrays
const c1Data: VideoData[] = ${JSON.stringify(c1Data, null, 2)};

const c2Data: VideoData[] = ${JSON.stringify(c2Data, null, 2)};

const c3Data: VideoData[] = ${JSON.stringify(c3Data, null, 2)};

const c4Data: VideoData[] = ${JSON.stringify(c4Data, null, 2)};
`;

        return new Response(
          `<!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Batch Data</title>
            <style>${commonResultPageStyle}</style>
            <style>
              .batch-form {
                display: grid;
                grid-template-columns: 1fr auto;
                gap: 10px;
                align-items: center;
              }
              
              .batch-inputs {
                display: grid;
                grid-template-columns: 1fr 1fr 1fr 1fr;
                gap: 10px;
              }
              
              @media (max-width: 768px) {
                .batch-inputs {
                  grid-template-columns: 1fr;
                }
              }
            </style>
          </head>
          <body>
            <nav class="navbar">
              <div class="navbar-left">
                <a href="/" class="navbar-brand">YouTube Data Fetcher</a>
                <div class="navbar-title">Batch Data</div>
              </div>
              <div class="navbar-right">
                <a href="/" class="home-btn">Home</a>
                <button onclick="toggleForm()" class="navbar-button">New Batch</button>
                <button onclick="copyToClipboard()" class="copy-btn">Copy Code</button>
              </div>
            </nav>
            
            <div class="container">
              <div id="batchFormContainer" style="display: none; margin: 20px 0; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
                <form class="batch-form" action="/b" method="get">
                  <div class="batch-inputs">
                    <input type="text" class="navbar-input" name="id1" placeholder="Playlist ID 1" value="${id1}" required>
                    <input type="text" class="navbar-input" name="id2" placeholder="Playlist ID 2" value="${id2}" required>
                    <input type="text" class="navbar-input" name="id3" placeholder="Playlist ID 3" value="${id3}" required>
                    <input type="text" class="navbar-input" name="id4" placeholder="Playlist ID 4" value="${id4}" required>
                  </div>
                  <button type="submit" class="navbar-button" style="height: auto;">Fetch Batch</button>
                </form>
              </div>
              
              <pre id="codeOutput">${output}</pre>
            </div>
            
            <script>
              function copyToClipboard() {
                const code = document.getElementById('codeOutput').textContent;
                navigator.clipboard.writeText(code)
                  .then(() => {
                    const btn = document.querySelector('.copy-btn');
                    const originalText = btn.textContent;
                    btn.textContent = 'Copied!';
                    setTimeout(() => {
                      btn.textContent = originalText;
                    }, 2000);
                  })
                  .catch(err => {
                    console.error('Failed to copy: ', err);
                  });
              }
              
              function toggleForm() {
                const form = document.getElementById('batchFormContainer');
                if (form.style.display === 'none') {
                  form.style.display = 'block';
                } else {
                  form.style.display = 'none';
                }
              }
            </script>
          </body>
          </html>`,
          {
            headers: {
              "Content-Type": "text/html",
            },
          }
        );
      }
    }

    // Default response redirects to the home page
    return Response.redirect(`${serverURL.origin}/`, 302);
  },
});

console.log(`Listening on ${server.url}`);

// Open the browser automatically after server starts
setTimeout(() => {
  openBrowser(`http://localhost:${server.port}`);
}, 500); // Small delay to ensure server is fully initialized
