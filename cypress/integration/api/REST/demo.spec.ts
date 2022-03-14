import { method } from "cypress/types/bluebird"

context('HTTP Example', () => {

    it('GET', () =>{

        cy.request({

            method : 'GET',
            url : 'https://httpbin.org/get',

        }).then((response) => {
            
            expect(response.body).have.property('url')

        });

    });

    it('POST', () =>{

        cy.request({

            method : 'POST',
            url : 'https://httpbin.org/post',
            body : {
                'name' : 'Pramod',
                'age' : 27
            },
            headers : {
                'content-type' : 'application/json'
            }

        }).then((response) => {
            
            expect(response.body).have.property('json')
            expect(response.body.json).to.deep.equal({
                'name' : "Pramod",
                'age' : 27
            })

        });

    });


});