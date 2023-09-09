

async function getDraftList(req,res) {
    const workspaceid = req.body.workspace_id;
    console.log("workspaceid ",workspaceid);
    try{
        const { getDraftListDB } = require('../DB/draftDB');
        const draftList = await getDraftListDB(workspaceid);
        if(draftList){
            console.log(draftList);
            res.status(200).json(draftList);
        }else{
            res.status(401).json({ error: 'Error Fetching DraftList!' });
        }
    }
    catch(err){
        console.log(`Getting Draft List Failed: ${err}`);
        res.status(500).json({ error: 'Internal error, please try again.' });
    }
};

async function getDraftForm(req,res) {
    const formid = req.body.form_id;
    console.log(formid);
    try{
        const { getDraftFormDB } = require('../DB/draftDB');
        const draftForm = await getDraftFormDB(formid);
        if(draftForm){
            res.status(200).json(draftForm);
        }else{
            res.status(401).json({ error: 'Error Fetching DraftForm!' });
        }
    }
    catch(err){
        console.log(`Getting Draft Form Failed: ${err}`);
        res.status(500).json({ error: 'Internal error, please try again.' });
    }
}


module.exports = {
    getDraftList,
    getDraftForm
}
