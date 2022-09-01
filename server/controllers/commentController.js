const Comment = require('../models/Comment')

const getPostComments = (req, res, next) => {
  Comment
    .find({post:req.params.postid})
    .populate('user', ['_id', '__v', 'username'])
    .exec((err, comments) => {
      if(err) return next(err)
      res.json({comments: comments})
    })
}

const getPostCommentsCount = (req, res, next) => {
  Comment
    .countDocuments({post: req.params.postid}, (err, count) => {
      if(err) return next(err)
      res.json({count: count})
  })
}

const createComment = (req, res, next) => {
  const {text, postid, userid, timestamp, parent} = req.body

  const comment = new Comment({
    text,
    timestamp,
    parent,
    user: userid,
    post: postid,
    isDeletedWithChildren: false
  })
  
  comment.save(function(err){
    if(err){
      console.log(err)
      return res.sendStatus(400)
    } else {
      return res.status(201).json(comment)
    }
  })
}

const deleteComment = (req, res, next) => {
  const {commentid} = req.params

  Comment.findByIdAndDelete(commentid, (err, comment) => {
    if(err) {
      return res.status(400)
    }else {
      return res.status(200).json(comment)
    }
  })
}

const flagCommentWithChildren = (req, res, next) => {
  const {commentid} = req.params
  
  const comment = new Comment({
    
  })
  console.log(commentsArray)
}


module.exports = { getPostComments, getPostCommentsCount, createComment, deleteComment, flagCommentWithChildren}