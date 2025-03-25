import pino from "pino";

const logger = pino() 

function ValidateQueryParams(req, res, next) {
    const { teamName, teamYear } = req.query

    logger.info("'teamName':", teamName)
    //We check if the name of the team contains any digits
    if(teamName != undefined){
        if (!isNaN(teamName)) {
            return res.status(400).json({ error: 'teamName must be a string' });
        }
        logger.info("'teamName' is correctly entered")
    }else{
        logger.info("'teamName' is not entered")
    }
    
    //We are checking if teamYear is a char
    if(teamYear != undefined ){
        if (isNaN(Number(teamYear))) {
            return res.status(400).json({ error: 'teamYear must be a number' });
        }
        logger.info("'teamYear' is correctly entered")
    }else{
        logger.info("'teamYear' is not entered")
    }

    //We check if the team name is maybe an array, if it is we convert it into an array
    if (teamName?.includes(',')) {
        const validatedTeamName = teamName.split(',')
        req.query.teamName = validatedTeamName
    }

    next()
}

export default ValidateQueryParams
