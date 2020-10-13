const { expect } = require('chai')
const userController = require('../src/controllers/user')

describe('User', () => {


  describe('Create', () => {

    it('create a new user', (done) => {
      const user = {
        username: 'sergkudinov',
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.be.equal(null)
        expect(result).to.be.equal('OK')
        done()
      })
    })

    it('passing wrong user parameters', (done) => {
      const user = {
        firstname: 'Sergei',
        lastname: 'Kudinov'
      }
      userController.create(user, (err, result) => {
        expect(err).to.not.be.equal(null)
        expect(result).to.be.equal(null)
        done()
      })
    })

     it('avoid creating an existing user', (done)=> {
    // // TODO create this test
   
      userController.create(user, (err, result) => {
        expect(user.firstname).to.exist();
        expect(user.lastname).to.exist();
        expect(err).errnot.to.be.equal(null)
        expect(result," Warning: the user already exists").to.be.equal(null)
        done()
      })
    })
    // // Warning: the user already exists
   
  })
     

   describe('Get', ()=> {
  //   // TODO Create test for the get method
       it('get a user by username', (done) => {

  //     // 1. First, create a user to make this unit test independent from the others

  const user = {
    username: 'sergkudinov',
    firstname: 'Sergei',
    lastname: 'Kudinov'
  }
  userController.create(user, (err, result) => {
    expect(err).to.be.equal(null)
    expect(result).to.be.equal('OK')
    done()
  })
  //     // 2. Then, check if the result of the get method is correct 
           chai.request(server)
            .get('/user')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);//je crois que ça veut dire que tout marche
              done();
  //     done()
     })
   })
})

})
