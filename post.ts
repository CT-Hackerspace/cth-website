import { TwitterApi } from "twitter-api-v2";
import * as readline from "node:readline/promises";
import * as assert from "node:assert/strict";
import {micromark, parse} from "micromark";
import {frontmatter, frontmatterHtml} from 'micromark-extension-frontmatter'
import { JSDOM } from "jsdom";
import * as yaml from "yaml";
import open from "open";




const rlInterface = readline.createInterface(process.stdin, process.stdout, void 0, true);

const slug = process.argv[2] ?? await rlInterface.question("> What blog post would you like to post to social media? ");

const file = `./src/content/blog/${slug}.md`;

process.stdout.write(`Opening file ${file}\n`);
assert.ok(await Bun.file(file).exists());

const postText = await Bun.file(file).text();
const yamlText = postText.slice(3, postText.indexOf("\n---"))
const {
  title,
  description,
} = yaml.parse(yamlText);

const output = micromark(postText, {
  extensions: [frontmatter()],
  htmlExtensions: [frontmatterHtml()]
})

const jsdom = new JSDOM(output);

const images = Array.from(jsdom.window.document.querySelectorAll("img[src]"))
// @ts-ignore SHUT UP ABOUT TYPE SAFETY JEEZ
.map(e => ({ src: `./public${e.src}`, alt: e.alt }));
console.log(images);

// APIkey H47GowUNfNN8Q6AH0LgsOzqFR
// APISecret 0tEisyqXONQwK0J1VDCewgLcaP65RO0ScFuQi8W5RUrpeqtFz1

const postToTwitter = await rlInterface.question("> Would you like to post to x? (y/n)");

if (postToTwitter.toLowerCase() === "y") {
  // const twitterConfig = {
  //   clientId: "TFpnZkh4RjZqd1R3YkstY3BJVWk6MTpjaQ",
  //   clientSecret: "LuWso3uIdUrWaPl5o7sDmwsg4diQ5cA9UN4Z8ngdSNxiLSejW4",
  //   scopes: ["tweet.read", "tweet.write", "users.read"],
  // };

  // const twitterApi = new TwitterApi({
  //   appKey: "159205850-Y5IbpdFwDetpDvELZrHw8huHerHrRMipxiWWpzqI",
  //   appSecret: "mczghdMZDgc0dolwl9pxshUao9X1Xdpy5NrpIKn7FxuBQ",
  //   // username: "cthackerspace",
  //   // password: "S2EcudacH5dec9a4",
  // });
  // 
  // const test = await twitterApi.appLogin();
  // console.log(test);
  
  // const twitterApi = new TwitterApi("AAAAAAAAAAAAAAAAAAAAAFcPggAAAAAAVSkQtPca%2F3suwXxYByEl1eHXZ30%3DZeDmh6H3J8cQ4gHK0GwESlM1GfwFTCPYD41mETCpaoIeTZLRqx");

  const twitterApi = new TwitterApi({
    // clientId: "TFpnZkh4RjZqd1R3YkstY3BJVWk6MTpjaQ",
    // clientSecret: "LuWso3uIdUrWaPl5o7sDmwsg4diQ5cA9UN4Z8ngdSNxiLSejW4",
    appKey: "H47GowUNfNN8Q6AH0LgsOzqFR",
    appSecret: "0tEisyqXONQwK0J1VDCewgLcaP65RO0ScFuQi8W5RUrpeqtFz1",
    // username: "cthackerspace",
    // password: "S2EcudacH5dec9a4",
  });
  const { codeChallenge, codeVerifier, state, url, } = await twitterApi.generateOAuth2AuthLink("http://localhost:4444/callback");
  await open(url);
  

  const media_ids = await Promise.all(images.map(async image => {
    const imageFile = Bun.file(image.src);
    const buffer = Buffer.from(await imageFile.arrayBuffer());
    const id = await api.v1.uploadMedia(buffer, {
      mimeType: imageFile.type, 
      type: imageFile.type,
    });
    console.log("uploaded");
    await api.v1.createMediaMetadata(id, {
      alt_text: image.alt,
    });
    return id;
  }))
  
  const tweetResult = await api.v1.tweet(`${description}`, {
    media_ids: media_ids.slice(0, 3)
  })

  console.log(tweetResult);
}


