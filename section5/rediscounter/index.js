const express = require('express'),
redis = require('redis'),
app = express,
port = 8081;
// connects to redis client 
client = redis.createClient();

// sets creates the visits key, sets initial visits value to 0
client.set('visits', 0);

app.get('/', (req, res) =>{

    // utilizes the visits key set above
    client.get('visits', (err, visits) =>{

        res.send('Number of visits is ' + visits);

        // saves an entry, under the key visits: numberOfVisitors
        client.set('visits', visits + 1);
    })
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`)
})