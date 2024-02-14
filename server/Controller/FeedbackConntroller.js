const FeedbackSchema = require("../Model/FeedbackSchema")


// FETCHING THE FEEDBACK
const FeedBackInsert = async (req, res) => {

    try {
        const { visit, food ,service,experince,recommend,suggestion } = req.body
        
        const feedback = await new FeedbackSchema({
            visit,
            food,
            service,
            experince,
            recommend,
            suggestion,
        })
        const feedbacksave = await feedback.save()
        console.log(feedbacksave)
        res.json(feedbacksave)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal error")

    }
}

// DISPLING THE FEEDBACK FOR ADMIN :- client-http://localhost:3000/admin 

const FeedBackView = async (req, res) => {
    try {
        const feedback = await FeedbackSchema.find()
        res.json(feedback)
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal error")
    }

}

module.exports = {FeedBackInsert, FeedBackView}
