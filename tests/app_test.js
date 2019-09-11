var server   = require('../server'),
    chai     = require('chai'),
    chaiHTTP = require('chai-http'),
    should   = chai.should();

chai.use(chaiHTTP);

reqServer = process.env.HTTP_TEST_SERVER || server

describe('Basic routes tests', function() {
    console.log("Start of describe");

    it('GET to / should return 200', function(done){
        chai.request(reqServer)
        .get('/')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        })

    })

    it('GET to /pagecount should return 200', function(done){
        console.log("Inside Page Count");
        chai.request(reqServer)
        .get('/pagecount')
        .end(function(err, res) {
            res.should.have.status(200);
            done();
        })

    })

    it('GET to /njshello should return 200', function(done){
        console.log("Inside NJS Hello");
        chai.request(reqServer)
        .get('/njshello')
        .end(function(err, res) {
            res.should.have.status(200);
            res.send({ some: 'json' });
            done();
        })

    })
    console.log("End of describe");
})
