import data from '../data'

export default function handler(req,res){
    const {postID} =req.query;
    const {Posts} = data;

    if(postID){
       const post= Posts.find(value=>value.id==postID)
       return res.status(200).json(post)
    }
    return res.status(404).json({error:"Post not found"})
}