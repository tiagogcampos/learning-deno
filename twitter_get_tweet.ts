import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { getTweet } from "https://kamekyame.github.io/twitter_api_client/api_v2/tweets/lookup.ts";

const bearerToken = Deno.env.get("TWITTER_API_TOKEN") || "";

const res = await getTweet(bearerToken, "1516123363172880392");

console.log(res);
