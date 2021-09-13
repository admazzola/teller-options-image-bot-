var assert = require('assert');
var chai = require('chai');  

import AppHelper from '../lib/app-helper'

const web3Config = require('../config/web3config')[AppHelper.getEnvironmentName()]
const expect = chai.expect;


import ImageBot from '../index'
import MongoInterface from '../lib/mongo-interface';

import IndexerTellerOptions from '../lib/IndexerTellerOptions'

var mongoInterface:MongoInterface

describe('MongoDB', function() {
  
    it('can connect to MongoDB', async function() {
  
        let bot = new ImageBot()

         mongoInterface = await bot.connectToMongo( web3Config )
          
        expect(mongoInterface).to.exist 

    });
   
});


describe('Web3 Data Collection', function() {
  

    it('should use testing config', async function() {
  
        
        expect(AppHelper.getEnvironmentName()).to.eql('test') 

    });

    it('can delete records', async function() {
         
        await mongoInterface.deleteManyOptions({})

        let existingOptions = await mongoInterface.findManyOptions({})

        expect(existingOptions.length).to.eql(0) 

    });


    it('can stub a new record', async function() {
         
        await mongoInterface.insertOption({ optionId:0, creator:'0xd59e99927018b995ee9ad6b9003677f1e7393f8a'} )

        let existingOptions = await mongoInterface.findManyOptions({})

        expect(existingOptions.length).to.eql(1) 

    });


   
});