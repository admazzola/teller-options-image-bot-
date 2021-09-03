
import ImageBuilder from './lib/image-builder'
import Web3Reader from './lib/web3-reader'

import MongoInterface from './lib/mongo-interface'


async function start(){

    let mongoInterface = new MongoInterface()
    await mongoInterface.init('wolfpack_dev',{})
    
    const imageBuilder = new ImageBuilder()
    const web3Reader = new Web3Reader(mongoInterface)
    
    setInterval( web3Reader.run , 8000 );
     
    setInterval( imageBuilder.run , 8000 );
    
    console.log('Booting Teller Options Image Bot')
    
}


start()