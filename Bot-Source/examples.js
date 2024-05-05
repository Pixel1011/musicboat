/*
made with:
client.examples = {};
client.examples.ytlinkExample = await client.lavalink.api.loadTracks("https://www.youtube.com/watch?v=WmdAk2zyQkU");
client.examples.ytplaylistExample = await client.lavalink.api.loadTracks("https://www.youtube.com/playlist?list=OLAK5uy_l6pEkEJgy577R-aDlJ3Gkp5rmlgIOu8bc");
client.examples.spotifySongExample = await client.lavalink.api.loadTracks("https://open.spotify.com/track/7aux5UvnlBDYlrlwoczifW?si=59ce5ad436d4438f");
client.examples.spotifyAlbumExample = await client.lavalink.api.loadTracks("https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z?si=K0Eu8tpVTAGKwFVsGW8VJA");
client.examples.spotifyPlaylistExample = await client.lavalink.api.loadTracks("https://open.spotify.com/playlist/0DeAs16f4iLEEvERZwmSCE?si=3505fe205130427e");
client.examples.spotifySearchEx = await client.lavalink.api.loadTracks("spsearch:Never gonna give you up");
client.examples.soundcloudExample = await client.lavalink.api.loadTracks("https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4");
client.examples.soundcloudSearchEx = await client.lavalink.api.loadTracks("scsearch:Never gonna give you up");
client.examples.ytsearchEx = await client.lavalink.api.loadTracks("ytsearch:Never gonna give you up");
return JSON.stringify(client.examples);
and threw the output into a json formatter

more or less reference responses to make code for
*/
module.exports = {
  "ytlinkExample": {
    "loadType": "track",
    "data": {
      "encoded": "QAAAxQMAKkxlYXQnZXEgLSBUb2t5byAgKE9mZmljaWFsIE11c2ljIFZpZGVvIEhEKQAJTW9lIFNvdW5kAAAAAAABuWgAC1dtZEFrMnp5UWtVAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9V21kQWsyenlRa1UBADRodHRwczovL2kueXRpbWcuY29tL3ZpL1dtZEFrMnp5UWtVL21heHJlc2RlZmF1bHQuanBnAAAHeW91dHViZQAAAAAAAAAA",
      "info": {
        "isSeekable": true,
        "isStream": false,
        "identifier": "WmdAk2zyQkU",
        "author": "Moe Sound",
        "length": 113000,
        "position": 0,
        "title": "Leat'eq - Tokyo  (Official Music Video HD)",
        "sourceName": "youtube",
        "uri": "https://www.youtube.com/watch?v=WmdAk2zyQkU",
        "artworkUrl": "https://i.ytimg.com/vi/WmdAk2zyQkU/maxresdefault.jpg",
        "isrc": null
      },
      "pluginInfo": {
        
      },
      "userData": {
        
      }
    }
  },
  "ytplaylistExample": {
    "loadType": "playlist",
    "data": {
      "info": {
        "name": "UNDERTALE Soundtrack",
        "selectedTrack": -1
      },
      "pluginInfo": {
        
      },
      "tracks": [
        {
          "encoded": "QAAAuAMAEE9uY2UgVXBvbiBhIFRpbWUAEFRvYnkgRm94IC0gVG9waWMAAAAAAAFbqAALM0JSNy1BekUyZFEAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0zQlI3LUF6RTJkUQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC8zQlI3LUF6RTJkUS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3BR7-AzE2dQ",
            "author": "Toby Fox - Topic",
            "length": 89000,
            "position": 0,
            "title": "Once Upon a Time",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=3BR7-AzE2dQ",
            "artworkUrl": "https://i.ytimg.com/vi_webp/3BR7-AzE2dQ/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsgMAClN0YXJ0IE1lbnUAEFRvYnkgRm94IC0gVG9waWMAAAAAAAB9AAALQkdCV05PTW1TbTAAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1CR0JXTk9NbVNtMAEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9CR0JXTk9NbVNtMC9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "BGBWNOMmSm0",
            "author": "Toby Fox - Topic",
            "length": 32000,
            "position": 0,
            "title": "Start Menu",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=BGBWNOMmSm0",
            "artworkUrl": "https://i.ytimg.com/vi_webp/BGBWNOMmSm0/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuAMAEFlvdXIgQmVzdCBGcmllbmQAEFRvYnkgRm94IC0gVG9waWMAAAAAAABdwAALTExjenRWQlhhbXMAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1MTGN6dFZCWGFtcwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9MTGN6dFZCWGFtcy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "LLcztVBXams",
            "author": "Toby Fox - Topic",
            "length": 24000,
            "position": 0,
            "title": "Your Best Friend",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=LLcztVBXams",
            "artworkUrl": "https://i.ytimg.com/vi_webp/LLcztVBXams/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC0ZhbGxlbiBEb3duABBUb2J5IEZveCAtIFRvcGljAAAAAAAA4pAAC3FINWhNMUlMdUZRAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9cUg1aE0xSUx1RlEBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvcUg1aE0xSUx1RlEvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "qH5hM1ILuFQ",
            "author": "Toby Fox - Topic",
            "length": 58000,
            "position": 0,
            "title": "Fallen Down",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=qH5hM1ILuFQ",
            "artworkUrl": "https://i.ytimg.com/vi_webp/qH5hM1ILuFQ/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArQMABVJ1aW5zABBUb2J5IEZveCAtIFRvcGljAAAAAAABa0gAC0xJVWVjTGFJX204AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TElVZWNMYUlfbTgBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvTElVZWNMYUlfbTgvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "LIUecLaI_m8",
            "author": "Toby Fox - Topic",
            "length": 93000,
            "position": 0,
            "title": "Ruins",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=LIUecLaI_m8",
            "artworkUrl": "https://i.ytimg.com/vi_webp/LIUecLaI_m8/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAvQMAFVV3YSEhIFNvIFRlbXBlcmF0ZeKZqwAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAN6oAAtIQ3JKTmlNbUg4OAABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUhDckpOaU1tSDg4AQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL0hDckpOaU1tSDg4L21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "HCrJNiMmH88",
            "author": "Toby Fox - Topic",
            "length": 57000,
            "position": 0,
            "title": "Uwa!! So Temperate♫",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=HCrJNiMmH88",
            "artworkUrl": "https://i.ytimg.com/vi_webp/HCrJNiMmH88/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtAMADEFudGljaXBhdGlvbgAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAFnYAAsyZlZXSmxWSDFJdwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTJmVldKbFZIMUl3AQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwLzJmVldKbFZIMUl3L21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2fVWJlVH1Iw",
            "author": "Toby Fox - Topic",
            "length": 23000,
            "position": 0,
            "title": "Anticipation",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=2fVWJlVH1Iw",
            "artworkUrl": "https://i.ytimg.com/vi_webp/2fVWJlVH1Iw/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuwMAE1VubmVjZXNzYXJ5IFRlbnNpb24AEFRvYnkgRm94IC0gVG9waWMAAAAAAABGUAALQVQ1Z0w3SHNZVmMAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1BVDVnTDdIc1lWYwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9BVDVnTDdIc1lWYy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "AT5gL7HsYVc",
            "author": "Toby Fox - Topic",
            "length": 18000,
            "position": 0,
            "title": "Unnecessary Tension",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=AT5gL7HsYVc",
            "artworkUrl": "https://i.ytimg.com/vi_webp/AT5gL7HsYVc/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuQMAEUVuZW15IEFwcHJvYWNoaW5nABBUb2J5IEZveCAtIFRvcGljAAAAAAAA3qgAC2c2YWlhMEdRTVJ3AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZzZhaWEwR1FNUncBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvZzZhaWEwR1FNUncvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "g6aia0GQMRw",
            "author": "Toby Fox - Topic",
            "length": 57000,
            "position": 0,
            "title": "Enemy Approaching",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=g6aia0GQMRw",
            "artworkUrl": "https://i.ytimg.com/vi_webp/g6aia0GQMRw/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC0dob3N0IEZpZ2h0ABBUb2J5IEZveCAtIFRvcGljAAAAAAAA3qgAC28wdGt5Mk84TmxZAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bzB0a3kyTzhObFkBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvbzB0a3kyTzhObFkvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "o0tky2O8NlY",
            "author": "Toby Fox - Topic",
            "length": 57000,
            "position": 0,
            "title": "Ghost Fight",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=o0tky2O8NlY",
            "artworkUrl": "https://i.ytimg.com/vi_webp/o0tky2O8NlY/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADURldGVybWluYXRpb24AEFRvYnkgRm94IC0gVG9waWMAAAAAAADHOAALaDF3U1BtbFpWLXcAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1oMXdTUG1sWlYtdwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9oMXdTUG1sWlYtdy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "h1wSPmlZV-w",
            "author": "Toby Fox - Topic",
            "length": 51000,
            "position": 0,
            "title": "Determination",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=h1wSPmlZV-w",
            "artworkUrl": "https://i.ytimg.com/vi_webp/h1wSPmlZV-w/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArAMABEhvbWUAEFRvYnkgRm94IC0gVG9waWMAAAAAAAHgeAALSl9oSkRpdHJoOE0AAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1KX2hKRGl0cmg4TQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9KX2hKRGl0cmg4TS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "J_hJDitrh8M",
            "author": "Toby Fox - Topic",
            "length": 123000,
            "position": 0,
            "title": "Home",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=J_hJDitrh8M",
            "artworkUrl": "https://i.ytimg.com/vi_webp/J_hJDitrh8M/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuAMAEEhvbWUgKE11c2ljIEJveCkAEFRvYnkgRm94IC0gVG9waWMAAAAAAAHgeAALSmQ4dzhpUFdHTTgAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1KZDh3OGlQV0dNOAEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9KZDh3OGlQV0dNOC9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "Jd8w8iPWGM8",
            "author": "Toby Fox - Topic",
            "length": 123000,
            "position": 0,
            "title": "Home (Music Box)",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=Jd8w8iPWGM8",
            "artworkUrl": "https://i.ytimg.com/vi_webp/Jd8w8iPWGM8/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACUhlYXJ0YWNoZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAanIAAtYSjlYdEtKSHZqUQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVhKOVh0S0pIdmpRAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL1hKOVh0S0pIdmpRL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "XJ9XtKJHvjQ",
            "author": "Toby Fox - Topic",
            "length": 109000,
            "position": 0,
            "title": "Heartache",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=XJ9XtKJHvjQ",
            "artworkUrl": "https://i.ytimg.com/vi_webp/XJ9XtKJHvjQ/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArQMABXNhbnMuABBUb2J5IEZveCAtIFRvcGljAAAAAAAAxzgAC2IyVUhvR25HeXZFAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YjJVSG9Hbkd5dkUBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvYjJVSG9Hbkd5dkUvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "b2UHoGnGyvE",
            "author": "Toby Fox - Topic",
            "length": 51000,
            "position": 0,
            "title": "sans.",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=b2UHoGnGyvE",
            "artworkUrl": "https://i.ytimg.com/vi_webp/b2UHoGnGyvE/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADU55ZWggSGVoIEhlaCEAEFRvYnkgRm94IC0gVG9waWMAAAAAAACA6AALLVc2XzZXSEJtMVEAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0tVzZfNldIQm0xUQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC8tVzZfNldIQm0xUS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "-W6_6WHBm1Q",
            "author": "Toby Fox - Topic",
            "length": 33000,
            "position": 0,
            "title": "Nyeh Heh Heh!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=-W6_6WHBm1Q",
            "artworkUrl": "https://i.ytimg.com/vi_webp/-W6_6WHBm1Q/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArQMABVNub3d5ABBUb2J5IEZveCAtIFRvcGljAAAAAAABmigAC0JKRXFkdG9fdUd3AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QkpFcWR0b191R3cBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvQkpFcWR0b191R3cvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "BJEqdto_uGw",
            "author": "Toby Fox - Topic",
            "length": 105000,
            "position": 0,
            "title": "Snowy",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=BJEqdto_uGw",
            "artworkUrl": "https://i.ytimg.com/vi_webp/BJEqdto_uGw/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuwMAE1V3YSEhIFNvIEhvbGlkYXnimasAEFRvYnkgRm94IC0gVG9waWMAAAAAAAB1MAALWGpNX3c1Y2pJYVkAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1Yak1fdzVjaklhWQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9Yak1fdzVjaklhWS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "XjM_w5cjIaY",
            "author": "Toby Fox - Topic",
            "length": 30000,
            "position": 0,
            "title": "Uwa!! So Holiday♫",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=XjM_w5cjIaY",
            "artworkUrl": "https://i.ytimg.com/vi_webp/XjM_w5cjIaY/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArwMAB0RvZ2Jhc3MAEFRvYnkgRm94IC0gVG9waWMAAAAAAAAbWAALZGhIeHR4U0k1ajAAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kaEh4dHhTSTVqMAEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9kaEh4dHhTSTVqMC9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "dhHxtxSI5j0",
            "author": "Toby Fox - Topic",
            "length": 7000,
            "position": 0,
            "title": "Dogbass",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=dhHxtxSI5j0",
            "artworkUrl": "https://i.ytimg.com/vi_webp/dhHxtxSI5j0/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuAMAEE15c3RlcmlvdXMgUGxhY2UAEFRvYnkgRm94IC0gVG9waWMAAAAAAACvyAALZmdxT2lQU3Zudm8AAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1mZ3FPaVBTdm52bwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9mZ3FPaVBTdm52by9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "fgqOiPSvnvo",
            "author": "Toby Fox - Topic",
            "length": 45000,
            "position": 0,
            "title": "Mysterious Place",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=fgqOiPSvnvo",
            "artworkUrl": "https://i.ytimg.com/vi_webp/fgqOiPSvnvo/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArwMAB0RvZ3NvbmcAEFRvYnkgRm94IC0gVG9waWMAAAAAAACUcAALYzd2ZkhKT3EwSDQAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1jN3ZmSEpPcTBINAEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9jN3ZmSEpPcTBINC9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "c7vfHJOq0H4",
            "author": "Toby Fox - Topic",
            "length": 38000,
            "position": 0,
            "title": "Dogsong",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=c7vfHJOq0H4",
            "artworkUrl": "https://i.ytimg.com/vi_webp/c7vfHJOq0H4/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtAMADFNub3dkaW4gVG93bgAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAASzIAAt2WXlMTDlRc3RiSQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXZZeUxMOVFzdGJJAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL3ZZeUxMOVFzdGJJL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "vYyLL9QstbI",
            "author": "Toby Fox - Topic",
            "length": 77000,
            "position": 0,
            "title": "Snowdin Town",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=vYyLL9QstbI",
            "artworkUrl": "https://i.ytimg.com/vi_webp/vYyLL9QstbI/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArAMABFNob3AAEFRvYnkgRm94IC0gVG9waWMAAAAAAADHOAALUjB1TlBJYS1JOWMAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1SMHVOUElhLUk5YwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9SMHVOUElhLUk5Yy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "R0uNPIa-I9c",
            "author": "Toby Fox - Topic",
            "length": 51000,
            "position": 0,
            "title": "Shop",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=R0uNPIa-I9c",
            "artworkUrl": "https://i.ytimg.com/vi_webp/R0uNPIa-I9c/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC0JvbmV0cm91c2xlABBUb2J5IEZveCAtIFRvcGljAAAAAAAA4pAAC0FLQWlVdFdaNHhZAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QUtBaVV0V1o0eFkBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvQUtBaVV0V1o0eFkvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "AKAiUtWZ4xY",
            "author": "Toby Fox - Topic",
            "length": 58000,
            "position": 0,
            "title": "Bonetrousle",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=AKAiUtWZ4xY",
            "artworkUrl": "https://i.ytimg.com/vi_webp/AKAiUtWZ4xY/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADURhdGluZyBTdGFydCEAEFRvYnkgRm94IC0gVG9waWMAAAAAAAHJCAALbGRZMExyaU1jNlUAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1sZFkwTHJpTWM2VQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9sZFkwTHJpTWM2VS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "ldY0LriMc6U",
            "author": "Toby Fox - Topic",
            "length": 117000,
            "position": 0,
            "title": "Dating Start!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=ldY0LriMc6U",
            "artworkUrl": "https://i.ytimg.com/vi_webp/ldY0LriMc6U/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADURhdGluZyBUZW5zZSEAEFRvYnkgRm94IC0gVG9waWMAAAAAAABpeAALMHFCS1hOVlYwZU0AAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0wcUJLWE5WVjBlTQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC8wcUJLWE5WVjBlTS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0qBKXNVV0eM",
            "author": "Toby Fox - Topic",
            "length": 27000,
            "position": 0,
            "title": "Dating Tense!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=0qBKXNVV0eM",
            "artworkUrl": "https://i.ytimg.com/vi_webp/0qBKXNVV0eM/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADURhdGluZyBGaWdodCEAEFRvYnkgRm94IC0gVG9waWMAAAAAAACMoAALakQtb0lMcHc3cjAAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1qRC1vSUxwdzdyMAEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9qRC1vSUxwdzdyMC9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "jD-oILpw7r0",
            "author": "Toby Fox - Topic",
            "length": 36000,
            "position": 0,
            "title": "Dating Fight!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=jD-oILpw7r0",
            "artworkUrl": "https://i.ytimg.com/vi_webp/jD-oILpw7r0/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC1ByZW1vbml0aW9uABBUb2J5IEZveCAtIFRvcGljAAAAAAAA8jAAC3Fod2doUVNxTHBBAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9cWh3Z2hRU3FMcEEBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvcWh3Z2hRU3FMcEEvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "qhwghQSqLpA",
            "author": "Toby Fox - Topic",
            "length": 62000,
            "position": 0,
            "title": "Premonition",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=qhwghQSqLpA",
            "artworkUrl": "https://i.ytimg.com/vi_webp/qhwghQSqLpA/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtgMADkRhbmdlciBNeXN0ZXJ5ABBUb2J5IEZveCAtIFRvcGljAAAAAAAASjgAC1F4TVlGc2ZKWnl3AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UXhNWUZzZkpaeXcBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvUXhNWUZzZkpaeXcvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "QxMYFsfJZyw",
            "author": "Toby Fox - Topic",
            "length": 19000,
            "position": 0,
            "title": "Danger Mystery",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=QxMYFsfJZyw",
            "artworkUrl": "https://i.ytimg.com/vi_webp/QxMYFsfJZyw/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArgMABlVuZHluZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAALOwAAtVWEdNUlZZbUZZdwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVVYR01SVlltRll3AQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL1VYR01SVlltRll3L21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "UXGMRVYmFYw",
            "author": "Toby Fox - Topic",
            "length": 46000,
            "position": 0,
            "title": "Undyne",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=UXGMRVYmFYw",
            "artworkUrl": "https://i.ytimg.com/vi_webp/UXGMRVYmFYw/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACVdhdGVyZmFsbAAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAfAYAAtaYjUyYUU2SVp1WQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVpiNTJhRTZJWnVZAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL1piNTJhRTZJWnVZL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "Zb52aE6IZuY",
            "author": "Toby Fox - Topic",
            "length": 127000,
            "position": 0,
            "title": "Waterfall",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=Zb52aE6IZuY",
            "artworkUrl": "https://i.ytimg.com/vi_webp/Zb52aE6IZuY/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArAMABFJ1biEAEFRvYnkgRm94IC0gVG9waWMAAAAAAABpeAALSzZ3eXRvWC1rN1EAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1LNnd5dG9YLWs3UQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9LNnd5dG9YLWs3US9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "K6wytoX-k7Q",
            "author": "Toby Fox - Topic",
            "length": 27000,
            "position": 0,
            "title": "Run!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=K6wytoX-k7Q",
            "artworkUrl": "https://i.ytimg.com/vi_webp/K6wytoX-k7Q/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC1F1aWV0IFdhdGVyABBUb2J5IEZveCAtIFRvcGljAAAAAAAAfQAAC2hHemtkUUN2WXowAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9aEd6a2RRQ3ZZejABADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvaEd6a2RRQ3ZZejAvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "hGzkdQCvYz0",
            "author": "Toby Fox - Topic",
            "length": 32000,
            "position": 0,
            "title": "Quiet Water",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=hGzkdQCvYz0",
            "artworkUrl": "https://i.ytimg.com/vi_webp/hGzkdQCvYz0/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArgMABk1lbW9yeQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAST4AAstUHVYUlhmdGtEQQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PS1QdVhSWGZ0a0RBAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwLy1QdVhSWGZ0a0RBL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "-PuXRXftkDA",
            "author": "Toby Fox - Topic",
            "length": 75000,
            "position": 0,
            "title": "Memory",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=-PuXRXftkDA",
            "artworkUrl": "https://i.ytimg.com/vi_webp/-PuXRXftkDA/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAA4QMAOUJpcmQgVGhhdCBDYXJyaWVzIFlvdSBPdmVyIEEgRGlzcHJvcG9ydGlvbmF0ZWx5IFNtYWxsIEdhcAAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAGWQAAstdHNsR3ZDSVMzUQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PS10c2xHdkNJUzNRAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwLy10c2xHdkNJUzNRL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "-tslGvCIS3Q",
            "author": "Toby Fox - Topic",
            "length": 26000,
            "position": 0,
            "title": "Bird That Carries You Over A Disproportionately Small Gap",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=-tslGvCIS3Q",
            "artworkUrl": "https://i.ytimg.com/vi_webp/-tslGvCIS3Q/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArgMABkR1bW15IQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAjpQAAs5NEpESUJaaFNCTQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTk0SkRJQlpoU0JNAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwLzk0SkRJQlpoU0JNL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "94JDIBZhSBM",
            "author": "Toby Fox - Topic",
            "length": 146000,
            "position": 0,
            "title": "Dummy!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=94JDIBZhSBM",
            "artworkUrl": "https://i.ytimg.com/vi_webp/94JDIBZhSBM/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtgMADlBhdGhldGljIEhvdXNlABBUb2J5IEZveCAtIFRvcGljAAAAAAAAmFgACzBZbEh3UnlNMjZRAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MFlsSHdSeU0yNlEBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvMFlsSHdSeU0yNlEvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0YlHwRyM26Q",
            "author": "Toby Fox - Topic",
            "length": 39000,
            "position": 0,
            "title": "Pathetic House",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=0YlHwRyM26Q",
            "artworkUrl": "https://i.ytimg.com/vi_webp/0YlHwRyM26Q/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACVNwb29rdHVuZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAF3AAAtMTVdIY1RxVWNjbwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUxNV0hjVHFVY2NvAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL0xNV0hjVHFVY2NvL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "LMWHcTqUcco",
            "author": "Toby Fox - Topic",
            "length": 24000,
            "position": 0,
            "title": "Spooktune",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=LMWHcTqUcco",
            "artworkUrl": "https://i.ytimg.com/vi_webp/LMWHcTqUcco/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACVNwb29rd2F2ZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAGWQAAsxdUo1N244UFpfbwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTF1SjU3bjhQWl9vAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwLzF1SjU3bjhQWl9vL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1uJ57n8PZ_o",
            "author": "Toby Fox - Topic",
            "length": 26000,
            "position": 0,
            "title": "Spookwave",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=1uJ57n8PZ_o",
            "artworkUrl": "https://i.ytimg.com/vi_webp/1uJ57n8PZ_o/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACUdob3VsaWRheQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAADLIAAtRRGJ3dlZ2dWZBdwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVFEYnd2VnZ1ZkF3AQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL1FEYnd2VnZ1ZkF3L21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "QDbwvVvufAw",
            "author": "Toby Fox - Topic",
            "length": 13000,
            "position": 0,
            "title": "Ghouliday",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=QDbwvVvufAw",
            "artworkUrl": "https://i.ytimg.com/vi_webp/QDbwvVvufAw/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArQMABUNoaWxsABBUb2J5IEZveCAtIFRvcGljAAAAAAAA3qgAC2p4OHhFdS1Del9zAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ang4eEV1LUN6X3MBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvang4eEV1LUN6X3MvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "jx8xEu-Cz_s",
            "author": "Toby Fox - Topic",
            "length": 57000,
            "position": 0,
            "title": "Chill",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=jx8xEu-Cz_s",
            "artworkUrl": "https://i.ytimg.com/vi_webp/jx8xEu-Cz_s/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtAMADFRodW5kZXJzbmFpbAAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAKf4AAtNX2ZOSnFJT2VFawABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU1fZk5KcUlPZUVrAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL01fZk5KcUlPZUVrL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "M_fNJqIOeEk",
            "author": "Toby Fox - Topic",
            "length": 43000,
            "position": 0,
            "title": "Thundersnail",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=M_fNJqIOeEk",
            "artworkUrl": "https://i.ytimg.com/vi_webp/M_fNJqIOeEk/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtgMADlRlbW1pZSBWaWxsYWdlABBUb2J5IEZveCAtIFRvcGljAAAAAAAA4pAACzFLVWNtdVNObVZFAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MUtVY211U05tVkUBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvMUtVY211U05tVkUvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1KUcmuSNmVE",
            "author": "Toby Fox - Topic",
            "length": 58000,
            "position": 0,
            "title": "Temmie Village",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=1KUcmuSNmVE",
            "artworkUrl": "https://i.ytimg.com/vi_webp/1KUcmuSNmVE/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsAMACFRlbSBTaG9wABBUb2J5IEZveCAtIFRvcGljAAAAAAAAs7AAC2xJRE9oTTRZZl9NAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bElET2hNNFlmX00BADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvbElET2hNNFlmX00vbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "lIDOhM4Yf_M",
            "author": "Toby Fox - Topic",
            "length": 46000,
            "position": 0,
            "title": "Tem Shop",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=lIDOhM4Yf_M",
            "artworkUrl": "https://i.ytimg.com/vi_webp/lIDOhM4Yf_M/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsAMACE5HQUhISCEhABBUb2J5IEZveCAtIFRvcGljAAAAAAABRDgACzF2TFN3eGNiNlo4AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MXZMU3d4Y2I2WjgBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvMXZMU3d4Y2I2WjgvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1vLSwxcb6Z8",
            "author": "Toby Fox - Topic",
            "length": 83000,
            "position": 0,
            "title": "NGAHHH!!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=1vLSwxcb6Z8",
            "artworkUrl": "https://i.ytimg.com/vi_webp/1vLSwxcb6Z8/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAA2AMAMVVuZGVydGFsZSBVbmR5bmUgRmlnaHQgVGhlbWUgKCBTcGVhciBPZiBKdXN0aWNlICkAGVfigKJF4oCiTuKAokTigKJJ4oCiR+KAok8AAAAAAAHYqAALWlh0MXJicy10dE0AAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1aWHQxcmJzLXR0TQEAMGh0dHBzOi8vaS55dGltZy5jb20vdmkvWlh0MXJicy10dE0vbXFkZWZhdWx0LmpwZwAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "ZXt1rbs-ttM",
            "author": "W•E•N•D•I•G•O",
            "length": 121000,
            "position": 0,
            "title": "Undertale Undyne Fight Theme ( Spear Of Justice )",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=ZXt1rbs-ttM",
            "artworkUrl": "https://i.ytimg.com/vi/ZXt1rbs-ttM/mqdefault.jpg",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAqwMAA09vbwAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAADqYAAtqVGVKU1VDNExaNAABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWpUZUpTVUM0TFo0AQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL2pUZUpTVUM0TFo0L21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "jTeJSUC4LZ4",
            "author": "Toby Fox - Topic",
            "length": 15000,
            "position": 0,
            "title": "Ooo",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=jTeJSUC4LZ4",
            "artworkUrl": "https://i.ytimg.com/vi_webp/jTeJSUC4LZ4/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArgMABkFscGh5cwAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAU/wAAtvMzBuUGdPZ2Z2MAABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW8zMG5QZ09nZnYwAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL28zMG5QZ09nZnYwL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "o30nPgOgfv0",
            "author": "Toby Fox - Topic",
            "length": 86000,
            "position": 0,
            "title": "Alphys",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=o30nPgOgfv0",
            "artworkUrl": "https://i.ytimg.com/vi_webp/o30nPgOgfv0/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtgMADkl0J3MgU2hvd3RpbWUhABBUb2J5IEZveCAtIFRvcGljAAAAAAAAt5gACzNMaFpXVlJwNmY0AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9M0xoWldWUnA2ZjQBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvM0xoWldWUnA2ZjQvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3LhZWVRp6f4",
            "author": "Toby Fox - Topic",
            "length": 47000,
            "position": 0,
            "title": "It's Showtime!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=3LhZWVRp6f4",
            "artworkUrl": "https://i.ytimg.com/vi_webp/3LhZWVRp6f4/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAA0QMAKlVuZGVydGFsZSBNZXR0YXRvbiBUaGVtZSAoIE1ldGFsIENydXNoZXIgKQAZV+KAokXigKJO4oCiROKAoknigKJH4oCiTwAAAAAAAibIAAtnTFR4WjJPckNEdwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWdMVHhaMk9yQ0R3AQAwaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9nTFR4WjJPckNEdy9tcWRlZmF1bHQuanBnAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "gLTxZ2OrCDw",
            "author": "W•E•N•D•I•G•O",
            "length": 141000,
            "position": 0,
            "title": "Undertale Mettaton Theme ( Metal Crusher )",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=gLTxZ2OrCDw",
            "artworkUrl": "https://i.ytimg.com/vi/gLTxZ2OrCDw/mqdefault.jpg",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtgMADkFub3RoZXIgTWVkaXVtABBUb2J5IEZveCAtIFRvcGljAAAAAAACLpgAC2ZkdXlCcXhoWEtzAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9ZmR1eUJxeGhYS3MBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvZmR1eUJxeGhYS3MvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "fduyBqxhXKs",
            "author": "Toby Fox - Topic",
            "length": 143000,
            "position": 0,
            "title": "Another Medium",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=fduyBqxhXKs",
            "artworkUrl": "https://i.ytimg.com/vi_webp/fduyBqxhXKs/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuwMAE1V3YSEhIFNvIEhFQVRTISHimasAEFRvYnkgRm94IC0gVG9waWMAAAAAAACE0AALalBodUhtakpyemsAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1qUGh1SG1qSnJ6awEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9qUGh1SG1qSnJ6ay9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "jPhuHmjJrzk",
            "author": "Toby Fox - Topic",
            "length": 34000,
            "position": 0,
            "title": "Uwa!! So HEATS!!♫",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=jPhuHmjJrzk",
            "artworkUrl": "https://i.ytimg.com/vi_webp/jPhuHmjJrzk/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuQMAEVN0cm9uZ2VyIE1vbnN0ZXJzABBUb2J5IEZveCAtIFRvcGljAAAAAAAA+gAAC2xYdHdXQkxMTGJrAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bFh0d1dCTExMYmsBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvbFh0d1dCTExMYmsvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "lXtwWBLLLbk",
            "author": "Toby Fox - Topic",
            "length": 64000,
            "position": 0,
            "title": "Stronger Monsters",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=lXtwWBLLLbk",
            "artworkUrl": "https://i.ytimg.com/vi_webp/lXtwWBLLLbk/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArQMABUhvdGVsABBUb2J5IEZveCAtIFRvcGljAAAAAAABV8AAC0Nndk1vejJMbldBAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Q2d2TW96MkxuV0EBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvQ2d2TW96MkxuV0EvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "CgvMoz2LnWA",
            "author": "Toby Fox - Topic",
            "length": 88000,
            "position": 0,
            "title": "Hotel",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=CgvMoz2LnWA",
            "artworkUrl": "https://i.ytimg.com/vi_webp/CgvMoz2LnWA/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAA+gMAUkNhbiBZb3UgUmVhbGx5IENhbGwgVGhpcyBBIEhvdGVsLCBJIERpZG4ndCBSZWNlaXZlIEEgTWludCBPbiBNeSBQaWxsb3cgT3IgQW55dGhpbmcAEFRvYnkgRm94IC0gVG9waWMAAAAAAADyMAALbHR6clYtX3YtdEkAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1sdHpyVi1fdi10SQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9sdHpyVi1fdi10SS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "ltzrV-_v-tI",
            "author": "Toby Fox - Topic",
            "length": 62000,
            "position": 0,
            "title": "Can You Really Call This A Hotel, I Didn't Receive A Mint On My Pillow Or Anything",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=ltzrV-_v-tI",
            "artworkUrl": "https://i.ytimg.com/vi_webp/ltzrV-_v-tI/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsgMACkNvbmZlc3Npb24AEFRvYnkgRm94IC0gVG9waWMAAAAAAACn+AALN2NNNzN5UzRmYmsAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj03Y003M3lTNGZiawEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC83Y003M3lTNGZiay9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7cM73yS4fbk",
            "author": "Toby Fox - Topic",
            "length": 43000,
            "position": 0,
            "title": "Confession",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=7cM73yS4fbk",
            "artworkUrl": "https://i.ytimg.com/vi_webp/7cM73yS4fbk/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC0xpdmUgUmVwb3J0ABBUb2J5IEZveCAtIFRvcGljAAAAAAAARlAAC3ljdGRkck9GdEdjAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9eWN0ZGRyT0Z0R2MBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAveWN0ZGRyT0Z0R2MvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "yctddrOFtGc",
            "author": "Toby Fox - Topic",
            "length": 18000,
            "position": 0,
            "title": "Live Report",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=yctddrOFtGc",
            "artworkUrl": "https://i.ytimg.com/vi_webp/yctddrOFtGc/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtAMADERlYXRoIFJlcG9ydAAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAALuAAAtzSnJWSWs0SXBEawABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PXNKclZJazRJcERrAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL3NKclZJazRJcERrL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "sJrVIk4IpDk",
            "author": "Toby Fox - Topic",
            "length": 48000,
            "position": 0,
            "title": "Death Report",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=sJrVIk4IpDk",
            "artworkUrl": "https://i.ytimg.com/vi_webp/sJrVIk4IpDk/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtAMADFNwaWRlciBEYW5jZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAaH4AAtOSC1HQXdMQU8zMAABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU5ILUdBd0xBTzMwAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL05ILUdBd0xBTzMwL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "NH-GAwLAO30",
            "author": "Toby Fox - Topic",
            "length": 107000,
            "position": 0,
            "title": "Spider Dance",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=NH-GAwLAO30",
            "artworkUrl": "https://i.ytimg.com/vi_webp/NH-GAwLAO30/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtgMADldyb25nIEVuZW15ICE/ABBUb2J5IEZveCAtIFRvcGljAAAAAAAA5ngAC2xOOUpzeHJJNHY4AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9bE45SnN4ckk0djgBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvbE45SnN4ckk0djgvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "lN9JsxrI4v8",
            "author": "Toby Fox - Topic",
            "length": 59000,
            "position": 0,
            "title": "Wrong Enemy !?",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=lN9JsxrI4v8",
            "artworkUrl": "https://i.ytimg.com/vi_webp/lN9JsxrI4v8/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuQMAEU9oISBPbmUgVHJ1ZSBMb3ZlABBUb2J5IEZveCAtIFRvcGljAAAAAAABSCAACzJIWm5UTklONjQ4AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MkhablROSU42NDgBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvMkhablROSU42NDgvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2HZnTNIN648",
            "author": "Toby Fox - Topic",
            "length": 84000,
            "position": 0,
            "title": "Oh! One True Love",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=2HZnTNIN648",
            "artworkUrl": "https://i.ytimg.com/vi_webp/2HZnTNIN648/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC09oISBEdW5nZW9uABBUb2J5IEZveCAtIFRvcGljAAAAAAAAgOgAC1AyNHVmNU1jS1prAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UDI0dWY1TWNLWmsBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvUDI0dWY1TWNLWmsvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "P24uf5McKZk",
            "author": "Toby Fox - Topic",
            "length": 33000,
            "position": 0,
            "title": "Oh! Dungeon",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=P24uf5McKZk",
            "artworkUrl": "https://i.ytimg.com/vi_webp/P24uf5McKZk/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAwwMAG0l0J3MgUmFpbmluZyBTb21ld2hlcmUgRWxzZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAApv4AAtZaWRtQTREQ2pHYwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVlpZG1BNERDakdjAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL1lpZG1BNERDakdjL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "YidmA4DCjGc",
            "author": "Toby Fox - Topic",
            "length": 171000,
            "position": 0,
            "title": "It's Raining Somewhere Else",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=YidmA4DCjGc",
            "artworkUrl": "https://i.ytimg.com/vi_webp/YidmA4DCjGc/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADUNPUkUgQXBwcm9hY2gAEFRvYnkgRm94IC0gVG9waWMAAAAAAAAyyAALRTdqZl85emR5LUUAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1FN2pmXzl6ZHktRQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9FN2pmXzl6ZHktRS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "E7jf_9zdy-E",
            "author": "Toby Fox - Topic",
            "length": 13000,
            "position": 0,
            "title": "CORE Approach",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=E7jf_9zdy-E",
            "artworkUrl": "https://i.ytimg.com/vi_webp/E7jf_9zdy-E/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArAMABENPUkUAEFRvYnkgRm94IC0gVG9waWMAAAAAAAKMWAALV2VFTFBuWnFob3cAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1XZUVMUG5acWhvdwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9XZUVMUG5acWhvdy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "WeELPnZqhow",
            "author": "Toby Fox - Topic",
            "length": 167000,
            "position": 0,
            "title": "CORE",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=WeELPnZqhow",
            "artworkUrl": "https://i.ytimg.com/vi_webp/WeELPnZqhow/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADUxhc3QgRXBpc29kZSEAEFRvYnkgRm94IC0gVG9waWMAAAAAAAAfQAALWGczcDQ3OHNXR2cAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1YZzNwNDc4c1dHZwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9YZzNwNDc4c1dHZy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "Xg3p478sWGg",
            "author": "Toby Fox - Topic",
            "length": 8000,
            "position": 0,
            "title": "Last Episode!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=Xg3p478sWGg",
            "artworkUrl": "https://i.ytimg.com/vi_webp/Xg3p478sWGg/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsAMACE9oIE15Li4uABBUb2J5IEZveCAtIFRvcGljAAAAAAAAOpgAC0JEUVYyTHdFRmJzAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9QkRRVjJMd0VGYnMBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvQkRRVjJMd0VGYnMvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "BDQV2LwEFbs",
            "author": "Toby Fox - Topic",
            "length": 15000,
            "position": 0,
            "title": "Oh My...",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=BDQV2LwEFbs",
            "artworkUrl": "https://i.ytimg.com/vi_webp/BDQV2LwEFbs/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAA1AMALVVuZGVydGFsZSBNZXR0YXRvbiBFWCBUaGVtZSAgRGVhdGggQnkgR2xhbW91cgAZV+KAokXigKJO4oCiROKAoknigKJH4oCiTwAAAAAAAiqwAAthTURGaGpwTVRFWQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWFNREZoanBNVEVZAQAwaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9hTURGaGpwTVRFWS9tcWRlZmF1bHQuanBnAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "aMDFhjpMTEY",
            "author": "W•E•N•D•I•G•O",
            "length": 142000,
            "position": 0,
            "title": "Undertale Mettaton EX Theme  Death By Glamour",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=aMDFhjpMTEY",
            "artworkUrl": "https://i.ytimg.com/vi/aMDFhjpMTEY/mqdefault.jpg",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtAMADEZvciBUaGUgRmFucwAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAaXgAAtaQlM1SDk1NmVxWQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVpCUzVIOTU2ZXFZAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL1pCUzVIOTU2ZXFZL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "ZBS5H956eqY",
            "author": "Toby Fox - Topic",
            "length": 108000,
            "position": 0,
            "title": "For The Fans",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=ZBS5H956eqY",
            "artworkUrl": "https://i.ytimg.com/vi_webp/ZBS5H956eqY/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADUxvbmcgRWxldmF0b3IAEFRvYnkgRm94IC0gVG9waWMAAAAAAABSCAALbW9oeGpVeWZqZWsAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1tb2h4alV5ZmplawEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9tb2h4alV5Zmplay9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "mohxjUyfjek",
            "author": "Toby Fox - Topic",
            "length": 21000,
            "position": 0,
            "title": "Long Elevator",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=mohxjUyfjek",
            "artworkUrl": "https://i.ytimg.com/vi_webp/mohxjUyfjek/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACVVuZGVydGFsZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAABdQwAAs4Q2VZTkotczBLdwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PThDZVlOSi1zMEt3AQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwLzhDZVlOSi1zMEt3L21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "8CeYNJ-s0Kw",
            "author": "Toby Fox - Topic",
            "length": 382000,
            "position": 0,
            "title": "Undertale",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=8CeYNJ-s0Kw",
            "artworkUrl": "https://i.ytimg.com/vi_webp/8CeYNJ-s0Kw/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAA0AMAKFNvbmcgVGhhdCBNaWdodCBQbGF5IFdoZW4gWW91IEZpZ2h0IFNhbnMAEFRvYnkgRm94IC0gVG9waWMAAAAAAADyMAALNDdHdlk5ck9NVXMAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj00N0d2WTlyT01VcwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC80N0d2WTlyT01Vcy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "47GvY9rOMUs",
            "author": "Toby Fox - Topic",
            "length": 62000,
            "position": 0,
            "title": "Song That Might Play When You Fight Sans",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=47GvY9rOMUs",
            "artworkUrl": "https://i.ytimg.com/vi_webp/47GvY9rOMUs/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsgMAClRoZSBDaG9pY2UAEFRvYnkgRm94IC0gVG9waWMAAAAAAAIHiAALeDFXQk1TSUdCRE0AAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj14MVdCTVNJR0JETQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC94MVdCTVNJR0JETS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "x1WBMSIGBDM",
            "author": "Toby Fox - Topic",
            "length": 133000,
            "position": 0,
            "title": "The Choice",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=x1WBMSIGBDM",
            "artworkUrl": "https://i.ytimg.com/vi_webp/x1WBMSIGBDM/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC1NtYWxsIFNob2NrABBUb2J5IEZveCAtIFRvcGljAAAAAAAAOpgAC1gteDdIUEFCaUhZAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WC14N0hQQUJpSFkBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvWC14N0hQQUJpSFkvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "X-x7HPABiHY",
            "author": "Toby Fox - Topic",
            "length": 15000,
            "position": 0,
            "title": "Small Shock",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=X-x7HPABiHY",
            "artworkUrl": "https://i.ytimg.com/vi_webp/X-x7HPABiHY/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArwMAB0JhcnJpZXIAEFRvYnkgRm94IC0gVG9waWMAAAAAAAB9AAALelhQS3VYQlBzTUkAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj16WFBLdVhCUHNNSQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC96WFBLdVhCUHNNSS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "zXPKuXBPsMI",
            "author": "Toby Fox - Topic",
            "length": 32000,
            "position": 0,
            "title": "Barrier",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=zXPKuXBPsMI",
            "artworkUrl": "https://i.ytimg.com/vi_webp/zXPKuXBPsMI/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtwMAD0JlcmdlbnRyw7xja3VuZwAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAFXwAAtLQm5fQkhBWEY5OAABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUtCbl9CSEFYRjk4AQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL0tCbl9CSEFYRjk4L21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "KBn_BHAXF98",
            "author": "Toby Fox - Topic",
            "length": 22000,
            "position": 0,
            "title": "Bergentrückung",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=KBn_BHAXF98",
            "artworkUrl": "https://i.ytimg.com/vi_webp/KBn_BHAXF98/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAA0AMAKVVuZGVydGFsZSBCZXJnZW50csO8Y2t1bmcgKyBBU0dPUkUgVGhlbWVzABlX4oCiReKAok7igKJE4oCiSeKAokfigKJPAAAAAAACzsAAC0gwd21sY2VzSEVjAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9SDB3bWxjZXNIRWMBADBodHRwczovL2kueXRpbWcuY29tL3ZpL0gwd21sY2VzSEVjL21xZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "H0wmlcesHEc",
            "author": "W•E•N•D•I•G•O",
            "length": 184000,
            "position": 0,
            "title": "Undertale Bergentrückung + ASGORE Themes",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=H0wmlcesHEc",
            "artworkUrl": "https://i.ytimg.com/vi/H0wmlcesHEc/mqdefault.jpg",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACVlvdSBJZGlvdAAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAIi4AAtvSkZ1cjlERmtvUQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PW9KRnVyOURGa29RAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL29KRnVyOURGa29RL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "oJFur9DFkoQ",
            "author": "Toby Fox - Topic",
            "length": 35000,
            "position": 0,
            "title": "You Idiot",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=oJFur9DFkoQ",
            "artworkUrl": "https://i.ytimg.com/vi_webp/oJFur9DFkoQ/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuwMAE1lvdXIgQmVzdCBOaWdodG1hcmUAEFRvYnkgRm94IC0gVG9waWMAAAAAAAOpgAALU09iV1FSYWx0dWcAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1TT2JXUVJhbHR1ZwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9TT2JXUVJhbHR1Zy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "SObWQRaltug",
            "author": "Toby Fox - Topic",
            "length": 240000,
            "position": 0,
            "title": "Your Best Nightmare",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=SObWQRaltug",
            "artworkUrl": "https://i.ytimg.com/vi_webp/SObWQRaltug/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABJgMAGVVuZGVydGFsZSBGaW5hbGUgRHVhbCBNaXgAFGl3YW5uYWJldGhlY29sbGVjdG9yAAAAAAADNFAAC1p2TENheDljMkhnAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9WnZMQ2F4OWMySGcBAJtodHRwczovL2kueXRpbWcuY29tL3ZpL1p2TENheDljMkhnL21heHJlc2RlZmF1bHQuanBnP3NxcD0tb2F5bXdFbUNJQUtFTkFGOHF1S3FRTWE4QUVCLUFILUNZQUMwQVdLQWd3SUFCQUJHR1VnUVNobE1BOD0mcnM9QU9uNENMQVk5dlpFX0s0LWl3WWZEWERMQ2pQU3IxRFh2dwAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "ZvLCax9c2Hg",
            "author": "iwannabethecollector",
            "length": 210000,
            "position": 0,
            "title": "Undertale Finale Dual Mix",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=ZvLCax9c2Hg",
            "artworkUrl": "https://i.ytimg.com/vi/ZvLCax9c2Hg/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGGUgQShlMA8=&rs=AOn4CLAY9vZE_K4-iwYfDXDLCjPSr1DXvw",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACUFuIEVuZGluZwAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAzBoAAtnTGdVZXN6ODQ0NAABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWdMZ1Vlc3o4NDQ0AQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL2dMZ1Vlc3o4NDQ0L21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "gLgUesz8444",
            "author": "Toby Fox - Topic",
            "length": 209000,
            "position": 0,
            "title": "An Ending",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=gLgUesz8444",
            "artworkUrl": "https://i.ytimg.com/vi_webp/gLgUesz8444/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuwMAE1NoZSdzIFBsYXlpbmcgUGlhbm8AEFRvYnkgRm94IC0gVG9waWMAAAAAAABKOAALNDFTX1ZTNGR2WTgAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj00MVNfVlM0ZHZZOAEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC80MVNfVlM0ZHZZOC9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "41S_VS4dvY8",
            "author": "Toby Fox - Topic",
            "length": 19000,
            "position": 0,
            "title": "She's Playing Piano",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=41S_VS4dvY8",
            "artworkUrl": "https://i.ytimg.com/vi_webp/41S_VS4dvY8/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC0hlcmUgV2UgQXJlABBUb2J5IEZveCAtIFRvcGljAAAAAAAB8BgAC0xTODZDUGFTaEk0AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TFM4NkNQYVNoSTQBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvTFM4NkNQYVNoSTQvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "LS86CPaShI4",
            "author": "Toby Fox - Topic",
            "length": 127000,
            "position": 0,
            "title": "Here We Are",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=LS86CPaShI4",
            "artworkUrl": "https://i.ytimg.com/vi_webp/LS86CPaShI4/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArwMAB0FtYWxnYW0AEFRvYnkgRm94IC0gVG9waWMAAAAAAAE4gAALMFQ4QVJPb0loNDQAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0wVDhBUk9vSWg0NAEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC8wVDhBUk9vSWg0NC9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0T8AROoIh44",
            "author": "Toby Fox - Topic",
            "length": 80000,
            "position": 0,
            "title": "Amalgam",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=0T8AROoIh44",
            "artworkUrl": "https://i.ytimg.com/vi_webp/0T8AROoIh44/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAvQMAFUZhbGxlbiBEb3duIChSZXByaXNlKQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAk3YAAtBdkRyVzRKVGpNRQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUF2RHJXNEpUak1FAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL0F2RHJXNEpUak1FL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "AvDrW4JTjME",
            "author": "Toby Fox - Topic",
            "length": 151000,
            "position": 0,
            "title": "Fallen Down (Reprise)",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=AvDrW4JTjME",
            "artworkUrl": "https://i.ytimg.com/vi_webp/AvDrW4JTjME/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtQMADURvbid0IEdpdmUgVXAAEFRvYnkgRm94IC0gVG9waWMAAAAAAAHckAALWVFsYlItWFcwQ1EAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1ZUWxiUi1YVzBDUQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9ZUWxiUi1YVzBDUS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "YQlbR-XW0CQ",
            "author": "Toby Fox - Topic",
            "length": 122000,
            "position": 0,
            "title": "Don't Give Up",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=YQlbR-XW0CQ",
            "artworkUrl": "https://i.ytimg.com/vi_webp/YQlbR-XW0CQ/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuAMAEEhvcGVzIEFuZCBEcmVhbXMAEFRvYnkgRm94IC0gVG9waWMAAAAAAALG8AALSEEzS3M4TkxTLVkAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1IQTNLczhOTFMtWQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9IQTNLczhOTFMtWS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "HA3Ks8NLS-Y",
            "author": "Toby Fox - Topic",
            "length": 182000,
            "position": 0,
            "title": "Hopes And Dreams",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=HA3Ks8NLS-Y",
            "artworkUrl": "https://i.ytimg.com/vi_webp/HA3Ks8NLS-Y/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAuAMAEEJ1cm4gSW4gRGVzcGFpciEAEFRvYnkgRm94IC0gVG9waWMAAAAAAABV8AALVmF1TDVpdjY4N0kAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1WYXVMNWl2Njg3SQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9WYXVMNWl2Njg3SS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "VauL5iv687I",
            "author": "Toby Fox - Topic",
            "length": 22000,
            "position": 0,
            "title": "Burn In Despair!",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=VauL5iv687I",
            "artworkUrl": "https://i.ytimg.com/vi_webp/VauL5iv687I/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtgMADlNBVkUgVGhlIFdvcmxkABBUb2J5IEZveCAtIFRvcGljAAAAAAABvVAAC0xBbi1KWXpLbTVNAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TEFuLUpZekttNU0BADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvTEFuLUpZekttNU0vbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "LAn-JYzKm5M",
            "author": "Toby Fox - Topic",
            "length": 114000,
            "position": 0,
            "title": "SAVE The World",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=LAn-JYzKm5M",
            "artworkUrl": "https://i.ytimg.com/vi_webp/LAn-JYzKm5M/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsQMACUhpcyBUaGVtZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAewwAAs4dGYtZ1ZhSGRhZwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PTh0Zi1nVmFIZGFnAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwLzh0Zi1nVmFIZGFnL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "8tf-gVaHdag",
            "author": "Toby Fox - Topic",
            "length": 126000,
            "position": 0,
            "title": "His Theme",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=8tf-gVaHdag",
            "artworkUrl": "https://i.ytimg.com/vi_webp/8tf-gVaHdag/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC0ZpbmFsIFBvd2VyABBUb2J5IEZveCAtIFRvcGljAAAAAAAASjgACzlXQUt3NzlXcVNRAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OVdBS3c3OVdxU1EBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvOVdBS3c3OVdxU1EvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "9WAKw79WqSQ",
            "author": "Toby Fox - Topic",
            "length": 19000,
            "position": 0,
            "title": "Final Power",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=9WAKw79WqSQ",
            "artworkUrl": "https://i.ytimg.com/vi_webp/9WAKw79WqSQ/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsAMACFJldW5pdGVkABBUb2J5IEZveCAtIFRvcGljAAAAAAAEWUgACzhLMG5wUS0tQUN3AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9OEswbnBRLS1BQ3cBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvOEswbnBRLS1BQ3cvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "8K0npQ--ACw",
            "author": "Toby Fox - Topic",
            "length": 285000,
            "position": 0,
            "title": "Reunited",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=8K0npQ--ACw",
            "artworkUrl": "https://i.ytimg.com/vi_webp/8K0npQ--ACw/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC01lbnUgKEZ1bGwpABBUb2J5IEZveCAtIFRvcGljAAAAAAAAfQAAC3EySVlzY3NfOHVZAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9cTJJWXNjc184dVkBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvcTJJWXNjc184dVkvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "q2IYscs_8uY",
            "author": "Toby Fox - Topic",
            "length": 32000,
            "position": 0,
            "title": "Menu (Full)",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=q2IYscs_8uY",
            "artworkUrl": "https://i.ytimg.com/vi_webp/q2IYscs_8uY/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAArwMAB1Jlc3BpdGUAEFRvYnkgRm94IC0gVG9waWMAAAAAAAG9UAALVVNWazl0R1FYYm8AAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1VU1ZrOXRHUVhibwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9VU1ZrOXRHUVhiby9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "USVk9tGQXbo",
            "author": "Toby Fox - Topic",
            "length": 114000,
            "position": 0,
            "title": "Respite",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=USVk9tGQXbo",
            "artworkUrl": "https://i.ytimg.com/vi_webp/USVk9tGQXbo/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAzQMAJ1VuZGVydGFsZSdzIFN0b3J5IGluIFNvbmcgLSBFbmQgQ3JlZGl0cwAOS2lyYWx5c3QgTXVzaWMAAAAAAAPUeAALUFI3ZUxIQWkxLWcAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1QUjdlTEhBaTEtZwEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9QUjdlTEhBaTEtZy9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "PR7eLHAi1-g",
            "author": "Kiralyst Music",
            "length": 251000,
            "position": 0,
            "title": "Undertale's Story in Song - End Credits",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=PR7eLHAi1-g",
            "artworkUrl": "https://i.ytimg.com/vi_webp/PR7eLHAi1-g/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtAMADExhc3QgR29vZGJ5ZQAQVG9ieSBGb3ggLSBUb3BpYwAAAAAAAhNAAAtFcEJRNW0zQWczUQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUVwQlE1bTNBZzNRAQA6aHR0cHM6Ly9pLnl0aW1nLmNvbS92aV93ZWJwL0VwQlE1bTNBZzNRL21heHJlc2RlZmF1bHQud2VicAAAB3lvdXR1YmUAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "EpBQ5m3Ag3Q",
            "author": "Toby Fox - Topic",
            "length": 136000,
            "position": 0,
            "title": "Last Goodbye",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=EpBQ5m3Ag3Q",
            "artworkUrl": "https://i.ytimg.com/vi_webp/EpBQ5m3Ag3Q/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAxAMAHEJ1dCBUaGUgRWFydGggUmVmdXNlZCBUbyBEaWUAEFRvYnkgRm94IC0gVG9waWMAAAAAAACIuAALTzZwcGgyUk1vUFUAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1PNnBwaDJSTW9QVQEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9PNnBwaDJSTW9QVS9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "O6pph2RMoPU",
            "author": "Toby Fox - Topic",
            "length": 35000,
            "position": 0,
            "title": "But The Earth Refused To Die",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=O6pph2RMoPU",
            "artworkUrl": "https://i.ytimg.com/vi_webp/O6pph2RMoPU/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAA6QMAQlVuZGVydGFsZSBVbmR5bmUgVGhlIFVuZHlpbmcgVGhlbWUgICggQmF0dGxlIEFnYWluc3QgQSBUcnVlIEhlcm8gKQAZV+KAokXigKJO4oCiROKAoknigKJH4oCiTwAAAAAAAnToAAtHY3RvMlUwYUhUcwABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PUdjdG8yVTBhSFRzAQAwaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9HY3RvMlUwYUhUcy9tcWRlZmF1bHQuanBnAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "Gcto2U0aHTs",
            "author": "W•E•N•D•I•G•O",
            "length": 161000,
            "position": 0,
            "title": "Undertale Undyne The Undying Theme  ( Battle Against A True Hero )",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=Gcto2U0aHTs",
            "artworkUrl": "https://i.ytimg.com/vi/Gcto2U0aHTs/mqdefault.jpg",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAtgMADlBvd2VyIE9mICJORU8iABBUb2J5IEZveCAtIFRvcGljAAAAAAAAeRgAC2JXVUlXVGtCaXFFAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YldVSVdUa0JpcUUBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvYldVSVdUa0JpcUUvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "bWUIWTkBiqE",
            "author": "Toby Fox - Topic",
            "length": 31000,
            "position": 0,
            "title": "Power Of \"NEO\"",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=bWUIWTkBiqE",
            "artworkUrl": "https://i.ytimg.com/vi_webp/bWUIWTkBiqE/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAswMAC01FR0FMT1ZBTklBABBUb2J5IEZveCAtIFRvcGljAAAAAAACYWAACzBGQ3Z6c1ZsWHBRAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9MEZDdnpzVmxYcFEBADpodHRwczovL2kueXRpbWcuY29tL3ZpX3dlYnAvMEZDdnpzVmxYcFEvbWF4cmVzZGVmYXVsdC53ZWJwAAAHeW91dHViZQAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0FCvzsVlXpQ",
            "author": "Toby Fox - Topic",
            "length": 156000,
            "position": 0,
            "title": "MEGALOVANIA",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=0FCvzsVlXpQ",
            "artworkUrl": "https://i.ytimg.com/vi_webp/0FCvzsVlXpQ/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAAsgMACkdvb2QgTmlnaHQAEFRvYnkgRm94IC0gVG9waWMAAAAAAAB5GAALYTktN2gwTm1NbjgAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1hOS03aDBObU1uOAEAOmh0dHBzOi8vaS55dGltZy5jb20vdmlfd2VicC9hOS03aDBObU1uOC9tYXhyZXNkZWZhdWx0LndlYnAAAAd5b3V0dWJlAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "a9-7h0NmMn8",
            "author": "Toby Fox - Topic",
            "length": 31000,
            "position": 0,
            "title": "Good Night",
            "sourceName": "youtube",
            "uri": "https://www.youtube.com/watch?v=a9-7h0NmMn8",
            "artworkUrl": "https://i.ytimg.com/vi_webp/a9-7h0NmMn8/maxresdefault.webp",
            "isrc": null
          },
          "pluginInfo": {
            
          },
          "userData": {
            
          }
        }
      ]
    }
  },
  "spotifySongExample": {
    "loadType": "track",
    "data": {
      "encoded": "QAAB+wMABE1pa3UADEFuYW1hbmFndWNoaQAAAAAAA2eUABY3YXV4NVV2bmxCRFlscmx3b2N6aWZXAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay83YXV4NVV2bmxCRFlscmx3b2N6aWZXAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzE1NGMzNTYyZGM5MmJjZDMwMmM3MmM5YwEADFVTQTJQMTY1NDMxMwAHc3BvdGlmeQEABE1pa3UBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vNFdjcDdaNjdSeUliQVlsNmptT2tMTAEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMlV3SlJBZ1NPaTF6Y0xrdlVOYzhYTAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWI1NWRlYzVhMTZjZTFiMDFmNTlkNWJjMjQBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9lMDE1ZWEwOWUzYWZiY2RlNjk3OTAzYjUxMTExNzhiODA4ZWQ2MWU1P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
      "info": {
        "isSeekable": true,
        "isStream": false,
        "identifier": "7aux5UvnlBDYlrlwoczifW",
        "author": "Anamanaguchi",
        "length": 223124,
        "position": 0,
        "title": "Miku",
        "sourceName": "spotify",
        "uri": "https://open.spotify.com/track/7aux5UvnlBDYlrlwoczifW",
        "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273154c3562dc92bcd302c72c9c",
        "isrc": "USA2P1654313"
      },
      "pluginInfo": {
        "isPreview": false,
        "previewUrl": "https://p.scdn.co/mp3-preview/e015ea09e3afbcde697903b5111178b808ed61e5?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
        "artistUrl": "https://open.spotify.com/artist/2UwJRAgSOi1zcLkvUNc8XL",
        "albumUrl": "https://open.spotify.com/album/4Wcp7Z67RyIbAYl6jmOkLL",
        "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb55dec5a16ce1b01f59d5bc24",
        "albumName": "Miku"
      },
      "userData": {
        
      }
    }
  },
  "spotifyAlbumExample": {
    "loadType": "playlist",
    "data": {
      "info": {
        "name": "UNDERTALE Soundtrack",
        "selectedTrack": -1
      },
      "pluginInfo": {
        "author": "Toby Fox",
        "totalTracks": 101,
        "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
        "type": "album",
        "url": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z"
      },
      "tracks": [
        {
          "encoded": "QAACEwMAEE9uY2UgVXBvbiBhIFRpbWUACFRvYnkgRm94AAAAAAABW4YAFjRYWDV1WmI5UHZUS2g4Tm0yS1NKZmsAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRYWDV1WmI5UHZUS2g4Tm0yS1NKZmsBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NTk5AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8yOWMyODJiMmIzNDJlZWU0ZmQ5YjA5Mjg2MDc4NzZmOTFkNzZkZDllP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4XX5uZb9PvTKh8Nm2KSJfk",
            "author": "Toby Fox",
            "length": 88966,
            "position": 0,
            "title": "Once Upon a Time",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4XX5uZb9PvTKh8Nm2KSJfk",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569599"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/29c282b2b342eee4fd9b0928607876f91d76dd9e?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDQMAClN0YXJ0IE1lbnUACFRvYnkgRm94AAAAAAAAfQAAFjVwYjM5bms3V3I4ZTBhTVE2VlVkbHIAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVwYjM5bms3V3I4ZTBhTVE2VlVkbHIBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjAwAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8xOWVkYmEzNmZlMWYyNTU0ZDU1MGFhY2I4NDA1MGEwZWY3ZWJkZDc1P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5pb39nk7Wr8e0aMQ6VUdlr",
            "author": "Toby Fox",
            "length": 32000,
            "position": 0,
            "title": "Start Menu",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5pb39nk7Wr8e0aMQ6VUdlr",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569600"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/19edba36fe1f2554d550aacb84050a0ef7ebdd75?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEwMAEFlvdXIgQmVzdCBGcmllbmQACFRvYnkgRm94AAAAAAAAWrkAFjZnSlRnU3dPdzJUcUFQQ25rMmdUbGsAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZnSlRnU3dPdzJUcUFQQ25rMmdUbGsBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjAxAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84Y2VkMTU1MmZiYmY0MzEyOWI5NmFkMGZmOTQ0YmY4MjZjYzVjNWFmP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6gJTgSwOw2TqAPCnk2gTlk",
            "author": "Toby Fox",
            "length": 23225,
            "position": 0,
            "title": "Your Best Friend",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6gJTgSwOw2TqAPCnk2gTlk",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569601"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/8ced1552fbbf43129b96ad0ff944bf826cc5c5af?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC0ZhbGxlbiBEb3duAAhUb2J5IEZveAAAAAAAAOHaABYxakRNaTkyYTl6TlF1UEQzdVBNa2xhAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8xakRNaTkyYTl6TlF1UEQzdVBNa2xhAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYwMgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMTQxYjMzMzliMjkxMGY4ZWZiOGQ3ZDQ3ZmY4YjZjZGQzMGIwYjliOD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1jDMi92a9zNQuPD3uPMkla",
            "author": "Toby Fox",
            "length": 57818,
            "position": 0,
            "title": "Fallen Down",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1jDMi92a9zNQuPD3uPMkla",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569602"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/141b3339b2910f8efb8d7d47ff8b6cdd30b0b9b8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCAMABVJ1aW5zAAhUb2J5IEZveAAAAAAAAWh6ABYxdnVTZGsyRUdqaDNlWENYQmJUOVFmAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8xdnVTZGsyRUdqaDNlWENYQmJUOVFmAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYwMwAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZjZiODAyZjQ0NGI2OTJjZDQyZmQ5ZjFkNzAyNmQ0M2EyMzg0MTBiMj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1vuSdk2EGjh3eXCXBbT9Qf",
            "author": "Toby Fox",
            "length": 92282,
            "position": 0,
            "title": "Ruins",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1vuSdk2EGjh3eXCXBbT9Qf",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569603"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f6b802f444b692cd42fd9f1d7026d43a238410b2?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACGAMAFVV3YSEhIFNvIFRlbXBlcmF0ZeKZqwAIVG9ieSBGb3gAAAAAAADc+wAWM1BWNGJQUHFlenUxOEs0NU1JT3JWWQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svM1BWNGJQUHFlenUxOEs0NU1JT3JWWQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MDQAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2YxZWUzZWI2Njg4NjBjODFiNTg0OTg1NGU3MmU0NDIwYzMwM2RkYTg/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3PV4bPPqezu18K45MIOrVY",
            "author": "Toby Fox",
            "length": 56571,
            "position": 0,
            "title": "Uwa!! So Temperate♫",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3PV4bPPqezu18K45MIOrVY",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569604"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f1ee3eb668860c81b5849854e72e4420c303dda8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDwMADEFudGljaXBhdGlvbgAIVG9ieSBGb3gAAAAAAABXFwAWNXFtc2RaWmFtRHJPQXE1d0tDdVNLQwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNXFtc2RaWmFtRHJPQXE1d0tDdVNLQwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MDUAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2YxZmI0MmNlNDBjZGQ1NTk4MTQ1YzlhZWYyNmQ5OWI5MmY1YmY5MmQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5qmsdZZamDrOAq5wKCuSKC",
            "author": "Toby Fox",
            "length": 22295,
            "position": 0,
            "title": "Anticipation",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5qmsdZZamDrOAq5wKCuSKC",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569605"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f1fb42ce40cdd5598145c9aef26d99b92f5bf92d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFgMAE1VubmVjZXNzYXJ5IFRlbnNpb24ACFRvYnkgRm94AAAAAAAAQ4gAFjE4NGxXOGY5anZvU2hoTVY4bzZCdVcAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzE4NGxXOGY5anZvU2hoTVY4bzZCdVcBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjA2AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84NzgxNDk5YTE3MWM5YWE1OTFmODU3MjhkMjUxYTI1NTNhMDRiYzEwP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "184lW8f9jvoShhMV8o6BuW",
            "author": "Toby Fox",
            "length": 17288,
            "position": 0,
            "title": "Unnecessary Tension",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/184lW8f9jvoShhMV8o6BuW",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569606"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/8781499a171c9aa591f85728d251a2553a04bc10?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFAMAEUVuZW15IEFwcHJvYWNoaW5nAAhUb2J5IEZveAAAAAAAANxJABY1aU9USGhpMkMzbUhTbjAwN05lcWNnAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay81aU9USGhpMkMzbUhTbjAwN05lcWNnAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYwNwAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMWQ4OGQzYzk4NTU5NjQzOWVjZjRlYzEzYzVmYmQ3YzRjY2E1MTQ1Mj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5iOTHhi2C3mHSn007Neqcg",
            "author": "Toby Fox",
            "length": 56393,
            "position": 0,
            "title": "Enemy Approaching",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5iOTHhi2C3mHSn007Neqcg",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569607"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/1d88d3c985596439ecf4ec13c5fbd7c4cca51452?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC0dob3N0IEZpZ2h0AAhUb2J5IEZveAAAAAAAANzVABYzNkFoQ3Z2OE5BVlByMGVOc3YyUHJXAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8zNkFoQ3Z2OE5BVlByMGVOc3YyUHJXAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYwOAAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNzBiYWFlZjhlNzNmYTBlMjU2OWYwNmRmZWRjMGQ5ODBlYjU0NTEzZj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "36AhCvv8NAVPr0eNsv2PrW",
            "author": "Toby Fox",
            "length": 56533,
            "position": 0,
            "title": "Ghost Fight",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/36AhCvv8NAVPr0eNsv2PrW",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569608"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/70baaef8e73fa0e2569f06dfedc0d980eb54513f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADURldGVybWluYXRpb24ACFRvYnkgRm94AAAAAAAAxKsAFjNLSGJCcHdZZGxNNnVLSmlydkNyRUEAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzNLSGJCcHdZZGxNNnVLSmlydkNyRUEBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjA5AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9iZWI4MzRiMDNiYmE0MGVjMzNjYTA0NTNjNmJlOGRkZmM4YTQ1NjY0P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3KHbBpwYdlM6uKJirvCrEA",
            "author": "Toby Fox",
            "length": 50347,
            "position": 0,
            "title": "Determination",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3KHbBpwYdlM6uKJirvCrEA",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569609"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/beb834b03bba40ec33ca0453c6be8ddfc8a45664?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACBwMABEhvbWUACFRvYnkgRm94AAAAAAAB4HgAFjVMOU1Kc0dxelRSRDA5clN6SGtDRHkAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVMOU1Kc0dxelRSRDA5clN6SGtDRHkBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjEwAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8wZGEwMmU3MjFjOTQxYzNiNWZhODczODliMzc2YTU1Mjk3OTE3NjVmP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5L9MJsGqzTRD09rSzHkCDy",
            "author": "Toby Fox",
            "length": 123000,
            "position": 0,
            "title": "Home",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5L9MJsGqzTRD09rSzHkCDy",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569610"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0da02e721c941c3b5fa87389b376a5529791765f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEwMAEEhvbWUgKE11c2ljIEJveCkACFRvYnkgRm94AAAAAAAB4AwAFjFEa2pxbmpnYmJwVDdjWUwyRDJtYTQAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzFEa2pxbmpnYmJwVDdjWUwyRDJtYTQBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjExAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9hNDhlZjIxMzg1ZGIxNThhZDE3Mjc5ZjcyMWIxODc3NzIwMGUyY2U1P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1DkjqnjgbbpT7cYL2D2ma4",
            "author": "Toby Fox",
            "length": 122892,
            "position": 0,
            "title": "Home (Music Box)",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1DkjqnjgbbpT7cYL2D2ma4",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569611"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a48ef21385db158ad17279f721b18777200e2ce5?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACUhlYXJ0YWNoZQAIVG9ieSBGb3gAAAAAAAGnowAWMmJ2Ykx2R0Q3WW5TNE5oZjlFNGhVbAABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMmJ2Ykx2R0Q3WW5TNE5oZjlFNGhVbAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MTIAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzRiNmE0ZmFmNzc1NjJkMGUwMjc5MjJjZTNmZDE1NzhlMmRkNWQzMWM/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2bvbLvGD7YnS4Nhf9E4hUl",
            "author": "Toby Fox",
            "length": 108451,
            "position": 0,
            "title": "Heartache",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2bvbLvGD7YnS4Nhf9E4hUl",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569612"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4b6a4faf77562d0e027922ce3fd1578e2dd5d31c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCAMABXNhbnMuAAhUb2J5IEZveAAAAAAAAMXAABYyNmxXWXBnYmNrbklUSTBGeTFlWkRzAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8yNmxXWXBnYmNrbklUSTBGeTFlWkRzAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYxMwAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNGJkMDhhNWE4NWJhNGIxY2ZmYmFiNDRlNjc2MmY4ZWVmMzBlZGMxNz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "26lWYpgbcknITI0Fy1eZDs",
            "author": "Toby Fox",
            "length": 50624,
            "position": 0,
            "title": "sans.",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/26lWYpgbcknITI0Fy1eZDs",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569613"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4bd08a5a85ba4b1cffbab44e6762f8eef30edc17?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADU55ZWggSGVoIEhlaCEACFRvYnkgRm94AAAAAAAAfpAAFjZZRUdRSDMyYUFYYjl2UVFiQnJQbHcAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZZRUdRSDMyYUFYYjl2UVFiQnJQbHcBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjE0AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8yYjA5YmQxYzEzOTg3OThjMmNiMDc0OWExNjQ4NmMwYTUzZTRkZTk3P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6YEGQH32aAXb9vQQbBrPlw",
            "author": "Toby Fox",
            "length": 32400,
            "position": 0,
            "title": "Nyeh Heh Heh!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6YEGQH32aAXb9vQQbBrPlw",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569614"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/2b09bd1c1398798c2cb0749a16486c0a53e4de97?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCAMABVNub3d5AAhUb2J5IEZveAAAAAAAAZdGABY3QWY1YVF6ZnBtMlZ4bkNGc3k2VGt4AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay83QWY1YVF6ZnBtMlZ4bkNGc3k2VGt4AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTcwMAAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMWMxNTMzZWZhZGZhYTU4M2FlZWZjMWQ0ZjRmYTVlOTQ1NjAxMTIzNT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7Af5aQzfpm2VxnCFsy6Tkx",
            "author": "Toby Fox",
            "length": 104262,
            "position": 0,
            "title": "Snowy",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7Af5aQzfpm2VxnCFsy6Tkx",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569700"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/1c1533efadfaa583aeefc1d4f4fa5e9456011235?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFgMAE1V3YSEhIFNvIEhvbGlkYXnimasACFRvYnkgRm94AAAAAAAAdTAAFjRtV0ZhZmNSRXVLV3YyTWVUVnhEbFEAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRtV0ZhZmNSRXVLV3YyTWVUVnhEbFEBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjE2AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84Mzc3NWYwMDQzYWIyYWIxYWZmODc0NjhkOWQ0ODA4ZTc3MjQ3NDhmP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4mWFafcREuKWv2MeTVxDlQ",
            "author": "Toby Fox",
            "length": 30000,
            "position": 0,
            "title": "Uwa!! So Holiday♫",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4mWFafcREuKWv2MeTVxDlQ",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569616"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/83775f0043ab2ab1aff87468d9d4808e7724748f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCgMAB0RvZ2Jhc3MACFRvYnkgRm94AAAAAAAAGZEAFjF5blJhYlA4amF5U2VSdkhCZWpmQ1QAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzF5blJhYlA4amF5U2VSdkhCZWpmQ1QBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjE3AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9lZjcxODFkNGQxYmJhOTlmMmI2ZmRmZGI3NDJlYjIzYTVmODA4MDFiP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1ynRabP8jaySeRvHBejfCT",
            "author": "Toby Fox",
            "length": 6545,
            "position": 0,
            "title": "Dogbass",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1ynRabP8jaySeRvHBejfCT",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569617"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/ef7181d4d1bba99f2b6fdfdb742eb23a5f80801b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEwMAEE15c3RlcmlvdXMgUGxhY2UACFRvYnkgRm94AAAAAAAArugAFjc5SEJpa2xOcXRRWGxuNW9jSFVSM0IAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzc5SEJpa2xOcXRRWGxuNW9jSFVSM0IBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjE4AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9mYmFjNzA1NTIzOTM3ZTQ4NTY4NDQ4NzRjYmYwYmZiZTFiZGE4ZTRlP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "79HBiklNqtQXln5ocHUR3B",
            "author": "Toby Fox",
            "length": 44776,
            "position": 0,
            "title": "Mysterious Place",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/79HBiklNqtQXln5ocHUR3B",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569618"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/fbac705523937e4856844874cbf0bfbe1bda8e4e?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCgMAB0RvZ3NvbmcACFRvYnkgRm94AAAAAAAAkaUAFjIzYVJVaGU0Z21TNEJoN0RVWmVjTDQAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzIzYVJVaGU0Z21TNEJoN0RVWmVjTDQBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjE5AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8wN2JlNDUxYzk5ZjAzZWQyYjRjZmQxOTZiY2JhOWJhZmM2NmI3MTkzP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "23aRUhe4gmS4Bh7DUZecL4",
            "author": "Toby Fox",
            "length": 37285,
            "position": 0,
            "title": "Dogsong",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/23aRUhe4gmS4Bh7DUZecL4",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569619"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/07be451c99f03ed2b4cfd196bcba9bafc66b7193?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDwMADFNub3dkaW4gVG93bgAIVG9ieSBGb3gAAAAAAAEpiAAWNlZoTHBiUWxQV2dVMTFBczh3b1VJQwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNlZoTHBiUWxQV2dVMTFBczh3b1VJQwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MjAAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzA3MjAzNTBjMmU4YTBjYmNmNDRiNjE3YmNlYmU2M2E5NWU0NDk0MGM/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6VhLpbQlPWgU11As8woUIC",
            "author": "Toby Fox",
            "length": 76168,
            "position": 0,
            "title": "Snowdin Town",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6VhLpbQlPWgU11As8woUIC",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569620"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0720350c2e8a0cbcf44b617bcebe63a95e44940c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACBwMABFNob3AACFRvYnkgRm94AAAAAAAAxGIAFjVPeVdOMzd4VGRadGpiU1ExNUZBOEsAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVPeVdOMzd4VGRadGpiU1ExNUZBOEsBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjIxAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy83ODM2NDE3MzM4OGI2MWU2MzU1MTBkNTE4OWE3ODM3NTQ1NTNjYzdjP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5OyWN37xTdZtjbSQ15FA8K",
            "author": "Toby Fox",
            "length": 50274,
            "position": 0,
            "title": "Shop",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5OyWN37xTdZtjbSQ15FA8K",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569621"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/78364173388b61e635510d5189a783754553cc7c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC0JvbmV0cm91c2xlAAhUb2J5IEZveAAAAAAAAOEAABYyQXRDNmkwYjhUanBqaFdCWllMcHJYAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8yQXRDNmkwYjhUanBqaFdCWllMcHJYAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYyMgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvYWVhOTA5MjZiOGJiNDVkODI0MzIzZjA1MGQwMGFhZDZmMDgxNjhiOT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2AtC6i0b8TjpjhWBZYLprX",
            "author": "Toby Fox",
            "length": 57600,
            "position": 0,
            "title": "Bonetrousle",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2AtC6i0b8TjpjhWBZYLprX",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569622"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/aea90926b8bb45d824323f050d00aad6f08168b9?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADURhdGluZyBTdGFydCEACFRvYnkgRm94AAAAAAAByIUAFjBSM0pnd2VPZkdsOWtQeHlkNURGQzgAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzBSM0pnd2VPZkdsOWtQeHlkNURGQzgBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjIzAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8wYmVjOTg2NjMzYTZkMGRhMjQ4Y2RiYjFkNGYyOGMwNjFjNDZkM2ZjP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0R3JgweOfGl9kPxyd5DFC8",
            "author": "Toby Fox",
            "length": 116869,
            "position": 0,
            "title": "Dating Start!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0R3JgweOfGl9kPxyd5DFC8",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569623"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0bec986633a6d0da248cdbb1d4f28c061c46d3fc?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADURhdGluZyBUZW5zZSEACFRvYnkgRm94AAAAAAAAZg8AFjBGbkNuRkdpNlRLUVNGRHZ4aUNDdUYAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzBGbkNuRkdpNlRLUVNGRHZ4aUNDdUYBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjI0AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9mZDI3MDU5YzBiMTA0ZGZlNGUwOTdiZDE1ZWJmN2Q0Y2RlNWMyNjIwP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0FnCnFGi6TKQSFDvxiCCuF",
            "author": "Toby Fox",
            "length": 26127,
            "position": 0,
            "title": "Dating Tense!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0FnCnFGi6TKQSFDvxiCCuF",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569624"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/fd27059c0b104dfe4e097bd15ebf7d4cde5c2620?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADURhdGluZyBGaWdodCEACFRvYnkgRm94AAAAAAAAjDsAFjBLUW5obENWbGRQNnFpY3ZCeTlJSjUAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzBLUW5obENWbGRQNnFpY3ZCeTlJSjUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjI1AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84OTJhMWYxODg0YmVmNjlhMmI1N2M2NTc3ODZlZTdiNzE4Yjc4ODljP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0KQnhlCVldP6qicvBy9IJ5",
            "author": "Toby Fox",
            "length": 35899,
            "position": 0,
            "title": "Dating Fight!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0KQnhlCVldP6qicvBy9IJ5",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569625"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/892a1f1884bef69a2b57c657786ee7b718b7889c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC1ByZW1vbml0aW9uAAhUb2J5IEZveAAAAAAAAPE6ABYyYWNqMjFrNTZsTnNoS3BWQVlGN0RSAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8yYWNqMjFrNTZsTnNoS3BWQVlGN0RSAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYyNgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNTNkMTUyYWJlNWJjOGRlOTdmY2VjNDQwNmI1YmI4MWE2MDdjZmFiMD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2acj21k56lNshKpVAYF7DR",
            "author": "Toby Fox",
            "length": 61754,
            "position": 0,
            "title": "Premonition",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2acj21k56lNshKpVAYF7DR",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569626"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/53d152abe5bc8de97fcec4406b5bb81a607cfab0?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEQMADkRhbmdlciBNeXN0ZXJ5AAhUb2J5IEZveAAAAAAAAEf8ABYzNTc3UmtLTWNMTjdOS2VxTkRqTFF3AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8zNTc3UmtLTWNMTjdOS2VxTkRqTFF3AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYyNwAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOTczYzNhODE3NjNjNWZlZjQ2MjI4NjU2ZjkwZTQzODFjN2VjOTdkZD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3577RkKMcLN7NKeqNDjLQw",
            "author": "Toby Fox",
            "length": 18428,
            "position": 0,
            "title": "Danger Mystery",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3577RkKMcLN7NKeqNDjLQw",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569627"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/973c3a81763c5fef46228656f90e4381c7ec97dd?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCQMABlVuZHluZQAIVG9ieSBGb3gAAAAAAACzWQAWMU1vQUdhSk55UHdhTFNCNmlUTE5nMQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMU1vQUdhSk55UHdhTFNCNmlUTE5nMQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MjgAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzJlNDE4OTRmNTkxZWM3NTJmYWE2NjQyOTQ5NmQzYTMyYzNhYTQ4YTY/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1MoAGaJNyPwaLSB6iTLNg1",
            "author": "Toby Fox",
            "length": 45913,
            "position": 0,
            "title": "Undyne",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1MoAGaJNyPwaLSB6iTLNg1",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569628"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/2e41894f591ec752faa66429496d3a32c3aa48a6?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACVdhdGVyZmFsbAAIVG9ieSBGb3gAAAAAAAHviQAWMk4ybEREYXVjYk1VdzFJMUd4QnJiYwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMk4ybEREYXVjYk1VdzFJMUd4QnJiYwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MjkAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzllOGQ2N2M2MTMwYzdhYjg0Zjk5ZjUyOGQwYWZiZTI5NWEzMjMxM2Q/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2N2lDDaucbMUw1I1GxBrbc",
            "author": "Toby Fox",
            "length": 126857,
            "position": 0,
            "title": "Waterfall",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2N2lDDaucbMUw1I1GxBrbc",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569629"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/9e8d67c6130c7ab84f99f528d0afbe295a32313d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACBwMABFJ1biEACFRvYnkgRm94AAAAAAAAaQAAFjZkM1Jhc0VEOFlnbGNqS3l3SEduS2QAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZkM1Jhc0VEOFlnbGNqS3l3SEduS2QBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjMwAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9lNDljMmQ3MzcwNmI0M2EyZDU0MjIyODAzMDIxOTg3NTFlNjdlM2JhP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6d3RasED8YglcjKywHGnKd",
            "author": "Toby Fox",
            "length": 26880,
            "position": 0,
            "title": "Run!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6d3RasED8YglcjKywHGnKd",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569630"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/e49c2d73706b43a2d5422280302198751e67e3ba?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC1F1aWV0IFdhdGVyAAhUb2J5IEZveAAAAAAAAH0AABYwZ3Q3NkR1TXg3RjNVWkpQZzdqY0M1AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8wZ3Q3NkR1TXg3RjNVWkpQZzdqY0M1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYzMQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNGE2NGYwMWY4MTZjZGIwNWM0MmVhZjU4ZjRhMWY2ZmY3YWM2YTI1Yj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0gt76DuMx7F3UZJPg7jcC5",
            "author": "Toby Fox",
            "length": 32000,
            "position": 0,
            "title": "Quiet Water",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0gt76DuMx7F3UZJPg7jcC5",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569631"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4a64f01f816cdb05c42eaf58f4a1f6ff7ac6a25b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCQMABk1lbW9yeQAIVG9ieSBGb3gAAAAAAAEk+AAWNExybHNPOWNubk5qeEJpSGVSZWRqRgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNExybHNPOWNubk5qeEJpSGVSZWRqRgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MzIAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2U1MjQ3Mjg1NmFhOGUwNjBlMmY2MjAwZjgwYTIzMTdiMTNjNGZmNGQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4LrlsO9cnnNjxBiHeRedjF",
            "author": "Toby Fox",
            "length": 75000,
            "position": 0,
            "title": "Memory",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4LrlsO9cnnNjxBiHeRedjF",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569632"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/e52472856aa8e060e2f6200f80a2317b13c4ff4d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACPAMAOUJpcmQgVGhhdCBDYXJyaWVzIFlvdSBPdmVyIEEgRGlzcHJvcG9ydGlvbmF0ZWx5IFNtYWxsIEdhcAAIVG9ieSBGb3gAAAAAAABiCgAWNVlmWFFENUpuNW81V3hheTVwREwzagABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNVlmWFFENUpuNW81V3hheTVwREwzagEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MzMAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2E3MDg4Nzg3M2Q4NTUzODE3MzA3MzFiNTc1ZmIzMmU4MzdmZDg3MDY/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5YfXQD5Jn5o5Wxay5pDL3j",
            "author": "Toby Fox",
            "length": 25098,
            "position": 0,
            "title": "Bird That Carries You Over A Disproportionately Small Gap",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5YfXQD5Jn5o5Wxay5pDL3j",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569633"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a70887873d855381730731b575fb32e837fd8706?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCQMABkR1bW15IQAIVG9ieSBGb3gAAAAAAAI6AAAWNlpFZW5iUHFDYkt4UG11NDl0YVU4dQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNlpFZW5iUHFDYkt4UG11NDl0YVU4dQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MzQAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3Lzk1OTgyMjA4NTA0YzkyNDUyZmJjOTg0NzcwNGY5NjgzMjEyOTE2Zjc/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6ZEenbPqCbKxPmu49taU8u",
            "author": "Toby Fox",
            "length": 145920,
            "position": 0,
            "title": "Dummy!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6ZEenbPqCbKxPmu49taU8u",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569634"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/95982208504c92452fbc9847704f9683212916f7?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEQMADlBhdGhldGljIEhvdXNlAAhUb2J5IEZveAAAAAAAAJdxABY0dURoUnpJdWJ5MHIyZE9EN0RkWWhBAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80dURoUnpJdWJ5MHIyZE9EN0RkWWhBAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYzNQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNjQ5ZmY1ZWJlOWJmNWFlOTZlZWM0OGYwNzRjOTIxNGFlMjUyNmJjNT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4uDhRzIuby0r2dOD7DdYhA",
            "author": "Toby Fox",
            "length": 38769,
            "position": 0,
            "title": "Pathetic House",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4uDhRzIuby0r2dOD7DdYhA",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569635"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/649ff5ebe9bf5ae96eec48f074c9214ae2526bc5?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACVNwb29rdHVuZQAIVG9ieSBGb3gAAAAAAABcNgAWN2p4UGw3WUtCSnVMRWdHMml1UTg2dQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svN2p4UGw3WUtCSnVMRWdHMml1UTg2dQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MzYAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2ZiZDQ4NTZmMGRkYjFlYTU0MTk3N2YzOTcyNzI5YmM2YjAxYzVjMjc/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7jxPl7YKBJuLEgG2iuQ86u",
            "author": "Toby Fox",
            "length": 23606,
            "position": 0,
            "title": "Spooktune",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7jxPl7YKBJuLEgG2iuQ86u",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569636"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/fbd4856f0ddb1ea541977f3972729bc6b01c5c27?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACVNwb29rd2F2ZQAIVG9ieSBGb3gAAAAAAABiCwAWN0lPa2pLWFZLdlZvV05aQ0lMQ1FOUwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svN0lPa2pLWFZLdlZvV05aQ0lMQ1FOUwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MzcAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2RlYzZjYmUyOGI2ZTk2M2ZkZGM0ZDY2M2RjZWEzNjEyMmQ3ZWUzZGI/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7IOkjKXVKvVoWNZCILCQNS",
            "author": "Toby Fox",
            "length": 25099,
            "position": 0,
            "title": "Spookwave",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7IOkjKXVKvVoWNZCILCQNS",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569637"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/dec6cbe28b6e963fddc4d663dcea36122d7ee3db?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACUdob3VsaWRheQAIVG9ieSBGb3gAAAAAAAAyMgAWMkVyTmVJTkJwQjNucjY0S1JpOUpVUwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMkVyTmVJTkJwQjNucjY0S1JpOUpVUwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MzgAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzQ2ZTZmMDkwNGMwYzdkMzdjZTIzZTlhZTc0YjdhMDYyYmZlNjMwZTA/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2ErNeINBpB3nr64KRi9JUS",
            "author": "Toby Fox",
            "length": 12850,
            "position": 0,
            "title": "Ghouliday",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2ErNeINBpB3nr64KRi9JUS",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569638"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/46e6f0904c0c7d37ce23e9ae74b7a062bfe630e0?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCAMABUNoaWxsAAhUb2J5IEZveAAAAAAAANvcABY3YUVUZlZEczZNblFnNnV5RWhocHJvAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay83YUVUZlZEczZNblFnNnV5RWhocHJvAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYzOQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvYjZkOWMwNDQ3NTFhMDM2NjE5ZDVmYTk3NjkzODViNjBkMDZiZTNhYj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7aETfVDs6MnQg6uyEhhpro",
            "author": "Toby Fox",
            "length": 56284,
            "position": 0,
            "title": "Chill",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7aETfVDs6MnQg6uyEhhpro",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569639"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/b6d9c044751a036619d5fa9769385b60d06be3ab?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDwMADFRodW5kZXJzbmFpbAAIVG9ieSBGb3gAAAAAAACliQAWNDduVHdnaFk3T0JsVWhucnAwbnBOcAABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNDduVHdnaFk3T0JsVWhucnAwbnBOcAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NDAAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2FiYTA1MTM5MzNmNTdhNjVhMTljYTMwYzg5NjAxN2ZiYzZiOTY0ZTI/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "47nTwghY7OBlUhnrp0npNp",
            "author": "Toby Fox",
            "length": 42377,
            "position": 0,
            "title": "Thundersnail",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/47nTwghY7OBlUhnrp0npNp",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569640"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/aba0513933f57a65a19ca30c896017fbc6b964e2?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEQMADlRlbW1pZSBWaWxsYWdlAAhUb2J5IEZveAAAAAAAAOIBABY3eW0yYzl6M0pna1hWRVFEazBzS244AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay83eW0yYzl6M0pna1hWRVFEazBzS244AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY0MQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZTJmYzQ3NTQ5ZDgwNjVlOGI2MzJjZmYzNDQ3N2RkNzZiZDA4NTlkND9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7ym2c9z3JgkXVEQDk0sKn8",
            "author": "Toby Fox",
            "length": 57857,
            "position": 0,
            "title": "Temmie Village",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7ym2c9z3JgkXVEQDk0sKn8",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569641"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/e2fc47549d8065e8b632cff34477dd76bd0859d4?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCwMACFRlbSBTaG9wAAhUb2J5IEZveAAAAAAAALCzABYzU1ZyT1lkTWFxZVc1NmVIZnc3U2NYAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8zU1ZyT1lkTWFxZVc1NmVIZnc3U2NYAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY0MgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOWYzMTNlMmEwOTFkNmExNjcxMjA3ZDEzZTc3NTRiYzQ4Y2NmZmI2Yj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3SVrOYdMaqeW56eHfw7ScX",
            "author": "Toby Fox",
            "length": 45235,
            "position": 0,
            "title": "Tem Shop",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3SVrOYdMaqeW56eHfw7ScX",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569642"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/9f313e2a091d6a1671207d13e7754bc48ccffb6b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCwMACE5HQUhISCEhAAhUb2J5IEZveAAAAAAAAUKAABY1UTJZSGltcXdSSG9QaWZiM0g4TmxvAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay81UTJZSGltcXdSSG9QaWZiM0g4TmxvAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY0MwAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvODUzYmIxNzQ5YTc0MGMwMjdmZTIwZDdlZjlhNTY5ZmZjNTNiMmQ0ZT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5Q2YHimqwRHoPifb3H8Nlo",
            "author": "Toby Fox",
            "length": 82560,
            "position": 0,
            "title": "NGAHHH!!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5Q2YHimqwRHoPifb3H8Nlo",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569643"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/853bb1749a740c027fe20d7ef9a569ffc53b2d4e?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEwMAEFNwZWFyIG9mIEp1c3RpY2UACFRvYnkgRm94AAAAAAABwu0AFjB3YWU4S29wck5qZnJYV2pZWUhHeTkAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzB3YWU4S29wck5qZnJYV2pZWUhHeTkBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjQ0AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8zODRhYzlkOWM2YjZjYTU5MjViNGU0ZTJkYmQ4ODNkNGVhZDU1NTFiP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0wae8KoprNjfrXWjYYHGy9",
            "author": "Toby Fox",
            "length": 115437,
            "position": 0,
            "title": "Spear of Justice",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0wae8KoprNjfrXWjYYHGy9",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569644"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/384ac9d9c6b6ca5925b4e4e2dbd883d4ead5551b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACBgMAA09vbwAIVG9ieSBGb3gAAAAAAAA3PgAWNk1wTDB6THZhSEtqV0ZaUWp3Qm5GQgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNk1wTDB6THZhSEtqV0ZaUWp3Qm5GQgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NDUAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2FmN2U3N2Q5ZTYzNGFlYWVmZTdlY2ExZjBhNzg5MjQwMGMxOWQ4NmY/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6MpL0zLvaHKjWFZQjwBnFB",
            "author": "Toby Fox",
            "length": 14142,
            "position": 0,
            "title": "Ooo",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6MpL0zLvaHKjWFZQjwBnFB",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569645"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/af7e77d9e634aeaefe7eca1f0a7892400c19d86f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCQMABkFscGh5cwAIVG9ieSBGb3gAAAAAAAFNAwAWNVByZjR3cEtsbnNxajlIVFNXNEJqVwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNVByZjR3cEtsbnNxajlIVFNXNEJqVwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NDYAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzRjYWRlMDEzNzcyOTZjYzBkZWU4NGMyODM5ZWUzZTkzMzVmYzVmYTc/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5Prf4wpKlnsqj9HTSW4BjW",
            "author": "Toby Fox",
            "length": 85251,
            "position": 0,
            "title": "Alphys",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5Prf4wpKlnsqj9HTSW4BjW",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569646"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4cade01377296cc0dee84c2839ee3e9335fc5fa7?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEQMADkl0J3MgU2hvd3RpbWUhAAhUb2J5IEZveAAAAAAAALQlABY1bEx1QXRyUVhUaTIwNEdOeGtFZW52AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay81bEx1QXRyUVhUaTIwNEdOeGtFZW52AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY0NwAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMzE4NjE1ZDAwZjc0N2U3NjZlMjE3ZDY0NTBmZTk3NTNkZGE3OTZlMj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5lLuAtrQXTi204GNxkEenv",
            "author": "Toby Fox",
            "length": 46117,
            "position": 0,
            "title": "It's Showtime!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5lLuAtrQXTi204GNxkEenv",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569647"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/318615d00f747e766e217d6450fe9753dda796e2?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADU1ldGFsIENydXNoZXIACFRvYnkgRm94AAAAAAAA9sAAFjZaVDM2dFhFS1kydnZUQ3VOSzRmaTEAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZaVDM2dFhFS1kydnZUQ3VOSzRmaTEBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjQ4AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8xMTRiMDZkMzA0NWIxMjE3ZjY0YWVmOTFlMTE1NWNkYWNmNzI5YjcwP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6ZT36tXEKY2vvTCuNK4fi1",
            "author": "Toby Fox",
            "length": 63168,
            "position": 0,
            "title": "Metal Crusher",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6ZT36tXEKY2vvTCuNK4fi1",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569648"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/114b06d3045b1217f64aef91e1155cdacf729b70?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEQMADkFub3RoZXIgTWVkaXVtAAhUb2J5IEZveAAAAAAAAitJABYzZVFpano0cFBUN3JiMDIwTHFkaGRYAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8zZVFpano0cFBUN3JiMDIwTHFkaGRYAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY0OQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMWRjYzc5YjRlODhlYWViNjg1Nzg1ZDAzMGFhZTA2YTk4NTE1MmJiYz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3eQijz4pPT7rb020LqdhdX",
            "author": "Toby Fox",
            "length": 142153,
            "position": 0,
            "title": "Another Medium",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3eQijz4pPT7rb020LqdhdX",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569649"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/1dcc79b4e88eaeb685785d030aae06a985152bbc?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFgMAE1V3YSEhIFNvIEhFQVRTISHimasACFRvYnkgRm94AAAAAAAAhL4AFjMxRGVsa2c5QVoxQjR2bU1ydEpUb0YAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzMxRGVsa2c5QVoxQjR2bU1ydEpUb0YBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjUwAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8xYTdhNjFjN2QxN2FmOGEyOTAyNjM5ZGJlZTQ3YjA5ZjAwOWU1M2VhP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "31Delkg9AZ1B4vmMrtJToF",
            "author": "Toby Fox",
            "length": 33982,
            "position": 0,
            "title": "Uwa!! So HEATS!!♫",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/31Delkg9AZ1B4vmMrtJToF",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569650"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/1a7a61c7d17af8a2902639dbee47b09f009e53ea?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFAMAEVN0cm9uZ2VyIE1vbnN0ZXJzAAhUb2J5IEZveAAAAAAAAPaKABYwUk9FVHBvTE9LanE2MUxqd3hOejkyAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8wUk9FVHBvTE9LanE2MUxqd3hOejkyAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY1MQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOWQwNzdlMzFlN2NlM2EwNDVmOTJjZDc3MDY1Y2VmYzRiY2YwZmViZj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0ROETpoLOKjq61LjwxNz92",
            "author": "Toby Fox",
            "length": 63114,
            "position": 0,
            "title": "Stronger Monsters",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0ROETpoLOKjq61LjwxNz92",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569651"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/9d077e31e7ce3a045f92cd77065cefc4bcf0febf?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCAMABUhvdGVsAAhUb2J5IEZveAAAAAAAAVa9ABYwVHoydGNramhFdkFwcGRXSHNncWc2AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8wVHoydGNramhFdkFwcGRXSHNncWc2AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY1MgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNTMwYTkwZTQyYjQ4MDAxYTU4OWJiZTc5YzNiNDdhZjFiNGZkYzUzND9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0Tz2tckjhEvAppdWHsgqg6",
            "author": "Toby Fox",
            "length": 87741,
            "position": 0,
            "title": "Hotel",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0Tz2tckjhEvAppdWHsgqg6",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569652"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/530a90e42b48001a589bbe79c3b47af1b4fdc534?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACVQMAUkNhbiBZb3UgUmVhbGx5IENhbGwgVGhpcyBBIEhvdGVsLCBJIERpZG4ndCBSZWNlaXZlIEEgTWludCBPbiBNeSBQaWxsb3cgT3IgQW55dGhpbmcACFRvYnkgRm94AAAAAAAA7+kAFjNsbGN5Wm5MMDRsSVVRQWlCQ0ZuZzEAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzNsbGN5Wm5MMDRsSVVRQWlCQ0ZuZzEBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjUzAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84OTNmZjg2OTk5NTAwMmRkYzI0ODc1MGFmZmRlM2VhYjQxYTlmZDljP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3llcyZnL04lIUQAiBCFng1",
            "author": "Toby Fox",
            "length": 61417,
            "position": 0,
            "title": "Can You Really Call This A Hotel, I Didn't Receive A Mint On My Pillow Or Anything",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3llcyZnL04lIUQAiBCFng1",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569653"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/893ff869995002ddc248750affde3eab41a9fd9c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDQMACkNvbmZlc3Npb24ACFRvYnkgRm94AAAAAAAApE0AFjF2SVo4N1BsQjFQRkFCRlg2VzVESjYAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzF2SVo4N1BsQjFQRkFCRlg2VzVESjYBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjU0AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9iNDE0ZDY4NjZjODkzMDc0YTFjOTJjNmFkMmIzYzJjZmE2YWU5MGVmP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1vIZ87PlB1PFABFX6W5DJ6",
            "author": "Toby Fox",
            "length": 42061,
            "position": 0,
            "title": "Confession",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1vIZ87PlB1PFABFX6W5DJ6",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569654"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/b414d6866c893074a1c92c6ad2b3c2cfa6ae90ef?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC0xpdmUgUmVwb3J0AAhUb2J5IEZveAAAAAAAAEVLABY3NTVEcXBqanh1TVFLQUtkd3ZKNzdZAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay83NTVEcXBqanh1TVFLQUtkd3ZKNzdZAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY1NQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZjk1MmE4M2IzZjBmZmY2MDJjZDI3ZTNkMDBiZTE5MmUyMDMwMmJiYj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "755DqpjjxuMQKAKdwvJ77Y",
            "author": "Toby Fox",
            "length": 17739,
            "position": 0,
            "title": "Live Report",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/755DqpjjxuMQKAKdwvJ77Y",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569655"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f952a83b3f0fff602cd27e3d00be192e20302bbb?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDwMADERlYXRoIFJlcG9ydAAIVG9ieSBGb3gAAAAAAAC4BwAWNTY5RU1EZEcyY1c2NzBFY2hCZmRmTwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNTY5RU1EZEcyY1c2NzBFY2hCZmRmTwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NTcAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2FhOTViY2Y2ODI5NzI3MGY0ZWU1ZjVhNDJmYzljNWQ3YTY5N2IxOWI/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "569EMDdG2cW670EchBfdfO",
            "author": "Toby Fox",
            "length": 47111,
            "position": 0,
            "title": "Death Report",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/569EMDdG2cW670EchBfdfO",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569657"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/aa95bcf68297270f4ee5f5a42fc9c5d7a697b19b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDwMADFNwaWRlciBEYW5jZQAIVG9ieSBGb3gAAAAAAAGfwgAWM2FpR3NodXFZaGRCQkJoSHFSZjZqbgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svM2FpR3NodXFZaGRCQkJoSHFSZjZqbgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NTgAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2EyMGNhODgwZGE3NjNhOGJkMzI1MjA5NDA2ZTY3ODQ2MTcwNTk1OGQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3aiGshuqYhdBBBhHqRf6jn",
            "author": "Toby Fox",
            "length": 106434,
            "position": 0,
            "title": "Spider Dance",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3aiGshuqYhdBBBhHqRf6jn",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569658"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a20ca880da763a8bd325209406e678461705958d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEQMADldyb25nIEVuZW15ICE/AAhUb2J5IEZveAAAAAAAAOQYABY1UjhvZVplcThBVWlKdXo1RklQUjltAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay81UjhvZVplcThBVWlKdXo1RklQUjltAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY1OQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMGJlOTk0MTU3NTgxNWNjMzhjYWU0ZTA5Mzk3ODFhN2RmYjIxZTVkMD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5R8oeZeq8AUiJuz5FIPR9m",
            "author": "Toby Fox",
            "length": 58392,
            "position": 0,
            "title": "Wrong Enemy !?",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5R8oeZeq8AUiJuz5FIPR9m",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569659"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0be9941575815cc38cae4e0939781a7dfb21e5d0?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFAMAEU9oISBPbmUgVHJ1ZSBMb3ZlAAhUb2J5IEZveAAAAAAAAUggABY0d0JNTXFlWTJObkZuU3RCSVBIeHlHAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80d0JNTXFlWTJObkZuU3RCSVBIeHlHAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY2MAAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNGJjMDliNTZiNDc2MWE3ZjVlNDk0OGMyNmM2NDRjYjBjY2E2MTBiND9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4wBMMqeY2NnFnStBIPHxyG",
            "author": "Toby Fox",
            "length": 84000,
            "position": 0,
            "title": "Oh! One True Love",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4wBMMqeY2NnFnStBIPHxyG",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569660"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4bc09b56b4761a7f5e4948c26c644cb0cca610b4?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC09oISBEdW5nZW9uAAhUb2J5IEZveAAAAAAAAIBKABY2OFFFRTFKUFJqRUJiZGh6cEVJS0daAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82OFFFRTFKUFJqRUJiZGh6cEVJS0daAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY2MQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZWUzODM5MjA3MDhiMTY3NTM5M2I4ODg3OWE4OTBmMTEzMzc2ZTJmYz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "68QEE1JPRjEBbdhzpEIKGZ",
            "author": "Toby Fox",
            "length": 32842,
            "position": 0,
            "title": "Oh! Dungeon",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/68QEE1JPRjEBbdhzpEIKGZ",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569661"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/ee383920708b1675393b88879a890f113376e2fc?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACHgMAG0l0J3MgUmFpbmluZyBTb21ld2hlcmUgRWxzZQAIVG9ieSBGb3gAAAAAAAKZSAAWNXo0dm1hcjUwcVBsODBHaklyUEJYbQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNXo0dm1hcjUwcVBsODBHaklyUEJYbQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NjIAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3Lzk4ZDUzYjVhNDY4NTIwNTMwMGRlMTZiOWU5ZjRhMjA1ZjllYjQyZjc/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5z4vmar50qPl80GjIrPBXm",
            "author": "Toby Fox",
            "length": 170312,
            "position": 0,
            "title": "It's Raining Somewhere Else",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5z4vmar50qPl80GjIrPBXm",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569662"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/98d53b5a4685205300de16b9e9f4a205f9eb42f7?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADUNPUkUgQXBwcm9hY2gACFRvYnkgRm94AAAAAAAALxUAFjFQVnc3MEZVcm0wOEJ1RUQ4YmRpUGIAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzFQVnc3MEZVcm0wOEJ1RUQ4YmRpUGIBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjYzAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9hODM5MDAyY2MwYTZiMjI4MDZjNWRmNWQ5MmEzY2ExYTFiNjVkYjNiP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1PVw70FUrm08BuED8bdiPb",
            "author": "Toby Fox",
            "length": 12053,
            "position": 0,
            "title": "CORE Approach",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1PVw70FUrm08BuED8bdiPb",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569663"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a839002cc0a6b22806c5df5d92a3ca1a1b65db3b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACBwMABENPUkUACFRvYnkgRm94AAAAAAACifgAFjVKeUVGWTA1c1Y1Wjh6NUJqN0hRMUoAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVKeUVGWTA1c1Y1Wjh6NUJqN0hRMUoBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjY0AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9iNmM1NTFlZjVjNmI4YzY2NmEwZDViMjYwNmZiNTczYzkxMzk5NGE5P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5JyEFY05sV5Z8z5Bj7HQ1J",
            "author": "Toby Fox",
            "length": 166392,
            "position": 0,
            "title": "CORE",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5JyEFY05sV5Z8z5Bj7HQ1J",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569664"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/b6c551ef5c6b8c666a0d5b2606fb573c913994a9?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADUxhc3QgRXBpc29kZSEACFRvYnkgRm94AAAAAAAAHcMAFjN6b2F2M0xTSXRkdmg3ZmowaUU0M3QAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzN6b2F2M0xTSXRkdmg3ZmowaUU0M3QBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjY1AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9jOGY5ZmQ3ZWFkZGE4MDU4OWRlNmI2ZDBmOTU2YWE3ZWI5ZjI0OGY5P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3zoav3LSItdvh7fj0iE43t",
            "author": "Toby Fox",
            "length": 7619,
            "position": 0,
            "title": "Last Episode!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3zoav3LSItdvh7fj0iE43t",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569665"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/c8f9fd7eadda80589de6b6d0f956aa7eb9f248f9?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCwMACE9oIE15Li4uAAhUb2J5IEZveAAAAAAAADiSABY2Q0JzR1Y2c3Y4MTFzUmI0c05CbWNsAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82Q0JzR1Y2c3Y4MTFzUmI0c05CbWNsAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY2NgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMGI4YzllYTFjZDczOWU1MDZmMmEzN2ZiNzcwNDhiNmRjNTE0ZWYwYj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6CBsGV6sv811sRb4sNBmcl",
            "author": "Toby Fox",
            "length": 14482,
            "position": 0,
            "title": "Oh My...",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6CBsGV6sv811sRb4sNBmcl",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569666"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0b8c9ea1cd739e506f2a37fb77048b6dc514ef0b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEwMAEERlYXRoIEJ5IEdsYW1vdXIACFRvYnkgRm94AAAAAAACDcIAFjdCR1oyN3llYUtSNU9aT0l4eWVnWmkAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzdCR1oyN3llYUtSNU9aT0l4eWVnWmkBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjY3AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8wYjZjYzc0ZDgyNDllNWYzM2JiMmIzMmQ3YWIzZWRkODJkMjkyNDVlP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7BGZ27yeaKR5OZOIxyegZi",
            "author": "Toby Fox",
            "length": 134594,
            "position": 0,
            "title": "Death By Glamour",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7BGZ27yeaKR5OZOIxyegZi",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569667"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0b6cc74d8249e5f33bb2b32d7ab3edd82d29245e?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDwMADEZvciBUaGUgRmFucwAIVG9ieSBGb3gAAAAAAAGi4gAWMzlwUWNQbUFkemh2bW1Hd3l5UGF0RAABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMzlwUWNQbUFkemh2bW1Hd3l5UGF0RAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NjgAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2UyMmFkYmNiNzcxYzQ2M2YzY2JmZDBlYzdmYzUxZTI1MTI3MmI3ZTg/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "39pQcPmAdzhvmmGwyyPatD",
            "author": "Toby Fox",
            "length": 107234,
            "position": 0,
            "title": "For The Fans",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/39pQcPmAdzhvmmGwyyPatD",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569668"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/e22adbcb771c463f3cbfd0ec7fc51e251272b7e8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADUxvbmcgRWxldmF0b3IACFRvYnkgRm94AAAAAAAATkMAFjNibWJhUVhNOThmRUFvUW90aU51OVEAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzNibWJhUVhNOThmRUFvUW90aU51OVEBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjU2AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy81MWZhNzc0OWFiNWUxYzU0NDYzNzNhNTQ0NDUzZDY5ZDIwM2YzMWE5P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3bmbaQXM98fEAoQotiNu9Q",
            "author": "Toby Fox",
            "length": 20035,
            "position": 0,
            "title": "Long Elevator",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3bmbaQXM98fEAoQotiNu9Q",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569656"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/51fa7749ab5e1c5446373a544453d69d203f31a9?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACVVuZGVydGFsZQAIVG9ieSBGb3gAAAAAAAXSXwAWMkZaOTlqMjI0b2hpR0xhdnFqaWp6YQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMkZaOTlqMjI0b2hpR0xhdnFqaWp6YQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NjkAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzE1OWMxZGVkNDMzMDIwYWNjOWIxODVmOGQ5NjgxYjAwNDMwMDAxZWQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2FZ99j224ohiGLavqjijza",
            "author": "Toby Fox",
            "length": 381535,
            "position": 0,
            "title": "Undertale",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2FZ99j224ohiGLavqjijza",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569669"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/159c1ded433020acc9b185f8d9681b00430001ed?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACKwMAKFNvbmcgVGhhdCBNaWdodCBQbGF5IFdoZW4gWW91IEZpZ2h0IFNhbnMACFRvYnkgRm94AAAAAAAA8jAAFjRPT0E5bXR3VGV2RzM5amNBTHVzT3UAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRPT0E5bXR3VGV2RzM5amNBTHVzT3UBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjcwAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8wZmU0ZTVlNDY1MjcyYWFiYzRkNjgzNTIyNGVkYjUzMzM0MmJhNWRjP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4OOA9mtwTevG39jcALusOu",
            "author": "Toby Fox",
            "length": 62000,
            "position": 0,
            "title": "Song That Might Play When You Fight Sans",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4OOA9mtwTevG39jcALusOu",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569670"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0fe4e5e465272aabc4d6835224edb533342ba5dc?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDQMAClRoZSBDaG9pY2UACFRvYnkgRm94AAAAAAACBbcAFjZOaFhTanBzYXNHdzBkYWQ1Q3hCWXUAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZOaFhTanBzYXNHdzBkYWQ1Q3hCWXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjcxAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8zMTBhYjQ4ZjAwMTY1YzU0OGMwZjBjODZkOTZlNTViOGU1OGQ4ZWQ4P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6NhXSjpsasGw0dad5CxBYu",
            "author": "Toby Fox",
            "length": 132535,
            "position": 0,
            "title": "The Choice",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6NhXSjpsasGw0dad5CxBYu",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569671"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/310ab48f00165c548c0f0c86d96e55b8e58d8ed8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC1NtYWxsIFNob2NrAAhUb2J5IEZveAAAAAAAADclABY3ZzJ2UzQwa1BnOVBWTWM4bXV4ekJiAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay83ZzJ2UzQwa1BnOVBWTWM4bXV4ekJiAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY3MgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNGNmODcyYTQ2M2FjZTI0MDUyM2I1Y2I0NTUwMDM2YTQ4OTQ3MjY3NT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7g2vS40kPg9PVMc8muxzBb",
            "author": "Toby Fox",
            "length": 14117,
            "position": 0,
            "title": "Small Shock",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7g2vS40kPg9PVMc8muxzBb",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569672"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4cf872a463ace240523b5cb4550036a489472675?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCgMAB0JhcnJpZXIACFRvYnkgRm94AAAAAAAAeaYAFjRVSm9KY1ZLU3VlazFQYUZkZzIzOFgAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRVSm9KY1ZLU3VlazFQYUZkZzIzOFgBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5Njc0AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy82NDZhNzE3NzI4ZWJlZDk4ZDQ5NzRkZWQ0ODdmYzViMGJmNDViZTk2P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4UJoJcVKSuek1PaFdg238X",
            "author": "Toby Fox",
            "length": 31142,
            "position": 0,
            "title": "Barrier",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4UJoJcVKSuek1PaFdg238X",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569674"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/646a717728ebed98d4974ded487fc5b0bf45be96?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEgMAD0JlcmdlbnRyw7xja3VuZwAIVG9ieSBGb3gAAAAAAABS3gAWN3R4b3VBWmdqcUhjSVBRUVR6b2p5dgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svN3R4b3VBWmdqcUhjSVBRUVR6b2p5dgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NzUAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2U5NDRlYzk3YWVjYjY0NGJkMzc4YTlhMzU0NGVmNWFkYThkYmRlYWQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7txouAZgjqHcIPQQTzojyv",
            "author": "Toby Fox",
            "length": 21214,
            "position": 0,
            "title": "Bergentrückung",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7txouAZgjqHcIPQQTzojyv",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569675"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/e944ec97aecb644bd378a9a3544ef5ada8dbdead?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCQMABkFTR09SRQAIVG9ieSBGb3gAAAAAAAJhYAAWMHliTUJzOG1LZEFQOVdTbkZUaVp2cwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMHliTUJzOG1LZEFQOVdTbkZUaVp2cwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NzYAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2MxZmQ0ZDlhZGMyMjU0MTllNmQ5Y2EwYjVhNDA1MGI1MTM0NWY3OGQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0ybMBs8mKdAP9WSnFTiZvs",
            "author": "Toby Fox",
            "length": 156000,
            "position": 0,
            "title": "ASGORE",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0ybMBs8mKdAP9WSnFTiZvs",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569676"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/c1fd4d9adc225419e6d9ca0b5a4050b51345f78d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACVlvdSBJZGlvdAAIVG9ieSBGb3gAAAAAAACG8QAWMlJnTDRlZTVoV0VpazlUVzZFSHZiZQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMlJnTDRlZTVoV0VpazlUVzZFSHZiZQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NzcAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2Y1MTZhNzE1NmM2OTgxOTJiMmZlNzYxZDExNmIxMDJmNzc3MTZiY2Y/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2RgL4ee5hWEik9TW6EHvbe",
            "author": "Toby Fox",
            "length": 34545,
            "position": 0,
            "title": "You Idiot",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2RgL4ee5hWEik9TW6EHvbe",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569677"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f516a7156c698192b2fe761d116b102f77716bcf?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFgMAE1lvdXIgQmVzdCBOaWdodG1hcmUACFRvYnkgRm94AAAAAAADqYAAFjcyM3JuQlhSYzA5dW1VZnNhc0k2Q2QAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzcyM3JuQlhSYzA5dW1VZnNhc0k2Q2QBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5Njc4AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8zYTg3YWVhNWJlMGUzNzcyNzRmZjEwNjk0MmU3ZDdhMmE0MTUxODdjP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "723rnBXRc09umUfsasI6Cd",
            "author": "Toby Fox",
            "length": 240000,
            "position": 0,
            "title": "Your Best Nightmare",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/723rnBXRc09umUfsasI6Cd",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569678"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/3a87aea5be0e377274ff106942e7d7a2a415187c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCQMABkZpbmFsZQAIVG9ieSBGb3gAAAAAAAG3JQAWNGtOS0w4a0NDVjN2dDlVMmsyOEx5eAABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNGtOS0w4a0NDVjN2dDlVMmsyOEx5eAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NzkAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2MxOGUwMDExNjY3NzI4MDI0NTRlNDE1NGRlYTE0MGFkNWVlYjczYzc/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4kNKL8kCCV3vt9U2k28Lyx",
            "author": "Toby Fox",
            "length": 112421,
            "position": 0,
            "title": "Finale",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4kNKL8kCCV3vt9U2k28Lyx",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569679"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/c18e001166772802454e4154dea140ad5eeb73c7?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACUFuIEVuZGluZwAIVG9ieSBGb3gAAAAAAAMvoAAWNmVUY3hrbDlHN0MybXdlakxKN0FtbQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNmVUY3hrbDlHN0MybXdlakxKN0FtbQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2ODAAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzkyN2MyNGU4ODUxYjUzYmE2MTg1YzY1ZWZkYzJmNjcxYThkN2IyZjM/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6eTcxkl9G7C2mwejLJ7Amm",
            "author": "Toby Fox",
            "length": 208800,
            "position": 0,
            "title": "An Ending",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6eTcxkl9G7C2mwejLJ7Amm",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569680"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/927c24e8851b53ba6185c65efdc2f671a8d7b2f3?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFgMAE1NoZSdzIFBsYXlpbmcgUGlhbm8ACFRvYnkgRm94AAAAAAAASakAFjNKb3lNOG5qNHJRTWhhMXVCQUZnT0IAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzNKb3lNOG5qNHJRTWhhMXVCQUZnT0IBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjgxAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9lYmU0MTA3OWVjNDAxYjUyZTA5MDBmNTg2NDkyMWYxNzkzZjBkMzU3P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3JoyM8nj4rQMha1uBAFgOB",
            "author": "Toby Fox",
            "length": 18857,
            "position": 0,
            "title": "She's Playing Piano",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3JoyM8nj4rQMha1uBAFgOB",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569681"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/ebe41079ec401b52e0900f5864921f1793f0d357?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC0hlcmUgV2UgQXJlAAhUb2J5IEZveAAAAAAAAezwABYzQk55NXgxMGZ5NWRHNkpJZ3JpbVpJAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8zQk55NXgxMGZ5NWRHNkpJZ3JpbVpJAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY4MgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOWU5ZDI1YzUwNjZjY2EwOTVkMjgxZmM1YjU2OWUyNGQ2MGYwN2VjMD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3BNy5x10fy5dG6JIgrimZI",
            "author": "Toby Fox",
            "length": 126192,
            "position": 0,
            "title": "Here We Are",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3BNy5x10fy5dG6JIgrimZI",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569682"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/9e9d25c5066cca095d281fc5b569e24d60f07ec0?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCgMAB0FtYWxnYW0ACFRvYnkgRm94AAAAAAABOIAAFjR1Uzl5RkxlOTB1eG5BejVWWHFIUXYAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzR1Uzl5RkxlOTB1eG5BejVWWHFIUXYBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjgzAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8wMzZmOGFkZTI3NmUwNmRkZTIwNzMzMGRiYmMyNzA0NjkzN2ZlY2I3P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4uS9yFLe90uxnAz5VXqHQv",
            "author": "Toby Fox",
            "length": 80000,
            "position": 0,
            "title": "Amalgam",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4uS9yFLe90uxnAz5VXqHQv",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569683"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/036f8ade276e06dde207330dbbc27046937fecb7?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACGAMAFUZhbGxlbiBEb3duIChSZXByaXNlKQAIVG9ieSBGb3gAAAAAAAJMEQAWMjNiOUJkWjJXWm5EU2VEek5VVFZ2WgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMjNiOUJkWjJXWm5EU2VEek5VVFZ2WgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2ODQAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2EyNGIxN2QxNDc2MzUxN2Y2ZDMzOTc5ZGUxMzUzOWNmNTA0OTE3NGI/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "23b9BdZ2WZnDSeDzNUTVvZ",
            "author": "Toby Fox",
            "length": 150545,
            "position": 0,
            "title": "Fallen Down (Reprise)",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/23b9BdZ2WZnDSeDzNUTVvZ",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569684"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a24b17d14763517f6d33979de13539cf5049174b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEAMADURvbid0IEdpdmUgVXAACFRvYnkgRm94AAAAAAAB3JAAFjRZcXJyNVNNQjg0c2tlSjhjdXBKZ3MAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRZcXJyNVNNQjg0c2tlSjhjdXBKZ3MBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5Njg1AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy83ZGY2NGIwNjExN2I3MmQ5ZDU5N2NlOWFlMTQ0OTM0MjEwNThkZTU0P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4Yqrr5SMB84skeJ8cupJgs",
            "author": "Toby Fox",
            "length": 122000,
            "position": 0,
            "title": "Don't Give Up",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4Yqrr5SMB84skeJ8cupJgs",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569685"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/7df64b06117b72d9d597ce9ae14493421058de54?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEwMAEEhvcGVzIEFuZCBEcmVhbXMACFRvYnkgRm94AAAAAAACxCUAFjdDTVZvODQ4YjlMc1V0VmF2SW9pWEMAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzdDTVZvODQ4YjlMc1V0VmF2SW9pWEMBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5Njg2AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy83ZDhjYjJlMzUwZTIxMTFiNjI5NGQxZjcxZDQ3ODA4ZjY4MjMwMGMyP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7CMVo848b9LsUtVavIoiXC",
            "author": "Toby Fox",
            "length": 181285,
            "position": 0,
            "title": "Hopes And Dreams",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7CMVo848b9LsUtVavIoiXC",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569686"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/7d8cb2e350e2111b6294d1f71d47808f682300c2?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEwMAEEJ1cm4gSW4gRGVzcGFpciEACFRvYnkgRm94AAAAAAAAU1UAFjBiSklYbzdvRUZDN1l1RUFFZDQ0U0wAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzBiSklYbzdvRUZDN1l1RUFFZDQ0U0wBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5Njg3AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9mMjViYjBiNGZmNDRhN2U1MWVhOGY4YjBmMGQ4MWNlYzIyMGRhMGJiP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0bJIXo7oEFC7YuEAEd44SL",
            "author": "Toby Fox",
            "length": 21333,
            "position": 0,
            "title": "Burn In Despair!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0bJIXo7oEFC7YuEAEd44SL",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569687"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f25bb0b4ff44a7e51ea8f8b0f0d81cec220da0bb?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEQMADlNBVkUgVGhlIFdvcmxkAAhUb2J5IEZveAAAAAAAAbq1ABYwdzVDUklva1ByUUFBcTdPZElLZXNyAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8wdzVDUklva1ByUUFBcTdPZElLZXNyAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY4OAAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZWM4ODExMDIwMDUzM2U5NDRhYzU1ZDg2OWFjYjQ2MDRjNWM0ODkyYz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0w5CRIokPrQAAq7OdIKesr",
            "author": "Toby Fox",
            "length": 113333,
            "position": 0,
            "title": "SAVE The World",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0w5CRIokPrQAAq7OdIKesr",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569688"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/ec88110200533e944ac55d869acb4604c5c4892c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDAMACUhpcyBUaGVtZQAIVG9ieSBGb3gAAAAAAAHplQAWNDZBNzFaRExQUklGQ3BwQWRWMlc2agABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNDZBNzFaRExQUklGQ3BwQWRWMlc2agEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2ODkAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzQzYjY4N2EyNDYxODBlMmQ2ZGI5ZGI2MDk5N2Q2ZDVmM2U4YjUzZWQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "46A71ZDLPRIFCppAdV2W6j",
            "author": "Toby Fox",
            "length": 125333,
            "position": 0,
            "title": "His Theme",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/46A71ZDLPRIFCppAdV2W6j",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569689"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/43b687a246180e2d6db9db60997d6d5f3e8b53ed?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC0ZpbmFsIFBvd2VyAAhUb2J5IEZveAAAAAAAAEnVABYwdDN0VlVWaGc3cU9NZUl6djhNd1MwAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8wdDN0VlVWaGc3cU9NZUl6djhNd1MwAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY5MAAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvODQ0ZTU1NzA3YzM3NjZiNDQ5NmVkMDI4Zjk5NDgyNmEyNGU1MDI1MT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0t3tVUVhg7qOMeIzv8MwS0",
            "author": "Toby Fox",
            "length": 18901,
            "position": 0,
            "title": "Final Power",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0t3tVUVhg7qOMeIzv8MwS0",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569690"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/844e55707c3766b4496ed028f994826a24e50251?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCwMACFJldW5pdGVkAAhUb2J5IEZveAAAAAAABFWsABY0R2sydFo1bDRPM01HMVVNbTBkVGNkAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80R2sydFo1bDRPM01HMVVNbTBkVGNkAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY5MQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvYTJiZDM0YTVhNGNkNGYyYTYyYjE1MzUyMjEwM2U2OWI4MjA3M2QyZD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4Gk2tZ5l4O3MG1UMm0dTcd",
            "author": "Toby Fox",
            "length": 284076,
            "position": 0,
            "title": "Reunited",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4Gk2tZ5l4O3MG1UMm0dTcd",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569691"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a2bd34a5a4cd4f2a62b153522103e69b82073d2d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC01lbnUgKEZ1bGwpAAhUb2J5IEZveAAAAAAAAH0AABYxbzdhQXJLT0lrZ0NRdWNWUUk3THZNAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8xbzdhQXJLT0lrZ0NRdWNWUUk3THZNAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY5MgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOTJiZmI4NTlkMTQ2Y2VjNGIxODdiMjIwMzkxOTFkMDExNWFiZTJlOD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1o7aArKOIkgCQucVQI7LvM",
            "author": "Toby Fox",
            "length": 32000,
            "position": 0,
            "title": "Menu (Full)",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1o7aArKOIkgCQucVQI7LvM",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569692"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/92bfb859d146cec4b187b22039191d0115abe2e8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCgMAB1Jlc3BpdGUACFRvYnkgRm94AAAAAAABvVAAFjRXWWxld0p0ZmVWaEFvUGxBcHE1ZnUAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRXWWxld0p0ZmVWaEFvUGxBcHE1ZnUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjczAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9jYTBkZDYzZTkyMzk4NmEwMDg1MjU5NzZmZjkwYTA3YTc0YjgzOGIyP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4WYlewJtfeVhAoPlApq5fu",
            "author": "Toby Fox",
            "length": 114000,
            "position": 0,
            "title": "Respite",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4WYlewJtfeVhAoPlApq5fu",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569673"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/ca0dd63e923986a008525976ff90a07a74b838b2?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACFQMAEkJyaW5nIEl0IEluLCBHdXlzIQAIVG9ieSBGb3gAAAAAAAPZFgAWMnVKR0VzUTFwdmkwcERxeFRjRHhJagABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMnVKR0VzUTFwdmkwcERxeFRjRHhJagEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2OTMAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzQ4NjRlNjE0MmM2Y2JkYTgxMmZlMGVjMDU5OWZmZDkwNmYwN2FhYWI/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2uJGEsQ1pvi0pDqxTcDxIj",
            "author": "Toby Fox",
            "length": 252182,
            "position": 0,
            "title": "Bring It In, Guys!",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2uJGEsQ1pvi0pDqxTcDxIj",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569693"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4864e6142c6cbda812fe0ec0599ffd906f07aaab?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDwMADExhc3QgR29vZGJ5ZQAIVG9ieSBGb3gAAAAAAAIQGgAWM0tzSllrNkVEZmtEWlpNN0NXY0xXQQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svM0tzSllrNkVEZmtEWlpNN0NXY0xXQQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2OTQAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmNjZTMyMzA3ZDBmMzEyZThmYWYwMWJhZQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2Q1NDI1ZWFiZjFhYTZlNDI3NDI0ZDJkNjYyMjFmZTczYWU4OWE4ZDA/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3KsJYk6EDfkDZZM7CWcLWA",
            "author": "Toby Fox",
            "length": 135194,
            "position": 0,
            "title": "Last Goodbye",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3KsJYk6EDfkDZZM7CWcLWA",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569694"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/d5425eabf1aa6e427424d2d66221fe73ae89a8d0?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACHwMAHEJ1dCBUaGUgRWFydGggUmVmdXNlZCBUbyBEaWUACFRvYnkgRm94AAAAAAAAhe0AFjIxQXVyN0cwalBVNDl2MEFnN3VsNGwAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzIxQXVyN0cwalBVNDl2MEFnN3VsNGwBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5Njk1AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy82ZjJlMTZmN2IxM2E0MGMxNjI2NTg0ZmUyY2QxZDZjNDg0YjMyMmQzP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "21Aur7G0jPU49v0Ag7ul4l",
            "author": "Toby Fox",
            "length": 34285,
            "position": 0,
            "title": "But The Earth Refused To Die",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/21Aur7G0jPU49v0Ag7ul4l",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569695"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/6f2e16f7b13a40c1626584fe2cd1d6c484b322d3?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACHQMAGkJhdHRsZSBBZ2FpbnN0IEEgVHJ1ZSBIZXJvAAhUb2J5IEZveAAAAAAAAmSAABY2WW5QcXZjNjZiZFlHR09KSWxERXoxAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82WW5QcXZjNjZiZFlHR09KSWxERXoxAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY5NgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvYmI3MDJlZTgwMTEwYmU0YWYxNGI2ZWZmZjU3MTc2ZTU1ZTNkZmQ5Mz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6YnPqvc66bdYGGOJIlDEz1",
            "author": "Toby Fox",
            "length": 156800,
            "position": 0,
            "title": "Battle Against A True Hero",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6YnPqvc66bdYGGOJIlDEz1",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569696"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/bb702ee80110be4af14b6efff57176e55e3dfd93?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACEQMADlBvd2VyIE9mICJORU8iAAhUb2J5IEZveAAAAAAAAHecABYwSnV2MnhkVXRDUHRDT1ZNM0FEZVBhAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8wSnV2MnhkVXRDUHRDT1ZNM0FEZVBhAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY5NwAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMGZlYjYyM2ZlN2YwMTczZDJiYzE4YWRkMjcxNWJjZDJjNWFhNzNlMD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0Juv2xdUtCPtCOVM3ADePa",
            "author": "Toby Fox",
            "length": 30620,
            "position": 0,
            "title": "Power Of \"NEO\"",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0Juv2xdUtCPtCOVM3ADePa",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569697"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0feb623fe7f0173d2bc18add2715bcd2c5aa73e0?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDgMAC01FR0FMT1ZBTklBAAhUb2J5IEZveAAAAAAAAmFgABYxSjAzVnA5M3liS0l4ZnpZSTRZSnRMAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8xSjAzVnA5M3liS0l4ZnpZSTRZSnRMAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTY5OAAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViY2NlMzIzMDdkMGYzMTJlOGZhZjAxYmFlAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZTcwZWVjNjEzZDY4MDAxMzdiYzg3NTYyNTJhNGM4ZDEzNzcxNzZlND9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1J03Vp93ybKIxfzYI4YJtL",
            "author": "Toby Fox",
            "length": 156000,
            "position": 0,
            "title": "MEGALOVANIA",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1J03Vp93ybKIxfzYI4YJtL",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569698"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/e70eec613d6800137bc8756252a4c8d1377176e4?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACDQMACkdvb2QgTmlnaHQACFRvYnkgRm94AAAAAAAAePcAFjZaM0szMUJLaTVZTDlUajB6RDN5dnEAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzZaM0szMUJLaTVZTDlUajB6RDN5dnEBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5Njk5AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJjY2UzMjMwN2QwZjMxMmU4ZmFmMDFiYWUBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9hNTAyYzU2ZGM3ZWE5Njc2Mjk4MzQxNjJmN2ZiMmVmNjZhNWI0MjlkP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6Z3K31BKi5YL9Tj0zD3yvq",
            "author": "Toby Fox",
            "length": 30967,
            "position": 0,
            "title": "Good Night",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6Z3K31BKi5YL9Tj0zD3yvq",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569699"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a502c56dc7ea967629834162f7fb2ef66a5b429d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebcce32307d0f312e8faf01bae",
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        }
      ]
    }
  },
  "spotifyPlaylistExample": {
    "loadType": "playlist",
    "data": {
      "info": {
        "name": "sad",
        "selectedTrack": -1
      },
      "pluginInfo": {
        "author": "Pixel",
        "totalTracks": 55,
        "artworkUrl": "https://mosaic.scdn.co/640/ab67616d00001e0224edb22d068eb245a924b7f2ab67616d00001e025613cb3b9af98d4b55d7b881ab67616d00001e0295a158cfb5c145340c771bedab67616d00001e02b080961348b7c4402e0186e9",
        "type": "playlist",
        "url": "https://open.spotify.com/playlist/0DeAs16f4iLEEvERZwmSCE"
      },
      "tracks": [
        {
          "encoded": "QAAB2AMAB0gyMDpIY2wABU9tb3JpAAAAAAAB0JIAFjF0THkwS3pqQkxxYmRZcnAyUGxiOXAAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzF0THkwS3pqQkxxYmRZcnAyUGxiOXABAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczOTVhMTU4Y2ZiNWMxNDUzNDBjNzcxYmVkAQAMVENBRkwyMTY1MjkyAAdzcG90aWZ5AQAnT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LiAyAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzdwbXVTUkZCdlkwRDB0Y2U1ZHBxZFkBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzREb1RERGZXM2drZXliMDZYcklIbGcAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMmM4MmJkYmQzMzAzZDM1ZmQ3Y2ZlNDM0MDEyZDgwZGUwOTE2ZGIwZj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1tLy0KzjBLqbdYrp2Plb9p",
            "author": "Omori",
            "length": 118930,
            "position": 0,
            "title": "H20:Hcl",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1tLy0KzjBLqbdYrp2Plb9p",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27395a158cfb5c145340c771bed",
            "isrc": "TCAFL2165292"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/2c82bdbd3303d35fd7cfe434012d80de0916db0f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/7pmuSRFBvY0D0tce5dpqdY",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt. 2"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB3AMAC1doaXRlIFNwYWNlAAVPbW9yaQAAAAAAAPIRABYydGJOaUhGenhDclA2WGc5YkZDV2kyAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8ydGJOaUhGenhDclA2WGc5YkZDV2kyAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3Mzk1YTE1OGNmYjVjMTQ1MzQwYzc3MWJlZAEADFRDQUZMMjE2NTI3MAAHc3BvdGlmeQEAJ09tb3JpIChPcmlnaW5hbCBHYW1lIFNvdW5kdHJhY2spLCBQdC4gMgEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS83cG11U1JGQnZZMEQwdGNlNWRwcWRZAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80RG9URERmVzNna2V5YjA2WHJJSGxnAAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzMwMzUyYmY5ODc2MTdmZTMzNDJlYzUyOGI4MGRlZDE4NjQ2YTJkNzY/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2tbNiHFzxCrP6Xg9bFCWi2",
            "author": "Omori",
            "length": 61969,
            "position": 0,
            "title": "White Space",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2tbNiHFzxCrP6Xg9bFCWi2",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27395a158cfb5c145340c771bed",
            "isrc": "TCAFL2165270"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/30352bf987617fe3342ec528b80ded18646a2d76?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/7pmuSRFBvY0D0tce5dpqdY",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt. 2"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB5wMAFkRlYXIgTGl0dGxlIEJyb3RoZXIuLi4ABU9tb3JpAAAAAAABHgQAFjYwVXhmd285TkVnaFVtYUN6c29memUAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzYwVXhmd285TkVnaFVtYUN6c29memUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczOTVhMTU4Y2ZiNWMxNDUzNDBjNzcxYmVkAQAMVENBRkwyMTY1MjY0AAdzcG90aWZ5AQAnT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LiAyAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzdwbXVTUkZCdlkwRDB0Y2U1ZHBxZFkBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzREb1RERGZXM2drZXliMDZYcklIbGcAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvYjQ1NWJhNWQ4NTI4YTc3YjM0MWZhYTUxZGE5NDkzMDVhMGVmOWQ3Yj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "60Uxfwo9NEghUmaCzsofze",
            "author": "Omori",
            "length": 73220,
            "position": 0,
            "title": "Dear Little Brother...",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/60Uxfwo9NEghUmaCzsofze",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27395a158cfb5c145340c771bed",
            "isrc": "TCAFL2165264"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/b455ba5d8528a77b341faa51da949305a0ef9d7b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/7pmuSRFBvY0D0tce5dpqdY",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt. 2"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB3QMADExvc3QgTGlicmFyeQAFT21vcmkAAAAAAAEoIQAWMzNpNEg3aUR4SWVzMWQ4TmQwUzNRRgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMzNpNEg3aUR4SWVzMWQ4TmQwUzNRRgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzM5NWExNThjZmI1YzE0NTM0MGM3NzFiZWQBAAxUQ0FGTDIxNjUyNTIAB3Nwb3RpZnkBACdPbW9yaSAoT3JpZ2luYWwgR2FtZSBTb3VuZHRyYWNrKSwgUHQuIDIBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vN3BtdVNSRkJ2WTBEMHRjZTVkcHFkWQEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8wYjYxNDlmYmY4MDI5M2MwZDc1YmQ3ZjVmNDcyMjAxN2Y2ZGIxNGExP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "33i4H7iDxIes1d8Nd0S3QF",
            "author": "Omori",
            "length": 75809,
            "position": 0,
            "title": "Lost Library",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/33i4H7iDxIes1d8Nd0S3QF",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27395a158cfb5c145340c771bed",
            "isrc": "TCAFL2165252"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0b6149fbf80293c0d75bd7f5f4722017f6db14a1?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/7pmuSRFBvY0D0tce5dpqdY",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt. 2"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB7gMAHkEgSG9tZSBmb3IgRmxvd2VycyAoU3VuZmxvd2VyKQAFT21vcmkAAAAAAAFL7AAWNkhTdHpoTVNmdHZGbUhkQ1VTTkhuOAABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNkhTdHpoTVNmdHZGbUhkQ1VTTkhuOAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNiMDgwOTYxMzQ4YjdjNDQwMmUwMTg2ZTkBAAxUQ0FGTDIxNjU2NDYAB3Nwb3RpZnkBACZPbW9yaSAoT3JpZ2luYWwgR2FtZSBTb3VuZHRyYWNrKSwgUHQuMwEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8wWkJ4NVI0QUJ1YmpzSjZ5b3ZGSlhwAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80RG9URERmVzNna2V5YjA2WHJJSGxnAAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2NmYjgxZjc1MTExMzExMDQxYzU1MDhjNmI4MTRiYmFkNjFmYTBhMGY/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6HStzhMSftvFmHdCUSNHn8",
            "author": "Omori",
            "length": 84972,
            "position": 0,
            "title": "A Home for Flowers (Sunflower)",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6HStzhMSftvFmHdCUSNHn8",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b080961348b7c4402e0186e9",
            "isrc": "TCAFL2165646"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/cfb81f75111311041c5508c6b814bbad61fa0a0f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/0ZBx5R4ABubjsJ6yovFJXp",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.3"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB2gMACkNyb3Nzcm9hZHMABU9tb3JpAAAAAAAB+54AFjVWUGFnSEdaV0tGdlJPMldPTnFFTXgAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVWUGFnSEdaV0tGdlJPMldPTnFFTXgBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczYjA4MDk2MTM0OGI3YzQ0MDJlMDE4NmU5AQAMVENBRkwyMTY1NjQxAAdzcG90aWZ5AQAmT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LjMBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMFpCeDVSNEFCdWJqc0o2eW92RkpYcAEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8yMzM1OTk4NmE3MTM2OTZlZmY4NmYxN2Q3YzhhNTZmODM1YzkwNmFhP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5VPagHGZWKFvRO2WONqEMx",
            "author": "Omori",
            "length": 129950,
            "position": 0,
            "title": "Crossroads",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5VPagHGZWKFvRO2WONqEMx",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b080961348b7c4402e0186e9",
            "isrc": "TCAFL2165641"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/23359986a713696eff86f17d7c8a56f835c906aa?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/0ZBx5R4ABubjsJ6yovFJXp",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.3"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB9wMAJ1RyZWVob3VzZSAtIEhlcmUgV2UgQXJlLCBUb2dldGhlciBBZ2FpbgAFT21vcmkAAAAAAAE0IgAWNWVGOHBaVm9uVW80QmNFdjRURzZqZgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNWVGOHBaVm9uVW80QmNFdjRURzZqZgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNiMDgwOTYxMzQ4YjdjNDQwMmUwMTg2ZTkBAAxUQ0FGTDIxNjU2MjUAB3Nwb3RpZnkBACZPbW9yaSAoT3JpZ2luYWwgR2FtZSBTb3VuZHRyYWNrKSwgUHQuMwEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8wWkJ4NVI0QUJ1YmpzSjZ5b3ZGSlhwAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80RG9URERmVzNna2V5YjA2WHJJSGxnAAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2Y3OGM3ZWRlOWJlZmQ2NTNhYjU1YTBlNzJjMzI0MDU1Nzg0MjJiOWI/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5eF8pZVonUo4BcEv4TG6jf",
            "author": "Omori",
            "length": 78882,
            "position": 0,
            "title": "Treehouse - Here We Are, Together Again",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5eF8pZVonUo4BcEv4TG6jf",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b080961348b7c4402e0186e9",
            "isrc": "TCAFL2165625"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f78c7ede9befd653ab55a0e72c32405578422b9b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/0ZBx5R4ABubjsJ6yovFJXp",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.3"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB1wMAB09yY2hhcmQABU9tb3JpAAAAAAAA9fEAFjdHUEhaNHkyR2NSVzNJdHVwS0p4REUAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzdHUEhaNHkyR2NSVzNJdHVwS0p4REUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczYjA4MDk2MTM0OGI3YzQ0MDJlMDE4NmU5AQAMVENBRkwyMTY1NjA5AAdzcG90aWZ5AQAmT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LjMBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMFpCeDVSNEFCdWJqc0o2eW92RkpYcAEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy80ZjBmMzM0N2QyMmFhY2FjNjJiZjhkZjE2YmFjZDkyODU5MDJlMzFmP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7GPHZ4y2GcRW3ItupKJxDE",
            "author": "Omori",
            "length": 62961,
            "position": 0,
            "title": "Orchard",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7GPHZ4y2GcRW3ItupKJxDE",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b080961348b7c4402e0186e9",
            "isrc": "TCAFL2165609"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4f0f3347d22aacac62bf8df16bacd9285902e31f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/0ZBx5R4ABubjsJ6yovFJXp",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.3"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB5gMAFlJlbWVtYmVyIHRvIEJlIFBhdGllbnQABU9tb3JpAAAAAAABhDsAFjBsSVFEeDNRRFJNRGtLSFIyMWVrMmsAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzBsSVFEeDNRRFJNRGtLSFIyMWVrMmsBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczYjA4MDk2MTM0OGI3YzQ0MDJlMDE4NmU5AQAMVENBRkwyMTY1NTc0AAdzcG90aWZ5AQAmT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LjMBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMFpCeDVSNEFCdWJqc0o2eW92RkpYcAEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8xYTBkNGUyZjdiOWYwMmIyYTUwNmMwODMzYzY1ZThhZmZlMTFmYTg4P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0lIQDx3QDRMDkKHR21ek2k",
            "author": "Omori",
            "length": 99387,
            "position": 0,
            "title": "Remember to Be Patient",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0lIQDx3QDRMDkKHR21ek2k",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b080961348b7c4402e0186e9",
            "isrc": "TCAFL2165574"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/1a0d4e2f7b9f02b2a506c0833c65e8affe11fa88?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/0ZBx5R4ABubjsJ6yovFJXp",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.3"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB4AMAEFNlZSBZb3UgVG9tb3Jyb3cABU9tb3JpAAAAAAACHUUAFjUwSXlxS0ZXNWxpd3pZYlVqWnlabkoAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzUwSXlxS0ZXNWxpd3pZYlVqWnlabkoBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczNTYxM2NiM2I5YWY5OGQ0YjU1ZDdiODgxAQAMVENBRkoyMTM4Nzg5AAdzcG90aWZ5AQAmT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LjEBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vM1NEVTB0c25vTU84NDFxZU9IbFA4QgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy82NjI3Mjk2ZTQxNTgzNWY5NjRlNWQ2Njg3NjEzNDg3MGRlN2ZhM2E5P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "50IyqKFW5liwzYbUjZyZnJ",
            "author": "Omori",
            "length": 138565,
            "position": 0,
            "title": "See You Tomorrow",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/50IyqKFW5liwzYbUjZyZnJ",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138789"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/6627296e415835f964e5d66876134870de7fa3a9?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB5QMAFVdoZXJlIFdlIFVzZWQgdG8gUGxheQAFT21vcmkAAAAAAAGZsgAWM2pGOEpycm9JUjRqaWpWbFZrZVVzMwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svM2pGOEpycm9JUjRqaWpWbFZrZVVzMwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzM1NjEzY2IzYjlhZjk4ZDRiNTVkN2I4ODEBAAxUQ0FGSjIxMzg3MjQAB3Nwb3RpZnkBACZPbW9yaSAoT3JpZ2luYWwgR2FtZSBTb3VuZHRyYWNrKSwgUHQuMQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8zU0RVMHRzbm9NTzg0MXFlT0hsUDhCAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80RG9URERmVzNna2V5YjA2WHJJSGxnAAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzFmMjIyYTg1NzRhNTcxMjI3NGU4OTE2YmMyZGMxODdlMzQzMzM3MGE/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3jF8JrroIR4jijVlVkeUs3",
            "author": "Omori",
            "length": 104882,
            "position": 0,
            "title": "Where We Used to Play",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3jF8JrroIR4jijVlVkeUs3",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138724"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/1f222a8574a5712274e8916bc2dc187e3433370a?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB5gMAFlN1Z2FyIFN0YXIgUGxhbmV0YXJpdW0ABU9tb3JpAAAAAAACDAIAFjVDbHZ0VVhScE8yS2VSQnJLMHVzaEcAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVDbHZ0VVhScE8yS2VSQnJLMHVzaEcBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczNTYxM2NiM2I5YWY5OGQ0YjU1ZDdiODgxAQAMVENBRkoyMTM4Njc3AAdzcG90aWZ5AQAmT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LjEBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vM1NEVTB0c25vTU84NDFxZU9IbFA4QgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy80ODVjNGQ1MWNkNGM1MzcyMDkwOGVmOGNkMTJmOGNmNzY4ZTU1ODFjP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5ClvtUXRpO2KeRBrK0ushG",
            "author": "Omori",
            "length": 134146,
            "position": 0,
            "title": "Sugar Star Planetarium",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5ClvtUXRpO2KeRBrK0ushG",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138677"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/485c4d51cd4c53720908ef8cd12f8cf768e5581c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB4AMAEFBvZW1zIGluIHRoZSBGb2cABU9tb3JpAAAAAAABrW0AFjVVeUNlTkFkbDIwTGlvME02Sm9zRHkAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVVeUNlTkFkbDIwTGlvME02Sm9zRHkBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczNTYxM2NiM2I5YWY5OGQ0YjU1ZDdiODgxAQAMVENBRkoyMTM4NjcxAAdzcG90aWZ5AQAmT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LjEBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vM1NEVTB0c25vTU84NDFxZU9IbFA4QgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9jYWQzMzlkNzg2ODkzMDc4OTc3MTNjNGUyNWM1ZGE1NTBkMTA4OThiP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5UyCeNAdl20Lio0M6JosDy",
            "author": "Omori",
            "length": 109933,
            "position": 0,
            "title": "Poems in the Fog",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5UyCeNAdl20Lio0M6JosDy",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138671"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/cad339d78689307897713c4e25c5da550d10898b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB4QMAEVNwYWNlcyBJbmJldHdlZW4uAAVPbW9yaQAAAAAAAOY5ABY1NHNoaEw5dmlmMml3VVhnMGxOcFFYAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay81NHNoaEw5dmlmMml3VVhnMGxOcFFYAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzU2MTNjYjNiOWFmOThkNGI1NWQ3Yjg4MQEADFRDQUZKMjEzODUxMQAHc3BvdGlmeQEAJk9tb3JpIChPcmlnaW5hbCBHYW1lIFNvdW5kdHJhY2spLCBQdC4xAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzNTRFUwdHNub01PODQxcWVPSGxQOEIBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzREb1RERGZXM2drZXliMDZYcklIbGcAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOWY2MzBiNTljZjE5NmM2ZWI4YjBhZDViNmJhZTgzMGEyMmY2N2FjZD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "54shhL9vif2iwUXg0lNpQX",
            "author": "Omori",
            "length": 58937,
            "position": 0,
            "title": "Spaces Inbetween.",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/54shhL9vif2iwUXg0lNpQX",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138511"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/9f630b59cf196c6eb8b0ad5b6bae830a22f67acd?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB1QMABVRpdGxlAAVPbW9yaQAAAAAAAJFGABY2aFdDVWJyQjBxeHN1M0FnSTd2NjNpAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82aFdDVWJyQjBxeHN1M0FnSTd2NjNpAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzU2MTNjYjNiOWFmOThkNGI1NWQ3Yjg4MQEADFRDQUZKMjEzODQxNQAHc3BvdGlmeQEAJk9tb3JpIChPcmlnaW5hbCBHYW1lIFNvdW5kdHJhY2spLCBQdC4xAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzNTRFUwdHNub01PODQxcWVPSGxQOEIBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzREb1RERGZXM2drZXliMDZYcklIbGcAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNTc3YTczMjMwODJkYjE4YjBkN2ZiZjA5YTFlZjkzMjQ0OWQzM2I0Zj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6hWCUbrB0qxsu3AgI7v63i",
            "author": "Omori",
            "length": 37190,
            "position": 0,
            "title": "Title",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6hWCUbrB0qxsu3AgI7v63i",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138415"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/577a7323082db18b0d7fbf09a1ef932449d33b4f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB1gMAFUZhbGxlbiBEb3duIChSZXByaXNlKQAIVG9ieSBGb3gAAAAAAAJMEQAWMjNiOUJkWjJXWm5EU2VEek5VVFZ2WgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMjNiOUJkWjJXWm5EU2VEek5VVFZ2WgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2ODQAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2EyNGIxN2QxNDc2MzUxN2Y2ZDMzOTc5ZGUxMzUzOWNmNTA0OTE3NGI/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "23b9BdZ2WZnDSeDzNUTVvZ",
            "author": "Toby Fox",
            "length": 150545,
            "position": 0,
            "title": "Fallen Down (Reprise)",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/23b9BdZ2WZnDSeDzNUTVvZ",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569684"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a24b17d14763517f6d33979de13539cf5049174b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABygMACVVuZGVydGFsZQAIVG9ieSBGb3gAAAAAAAXSXwAWMkZaOTlqMjI0b2hpR0xhdnFqaWp6YQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMkZaOTlqMjI0b2hpR0xhdnFqaWp6YQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NjkAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzE1OWMxZGVkNDMzMDIwYWNjOWIxODVmOGQ5NjgxYjAwNDMwMDAxZWQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2FZ99j224ohiGLavqjijza",
            "author": "Toby Fox",
            "length": 381535,
            "position": 0,
            "title": "Undertale",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2FZ99j224ohiGLavqjijza",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569669"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/159c1ded433020acc9b185f8d9681b00430001ed?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB3AMAG0l0J3MgUmFpbmluZyBTb21ld2hlcmUgRWxzZQAIVG9ieSBGb3gAAAAAAAKZSAAWNXo0dm1hcjUwcVBsODBHaklyUEJYbQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNXo0dm1hcjUwcVBsODBHaklyUEJYbQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2NjIAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3Lzk4ZDUzYjVhNDY4NTIwNTMwMGRlMTZiOWU5ZjRhMjA1ZjllYjQyZjc/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5z4vmar50qPl80GjIrPBXm",
            "author": "Toby Fox",
            "length": 170312,
            "position": 0,
            "title": "It's Raining Somewhere Else",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5z4vmar50qPl80GjIrPBXm",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569662"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/98d53b5a4685205300de16b9e9f4a205f9eb42f7?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABxwMABk1lbW9yeQAIVG9ieSBGb3gAAAAAAAEk+AAWNExybHNPOWNubk5qeEJpSGVSZWRqRgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNExybHNPOWNubk5qeEJpSGVSZWRqRgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MzIAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2U1MjQ3Mjg1NmFhOGUwNjBlMmY2MjAwZjgwYTIzMTdiMTNjNGZmNGQ/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4LrlsO9cnnNjxBiHeRedjF",
            "author": "Toby Fox",
            "length": 75000,
            "position": 0,
            "title": "Memory",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4LrlsO9cnnNjxBiHeRedjF",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569632"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/e52472856aa8e060e2f6200f80a2317b13c4ff4d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABzAMAC1F1aWV0IFdhdGVyAAhUb2J5IEZveAAAAAAAAH0AABYwZ3Q3NkR1TXg3RjNVWkpQZzdqY0M1AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8wZ3Q3NkR1TXg3RjNVWkpQZzdqY0M1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYzMQAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNGE2NGYwMWY4MTZjZGIwNWM0MmVhZjU4ZjRhMWY2ZmY3YWM2YTI1Yj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "0gt76DuMx7F3UZJPg7jcC5",
            "author": "Toby Fox",
            "length": 32000,
            "position": 0,
            "title": "Quiet Water",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/0gt76DuMx7F3UZJPg7jcC5",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569631"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4a64f01f816cdb05c42eaf58f4a1f6ff7ac6a25b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABzQMADFNub3dkaW4gVG93bgAIVG9ieSBGb3gAAAAAAAEpiAAWNlZoTHBiUWxQV2dVMTFBczh3b1VJQwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNlZoTHBiUWxQV2dVMTFBczh3b1VJQwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MjAAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzA3MjAzNTBjMmU4YTBjYmNmNDRiNjE3YmNlYmU2M2E5NWU0NDk0MGM/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6VhLpbQlPWgU11As8woUIC",
            "author": "Toby Fox",
            "length": 76168,
            "position": 0,
            "title": "Snowdin Town",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6VhLpbQlPWgU11As8woUIC",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569620"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0720350c2e8a0cbcf44b617bcebe63a95e44940c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABxgMABVNub3d5AAhUb2J5IEZveAAAAAAAAZdGABY3QWY1YVF6ZnBtMlZ4bkNGc3k2VGt4AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay83QWY1YVF6ZnBtMlZ4bkNGc3k2VGt4AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTcwMAAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMWMxNTMzZWZhZGZhYTU4M2FlZWZjMWQ0ZjRmYTVlOTQ1NjAxMTIzNT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7Af5aQzfpm2VxnCFsy6Tkx",
            "author": "Toby Fox",
            "length": 104262,
            "position": 0,
            "title": "Snowy",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7Af5aQzfpm2VxnCFsy6Tkx",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569700"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/1c1533efadfaa583aeefc1d4f4fa5e9456011235?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABxQMABEhvbWUACFRvYnkgRm94AAAAAAAB4HgAFjVMOU1Kc0dxelRSRDA5clN6SGtDRHkAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVMOU1Kc0dxelRSRDA5clN6SGtDRHkBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjEwAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy8wZGEwMmU3MjFjOTQxYzNiNWZhODczODliMzc2YTU1Mjk3OTE3NjVmP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5L9MJsGqzTRD09rSzHkCDy",
            "author": "Toby Fox",
            "length": 123000,
            "position": 0,
            "title": "Home",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5L9MJsGqzTRD09rSzHkCDy",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569610"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/0da02e721c941c3b5fa87389b376a5529791765f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABzAMAC0ZhbGxlbiBEb3duAAhUb2J5IEZveAAAAAAAAOHaABYxakRNaTkyYTl6TlF1UEQzdVBNa2xhAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8xakRNaTkyYTl6TlF1UEQzdVBNa2xhAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYwMgAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMTQxYjMzMzliMjkxMGY4ZWZiOGQ3ZDQ3ZmY4YjZjZGQzMGIwYjliOD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1jDMi92a9zNQuPD3uPMkla",
            "author": "Toby Fox",
            "length": 57818,
            "position": 0,
            "title": "Fallen Down",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1jDMi92a9zNQuPD3uPMkla",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569602"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/141b3339b2910f8efb8d7d47ff8b6cdd30b0b9b8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB3QMADUJ5IFlvdXIgU2lkZS4ABU9tb3JpAAAAAAABerUAFjA2cjJ5UU9pUVlCMVJhNEtZRWRza0wAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzA2cjJ5UU9pUVlCMVJhNEtZRWRza0wBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczNTYxM2NiM2I5YWY5OGQ0YjU1ZDdiODgxAQAMVENBRkoyMTM4NTIzAAdzcG90aWZ5AQAmT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LjEBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vM1NEVTB0c25vTU84NDFxZU9IbFA4QgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy80YTI4MzlmYmZkZTlkNDVmNTY1NTllMzI5MjVkMWI3OTBmYTM1Y2VlP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "06r2yQOiQYB1Ra4KYEdskL",
            "author": "Omori",
            "length": 96949,
            "position": 0,
            "title": "By Your Side.",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/06r2yQOiQYB1Ra4KYEdskL",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138523"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/4a2839fbfde9d45f56559e32925d1b790fa35cee?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB2AMACFRyZWVzLi4uAAVPbW9yaQAAAAAAAdCZABYyT3c4WVBhUmthSGQ1Q3I5ekdwb0hDAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8yT3c4WVBhUmthSGQ1Q3I5ekdwb0hDAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzU2MTNjYjNiOWFmOThkNGI1NWQ3Yjg4MQEADFRDQUZKMjEzODYxMAAHc3BvdGlmeQEAJk9tb3JpIChPcmlnaW5hbCBHYW1lIFNvdW5kdHJhY2spLCBQdC4xAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzNTRFUwdHNub01PODQxcWVPSGxQOEIBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzREb1RERGZXM2drZXliMDZYcklIbGcAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvY2EwMDAyMWQ2NzdlYzIyZmQ5MjY5NTE4MWVhMTVjYmIwOGUyODcyYT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2Ow8YPaRkaHd5Cr9zGpoHC",
            "author": "Omori",
            "length": 118937,
            "position": 0,
            "title": "Trees...",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2Ow8YPaRkaHd5Cr9zGpoHC",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138610"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/ca00021d677ec22fd92695181ea15cbb08e2872a?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB+AMAE0FsbW9zdCBDbG9zaW5nIFRpbWUAEEt5bGUgQWxsZW4gTXVzaWMAAAAAAAG1IwAWM0ZYaEpqYjdEanZUY1FRdlcyZmJ1cgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svM0ZYaEpqYjdEanZUY1FRdlcyZmJ1cgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNjOGE4OGNmNGM5NzcxNGJmNjEwYzgxMzcBAAxRWks2UDIwOTIyODkAB3Nwb3RpZnkBADBXb3JrIGF0IGEgUGl6emEgUGxhY2UgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjaykBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMlo1ektpdHZIQlVFYU11eU5POGt5SwEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMXlIMlpqWUhXZVN0UjhLNlo3eFlvTAABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9jMmVjZDQ1YTMwNTU4Mjg3ODRjOTFiN2UxYjNlODQzNjkxOTk2YWU4P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3FXhJjb7DjvTcQQvW2fbur",
            "author": "Kyle Allen Music",
            "length": 111907,
            "position": 0,
            "title": "Almost Closing Time",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3FXhJjb7DjvTcQQvW2fbur",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273c8a88cf4c97714bf610c8137",
            "isrc": "QZK6P2092289"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/c2ecd45a3055828784c91b7e1b3e843691996ae8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/1yH2ZjYHWeStR8K6Z7xYoL",
            "albumUrl": "https://open.spotify.com/album/2Z5zKitvHBUEaMuyNO8kyK",
            "artistArtworkUrl": null,
            "albumName": "Work at a Pizza Place (Original Game Soundtrack)"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACHAMAQVN0aWNrZXJicnVzaCBTeW1waG9ueSAoRG9ua2V5IEtvbmcgQ291bnRyeSAyOiBEaWRkeSdzIEtvbmcgUXVlc3QpAAhKcF9CZWF0egAAAAAAAhWoABYxb2lmVldWbUJvY0Y3Tng1WU5QOTA2AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8xb2lmVldWbUJvY0Y3Tng1WU5QOTA2AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2FkYzQ4NzBjYmUzYzJkZTM5OTA5ZWZkOQEADFFaTldWMjMwNjcxMwAHc3BvdGlmeQEALlJlbGF4aW5nIE11c2ljIEZyb20gRG9ua2V5IEtvbmcgQ291bnRyeSBTZXJpZXMBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMHRXRTEwOVROU0tBS2hBQnBwVkNjdAEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNGhMd3NLR2Q2emFqZDBKU3RFbnZLdgABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy85MmQzZmE1YmFhODUwNGIwZmE1YmM1MWU0ZGU3ZWI0NmM5YjY3Mjc4P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1oifVWVmBocF7Nx5YNP906",
            "author": "Jp_Beatz",
            "length": 136616,
            "position": 0,
            "title": "Stickerbrush Symphony (Donkey Kong Country 2: Diddy's Kong Quest)",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1oifVWVmBocF7Nx5YNP906",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273adc4870cbe3c2de39909efd9",
            "isrc": "QZNWV2306713"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/92d3fa5baa8504b0fa5bc51e4de7eb46c9b67278?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4hLwsKGd6zajd0JStEnvKv",
            "albumUrl": "https://open.spotify.com/album/0tWE109TNSKAKhABppVCct",
            "artistArtworkUrl": null,
            "albumName": "Relaxing Music From Donkey Kong Country Series"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACBgMACkR1c2sgU3RhcnMADEFsZWMgSG9sb3drYQAAAAAABhGSABYyZlJsYWlDaDVhdklZQ2tYQWdzUFVMAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8yZlJsYWlDaDVhdklZQ2tYQWdzUFVMAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2MxYWUyOWJiNWU3ZTUzYzE3YjRhNGZkOAEADFRDQUVEMTkwMjk2NgAHc3BvdGlmeQEAS05pZ2h0IGluIHRoZSBXb29kcyAoT3JpZ2luYWwgU291bmR0cmFjaywgVm9sLiAxKSBbQXQgdGhlIEVuZCBvZiBFdmVyeXRoaW5nXQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8wZjB0WFFLR3Z2YVlSc1ZacnpyNE84AQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8ybXNBc2l6Z0ZVSmlvN3M4c2dtZTE2AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzIzOGQ1M2YxYjdjY2Q0MTQxNDViOGM5MzZlMDQ4ZmMxZWFlOTA0YzE/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2fRlaiCh5avIYCkXAgsPUL",
            "author": "Alec Holowka",
            "length": 397714,
            "position": 0,
            "title": "Dusk Stars",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2fRlaiCh5avIYCkXAgsPUL",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273c1ae29bb5e7e53c17b4a4fd8",
            "isrc": "TCAED1902966"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/238d53f1b7ccd414145b8c936e048fc1eae904c1?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/2msAsizgFUJio7s8sgme16",
            "albumUrl": "https://open.spotify.com/album/0f0tXQKGvvaYRsVZrzr4O8",
            "artistArtworkUrl": null,
            "albumName": "Night in the Woods (Original Soundtrack, Vol. 1) [At the End of Everything]"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABygMACVdldCBIYW5kcwAEQzQxOAAAAAAAAV+QABYxdGlub1FwWVh6cFpEcmIwQmpLMWU3AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8xdGlub1FwWVh6cFpEcmIwQmpLMWU3AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2FhZWI1YzlmYjYxMzE5Nzc5OTViN2YwZQEADFRDQUFXMTE1NzA4MgAHc3BvdGlmeQEAGE1pbmVjcmFmdCAtIFZvbHVtZSBBbHBoYQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8zR3Q3ck9qY1pRb0hDZm5LbDVBa0s3AQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80dUZac0cxdlhyUGN2blo0aVNReXJ4AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3Lzc5YjhkNGY4ODcxODc4ZTU1MTZmYWFjMDJlOWJlMjkxZGZlZGQ4ZDA/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1tinoQpYXzpZDrb0BjK1e7",
            "author": "C418",
            "length": 90000,
            "position": 0,
            "title": "Wet Hands",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1tinoQpYXzpZDrb0BjK1e7",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273aaeb5c9fb6131977995b7f0e",
            "isrc": "TCAAW1157082"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/79b8d4f8871878e5516faac02e9be291dfedd8d0?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
            "albumUrl": "https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7",
            "artistArtworkUrl": null,
            "albumName": "Minecraft - Volume Alpha"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB5wMADFF1aWV0IEF1dHVtbgAIVG9ieSBGb3gAAAAAAADCcQAWNmpOeEVjOG5tcEZCajNQamU3QlZieAABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNmpOeEVjOG5tcEZCajNQamU3QlZieAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMwNmYyNTM5ZTk5OTNlNDNhZTlhZGNjNjkBAAxRWjZLNDE4MDIxOTkAB3Nwb3RpZnkBAC5ERUxUQVJVTkUgQ2hhcHRlciAxIChPcmlnaW5hbCBHYW1lIFNvdW5kdHJhY2spAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzZwdXRHVzBLeEdNcmdUWnpwbHAycEYBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOGVlM2M3OWE0NTdjODAwMzJiNTE5ZGQ4ZGJlY2FmYjI1YjJmMzE0NT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6jNxEc8nmpFBj3Pje7BVbx",
            "author": "Toby Fox",
            "length": 49777,
            "position": 0,
            "title": "Quiet Autumn",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6jNxEc8nmpFBj3Pje7BVbx",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27306f2539e9993e43ae9adcc69",
            "isrc": "QZ6K41802199"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/8ee3c79a457c80032b519dd8dbecafb25b2f3145?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/6putGW0KxGMrgTZzplp2pF",
            "artistArtworkUrl": null,
            "albumName": "DELTARUNE Chapter 1 (Original Game Soundtrack)"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACCgMADk1hbGxhcmQncyBUb21iAAxBbGVjIEhvbG93a2EAAAAAAAYK4AAWN28yRDJWZVlySU56MUdlUWN1ZnluMQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svN28yRDJWZVlySU56MUdlUWN1ZnluMQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNjMWFlMjliYjVlN2U1M2MxN2I0YTRmZDgBAAxUQ0FFRDE5MDMwNTUAB3Nwb3RpZnkBAEtOaWdodCBpbiB0aGUgV29vZHMgKE9yaWdpbmFsIFNvdW5kdHJhY2ssIFZvbC4gMSkgW0F0IHRoZSBFbmQgb2YgRXZlcnl0aGluZ10BADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMGYwdFhRS0d2dmFZUnNWWnJ6cjRPOAEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMm1zQXNpemdGVUppbzdzOHNnbWUxNgABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy82NDJjYmI0Y2Y1NGQ3ZjczNWU2NDJkNDU3N2NmMTE2NjJjYzY2YmI0P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7o2D2VeYrINz1GeQcufyn1",
            "author": "Alec Holowka",
            "length": 396000,
            "position": 0,
            "title": "Mallard's Tomb",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7o2D2VeYrINz1GeQcufyn1",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273c1ae29bb5e7e53c17b4a4fd8",
            "isrc": "TCAED1903055"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/642cbb4cf54d7f735e642d4577cf11662cc66bb4?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/2msAsizgFUJio7s8sgme16",
            "albumUrl": "https://open.spotify.com/album/0f0tXQKGvvaYRsVZrzr4O8",
            "artistArtworkUrl": null,
            "albumName": "Night in the Woods (Original Soundtrack, Vol. 1) [At the End of Everything]"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB0gMABkV4aGFsZQAKTGVuYSBSYWluZQAAAAAAAiXnABYza2cyTXBicGFvMGJVR0h4dEtETUNLAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8za2cyTXBicGFvMGJVR0h4dEtETUNLAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2IzNTFmYWZjYjMzNDAwOWMzMjE2YTAzOQEADFFaQVJCMTg1Mjc1OAAHc3BvdGlmeQEAHUNlbGVzdGUgKE9yaWdpbmFsIFNvdW5kdHJhY2spAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzFaZkVUZmVjMFUwMktyS05JOHczR2YBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzNXdzhHTWJDRE1BR3dKSjJoZDd6N3oAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZGE3ZTY4NDVmZTA4Y2M1NWQ4MDllMzYwYWMwY2E0MjE1NTIwZTJhOT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3kg2Mpbpao0bUGHxtKDMCK",
            "author": "Lena Raine",
            "length": 140775,
            "position": 0,
            "title": "Exhale",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3kg2Mpbpao0bUGHxtKDMCK",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b351fafcb334009c3216a039",
            "isrc": "QZARB1852758"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/da7e6845fe08cc55d809e360ac0ca4215520e2a9?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/3Ww8GMbCDMAGwJJ2hd7z7z",
            "albumUrl": "https://open.spotify.com/album/1ZfETfec0U02KrKNI8w3Gf",
            "artistArtworkUrl": null,
            "albumName": "Celeste (Original Soundtrack)"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB3gMAEk15IERlYXJlc3QgRnJpZW5kcwAKTGVuYSBSYWluZQAAAAAAAgjOABYyN3ZKMzRTdHNpMjBDNzl6U3czOUU3AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8yN3ZKMzRTdHNpMjBDNzl6U3czOUU3AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2IzNTFmYWZjYjMzNDAwOWMzMjE2YTAzOQEADFFaQVJCMTg1Mjc2MAAHc3BvdGlmeQEAHUNlbGVzdGUgKE9yaWdpbmFsIFNvdW5kdHJhY2spAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzFaZkVUZmVjMFUwMktyS05JOHczR2YBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzNXdzhHTWJDRE1BR3dKSjJoZDd6N3oAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNzM0YTM1NjRmNjAxMWNlMzk4MmNhYzNkNGVlMWJmMWUyZGJiYjAyOD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "27vJ34Stsi20C79zSw39E7",
            "author": "Lena Raine",
            "length": 133326,
            "position": 0,
            "title": "My Dearest Friends",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/27vJ34Stsi20C79zSw39E7",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b351fafcb334009c3216a039",
            "isrc": "QZARB1852760"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/734a3564f6011ce3982cac3d4ee1bf1e2dbbb028?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/3Ww8GMbCDMAGwJJ2hd7z7z",
            "albumUrl": "https://open.spotify.com/album/1ZfETfec0U02KrKNI8w3Gf",
            "artistArtworkUrl": null,
            "albumName": "Celeste (Original Soundtrack)"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB/AMABlNoYXBlcwAMQWxlYyBIb2xvd2thAAAAAAABjnAAFjdEd0E2d0tHdkVKVjNZVHhqdVcyenAAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzdEd0E2d0tHdkVKVjNZVHhqdVcyenABAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczOWEyODNkNjE3NDZmYzVmZWYxMDQ3MzJiAQAMVENBRUQxOTAzMTY1AAdzcG90aWZ5AQBFTmlnaHQgaW4gdGhlIFdvb2RzIChPcmlnaW5hbCBTb3VuZHRyYWNrLCBWb2wuIDIpIFtIb2xkIG9udG8gQW55dGhpbmddAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzVNNWxzcVN1SlE0VGJ2ek9CTXlPZWUBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzJtc0FzaXpnRlVKaW83czhzZ21lMTYAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvYzFlZGMzZDQ4M2ZlNTBhY2U0ZThmNzFlYzFkZDUwODQyNWVjZDY2YT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7DwA6wKGvEJV3YTxjuW2zp",
            "author": "Alec Holowka",
            "length": 102000,
            "position": 0,
            "title": "Shapes",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7DwA6wKGvEJV3YTxjuW2zp",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2739a283d61746fc5fef104732b",
            "isrc": "TCAED1903165"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/c1edc3d483fe50ace4e8f71ec1dd508425ecd66a?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/2msAsizgFUJio7s8sgme16",
            "albumUrl": "https://open.spotify.com/album/5M5lsqSuJQ4TbvzOBMyOee",
            "artistArtworkUrl": null,
            "albumName": "Night in the Woods (Original Soundtrack, Vol. 2) [Hold onto Anything]"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB4wMAE0xvc3QgYXQgYSBTbGVlcG92ZXIABU9tb3JpAAAAAAAA3nsAFjN2TXlpNHpaS1U0ejI1T1BBZUs5clgAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzN2TXlpNHpaS1U0ejI1T1BBZUs5clgBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczNTYxM2NiM2I5YWY5OGQ0YjU1ZDdiODgxAQAMVENBRkoyMTM4NDkwAAdzcG90aWZ5AQAmT21vcmkgKE9yaWdpbmFsIEdhbWUgU291bmR0cmFjayksIFB0LjEBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vM1NEVTB0c25vTU84NDFxZU9IbFA4QgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNERvVEREZlczZ2tleWIwNlhySUhsZwABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9kNWRmNDg2NDhkZDUxMWIyY2RkZjc3Yzg4YWQwMjAxZWY3YzM3NmRjP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3vMyi4zZKU4z25OPAeK9rX",
            "author": "Omori",
            "length": 56955,
            "position": 0,
            "title": "Lost at a Sleepover",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3vMyi4zZKU4z25OPAeK9rX",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2735613cb3b9af98d4b55d7b881",
            "isrc": "TCAFJ2138490"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/d5df48648dd511b2cddf77c88ad0201ef7c376dc?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/3SDU0tsnoMO841qeOHlP8B",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.1"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB0gMAEVN1Yndvb2ZlciBMdWxsYWJ5AARDNDE4AAAAAAADLrIAFjFPSnhJOGxJV1JxQnZvdUp4VzFuek4AAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzFPSnhJOGxJV1JxQnZvdUp4VzFuek4BAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczYWFlYjVjOWZiNjEzMTk3Nzk5NWI3ZjBlAQAMVENBQVcxMTU3MDcxAAdzcG90aWZ5AQAYTWluZWNyYWZ0IC0gVm9sdW1lIEFscGhhAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzNHdDdyT2pjWlFvSENmbktsNUFrSzcBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzR1RlpzRzF2WHJQY3ZuWjRpU1F5cngAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvODZjYTJmMDE4MTkzNWZkZDhmYjc2Y2EwNzRiN2VjYWRmZjMxMjliNj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1OJxI8lIWRqBvouJxW1nzN",
            "author": "C418",
            "length": 208562,
            "position": 0,
            "title": "Subwoofer Lullaby",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1OJxI8lIWRqBvouJxW1nzN",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273aaeb5c9fb6131977995b7f0e",
            "isrc": "TCAAW1157071"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/86ca2f0181935fdd8fb76ca074b7ecadff3129b6?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
            "albumUrl": "https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7",
            "artistArtworkUrl": null,
            "albumName": "Minecraft - Volume Alpha"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABxwMABlN3ZWRlbgAEQzQxOAAAAAAAA0nMABY0TnNQZ1JZVWRIdTJRNUpSTmdYWVU1AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80TnNQZ1JZVWRIdTJRNUpSTmdYWVU1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2FhZWI1YzlmYjYxMzE5Nzc5OTViN2YwZQEADFRDQUFXMTE1NzA4NwAHc3BvdGlmeQEAGE1pbmVjcmFmdCAtIFZvbHVtZSBBbHBoYQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8zR3Q3ck9qY1pRb0hDZm5LbDVBa0s3AQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80dUZac0cxdlhyUGN2blo0aVNReXJ4AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2Q5OTEzZTdkNGM2ZDU3MGViNWE5OTE4M2JmNWJlYTY0NTUxODRkYTE/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4NsPgRYUdHu2Q5JRNgXYU5",
            "author": "C418",
            "length": 215500,
            "position": 0,
            "title": "Sweden",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4NsPgRYUdHu2Q5JRNgXYU5",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273aaeb5c9fb6131977995b7f0e",
            "isrc": "TCAAW1157087"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/d9913e7d4c6d570eb5a99183bf5bea6455184da1?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
            "albumUrl": "https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7",
            "artistArtworkUrl": null,
            "albumName": "Minecraft - Volume Alpha"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABygMACU1pbmVjcmFmdAAEQzQxOAAAAAAAA+AwABY2eHdoQ2lXWFJFc0FJUVZacUhzd1Z3AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay82eHdoQ2lXWFJFc0FJUVZacUhzd1Z3AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2FhZWI1YzlmYjYxMzE5Nzc5OTViN2YwZQEADFRDQUFXMTE1NzA3NwAHc3BvdGlmeQEAGE1pbmVjcmFmdCAtIFZvbHVtZSBBbHBoYQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8zR3Q3ck9qY1pRb0hDZm5LbDVBa0s3AQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80dUZac0cxdlhyUGN2blo0aVNReXJ4AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2UxMTM5MmYzMTMzNDMyNTdjYWM2N2Q0ODFjZjQ1ZjM5N2QzM2VkNjg/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6xwhCiWXREsAIQVZqHswVw",
            "author": "C418",
            "length": 254000,
            "position": 0,
            "title": "Minecraft",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6xwhCiWXREsAIQVZqHswVw",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273aaeb5c9fb6131977995b7f0e",
            "isrc": "TCAAW1157077"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/e11392f313343257cac67d481cf45f397d33ed68?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
            "albumUrl": "https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7",
            "artistArtworkUrl": null,
            "albumName": "Minecraft - Volume Alpha"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABzgMADU1pY2UgT24gVmVudXMABEM0MTgAAAAAAARLnAAWNWZxamZpTU9GYXBJYjh1RmN4QlN0SAABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNWZxamZpTU9GYXBJYjh1RmN4QlN0SAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNhYWViNWM5ZmI2MTMxOTc3OTk1YjdmMGUBAAxUQ0FBVzExNTcwODAAB3Nwb3RpZnkBABhNaW5lY3JhZnQgLSBWb2x1bWUgQWxwaGEBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vM0d0N3JPamNaUW9IQ2ZuS2w1QWtLNwEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNHVGWnNHMXZYclBjdm5aNGlTUXlyeAABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9iZjE5ZjcxYzYwZjFmN2JlMjc2NTRlNjUxODMzMTViZDJiNDBlMThiP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5fqjfiMOFapIb8uFcxBStH",
            "author": "C418",
            "length": 281500,
            "position": 0,
            "title": "Mice On Venus",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5fqjfiMOFapIb8uFcxBStH",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273aaeb5c9fb6131977995b7f0e",
            "isrc": "TCAAW1157080"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/bf19f71c60f1f7be27654e65183315bd2b40e18b?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
            "albumUrl": "https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7",
            "artistArtworkUrl": null,
            "albumName": "Minecraft - Volume Alpha"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABxAMAA0tleQAEQzQxOAAAAAAAAP3oABY3SzdFN0xLSzUxUGV6U2Nnc3ZWZzlZAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay83SzdFN0xLSzUxUGV6U2Nnc3ZWZzlZAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2FhZWI1YzlmYjYxMzE5Nzc5OTViN2YwZQEADFRDQUFXMTE1NzA2OAAHc3BvdGlmeQEAGE1pbmVjcmFmdCAtIFZvbHVtZSBBbHBoYQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8zR3Q3ck9qY1pRb0hDZm5LbDVBa0s3AQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80dUZac0cxdlhyUGN2blo0aVNReXJ4AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2Y0ZDMyMThhYjU0Yjk5ZDA1MmFjM2M2MjJlNjhiODQxODU4NGVjN2U/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "7K7E7LKK51PezScgsvVg9Y",
            "author": "C418",
            "length": 65000,
            "position": 0,
            "title": "Key",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/7K7E7LKK51PezScgsvVg9Y",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273aaeb5c9fb6131977995b7f0e",
            "isrc": "TCAAW1157068"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f4d3218ab54b99d052ac3c622e68b8418584ec7e?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4uFZsG1vXrPcvnZ4iSQyrx",
            "albumUrl": "https://open.spotify.com/album/3Gt7rOjcZQoHCfnKl5AkK7",
            "artistArtworkUrl": null,
            "albumName": "Minecraft - Volume Alpha"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABxgMABVJ1aW5zAAhUb2J5IEZveAAAAAAAAWh6ABYxdnVTZGsyRUdqaDNlWENYQmJUOVFmAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8xdnVTZGsyRUdqaDNlWENYQmJUOVFmAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzI0ZWRiMjJkMDY4ZWIyNDVhOTI0YjdmMgEADFVTRTgzMTU2OTYwMwAHc3BvdGlmeQEAFFVOREVSVEFMRSBTb3VuZHRyYWNrAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJNMkFlMlN2WmUzZm16VXRsVk9WNVoBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzU3RGxNV21iVklmMnNzSjhRQnBCYXUAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZjZiODAyZjQ0NGI2OTJjZDQyZmQ5ZjFkNzAyNmQ0M2EyMzg0MTBiMj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1vuSdk2EGjh3eXCXBbT9Qf",
            "author": "Toby Fox",
            "length": 92282,
            "position": 0,
            "title": "Ruins",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1vuSdk2EGjh3eXCXBbT9Qf",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569603"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f6b802f444b692cd42fd9f1d7026d43a238410b2?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB1gMAFVV3YSEhIFNvIFRlbXBlcmF0ZeKZqwAIVG9ieSBGb3gAAAAAAADc+wAWM1BWNGJQUHFlenUxOEs0NU1JT3JWWQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svM1BWNGJQUHFlenUxOEs0NU1JT3JWWQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MDQAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2YxZWUzZWI2Njg4NjBjODFiNTg0OTg1NGU3MmU0NDIwYzMwM2RkYTg/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "3PV4bPPqezu18K45MIOrVY",
            "author": "Toby Fox",
            "length": 56571,
            "position": 0,
            "title": "Uwa!! So Temperate♫",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/3PV4bPPqezu18K45MIOrVY",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569604"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/f1ee3eb668860c81b5849854e72e4420c303dda8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB1AMAE1V3YSEhIFNvIEhvbGlkYXnimasACFRvYnkgRm94AAAAAAAAdTAAFjRtV0ZhZmNSRXVLV3YyTWVUVnhEbFEAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRtV0ZhZmNSRXVLV3YyTWVUVnhEbFEBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjE2AAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84Mzc3NWYwMDQzYWIyYWIxYWZmODc0NjhkOWQ0ODA4ZTc3MjQ3NDhmP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4mWFafcREuKWv2MeTVxDlQ",
            "author": "Toby Fox",
            "length": 30000,
            "position": 0,
            "title": "Uwa!! So Holiday♫",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4mWFafcREuKWv2MeTVxDlQ",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569616"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/83775f0043ab2ab1aff87468d9d4808e7724748f?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABxQMABFNob3AACFRvYnkgRm94AAAAAAAAxGIAFjVPeVdOMzd4VGRadGpiU1ExNUZBOEsAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzVPeVdOMzd4VGRadGpiU1ExNUZBOEsBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjIxAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy83ODM2NDE3MzM4OGI2MWU2MzU1MTBkNTE4OWE3ODM3NTQ1NTNjYzdjP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "5OyWN37xTdZtjbSQ15FA8K",
            "author": "Toby Fox",
            "length": 50274,
            "position": 0,
            "title": "Shop",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/5OyWN37xTdZtjbSQ15FA8K",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569621"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/78364173388b61e635510d5189a783754553cc7c?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABygMACVdhdGVyZmFsbAAIVG9ieSBGb3gAAAAAAAHviQAWMk4ybEREYXVjYk1VdzFJMUd4QnJiYwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMk4ybEREYXVjYk1VdzFJMUd4QnJiYwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2MjkAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzllOGQ2N2M2MTMwYzdhYjg0Zjk5ZjUyOGQwYWZiZTI5NWEzMjMxM2Q/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2N2lDDaucbMUw1I1GxBrbc",
            "author": "Toby Fox",
            "length": 126857,
            "position": 0,
            "title": "Waterfall",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2N2lDDaucbMUw1I1GxBrbc",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569629"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/9e8d67c6130c7ab84f99f528d0afbe295a32313d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABygMACUFuIEVuZGluZwAIVG9ieSBGb3gAAAAAAAMvoAAWNmVUY3hrbDlHN0MybXdlakxKN0FtbQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNmVUY3hrbDlHN0MybXdlakxKN0FtbQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMyNGVkYjIyZDA2OGViMjQ1YTkyNGI3ZjIBAAxVU0U4MzE1Njk2ODAAB3Nwb3RpZnkBABRVTkRFUlRBTEUgU291bmR0cmFjawEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yTTJBZTJTdlplM2ZtelV0bFZPVjVaAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81N0RsTVdtYlZJZjJzc0o4UUJwQmF1AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzkyN2MyNGU4ODUxYjUzYmE2MTg1YzY1ZWZkYzJmNjcxYThkN2IyZjM/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6eTcxkl9G7C2mwejLJ7Amm",
            "author": "Toby Fox",
            "length": 208800,
            "position": 0,
            "title": "An Ending",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6eTcxkl9G7C2mwejLJ7Amm",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569680"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/927c24e8851b53ba6185c65efdc2f671a8d7b2f3?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAByAMAB1Jlc3BpdGUACFRvYnkgRm94AAAAAAABvVAAFjRXWWxld0p0ZmVWaEFvUGxBcHE1ZnUAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRXWWxld0p0ZmVWaEFvUGxBcHE1ZnUBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjczAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9jYTBkZDYzZTkyMzk4NmEwMDg1MjU5NzZmZjkwYTA3YTc0YjgzOGIyP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4WYlewJtfeVhAoPlApq5fu",
            "author": "Toby Fox",
            "length": 114000,
            "position": 0,
            "title": "Respite",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4WYlewJtfeVhAoPlApq5fu",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569673"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/ca0dd63e923986a008525976ff90a07a74b838b2?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB0QMAEEhvbWUgKE11c2ljIEJveCkACFRvYnkgRm94AAAAAAAB4AwAFjFEa2pxbmpnYmJwVDdjWUwyRDJtYTQAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzFEa2pxbmpnYmJwVDdjWUwyRDJtYTQBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMjRlZGIyMmQwNjhlYjI0NWE5MjRiN2YyAQAMVVNFODMxNTY5NjExAAdzcG90aWZ5AQAUVU5ERVJUQUxFIFNvdW5kdHJhY2sBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMk0yQWUyU3ZaZTNmbXpVdGxWT1Y1WgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNTdEbE1XbWJWSWYyc3NKOFFCcEJhdQABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9hNDhlZjIxMzg1ZGIxNThhZDE3Mjc5ZjcyMWIxODc3NzIwMGUyY2U1P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "1DkjqnjgbbpT7cYL2D2ma4",
            "author": "Toby Fox",
            "length": 122892,
            "position": 0,
            "title": "Home (Music Box)",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/1DkjqnjgbbpT7cYL2D2ma4",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27324edb22d068eb245a924b7f2",
            "isrc": "USE831569611"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/a48ef21385db158ad17279f721b18777200e2ce5?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/57DlMWmbVIf2ssJ8QBpBau",
            "albumUrl": "https://open.spotify.com/album/2M2Ae2SvZe3fmzUtlVOV5Z",
            "artistArtworkUrl": null,
            "albumName": "UNDERTALE Soundtrack"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB8AMAEEkgU3RpbGwgTG92ZSBZb3UAC0RhbiBTYWx2YXRvAAAAAAACf2MAFjRKbFBJWEZHTThpYnFacnJwdktRREwAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRKbFBJWEZHTThpYnFacnJwdktRREwBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczYjQ3Njg1N2Q5M2IyM2I4YmIyNTliZmI3AQAMUVo5WTIxNzYxNTE2AAdzcG90aWZ5AQAwRG9raSBEb2tpIExpdGVyYXR1cmUgQ2x1YiEgKE9yaWdpbmFsIFNvdW5kdHJhY2spAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzNzUXF5YTFaMW9GZzF1ZVoxOFFCN2sBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzFpMFl6MEljb1pYbFpPazBrQW53NUIAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvN2ZmNzg3MzU4MDEwMzE1MTg2NDU0ZmY2ZjdlYTMwMzFlOGU3NDE1Mj9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "4JlPIXFGM8ibqZrrpvKQDL",
            "author": "Dan Salvato",
            "length": 163683,
            "position": 0,
            "title": "I Still Love You",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/4JlPIXFGM8ibqZrrpvKQDL",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b476857d93b23b8bb259bfb7",
            "isrc": "QZ9Y21761516"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/7ff787358010315186454ff6f7ea3031e8e74152?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/1i0Yz0IcoZXlZOk0kAnw5B",
            "albumUrl": "https://open.spotify.com/album/3sQqya1Z1oFg1ueZ18QB7k",
            "artistArtworkUrl": null,
            "albumName": "Doki Doki Literature Club! (Original Soundtrack)"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB/wMACVJhaW55IERheQAMQWxlYyBIb2xvd2thAAAAAAAGrFUAFjE4YkV2NFJKNWt4NjcwWFZWZzBpWm0AAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzE4YkV2NFJKNWt4NjcwWFZWZzBpWm0BAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczOWEyODNkNjE3NDZmYzVmZWYxMDQ3MzJiAQAMVENBRUQxOTAzMTM1AAdzcG90aWZ5AQBFTmlnaHQgaW4gdGhlIFdvb2RzIChPcmlnaW5hbCBTb3VuZHRyYWNrLCBWb2wuIDIpIFtIb2xkIG9udG8gQW55dGhpbmddAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzVNNWxzcVN1SlE0VGJ2ek9CTXlPZWUBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzJtc0FzaXpnRlVKaW83czhzZ21lMTYAAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNWQ4OTk4YzY4ZTM1MDQxNzFjYzZiMDc3MTAwZWFlY2I0NzM5Mjc1ND9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "18bEv4RJ5kx670XVVg0iZm",
            "author": "Alec Holowka",
            "length": 437333,
            "position": 0,
            "title": "Rainy Day",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/18bEv4RJ5kx670XVVg0iZm",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2739a283d61746fc5fef104732b",
            "isrc": "TCAED1903135"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/5d8998c68e3504171cc6b077100eaecb47392754?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/2msAsizgFUJio7s8sgme16",
            "albumUrl": "https://open.spotify.com/album/5M5lsqSuJQ4TbvzOBMyOee",
            "artistArtworkUrl": null,
            "albumName": "Night in the Woods (Original Soundtrack, Vol. 2) [Hold onto Anything]"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB/QMAB0xvcmkgTS4ADEFsZWMgSG9sb3drYQAAAAAABDYgABYySGZSN0F2dkVSZVNzQzFSVEtJNEd1AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8ySGZSN0F2dkVSZVNzQzFSVEtJNEd1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzlhMjgzZDYxNzQ2ZmM1ZmVmMTA0NzMyYgEADFRDQUVEMTkwMzE1OAAHc3BvdGlmeQEARU5pZ2h0IGluIHRoZSBXb29kcyAoT3JpZ2luYWwgU291bmR0cmFjaywgVm9sLiAyKSBbSG9sZCBvbnRvIEFueXRoaW5nXQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS81TTVsc3FTdUpRNFRidnpPQk15T2VlAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8ybXNBc2l6Z0ZVSmlvN3M4c2dtZTE2AAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2FhOWE5ZTViNmQ0NmRjMzNmZjZlYzg0ZTdlOWVkZmRjM2YzODU5ODg/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "2HfR7AvvEReSsC1RTKI4Gu",
            "author": "Alec Holowka",
            "length": 276000,
            "position": 0,
            "title": "Lori M.",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/2HfR7AvvEReSsC1RTKI4Gu",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2739a283d61746fc5fef104732b",
            "isrc": "TCAED1903158"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/aa9a9e5b6d46dc33ff6ec84e7e9edfdc3f385988?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/2msAsizgFUJio7s8sgme16",
            "albumUrl": "https://open.spotify.com/album/5M5lsqSuJQ4TbvzOBMyOee",
            "artistArtworkUrl": null,
            "albumName": "Night in the Woods (Original Soundtrack, Vol. 2) [Hold onto Anything]"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAACAQMAC0ZpbmRpbmcgQmVhAAxBbGVjIEhvbG93a2EAAAAAAAIu5AAWMzZCeWlYTElVdmg0a1YyeXB0Ylk3cQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMzZCeWlYTElVdmg0a1YyeXB0Ylk3cQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzM5YTI4M2Q2MTc0NmZjNWZlZjEwNDczMmIBAAxUQ0FFRDE5MDMxNDQAB3Nwb3RpZnkBAEVOaWdodCBpbiB0aGUgV29vZHMgKE9yaWdpbmFsIFNvdW5kdHJhY2ssIFZvbC4gMikgW0hvbGQgb250byBBbnl0aGluZ10BADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vNU01bHNxU3VKUTRUYnZ6T0JNeU9lZQEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMm1zQXNpemdGVUppbzdzOHNnbWUxNgABAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84OGYyMGExYTAxZDBkODM2NzFkOTllODkxZGE3YjU2M2JmNjRlMzZkP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "36ByiXLIUvh4kV2yptbY7q",
            "author": "Alec Holowka",
            "length": 143076,
            "position": 0,
            "title": "Finding Bea",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/36ByiXLIUvh4kV2yptbY7q",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2739a283d61746fc5fef104732b",
            "isrc": "TCAED1903144"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/88f20a1a01d0d83671d99e891da7b563bf64e36d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/2msAsizgFUJio7s8sgme16",
            "albumUrl": "https://open.spotify.com/album/5M5lsqSuJQ4TbvzOBMyOee",
            "artistArtworkUrl": null,
            "albumName": "Night in the Woods (Original Soundtrack, Vol. 2) [Hold onto Anything]"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAABxwMADEhlbGxvLCBXb3JsZAAKTG91aWUgWm9uZwAAAAAAAcKuABYyMUFVZGZpNmZMRkRwOUp1TmNIc2ZTAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8yMUFVZGZpNmZMRkRwOUp1TmNIc2ZTAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2JhYmNlY2FlNGE1MGE2ZWVmMzk4YjQ5MwEADFFNNERXMTg0NTY1NwAHc3BvdGlmeQEADEhlbGxvLCBXb3JsZAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8xS0ZHcTM3MTBFMGJGMG45RDlnSzR6AQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC83ak9ZOTFaVTdrbjg2c2xIM2ZCYmFEAAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzM4OGNkZTQ5NDg3NDI0Y2RiNjNmNWMzMzVhYTI0YzkzMWNjNTE3ZDM/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "21AUdfi6fLFDp9JuNcHsfS",
            "author": "Louie Zong",
            "length": 115374,
            "position": 0,
            "title": "Hello, World",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/21AUdfi6fLFDp9JuNcHsfS",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273babcecae4a50a6eef398b493",
            "isrc": "QM4DW1845657"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/388cde49487424cdb63f5c335aa24c931cc517d3?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/7jOY91ZU7kn86slH3fBbaD",
            "albumUrl": "https://open.spotify.com/album/1KFGq3710E0bF0n9D9gK4z",
            "artistArtworkUrl": null,
            "albumName": "Hello, World"
          },
          "userData": {
            
          }
        },
        {
          "encoded": "QAAB3AMADEdvb2QgTW9ybmluZwAFT21vcmkAAAAAAAGnxwAWNnRLZzRidU5COVRLbWFVOEJZUEU3VgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNnRLZzRidU5COVRLbWFVOEJZUEU3VgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNiMDgwOTYxMzQ4YjdjNDQwMmUwMTg2ZTkBAAxUQ0FGTDIxNjU2NzgAB3Nwb3RpZnkBACZPbW9yaSAoT3JpZ2luYWwgR2FtZSBTb3VuZHRyYWNrKSwgUHQuMwEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8wWkJ4NVI0QUJ1YmpzSjZ5b3ZGSlhwAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC80RG9URERmVzNna2V5YjA2WHJJSGxnAAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzcyNWRkYzFjZDBmMWM5NzkwNjk2ZTMwYzhkOTI0MGE5NGUzYzMyNTg/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
          "info": {
            "isSeekable": true,
            "isStream": false,
            "identifier": "6tKg4buNB9TKmaU8BYPE7V",
            "author": "Omori",
            "length": 108487,
            "position": 0,
            "title": "Good Morning",
            "sourceName": "spotify",
            "uri": "https://open.spotify.com/track/6tKg4buNB9TKmaU8BYPE7V",
            "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b080961348b7c4402e0186e9",
            "isrc": "TCAFL2165678"
          },
          "pluginInfo": {
            "isPreview": false,
            "previewUrl": "https://p.scdn.co/mp3-preview/725ddc1cd0f1c9790696e30c8d9240a94e3c3258?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
            "artistUrl": "https://open.spotify.com/artist/4DoTDDfW3gkeyb06XrIHlg",
            "albumUrl": "https://open.spotify.com/album/0ZBx5R4ABubjsJ6yovFJXp",
            "artistArtworkUrl": null,
            "albumName": "Omori (Original Game Soundtrack), Pt.3"
          },
          "userData": {
            
          }
        }
      ]
    }
  },
  "spotifySearchEx": {
    "loadType": "search",
    "data": [
      {
        "encoded": "QAACIwMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAtSaWNrIEFzdGxleQAAAAAAA0JFABY0UFRHM1o2ZWhHa0JGd2p5YnpXa1I4AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80UFRHM1o2ZWhHa0JGd2p5YnpXa1I4AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzE1ZWJiZWRhYWNlZjYxYWYyNDQyNjJhOAEADEdCQVJMOTMwMDEzNQAHc3BvdGlmeQEAGldoZW5ldmVyIFlvdSBOZWVkIFNvbWVib2R5AQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzZlVVcwd3hXdHprRmRhRUZzVEp0bzYBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzBneHlIU3RVc3FwTWFkUlYwRGkxUXQBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViZWYzNGY0Y2ZlZjUyNGE3MDNjY2FkODc3AQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvYjRjNjgyMDg0YzNmZDA1NTM4NzI2ZDBhMTI2YjdlMTRiNmU5MmM4Mz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "4PTG3Z6ehGkBFwjybzWkR8",
          "author": "Rick Astley",
          "length": 213573,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/4PTG3Z6ehGkBFwjybzWkR8",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27315ebbedaacef61af244262a8",
          "isrc": "GBARL9300135"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/b4c682084c3fd05538726d0a126b7e14b6e92c83?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt",
          "albumUrl": "https://open.spotify.com/album/6eUW0wxWtzkFdaEFsTJto6",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebef34f4cfef524a703ccad877",
          "albumName": "Whenever You Need Somebody"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACFwMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAtSaWNrIEFzdGxleQAAAAAAA0PIABY0TDdxTXc4SEkzdk01N2hIUk15YjRZAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80TDdxTXc4SEkzdk01N2hIUk15YjRZAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzM5ODU3NDcxYmE2ZDczMTU3OTdkZDZlNwEADEdCQVJMOTMwMDEzNQAHc3BvdGlmeQEADlRoZSBCZXN0IG9mIE1lAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzZDV2RhU1FONXJzZERrT3JoRmNaMEUBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzBneHlIU3RVc3FwTWFkUlYwRGkxUXQBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViZWYzNGY0Y2ZlZjUyNGE3MDNjY2FkODc3AQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvOWRiMTQzOGQ2OWNiM2JiNGRiNTViYzZiMTZiYTQ0ODVkYjhlZWVmZT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "4L7qMw8HI3vM57hHRMyb4Y",
          "author": "Rick Astley",
          "length": 213960,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/4L7qMw8HI3vM57hHRMyb4Y",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27339857471ba6d7315797dd6e7",
          "isrc": "GBARL9300135"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/9db1438d69cb3bb4db55bc6b16ba4485db8eeefe?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt",
          "albumUrl": "https://open.spotify.com/album/6CWdaSQN5rsdDkOrhFcZ0E",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebef34f4cfef524a703ccad877",
          "albumName": "The Best of Me"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACHAMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAA5UaGUgQmxhY2sgS2V5cwAAAAAAA1dqABY0U2lWTUd4RVFhNlM4c2hOWm1uQll2AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80U2lWTUd4RVFhNlM4c2hOWm1uQll2AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzdkMGIwNDhjYmM2OWJhOTVkZjRlYWJiNgEADFVTTk8xMTAwMDA4OQAHc3BvdGlmeQEAEENvb2wgRGFkIE1peHRhcGUBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vNHdIdVhEUWUxWHluYTNjQXlrNDNITgEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvN21uQkxYSzgyM3ZOeE4zVVdCN0dmegEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWI2MjUyNmQyMWZmZGNlOGQ5YjZlMDkzZTYBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy84ZDhiMmU1MmNiODc3YTQ4YjI2NmQ2N2MwYTEyZTQ2MDdlYzlmOGVlP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "4SiVMGxEQa6S8shNZmnBYv",
          "author": "The Black Keys",
          "length": 218986,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/4SiVMGxEQa6S8shNZmnBYv",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2737d0b048cbc69ba95df4eabb6",
          "isrc": "USNO11000089"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/8d8b2e52cb877a48b266d67c0a12e4607ec9f8ee?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
          "albumUrl": "https://open.spotify.com/album/4wHuXDQe1Xyna3cAyk43HN",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb62526d21ffdce8d9b6e093e6",
          "albumName": "Cool Dad Mixtape"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACHgMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAA5UaGUgQmxhY2sgS2V5cwAAAAAAA1dqABY0VFBsZUZoN0xYYldGSjZsamJ2U1B1AAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80VFBsZUZoN0xYYldGSjZsamJ2U1B1AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzZiZmFmMTlmNWMwNDc3NjliZmQwZjYwYgEADFVTTk8xMTAwMDA4OQAHc3BvdGlmeQEAEkdsb2JhbCBSb2NrIEZ1c2lvbgEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS81VkQ0U1VnMDBtWldnUUVDN2d6Y0ZQAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC83bW5CTFhLODIzdk54TjNVV0I3R2Z6AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYjYyNTI2ZDIxZmZkY2U4ZDliNmUwOTNlNgEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzhkOGIyZTUyY2I4NzdhNDhiMjY2ZDY3YzBhMTJlNDYwN2VjOWY4ZWU/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "4TPleFh7LXbWFJ6ljbvSPu",
          "author": "The Black Keys",
          "length": 218986,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/4TPleFh7LXbWFJ6ljbvSPu",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2736bfaf19f5c047769bfd0f60b",
          "isrc": "USNO11000089"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/8d8b2e52cb877a48b266d67c0a12e4607ec9f8ee?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
          "albumUrl": "https://open.spotify.com/album/5VD4SUg00mZWgQEC7gzcFP",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb62526d21ffdce8d9b6e093e6",
          "albumName": "Global Rock Fusion"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACFAMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAA5UaGUgQmxhY2sgS2V5cwAAAAAAA1dqABY0cWpxTzVtNWU1dmViazl1cGQ3eFVVAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay80cWpxTzVtNWU1dmViazl1cGQ3eFVVAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzQzZjViZDU0M2EyYTFhYjM3ZmI0MGE4YgEADFVTTk8xMTAwMDA4OQAHc3BvdGlmeQEACEJyb3RoZXJzAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzdxRTZSWFl5ejVrajVUbGw3bUpVMHYBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzdtbkJMWEs4MjN2TnhOM1VXQjdHZnoBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViNjI1MjZkMjFmZmRjZThkOWI2ZTA5M2U2AQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNDMxMTY1Nzc5ZWFlNzMxZThhYzBkYzEyZGEzODU2ZDFmNDc2NDRkMz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "4qjqO5m5e5vebk9upd7xUU",
          "author": "The Black Keys",
          "length": 218986,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/4qjqO5m5e5vebk9upd7xUU",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27343f5bd543a2a1ab37fb40a8b",
          "isrc": "USNO11000089"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/431165779eae731e8ac0dc12da3856d1f47644d3?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/7mnBLXK823vNxN3UWB7Gfz",
          "albumUrl": "https://open.spotify.com/album/7qE6RXYyz5kj5Tll7mJU0v",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb62526d21ffdce8d9b6e093e6",
          "albumName": "Brothers"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABswMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAtTbWFzaCBNb3V0aAAAAAAAArf/ABYyYksyZnM3TjhjTXFmeXVBdGM2ZDNJAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8yYksyZnM3TjhjTXFmeXVBdGM2ZDNJAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2Q4YzI1OWJkZDU3ZDdlODAzMDUzMmM5NwEADFVTVU03MjIwOTMxNAAHc3BvdGlmeQEAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzZnYmpRZ3pmT3FSWHk3SFg5WWdnS2wBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzJpRXZuRnNXeFIwU3lxdTJKTm9wQWQBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViZDU4NjYxYjNhYTlkMDc3NTgwZThhYTRlAAAAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "2bK2fs7N8cMqfyuAtc6d3I",
          "author": "Smash Mouth",
          "length": 178175,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/2bK2fs7N8cMqfyuAtc6d3I",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273d8c259bdd57d7e8030532c97",
          "isrc": "USUM72209314"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": null,
          "artistUrl": "https://open.spotify.com/artist/2iEvnFsWxR0Syqu2JNopAd",
          "albumUrl": "https://open.spotify.com/album/6gbjQgzfOqRXy7HX9YggKl",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebd58661b3aa9d077580e8aa4e",
          "albumName": "Never Gonna Give You Up"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACGQMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAxQdXJwbGUgTGlvbnMAAAAAAAMHUgAWMnNwT1lhRFlNaW8yVEpGeGgxRzc4cwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMnNwT1lhRFlNaW8yVEpGeGgxRzc4cwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzM5N2YwMjcwZDYyYzFmNTBlZmI4ZDA5OTUBAAxHQlNNVTYzOTM4MTQAB3Nwb3RpZnkBAA9Ecm9wcyBvZiBNZW1vcnkBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vMVZGQXRVdk9KSlJMeXI5UTgzQjhRcQEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvNWU2bDJ1ZTlrQThNTmtjaDFNOE9ZbgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWIzYmRmYTQwNzBhMzBkMjhmMjNiNGU4NTMBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy85ZjZhNzIzZjE2ZDM2MzcyYjJhMTM2MjhiMjRhYWY0ZjFkZWVkNmI4P2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "2spOYaDYMio2TJFxh1G78s",
          "author": "Purple Lions",
          "length": 198482,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/2spOYaDYMio2TJFxh1G78s",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27397f0270d62c1f50efb8d0995",
          "isrc": "GBSMU6393814"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/9f6a723f16d36372b2a13628b24aaf4f1deed6b8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/5e6l2ue9kA8MNkch1M8OYn",
          "albumUrl": "https://open.spotify.com/album/1VFAtUvOJJRLyr9Q83B8Qq",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb3bdfa4070a30d28f23b4e853",
          "albumName": "Drops of Memory"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACHgMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAlSYWRpb0NsdWIAAAAAAAKH3QAWNGRKWWpSMmxNNlNtWWZMdzJtbkh2YgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNGRKWWpSMmxNNlNtWWZMdzJtbkh2YgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMwNWIwZWI2ZjUzMjk0MWQxOTRiODQwNDIBAAxTRVZXUjIwMDI3MDEAB3Nwb3RpZnkBABdOZXZlciBHb25uYSBHaXZlIFlvdSBVcAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS81T0ZuSnVzeDA4bDNHSE40WTlWZ0dqAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC81NVZFRU5lRkppYVVDcEtKUWtIYXJiAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYjc3ZjViYTFlNWVmY2I4NjM5YjZmZDBiOQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2U1YmQ4N2YzZGE1NjU1ZjQxZWE0ZTgxNjBhM2FmOTlmYjY0MDMxY2E/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "4dJYjR2lM6SmYfLw2mnHvb",
          "author": "RadioClub",
          "length": 165853,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/4dJYjR2lM6SmYfLw2mnHvb",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27305b0eb6f532941d194b84042",
          "isrc": "SEVWR2002701"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/e5bd87f3da5655f41ea4e8160a3af99fb64031ca?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/55VEENeFJiaUCpKJQkHarb",
          "albumUrl": "https://open.spotify.com/album/5OFnJusx08l3GHN4Y9VgGj",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb77f5ba1e5efcb8639b6fd0b9",
          "albumName": "Never Gonna Give You Up"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACHAMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAdIYXpsZXR0AAAAAAACaFsAFjRWbUp4T2M2ZFFxZ2NWbVphOG5XR0sAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzRWbUp4T2M2ZFFxZ2NWbVphOG5XR0sBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczMTI5OGM2ZTdkZTkyOWQ3ZWZiMDExZjlkAQAMVUs2S1cxOTAwMDMzAAdzcG90aWZ5AQAXTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vM2cwdVFEbDZlWVBCR3NiWDlDM2F4ZAEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMXpPM01nem1jd1pMTE5VUXFlVTJYSAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJkMDk3NDMwNmQ0OGM0ODE2NjczMzdiMjgBAGtodHRwczovL3Auc2Nkbi5jby9tcDMtcHJldmlldy9kZTE5ZGQyMDk5NDVhNDVlYjIzYjNkNTRhNWE5NzM4ZmU1OGQxNDVkP2NpZD02MGY3YjAzYTk0ZDE0ZDM1YTIwYzNkZDJiZDg3NzZjYQAAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "4VmJxOc6dQqgcVmZa8nWGK",
          "author": "Hazlett",
          "length": 157787,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/4VmJxOc6dQqgcVmZa8nWGK",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2731298c6e7de929d7efb011f9d",
          "isrc": "UK6KW1900033"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/de19dd209945a45eb23b3d54a5a9738fe58d145d?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/1zO3MgzmcwZLLNUQqeU2XH",
          "albumUrl": "https://open.spotify.com/album/3g0uQDl6eYPBGsbX9C3axd",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebd0974306d48c481667337b28",
          "albumName": "Never Gonna Give You Up"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABvQMAHU5ldmVyLCBOZXZlciBHb25uYSBHaXZlIFlhIFVwAAtCYXJyeSBXaGl0ZQAAAAAABG9qABYzcGVwWkFPdlVDQnQzcVdpOUF4NkFxAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay8zcGVwWkFPdlVDQnQzcVdpOUF4NkFxAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3M2U3YmZkMWY0N2E0YWZkOWI0YjBjYWVkNQEADFVTSVIyMDExMDE0NgAHc3BvdGlmeQEAG0JhcnJ5IFdoaXRlJ3MgR3JlYXRlc3QgSGl0cwEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS83anZwN1ZCYXdldkN5WTRSZndrbnUwAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8zcmZnYmZwUFNmWFk0MGx6Uks3U3l0AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYzAwYjc3MWNhOGI2MjQxYmNmZTMxNmY4ZThhMTEwNzI3MTRlNzllZgAAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "3pepZAOvUCBt3qWi9Ax6Aq",
          "author": "Barry White",
          "length": 290666,
          "position": 0,
          "title": "Never, Never Gonna Give Ya Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/3pepZAOvUCBt3qWi9Ax6Aq",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273e7bfd1f47a4afd9b4b0caed5",
          "isrc": "USIR20110146"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": null,
          "artistUrl": "https://open.spotify.com/artist/3rfgbfpPSfXY40lzRK7Syt",
          "albumUrl": "https://open.spotify.com/album/7jvp7VBawevCyY4Rfwknu0",
          "artistArtworkUrl": "https://i.scdn.co/image/c00b771ca8b6241bcfe316f8e8a11072714e79ef",
          "albumName": "Barry White's Greatest Hits"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABqQMAEU5ldmVyIEdpdmUgWW91IFVwAAxKZXJyeSBCdXRsZXIAAAAAAAK7ygAWMVNJek5QeXFYUHZTWFVXeDB4YUNYUwABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMVNJek5QeXFYUHZTWFVXeDB4YUNYUwEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzM4NTk0MzMxYjY3ZmJjMjExOTRkMmU4YzgBAAxVU0lSMjAwMDA1ODYAB3Nwb3RpZnkBABJUaGUgSWNlIE1hbiBDb21ldGgBADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vYWxidW0vNUFLd2hUNjJTSGUzY05DdGF5R295cwEANmh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hcnRpc3QvMFUybVVKdUprdGhhbnRNR21zSnlnUAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTYxMDAwMGU1ZWJhZTk5M2M2NjUwYzM0OWIxM2IxYTQzNzEAAAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "1SIzNPyqXPvSXUWx0xaCXS",
          "author": "Jerry Butler",
          "length": 179146,
          "position": 0,
          "title": "Never Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/1SIzNPyqXPvSXUWx0xaCXS",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2738594331b67fbc21194d2e8c8",
          "isrc": "USIR20000586"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": null,
          "artistUrl": "https://open.spotify.com/artist/0U2mUJuJkthantMGmsJygP",
          "albumUrl": "https://open.spotify.com/album/5AKwhT62SHe3cNCtayGoys",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebae993c6650c349b13b1a4371",
          "albumName": "The Ice Man Cometh"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACIAMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwABVUaGUgQ29vbHRyYW5lIFF1YXJ0ZXQAAAAAAALeQQAWMm9EM2l2RlpuZnljaXlzMDdwTlhvTgABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMm9EM2l2RlpuZnljaXlzMDdwTlhvTgEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNhNzIwNjA3ZGM3MGFlNzQzZDE4N2YyMDEBAAxBUkY0MTIxMDAwMzIAB3Nwb3RpZnkBAA1Tb25ncyBXZSBMb3ZlAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzFGMkpzckpVV1c4VUw5ZlRVNDF5cXYBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzN0RnZGRGNhNGlud1dNWTV2dXBGYlgBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViMWI3MjA3MDEwNWFiY2EwZGQ2M2I2MDAxAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvODBjOWVkNjA0MGE2MGExZTk2ZmFiZjVmNTlhMzRmODc0Y2M0YTYwOT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "2oD3ivFZnfyciys07pNXoN",
          "author": "The Cooltrane Quartet",
          "length": 187969,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/2oD3ivFZnfyciys07pNXoN",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273a720607dc70ae743d187f201",
          "isrc": "ARF412100032"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/80c9ed6040a60a1e96fabf5f59a34f874cc4a609?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/3tFvFDca4inwWMY5vupFbX",
          "albumUrl": "https://open.spotify.com/album/1F2JsrJUWW8UL9fTU41yqv",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb1b72070105abca0dd63b6001",
          "albumName": "Songs We Love"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACAgMABkhvb2tlZAAMV2h5IERvbid0IFdlAAAAAAADIGoAFjJOMnMyczJ3MGptU0lQTlpjbThKbnIAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzJOMnMyczJ3MGptU0lQTlpjbThKbnIBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczYjUwM2NkYjQ0NGIyODgyNmM0Y2E5MjE3AQAMVVNBVDIxODAyMzAwAAdzcG90aWZ5AQAJOCBMZXR0ZXJzAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzJxSWJIZnM5M3o2ZUR3R29BZENrWEEBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzJqbklCNlhkTHZuSlVlTlR5NUEwSjIBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViOTE2MGZhYzdhMWVjYjhlZTg5YTYzM2FjAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvY2I3MTJkYzhiZGI1MWQzOGMzNTQwODMxNDdkYjcwNTMwZDc1NWY3Nz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "2N2s2s2w0jmSIPNZcm8Jnr",
          "author": "Why Don't We",
          "length": 204906,
          "position": 0,
          "title": "Hooked",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/2N2s2s2w0jmSIPNZcm8Jnr",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b503cdb444b28826c4ca9217",
          "isrc": "USAT21802300"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/cb712dc8bdb51d38c354083147db70530d755f77?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/2jnIB6XdLvnJUeNTy5A0J2",
          "albumUrl": "https://open.spotify.com/album/2qIbHfs93z6eDwGoAdCkXA",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb9160fac7a1ecb8ee89a633ac",
          "albumName": "8 Letters"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACIwMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAA5Gb3JtYWwgQ2hpY2tlbgAAAAAAAYbrABY1YVVORVNFOU8ydXRoR3U5dTFiWkJPAAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS90cmFjay81YVVORVNFOU8ydXRoR3U5dTFiWkJPAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNmQwMDAwYjI3MzQ1YmExZTI1ZmU3ZTg5ZGY3YmE3YTc1NwEADEdCU01VODE3ODE1MgAHc3BvdGlmeQEAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzZqcHh2YzI2R2tvcUtMUnZodThXd3gBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzVrM0N3OFRmTFF0NDBMNWRicXhKS0QBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViOGZiZGZmYzc4OTY3Yjg4NDliNzljOWMzAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvMDhlZTY4ZTZkZWY4NzNmZGE1NTJmYjU3ZGQzOTUyNWVhMjc5ZDA2NT9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "5aUNESE9O2uthGu9u1bZBO",
          "author": "Formal Chicken",
          "length": 100075,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/5aUNESE9O2uthGu9u1bZBO",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b27345ba1e25fe7e89df7ba7a757",
          "isrc": "GBSMU8178152"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/08ee68e6def873fda552fb57dd39525ea279d065?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/5k3Cw8TfLQt40L5dbqxJKD",
          "albumUrl": "https://open.spotify.com/album/6jpxvc26GkoqKLRvhu8Wwx",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb8fbdffc78967b8849b79c9c3",
          "albumName": "Never Gonna Give You Up"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACHgMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAA1UaGVSZWFsU3VsbHlHAAAAAAADRlUAFjNzNHVHbmJsbDA0REZyZDF2R2V5MEkAAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL3RyYWNrLzNzNHVHbmJsbDA0REZyZDF2R2V5MEkBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2ZDAwMDBiMjczYjI5NjJiZDgxZDZmMDhmMGRmYjdlZDNiAQAMUVoyMkIxOTYwNjQzAAdzcG90aWZ5AQATT3RhbWEtVHVuZXMsIFZvbC4gMQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8yalFvcU11TDFxdkVOSjQ5MlZLeG1QAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8zd3JsSkI0NkNTcU1USGtOVlFaazZuAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYjY1ODY3Mzk3ZDllYmFhODFkZWJiZjM5OAEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzIwMTg2Nzc5MGI5NDBjY2VjZGMzOWE3MTc5NTdhMWU4YWQzMDBmZjk/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "3s4uGnbll04DFrd1vGey0I",
          "author": "TheRealSullyG",
          "length": 214613,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/3s4uGnbll04DFrd1vGey0I",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273b2962bd81d6f08f0dfb7ed3b",
          "isrc": "QZ22B1960643"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/201867790b940ccecdc39a717957a1e8ad300ff9?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/3wrlJB46CSqMTHkNVQZk6n",
          "albumUrl": "https://open.spotify.com/album/2jQoqMuL1qvENJ492VKxmP",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb65867397d9ebaa81debbf398",
          "albumName": "Otama-Tunes, Vol. 1"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACFAMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAZLYXBlbmEAAAAAAALtNAAWMFBBaUFsSzFveVBlV3ZldDNaVm1mRQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMFBBaUFsSzFveVBlV3ZldDNaVm1mRQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNlYTE2NWI1MWY1N2Y0NmNiNThiZDdhYzIBAAxVU1g5UDEzMDYxNzkAB3Nwb3RpZnkBABBLYXBlbmEgYW5kIE1vcmUhAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzR5MzJ5bTFsSEcxWDNzYWhuWnFPa0YBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzVBcHpDb2loakF1SEFmR1ZvVnF2NjEBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViZDRkNDVmZTViOWVmYmNmMGEyNWJkYjdkAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvZDJkYTliZTgwN2U4MjYzZTI1YzE1YjIwODkzYTY2NTlkMDdjZTRlOD9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "0PAiAlK1oyPeWvet3ZVmfE",
          "author": "Kapena",
          "length": 191796,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/0PAiAlK1oyPeWvet3ZVmfE",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273ea165b51f57f46cb58bd7ac2",
          "isrc": "USX9P1306179"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/d2da9be807e8263e25c15b20893a6659d07ce4e8?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/5ApzCoihjAuHAfGVoVqv61",
          "albumUrl": "https://open.spotify.com/album/4y32ym1lHG1X3sahnZqOkF",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebd4d45fe5b9efbcf0a25bdb7d",
          "albumName": "Kapena and More!"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACIQMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAxQaGF0YXp6YSBDYXQAAAAAAAH3DAAWNm1iM2VpMVBTenpaZ1p5T2VRTjVRQQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svNm1iM2VpMVBTenpaZ1p5T2VRTjVRQQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNhMzhhYTMyY2FhNzFjMjk4MmU4ZGEyMDYBAAxRWkRBNjIyNzEyMzYAB3Nwb3RpZnkBABdOZXZlciBHb25uYSBHaXZlIFlvdSBVcAEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS82azltWlgyalVPM2UyeGtRVERWU2NBAQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8zZFY4YUNJclVVdFhyT25VNnFvM3JOAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYjI3NzE1YzUzMDQ4NjJjODA1MTUxZTI0YQEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3L2ZmNGM4ZDYyNjY1ODM4ODVjMDI2MjFlYmEwNTc5MWM3ZmFmMWY0ZjU/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "6mb3ei1PSzzZgZyOeQN5QA",
          "author": "Phatazza Cat",
          "length": 128780,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/6mb3ei1PSzzZgZyOeQN5QA",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273a38aa32caa71c2982e8da206",
          "isrc": "QZDA62271236"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/ff4c8d6266583885c02621eba05791c7faf1f4f5?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/3dV8aCIrUUtXrOnU6qo3rN",
          "albumUrl": "https://open.spotify.com/album/6k9mZX2jUO3e2xkQTDVScA",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb27715c5304862c805151e24a",
          "albumName": "Never Gonna Give You Up"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACVAMAJ05ldmVyIEdvbm5hIEdpdmUgWW91IFVwICgyMDIyIFJlbWFzdGVyKQALUmljayBBc3RsZXkAAAAAAANCOAAWMHlOdHRBVndNcjM5cXlPREhOSWtyWQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMHlOdHRBVndNcjM5cXlPREhOSWtyWQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzMzYTY3NjM5Nzc5Y2NhYmQ2MzJlMWE4MGUBAAxHQjVLVzIxMDMzNjkAB3Nwb3RpZnkBADtXaGVuZXZlciBZb3UgTmVlZCBTb21lYm9keSAoRGVsdXhlIEVkaXRpb24gLSAyMDIyIFJlbWFzdGVyKQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS80QzRMdmJZUzBweFhMVzVzR0Q5RUs1AQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8wZ3h5SFN0VXNxcE1hZFJWMERpMVF0AQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYmVmMzRmNGNmZWY1MjRhNzAzY2NhZDg3NwEAa2h0dHBzOi8vcC5zY2RuLmNvL21wMy1wcmV2aWV3LzQwYTc4MGIyMzFlNWVkMTMwNDgzYmVjNzkxN2I2YzlhNGY4YTQ3MDg/Y2lkPTYwZjdiMDNhOTRkMTRkMzVhMjBjM2RkMmJkODc3NmNhAAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "0yNttAVwMr39qyODHNIkrY",
          "author": "Rick Astley",
          "length": 213560,
          "position": 0,
          "title": "Never Gonna Give You Up (2022 Remaster)",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/0yNttAVwMr39qyODHNIkrY",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2733a67639779ccabd632e1a80e",
          "isrc": "GB5KW2103369"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/40a780b231e5ed130483bec7917b6c9a4f8a4708?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/0gxyHStUsqpMadRV0Di1Qt",
          "albumUrl": "https://open.spotify.com/album/4C4LvbYS0pxXLW5sGD9EK5",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5ebef34f4cfef524a703ccad877",
          "albumName": "Whenever You Need Somebody (Deluxe Edition - 2022 Remaster)"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABigMABUhlYXZ5AAZQT1dFUlMAAAAAAAOTdAAWME9CSUhyanY4OE40U0V0ZjJJTm9zNQABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svME9CSUhyanY4OE40U0V0ZjJJTm9zNQEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzNhYzlmNjYwOTljZDJiZTJmODdmM2Q5MWUBAAxVU1VNNzE3MDA1ODAAB3Nwb3RpZnkBAAVIZWF2eQEANWh0dHBzOi8vb3Blbi5zcG90aWZ5LmNvbS9hbGJ1bS8zVkdoOUtVY1M4ZjM0OHBBd3dQaWV2AQA2aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FydGlzdC8wUEdCMHhzQXlEcUhIbHZOUWNncTVTAQBAaHR0cHM6Ly9pLnNjZG4uY28vaW1hZ2UvYWI2NzYxNjEwMDAwZTVlYjFjM2M1MzY5Mzk3MTNmZGZjOGZkMjdhYgAAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "0OBIHrjv88N4SEtf2INos5",
          "author": "POWERS",
          "length": 234356,
          "position": 0,
          "title": "Heavy",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/0OBIHrjv88N4SEtf2INos5",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b273ac9f66099cd2be2f87f3d91e",
          "isrc": "USUM71700580"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": null,
          "artistUrl": "https://open.spotify.com/artist/0PGB0xsAyDqHHlvNQcgq5S",
          "albumUrl": "https://open.spotify.com/album/3VGh9KUcS8f348pAwwPiev",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eb1c3c536939713fdfc8fd27ab",
          "albumName": "Heavy"
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAACNQMAIk5ldmVyIEdvbm5hIEdpdmUgWW91IFVwIC0gQWNvdXN0aWMACk5lbGx5IEhvcGUAAAAAAANS+AAWMmU1M0JpUlV6ZTRQUThQZkxHcVdyRAABADVodHRwczovL29wZW4uc3BvdGlmeS5jb20vdHJhY2svMmU1M0JpUlV6ZTRQUThQZkxHcVdyRAEAQGh0dHBzOi8vaS5zY2RuLmNvL2ltYWdlL2FiNjc2MTZkMDAwMGIyNzM5Zjg1N2MxNzE1ZDI2MDg5NjNiMmIxM2IBAAxTRTVXMzIyMDQwMjEAB3Nwb3RpZnkBACJOZXZlciBHb25uYSBHaXZlIFlvdSBVcCAtIEFjb3VzdGljAQA1aHR0cHM6Ly9vcGVuLnNwb3RpZnkuY29tL2FsYnVtLzZPMW52am85UjJoU21ieTNBSnlWcmQBADZodHRwczovL29wZW4uc3BvdGlmeS5jb20vYXJ0aXN0LzJNWWEyM2laTGZySzZZajRlQUlPR3QBAEBodHRwczovL2kuc2Nkbi5jby9pbWFnZS9hYjY3NjE2MTAwMDBlNWViYTVmMTU5OTdjNDI0NDQyODYzNmJjZDYzAQBraHR0cHM6Ly9wLnNjZG4uY28vbXAzLXByZXZpZXcvNzliNDViNGQzZGEyYmU5NDJlMmQ1OTlhYmI4OWMwZmFhZjk5NjZhYz9jaWQ9NjBmN2IwM2E5NGQxNGQzNWEyMGMzZGQyYmQ4Nzc2Y2EAAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "2e53BiRUze4PQ8PfLGqWrD",
          "author": "Nelly Hope",
          "length": 217848,
          "position": 0,
          "title": "Never Gonna Give You Up - Acoustic",
          "sourceName": "spotify",
          "uri": "https://open.spotify.com/track/2e53BiRUze4PQ8PfLGqWrD",
          "artworkUrl": "https://i.scdn.co/image/ab67616d0000b2739f857c1715d2608963b2b13b",
          "isrc": "SE5W32204021"
        },
        "pluginInfo": {
          "isPreview": false,
          "previewUrl": "https://p.scdn.co/mp3-preview/79b45b4d3da2be942e2d599abb89c0faaf9966ac?cid=60f7b03a94d14d35a20c3dd2bd8776ca",
          "artistUrl": "https://open.spotify.com/artist/2MYa23iZLfrK6Yj4eAIOGt",
          "albumUrl": "https://open.spotify.com/album/6O1nvjo9R2hSmby3AJyVrd",
          "artistArtworkUrl": "https://i.scdn.co/image/ab6761610000e5eba5f15997c4244428636bcd63",
          "albumName": "Never Gonna Give You Up - Acoustic"
        },
        "userData": {
          
        }
      }
    ]
  },
  "soundcloudExample": {
    "loadType": "track",
    "data": {
      "encoded": "QAABVQMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAtSaWNrIEFzdGxleQAAAAAAAz+iAHJPOmh0dHBzOi8vYXBpLXYyLnNvdW5kY2xvdWQuY29tL21lZGlhL3NvdW5kY2xvdWQ6dHJhY2tzOjEyNDI4Njg2MTUvMDcyOTc5MTgtMmE3OS00MWFiLTlmYjYtNTgzNjI4MWRkM2M1L3N0cmVhbS9obHMAAQBFaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9yaWNrLWFzdGxleS1vZmZpY2lhbC9uZXZlci1nb25uYS1naXZlLXlvdS11cC00AQBDaHR0cHM6Ly9pMS5zbmRjZG4uY29tL2FydHdvcmtzLUlXQ2R2VWJSSkxyb1ZsSm4tOXFhemxRLW9yaWdpbmFsLmpwZwEADEdCNUtXMjEwMzM2OQAKc291bmRjbG91ZAAAAAAAAAAA",
      "info": {
        "isSeekable": true,
        "isStream": false,
        "identifier": "O:https://api-v2.soundcloud.com/media/soundcloud:tracks:1242868615/07297918-2a79-41ab-9fb6-5836281dd3c5/stream/hls",
        "author": "Rick Astley",
        "length": 212898,
        "position": 0,
        "title": "Never Gonna Give You Up",
        "sourceName": "soundcloud",
        "uri": "https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4",
        "artworkUrl": "https://i1.sndcdn.com/artworks-IWCdvUbRJLroVlJn-9qazlQ-original.jpg",
        "isrc": "GB5KW2103369"
      },
      "pluginInfo": {
        
      },
      "userData": {
        
      }
    }
  },
  "soundcloudSearchEx": {
    "loadType": "search",
    "data": [
      {
        "encoded": "QAABVQMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAtSaWNrIEFzdGxleQAAAAAAAz+iAHJPOmh0dHBzOi8vYXBpLXYyLnNvdW5kY2xvdWQuY29tL21lZGlhL3NvdW5kY2xvdWQ6dHJhY2tzOjEyNDI4Njg2MTUvMDcyOTc5MTgtMmE3OS00MWFiLTlmYjYtNTgzNjI4MWRkM2M1L3N0cmVhbS9obHMAAQBFaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9yaWNrLWFzdGxleS1vZmZpY2lhbC9uZXZlci1nb25uYS1naXZlLXlvdS11cC00AQBDaHR0cHM6Ly9pMS5zbmRjZG4uY29tL2FydHdvcmtzLUlXQ2R2VWJSSkxyb1ZsSm4tOXFhemxRLW9yaWdpbmFsLmpwZwEADEdCNUtXMjEwMzM2OQAKc291bmRjbG91ZAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "O:https://api-v2.soundcloud.com/media/soundcloud:tracks:1242868615/07297918-2a79-41ab-9fb6-5836281dd3c5/stream/hls",
          "author": "Rick Astley",
          "length": 212898,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-4",
          "artworkUrl": "https://i1.sndcdn.com/artworks-IWCdvUbRJLroVlJn-9qazlQ-original.jpg",
          "isrc": "GB5KW2103369"
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAB1QMAX01lbW9yaWVzIHggQmFkIEFuZCBCb3VqZWUgeCBOZXZlciBHb25uYSBHaXZlIFlvdSBVcCAoVGlrdG9rIE1hc2h1cCkgVGlib2RkIE1pZ29zIHggRGF2aWQgR3VldHRhAAtNSVJBR0xJT1RUQQAAAAAAAnFOAHJPOmh0dHBzOi8vYXBpLXYyLnNvdW5kY2xvdWQuY29tL21lZGlhL3NvdW5kY2xvdWQ6dHJhY2tzOjEyMTk0MDU1MjIvNzQzOTFiYjItYjZmYi00MDIzLTk5NDctMTE3ZDcxZmMyZmEzL3N0cmVhbS9obHMAAQCAaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9pbXNoYWRpeC1mci9tZW1vcmllcy14LWJhZC1hbmQtYm91amVlLXgtbmV2ZXItZ29ubmEtZ2l2ZS15b3UtdXAtdGlrdG9rLW1hc2h1cC10aWJvZGQtbWlnb3MteC1kYXZpZC1ndWV0dGEBAEBodHRwczovL2kxLnNuZGNkbi5jb20vYXJ0d29ya3MtdXEzNzdwa0V4SmJoeXlONy1UbWkwbUEtbGFyZ2UucG5nAQAMUVpINUUyMjczNTM3AApzb3VuZGNsb3VkAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "O:https://api-v2.soundcloud.com/media/soundcloud:tracks:1219405522/74391bb2-b6fb-4023-9947-117d71fc2fa3/stream/hls",
          "author": "MIRAGLIOTTA",
          "length": 160078,
          "position": 0,
          "title": "Memories x Bad And Boujee x Never Gonna Give You Up (Tiktok Mashup) Tibodd Migos x David Guetta",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/imshadix-fr/memories-x-bad-and-boujee-x-never-gonna-give-you-up-tiktok-mashup-tibodd-migos-x-david-guetta",
          "artworkUrl": "https://i1.sndcdn.com/artworks-uq377pkExJbhyyN7-Tmi0mA-large.png",
          "isrc": "QZH5E2273537"
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABYAMAJ05ldmVyIEdvbm5hIEdpdmUgWW91IFVwICgyMDIyIFJlbWFzdGVyKQALUmljayBBc3RsZXkAAAAAAANCYwBzVTpodHRwczovL2FwaS12Mi5zb3VuZGNsb3VkLmNvbS9tZWRpYS9zb3VuZGNsb3VkOnRyYWNrczoxMjU1ODU3OTI4L2JlYjdmZjY0LWRmNmUtNDA4Zi1iZDI5LTkwY2I5OTY4ODlmMC9wcmV2aWV3L2hscwABAEhodHRwczovL3NvdW5kY2xvdWQuY29tL3JpY2stYXN0bGV5LW9mZmljaWFsL25ldmVyLWdvbm5hLWdpdmUteW91LXVwLTIwMjIBADpodHRwczovL2kxLnNuZGNkbi5jb20vYXJ0d29ya3MtZFBhVkNrbW1CTFhyLTAtb3JpZ2luYWwuanBnAQAMR0I1S1cyMTAzMzY5AApzb3VuZGNsb3VkAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "U:https://api-v2.soundcloud.com/media/soundcloud:tracks:1255857928/beb7ff64-df6e-408f-bd29-90cb996889f0/preview/hls",
          "author": "Rick Astley",
          "length": 213603,
          "position": 0,
          "title": "Never Gonna Give You Up (2022 Remaster)",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-2022",
          "artworkUrl": "https://i1.sndcdn.com/artworks-dPaVCkmmBLXr-0-original.jpg",
          "isrc": "GB5KW2103369"
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABVQMAIE5ldmVyIEdvbm5hIEdpdmUgWW91IFVwICg3IiBNaXgpAAtSaWNrIEFzdGxleQAAAAAAAysFAHJVOmh0dHBzOi8vYXBpLXYyLnNvdW5kY2xvdWQuY29tL21lZGlhL3NvdW5kY2xvdWQ6dHJhY2tzOjI1MzUwNTg4MC9jYWVmZmQ2OC1hN2FmLTQwMGEtOTIxZC1jZWI3MmEwOTg4NjkvcHJldmlldy9obHMAAQBFaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9yaWNrLWFzdGxleS1vZmZpY2lhbC9uZXZlci1nb25uYS1naXZlLXlvdS11cC03AQA6aHR0cHM6Ly9pMS5zbmRjZG4uY29tL2FydHdvcmtzLXR2aEFPbjEyWW1ScC0wLW9yaWdpbmFsLmpwZwEADEdCQVJMMDYwMDc4OQAKc291bmRjbG91ZAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "U:https://api-v2.soundcloud.com/media/soundcloud:tracks:253505880/caeffd68-a7af-400a-921d-ceb72a098869/preview/hls",
          "author": "Rick Astley",
          "length": 207621,
          "position": 0,
          "title": "Never Gonna Give You Up (7\" Mix)",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/rick-astley-official/never-gonna-give-you-up-7",
          "artworkUrl": "https://i1.sndcdn.com/artworks-tvhAOn12YmRp-0-original.jpg",
          "isrc": "GBARL0600789"
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABiAMAQ01lbW9yaWVzIFggQmFkIEFuZCBCb3VqZWUgWCBOZXZlciBHb25uYSBHaXZlIFlvdSBVcCAoVGlrdG9rIE1hc2h1cCkABlBzeWNobwAAAAAAAnGDAHJPOmh0dHBzOi8vYXBpLXYyLnNvdW5kY2xvdWQuY29tL21lZGlhL3NvdW5kY2xvdWQ6dHJhY2tzOjEzMDA1NjUwNDcvN2FjNzUwYTAtNGE2NC00YjU4LTg4YWQtOTczYWE0YjE2NDQ0L3N0cmVhbS9obHMAAQBgaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9wc3ljaG95L21lbW9yaWVzLXgtYmFkLWFuZC1ib3VqZWUteC1uZXZlci1nb25uYS1naXZlLXlvdS11cC10aWt0b2stbWFzaHVwAQBCaHR0cHM6Ly9pMS5zbmRjZG4uY29tL2F2YXRhcnMtOEg2T29rcXhrbFB4ZG5scC00S3p5eVEtb3JpZ2luYWwuanBnAAAKc291bmRjbG91ZAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "O:https://api-v2.soundcloud.com/media/soundcloud:tracks:1300565047/7ac750a0-4a64-4b58-88ad-973aa4b16444/stream/hls",
          "author": "Psycho",
          "length": 160131,
          "position": 0,
          "title": "Memories X Bad And Boujee X Never Gonna Give You Up (Tiktok Mashup)",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/psychoy/memories-x-bad-and-boujee-x-never-gonna-give-you-up-tiktok-mashup",
          "artworkUrl": "https://i1.sndcdn.com/avatars-8H6OokqxklPxdnlp-4KzyyQ-original.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABSwMAF05ldmVyIEdvbm5hIEdpdmUgWW91IFVwAAtCYXJyeSBXaGl0ZQAAAAAABG5KAHFPOmh0dHBzOi8vYXBpLXYyLnNvdW5kY2xvdWQuY29tL21lZGlhL3NvdW5kY2xvdWQ6dHJhY2tzOjM4MTUxMDg0OC8yYjJiNTNlMS0zNTJhLTQ2YzctODE0NS0zOWRhZDI1MjdjZWMvc3RyZWFtL2hscwABAEVodHRwczovL3NvdW5kY2xvdWQuY29tL2JhcnJ5LXdoaXRlLW9mZmljaWFsL25ldmVyLWdvbm5hLWdpdmUteW91LXVwLTUBADpodHRwczovL2kxLnNuZGNkbi5jb20vYXJ0d29ya3MtNG8yOG5GTmFHdDFDLTAtb3JpZ2luYWwuanBnAQAMREVCTDYxMDE5Njc1AApzb3VuZGNsb3VkAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "O:https://api-v2.soundcloud.com/media/soundcloud:tracks:381510848/2b2b53e1-352a-46c7-8145-39dad2527cec/stream/hls",
          "author": "Barry White",
          "length": 290378,
          "position": 0,
          "title": "Never Gonna Give You Up",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/barry-white-official/never-gonna-give-you-up-5",
          "artworkUrl": "https://i1.sndcdn.com/artworks-4o28nFNaGt1C-0-original.jpg",
          "isrc": "DEBL61019675"
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABXQMALE5ldmVyIEdvbm5hIEdpdmUgWW91IFVwIChmZWF0LiBGYWN1IENlbGFzY28pAAtNT01PIFNvdW5kegAAAAAAAi4qAHJVOmh0dHBzOi8vYXBpLXYyLnNvdW5kY2xvdWQuY29tL21lZGlhL3NvdW5kY2xvdWQ6dHJhY2tzOjk3NDUzNDQxMC9mMTc3ZmI1Yi00ODJmLTRjYjUtYWY2OS0wZjQ3OGJiOTY0MWEvcHJldmlldy9obHMAAQBBaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9tb21vc291bmR6LXNjL25ldmVyLWdvbm5hLWdpdmUteW91LXVwLWZlYXQBADpodHRwczovL2kxLnNuZGNkbi5jb20vYXJ0d29ya3MtRk5NZjVOclJONXVlLTAtb3JpZ2luYWwuanBnAQAMREVFODYyMTAwMDgxAApzb3VuZGNsb3VkAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "U:https://api-v2.soundcloud.com/media/soundcloud:tracks:974534410/f177fb5b-482f-4cb5-af69-0f478bb9641a/preview/hls",
          "author": "MOMO Soundz",
          "length": 142890,
          "position": 0,
          "title": "Never Gonna Give You Up (feat. Facu Celasco)",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/momosoundz-sc/never-gonna-give-you-up-feat",
          "artworkUrl": "https://i1.sndcdn.com/artworks-FNMf5NrRN5ue-0-original.jpg",
          "isrc": "DEE862100081"
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABYwMAK0JhcnJ5IFdoaXRlIC0gTmV2ZXIsbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAAFUdhaWwgU2FuZGVyc29uIFJhbmRsZQAAAAAABhOWAHBPOmh0dHBzOi8vYXBpLXYyLnNvdW5kY2xvdWQuY29tL21lZGlhL3NvdW5kY2xvdWQ6dHJhY2tzOjQ4MDg3MzkyL2ZhNGRlYmZlLTE2MGItNDdmNi1hZmU1LTRjYzdjZDIxZWU1MS9zdHJlYW0vaGxzAAEASmh0dHBzOi8vc291bmRjbG91ZC5jb20vZ2FpbC1zYW5kZXJzb24tcmFuZGxlL2JhcnJ5LXdoaXRlLW5ldmVyLW5ldmVyLWdvbm5hAQA+aHR0cHM6Ly9pMS5zbmRjZG4uY29tL2F2YXRhcnMtMDAwMDE2MDg4MTAzLWQyemh2bC1vcmlnaW5hbC5qcGcAAApzb3VuZGNsb3VkAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "O:https://api-v2.soundcloud.com/media/soundcloud:tracks:48087392/fa4debfe-160b-47f6-afe5-4cc7cd21ee51/stream/hls",
          "author": "Gail Sanderson Randle",
          "length": 398230,
          "position": 0,
          "title": "Barry White - Never,never gonna give you up",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/gail-sanderson-randle/barry-white-never-never-gonna",
          "artworkUrl": "https://i1.sndcdn.com/avatars-000016088103-d2zhvl-original.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABTQMAI05ldmVyIEdvbm5hIEdpdmUgWW91IFVwIChoYXJkc3R5bGUpAAdESiBTTlVTAAAAAAAB6k4AcU86aHR0cHM6Ly9hcGktdjIuc291bmRjbG91ZC5jb20vbWVkaWEvc291bmRjbG91ZDp0cmFja3M6OTE1OTgwMzk4L2MzMTgwYmYxLTU5ZDUtNGFjNS1hZDA2LWFhZTU0MTEwN2RjMy9zdHJlYW0vaGxzAAEARGh0dHBzOi8vc291bmRjbG91ZC5jb20vY2FybC1wYWVyb24vbmV2ZXItZ29ubmEtZ2l2ZS15b3UtdXAtaGFyZHN0eWxlAQBDaHR0cHM6Ly9pMS5zbmRjZG4uY29tL2FydHdvcmtzLWZPcFJrUUZZbXZHWFdGYjMtbnI3dFNRLW9yaWdpbmFsLmpwZwAACnNvdW5kY2xvdWQAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "O:https://api-v2.soundcloud.com/media/soundcloud:tracks:915980398/c3180bf1-59d5-4ac5-ad06-aae541107dc3/stream/hls",
          "author": "DJ SNUS",
          "length": 125518,
          "position": 0,
          "title": "Never Gonna Give You Up (hardstyle)",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/carl-paeron/never-gonna-give-you-up-hardstyle",
          "artworkUrl": "https://i1.sndcdn.com/artworks-fOpRkQFYmvGXWFb3-nr7tSQ-original.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABcAMANkJ1c3kgU2lnbmFsIC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAgW1R1cmYgTXVzaWMgRW50XQALQnVzeSBTaWduYWwAAAAAAALXTwBxTzpodHRwczovL2FwaS12Mi5zb3VuZGNsb3VkLmNvbS9tZWRpYS9zb3VuZGNsb3VkOnRyYWNrczoxNDg4OTkwOTUvMDBmMThhYWItMWI1OC00MWU4LTg2ZDQtOTJlNzEwYWMyM2JhL3N0cmVhbS9obHMAAQBUaHR0cHM6Ly9zb3VuZGNsb3VkLmNvbS9idXN5c2lnbmFsL2J1c3ktc2lnbmFsLW5ldmVyLWdvbm5hLWdpdmUteW91LXVwLXR1cmYtbXVzaWMtZW50AQA/aHR0cHM6Ly9pMS5zbmRjZG4uY29tL2FydHdvcmtzLTAwMDA3OTA1NTQwOS13Yzg3Nmwtb3JpZ2luYWwuanBnAAAKc291bmRjbG91ZAAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "O:https://api-v2.soundcloud.com/media/soundcloud:tracks:148899095/00f18aab-1b58-41e8-86d4-92e710ac23ba/stream/hls",
          "author": "Busy Signal",
          "length": 186191,
          "position": 0,
          "title": "Busy Signal - Never Gonna Give You Up [Turf Music Ent]",
          "sourceName": "soundcloud",
          "uri": "https://soundcloud.com/busysignal/busy-signal-never-gonna-give-you-up-turf-music-ent",
          "artworkUrl": "https://i1.sndcdn.com/artworks-000079055409-wc876l-original.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      }
    ]
  },
  "ytsearchEx": {
    "loadType": "search",
    "data": [
      {
        "encoded": "QAAA2QMAPFJpY2sgQXN0bGV5IC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAgKE9mZmljaWFsIE11c2ljIFZpZGVvKQALUmljayBBc3RsZXkAAAAAAANACAALZFF3NHc5V2dYY1EAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1kUXc0dzlXZ1hjUQEANGh0dHBzOi8vaS55dGltZy5jb20vdmkvZFF3NHc5V2dYY1EvbWF4cmVzZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "dQw4w9WgXcQ",
          "author": "Rick Astley",
          "length": 213000,
          "position": 0,
          "title": "Rick Astley - Never Gonna Give You Up (Official Music Video)",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "artworkUrl": "https://i.ytimg.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABNQMALlJpY2sgQXN0bGV5IC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAgW0x5cmljc10ADkdseXBob3JpY1ZpYmVzAAAAAAADQ/AAC1FkZXpGeEhmYXR3AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UWRlekZ4SGZhdHcBAJtodHRwczovL2kueXRpbWcuY29tL3ZpL1FkZXpGeEhmYXR3L21heHJlc2RlZmF1bHQuanBnP3NxcD0tb2F5bXdFbUNJQUtFTkFGOHF1S3FRTWE4QUVCLUFILUNZQUMwQVdLQWd3SUFCQUJHSElnUUNnMU1BOD0mcnM9QU9uNENMQzlrUUNIamZaNUlPVEtMUC0zWXZ6ajZrN0EzZwAAB3lvdXR1YmUAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "QdezFxHfatw",
          "author": "GlyphoricVibes",
          "length": 214000,
          "position": 0,
          "title": "Rick Astley - Never Gonna Give You Up [Lyrics]",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=QdezFxHfatw",
          "artworkUrl": "https://i.ytimg.com/vi/QdezFxHfatw/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGHIgQCg1MA8=&rs=AOn4CLC9kQCHjfZ5IOTKLP-3Yvzj6k7A3g",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA1QMAQE5ldmVyIEdvbm5hIEdpdmUgWW91IFVwIHwgUmljayBBc3RsZXkgUm9ja3MgTmV3IFllYXIncyBFdmUgLSBCQkMAA0JCQwAAAAAAA5IQAAtYR3hJRTFocjB3NAABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVhHeElFMWhyMHc0AQA0aHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9YR3hJRTFocjB3NC9tYXhyZXNkZWZhdWx0LmpwZwAAB3lvdXR1YmUAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "XGxIE1hr0w4",
          "author": "BBC",
          "length": 234000,
          "position": 0,
          "title": "Never Gonna Give You Up | Rick Astley Rocks New Year's Eve - BBC",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=XGxIE1hr0w4",
          "artworkUrl": "https://i.ytimg.com/vi/XGxIE1hr0w4/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA0wMAOFJpY2sgQXN0bGV5IC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAgKEdsYXN0b25idXJ5IDIwMjMpAAlCQkMgTXVzaWMAAAAAAAiLgAALbnNDSWVrbGdwMU0AAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1uc0NJZWtsZ3AxTQEANGh0dHBzOi8vaS55dGltZy5jb20vdmkvbnNDSWVrbGdwMU0vbWF4cmVzZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "nsCIeklgp1M",
          "author": "BBC Music",
          "length": 560000,
          "position": 0,
          "title": "Rick Astley - Never Gonna Give You Up (Glastonbury 2023)",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=nsCIeklgp1M",
          "artworkUrl": "https://i.ytimg.com/vi/nsCIeklgp1M/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAAxAMAJ05ldmVyIEdvbm5hIEdpdmUgWW91IFVwICgyMDIyIFJlbWFzdGVyKQALUmljayBBc3RsZXkAAAAAAAND8AALM0JGVGlvNTI5NncAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0zQkZUaW81Mjk2dwEANGh0dHBzOi8vaS55dGltZy5jb20vdmkvM0JGVGlvNTI5NncvbWF4cmVzZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "3BFTio5296w",
          "author": "Rick Astley",
          "length": 214000,
          "position": 0,
          "title": "Never Gonna Give You Up (2022 Remaster)",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=3BFTio5296w",
          "artworkUrl": "https://i.ytimg.com/vi/3BFTio5296w/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAAwQMAJEZhbWlseSBHdXkgLSBOZXZlciBHb25uYSBHaXZlIFlvdSBVcAAPQXJyaWYgSmFsYWx1ZGluAAAAAAABpeAAC0RzQzhqUVhSYlFFAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9RHNDOGpRWFJiUUUBADBodHRwczovL2kueXRpbWcuY29tL3ZpL0RzQzhqUVhSYlFFL21xZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "DsC8jQXRbQE",
          "author": "Arrif Jalaludin",
          "length": 108000,
          "position": 0,
          "title": "Family Guy - Never Gonna Give You Up",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=DsC8jQXRbQE",
          "artworkUrl": "https://i.ytimg.com/vi/DsC8jQXRbQE/mqdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABMgMAKlJpY2sgQXN0bGV5IC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAgW0hRXQAPQWxsS2luZHNPZlN0dWZmAAAAAAADQAgAC0RMenhyekZDeU9zAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9REx6eHJ6RkN5T3MBAJtodHRwczovL2kueXRpbWcuY29tL3ZpL0RMenhyekZDeU9zL21heHJlc2RlZmF1bHQuanBnP3NxcD0tb2F5bXdFbUNJQUtFTkFGOHF1S3FRTWE4QUVCLUFHLUI0QUMwQVdLQWd3SUFCQUJHRThnVHlobE1BOD0mcnM9QU9uNENMRGJMNlVGb2c1bUxyY2dZR1BrVTVSZUxrQWpQUQAAB3lvdXR1YmUAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "DLzxrzFCyOs",
          "author": "AllKindsOfStuff",
          "length": 213000,
          "position": 0,
          "title": "Rick Astley - Never Gonna Give You Up [HQ]",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=DLzxrzFCyOs",
          "artworkUrl": "https://i.ytimg.com/vi/DLzxrzFCyOs/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG-B4AC0AWKAgwIABABGE8gTyhlMA8=&rs=AOn4CLDbL6UFog5mLrcgYGPkU5ReLkAjPQ",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA3wMAQ01pbmVjcmFmdCwgYnV0IGlmIEkgU1RPUCBzaW5naW5nIGEgUklDSyBST0xMIHRoZSB2aWRlbyBlbmRzICNTaG9ydHMAClR3aSBTaG9ydHMAAAAAAADLIAALLXA3WFVmNEd2VlUAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0tcDdYVWY0R3ZWVQEANGh0dHBzOi8vaS55dGltZy5jb20vdmkvLXA3WFVmNEd2VlUvbWF4cmVzZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "-p7XUf4GvVU",
          "author": "Twi Shorts",
          "length": 52000,
          "position": 0,
          "title": "Minecraft, but if I STOP singing a RICK ROLL the video ends #Shorts",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=-p7XUf4GvVU",
          "artworkUrl": "https://i.ytimg.com/vi/-p7XUf4GvVU/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA0wMAPlJpY2sgQXN0bGV5IC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAgKFJlbWFzdGVyZWQgNEsgNjBmcHMsQUkpAAdNdXNSZXN0AAAAAAADQAgAC28tWUJEVHFYX1pVAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9by1ZQkRUcVhfWlUBADBodHRwczovL2kueXRpbWcuY29tL3ZpL28tWUJEVHFYX1pVL21xZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "o-YBDTqX_ZU",
          "author": "MusRest",
          "length": 213000,
          "position": 0,
          "title": "Rick Astley - Never Gonna Give You Up (Remastered 4K 60fps,AI)",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=o-YBDTqX_ZU",
          "artworkUrl": "https://i.ytimg.com/vi/o-YBDTqX_ZU/mqdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAAugMAHU5ldmVyLCBOZXZlciBHb25uYSBHaXZlIFlhIFVwAAtCYXJyeSBXaGl0ZQAAAAAAB0dIAAtRcGJoU2xjZV9lawABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVFwYmhTbGNlX2VrAQA0aHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9RcGJoU2xjZV9lay9tYXhyZXNkZWZhdWx0LmpwZwAAB3lvdXR1YmUAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "QpbhSlce_ek",
          "author": "Barry White",
          "length": 477000,
          "position": 0,
          "title": "Never, Never Gonna Give Ya Up",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=QpbhSlce_ek",
          "artworkUrl": "https://i.ytimg.com/vi/QpbhSlce_ek/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAAwQMAK0JhcnJ5IFdoaXRlIC0gTmV2ZXIgbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXAACDIwbkVSYTkwAAAAAAAHSzAAC1FRNTV5d0p3RjFRAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UVE1NXl3SndGMVEBADBodHRwczovL2kueXRpbWcuY29tL3ZpL1FRNTV5d0p3RjFRL21xZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "QQ55ywJwF1Q",
          "author": "20nERa90",
          "length": 478000,
          "position": 0,
          "title": "Barry White - Never never gonna give you up",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=QQ55ywJwF1Q",
          "artworkUrl": "https://i.ytimg.com/vi/QQ55ywJwF1Q/mqdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABOwMANU5ldmVyIEdvbm5hIEdpdmUgWW91IFVwIC0gUmljayBBc3RsZXkgKEx5cmljcykg7aC87b61AA1Hb2FuZ2UgTHlyaWNzAAAAAAAALuAACzQxaVdnOTF5RnYwAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9NDFpV2c5MXlGdjABAJtodHRwczovL2kueXRpbWcuY29tL3ZpLzQxaVdnOTF5RnYwL21heHJlc2RlZmF1bHQuanBnP3NxcD0tb2F5bXdFbUNJQUtFTkFGOHF1S3FRTWE4QUVCLUFHTUFvQUM0QU9LQWd3SUFCQUJHR0lnVnlobE1BOD0mcnM9QU9uNENMQUhQVzdKVkpBUFByV291TXMwS1NpaUY3S2ZJdwAAB3lvdXR1YmUAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "41iWg91yFv0",
          "author": "Goange Lyrics",
          "length": 12000,
          "position": 0,
          "title": "Never Gonna Give You Up - Rick Astley (Lyrics) 🎵",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=41iWg91yFv0",
          "artworkUrl": "https://i.ytimg.com/vi/41iWg91yFv0/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AGMAoAC4AOKAgwIABABGGIgVyhlMA8=&rs=AOn4CLAHPW7JVJAPPrWouMs0KSiiF7KfIw",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA7AMAT0ZpcnN0IFRpbWUgSGVhcmluZyBSaWNrIEFzdGxleSAiTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAiIFJlYWN0aW9uIHwgQXNpYSBhbmQgQkoAC0FzaWEgYW5kIEJKAAAAAAAJcfgAC0x4T1pnc3Y3WUowAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9THhPWmdzdjdZSjABADRodHRwczovL2kueXRpbWcuY29tL3ZpL0x4T1pnc3Y3WUowL21heHJlc2RlZmF1bHQuanBnAAAHeW91dHViZQAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "LxOZgsv7YJ0",
          "author": "Asia and BJ",
          "length": 619000,
          "position": 0,
          "title": "First Time Hearing Rick Astley \"Never Gonna Give You Up\" Reaction | Asia and BJ",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=LxOZgsv7YJ0",
          "artworkUrl": "https://i.ytimg.com/vi/LxOZgsv7YJ0/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA0gMAN1JpY2sgQXN0bGV5IC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAgKEthcmFva2UgVmVyc2lvbikACVNpbmcgS2luZwAAAAAAA9xIAAs4bGVBQXdNSWlnSQABACtodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PThsZUFBd01JaWdJAQA0aHR0cHM6Ly9pLnl0aW1nLmNvbS92aS84bGVBQXdNSWlnSS9tYXhyZXNkZWZhdWx0LmpwZwAAB3lvdXR1YmUAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "8leAAwMIigI",
          "author": "Sing King",
          "length": 253000,
          "position": 0,
          "title": "Rick Astley - Never Gonna Give You Up (Karaoke Version)",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=8leAAwMIigI",
          "artworkUrl": "https://i.ytimg.com/vi/8leAAwMIigI/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA/QMAXEZvbyBGaWdodGVycyBXaXRoIFJpY2sgQXN0bGV5IC0gTmV2ZXIgR29ubmEgR2l2ZSBZb3UgVXAgIC0gTG9uZG9uIE8yIEFyZW5hIDE5IFNlcHRlbWJlciAyMDE3AA9Hb3Rzb21lUGVhcmxKYW0AAAAAAAQ98AALSWRrQ0Vpb0NwMjQAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1JZGtDRWlvQ3AyNAEANGh0dHBzOi8vaS55dGltZy5jb20vdmkvSWRrQ0Vpb0NwMjQvbWF4cmVzZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "IdkCEioCp24",
          "author": "GotsomePearlJam",
          "length": 278000,
          "position": 0,
          "title": "Foo Fighters With Rick Astley - Never Gonna Give You Up  - London O2 Arena 19 September 2017",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=IdkCEioCp24",
          "artworkUrl": "https://i.ytimg.com/vi/IdkCEioCp24/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAAzgMAI1JpY2sgUm9sbCwgYnV0IGluIFN1cGVyIE1hcmlvIEJyb3MuABlNYXJpb3RyYXZlbDIwOSBBbmltYXRpb25zAAAAAAAAWdgAC0tVTTJwMldlaWNnAAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9S1VNMnAyV2VpY2cBADRodHRwczovL2kueXRpbWcuY29tL3ZpL0tVTTJwMldlaWNnL21heHJlc2RlZmF1bHQuanBnAAAHeW91dHViZQAAAAAAAAAA",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "KUM2p2Weicg",
          "author": "Mariotravel209 Animations",
          "length": 23000,
          "position": 0,
          "title": "Rick Roll, but in Super Mario Bros.",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=KUM2p2Weicg",
          "artworkUrl": "https://i.ytimg.com/vi/KUM2p2Weicg/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA1gMAOSJOZXZlciBHb25uYSBHaXZlIFlvdSBVcCIgQnV0IEl0J3MgMjQgQ2FydG9vbiBJbXByZXNzaW9ucwALQnJvY2sgQmFrZXIAAAAAAAIygAALckF4NUxJdWwxTjgAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1yQXg1TEl1bDFOOAEANGh0dHBzOi8vaS55dGltZy5jb20vdmkvckF4NUxJdWwxTjgvbWF4cmVzZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "rAx5LIul1N8",
          "author": "Brock Baker",
          "length": 144000,
          "position": 0,
          "title": "\"Never Gonna Give You Up\" But It's 24 Cartoon Impressions",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=rAx5LIul1N8",
          "artworkUrl": "https://i.ytimg.com/vi/rAx5LIul1N8/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAABPgMAOlJpY2sgQXN0bGV5ICdOZXZlciBHb25uYSBHaXZlIFlvdSBVcCcgZm9yIEFwcmlsIEZvb2xzJyBEYXkAC2p1c3Qucmlja182AAAAAAAAdTAAC2FfUDZpcUM2eGE4AAEAK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YV9QNmlxQzZ4YTgBAJtodHRwczovL2kueXRpbWcuY29tL3ZpL2FfUDZpcUM2eGE4L21heHJlc2RlZmF1bHQuanBnP3NxcD0tb2F5bXdFbUNJQUtFTkFGOHF1S3FRTWE4QUVCLUFHLUJJQUNnQWlLQWd3SUFCQUJHR1VnVmloVU1BOD0mcnM9QU9uNENMQWFtc2NRUEt3dlNEV0ktLXFabE1ncHRfdlBtUQAAB3lvdXR1YmUAAAAAAAAAAA==",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "a_P6iqC6xa8",
          "author": "just.rick_6",
          "length": 30000,
          "position": 0,
          "title": "Rick Astley 'Never Gonna Give You Up' for April Fools' Day",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=a_P6iqC6xa8",
          "artworkUrl": "https://i.ytimg.com/vi/a_P6iqC6xa8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AG-BIACgAiKAgwIABABGGUgVihUMA8=&rs=AOn4CLAamscQPKwvSDWI--qZlMgpt_vPmQ",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      },
      {
        "encoded": "QAAA9wMAXEt5bGllIE1pbm9ndWUgJiBSaWNrIEFzdGxleSAtIEkgU2hvdWxkIEJlIFNvIEx1Y2t5IC9OZXZlciBHb25uYSBHaXZlIFlvdSBVcCAoSHlkZSBQYXJrIDIwMTgpAAlCQkMgTXVzaWMAAAAAAAQ2IAALT2labFhPQU9MTHcAAQAraHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1PaVpsWE9BT0xMdwEANGh0dHBzOi8vaS55dGltZy5jb20vdmkvT2labFhPQU9MTHcvbWF4cmVzZGVmYXVsdC5qcGcAAAd5b3V0dWJlAAAAAAAAAAA=",
        "info": {
          "isSeekable": true,
          "isStream": false,
          "identifier": "OiZlXOAOLLw",
          "author": "BBC Music",
          "length": 276000,
          "position": 0,
          "title": "Kylie Minogue & Rick Astley - I Should Be So Lucky /Never Gonna Give You Up (Hyde Park 2018)",
          "sourceName": "youtube",
          "uri": "https://www.youtube.com/watch?v=OiZlXOAOLLw",
          "artworkUrl": "https://i.ytimg.com/vi/OiZlXOAOLLw/maxresdefault.jpg",
          "isrc": null
        },
        "pluginInfo": {
          
        },
        "userData": {
          
        }
      }
    ]
  }
};