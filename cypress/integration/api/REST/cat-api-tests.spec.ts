import { post } from "cypress/types/jquery";

let voteId;

context('Vote Function', () => {

    it('POST', () => {

        cy.request({

            method : 'POST',
            url : '/votes',
            headers : {
                'content-type' : 'application/json',
                'x-api-key' : '6e8d65d9-b466-4d3b-852c-b2e1f637e101'

            },
            body : {
                'image_id' :'MTYyNjg3Ng',
                'sub_id': 'demo-64b31a',
                'value' : 1
            }

        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.message).to.equal('SUCCESS');
            voteId = response.body.id;
        });


    });

    it('GET', () => {

        cy.request({

            method : 'GET',
            url : '/votes/'+voteId+'',
            headers : {
                'content-type' : 'application/json',
                'x-api-key' : '6e8d65d9-b466-4d3b-852c-b2e1f637e101'

            },

        }).then((response) => {

            expect(response.status).to.eq(200);
        });


    });


    it('DELETE', () => {

        cy.request({

            method : 'DELETE',
            url : '/votes/'+ voteId +'',
            headers : {
                'content-type' : 'application/json',
                'x-api-key' : '6e8d65d9-b466-4d3b-852c-b2e1f637e101'

            },

        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.message).to.equal('SUCCESS');
        });

    });    

})