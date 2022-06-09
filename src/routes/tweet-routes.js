import * as TweetController from "../controllers/tweet-controller.js";
import {validateRequest} from "../middleware/auth.js";

export default {
    createTweet: {
        method: "POST",
        url:"/tweet",
        preHandler: [validateRequest],
        handler:TweetController.createTweet,
    },

    listAllTweets: {
        method: "GET",
        url:"/tweet",
        preHandler: [validateRequest],
        handler: TweetController.getAllTweet,
    },
    
    listUserTweet: {
        method: "GET",
        url:"/tweet/:id",
        preHandler: [validateRequest],
        handler: TweetController.listUserTweet,
    },
    
   deleteTweet: {
       method: "DELETE",
       url: "/tweet/:id",
       preHandler: [validateRequest],
       handler: TweetController.deleteTweet,
   }

};