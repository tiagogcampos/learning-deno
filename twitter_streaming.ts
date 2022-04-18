import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { changeRules } from "https://kamekyame.github.io/twitter_api_client/api_v2/tweets/filtered_stream.ts";

const bearerToken = Deno.env.get("TWITTER_API_TOKEN") || "";

