import * as IPFS from 'ipfs-core'
import all from 'it-all'
import toBuffer from 'it-to-buffer'
import { Buffer } from 'buffer';

export async function ipfsFetch(){
  const ipfs = await IPFS.create()
  //const { cid } = await ipfs.add('Hello world')
  //console.info(cid)
  //console.info("Called IPFS list")
  //const result = await ipfs.files.stat('/soclly/appointment/uuid/')

  const obj = { hello: 'world' }
  const buffer = Buffer.from(JSON.stringify(obj))
  console.log("IPFS write data",buffer)
  await ipfs.files.write('/u/File/hello.json', buffer, { create: true })

  //const list = await ipfs.files.ls('/u/File/') // returning a asynchronous generator
  // const result = await all(ipfs.files.ls('/u/File'))
  const rootDirectoryContents = await all(ipfs.files.ls('/u/File'))
  console.info("IPFS ls data result",rootDirectoryContents)
  let bufferedContents = await toBuffer(ipfs.files.read('/u/File/hello.json'))  // a buffer
  const jsonString = Buffer.from(bufferedContents).toString('utf8')
  //console.log(jsonString)
  const parsedData = JSON.parse(jsonString)
  console.log("IPFS write data",parsedData)

  //console.info("IPFS Read buffer result",bufferedContents.toString('utf8'))
  //let contents = bufferedContents.toString(); // a string
  //let secretMessage = (await toBuffer(ipfs.files.read('/soclly/appointment/uuid/sample1.txt'))).toString('utf8')
  //const jsonObj = JSON.parse(contents);
  //const jsonString = JSON.parse(bufferedContents.toString('utf8'));

  //const parsedData = jsonString);

  //console.log("contents is ",secretMessage);
  //console.info("IPFS Read data result",jsonObj)
}