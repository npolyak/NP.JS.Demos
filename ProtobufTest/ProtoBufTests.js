
module;

let grpc = require('@grpc/grpc-js');
let protoLoader = require('@grpc/proto-loader');

require('google-protobuf/google/protobuf/any_pb.js');

const protobuf = require('protobufjs');


const root = protobuf.loadSync('Simple.proto');
  
const test = root.lookupType('subscriptions.TestTopicMessage');

let packed = test.encode({str:'Test'}).finish();

let unpacked = test.decode(packed)

console.log(unpacked);
/*

var loadOptions =     
{
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
};

var packageDefinitions = 
    protoLoader.loadSync('Simple.proto', loadOptions);

var protoDescriptor = 
    grpc.loadPackageDefinition(packageDefinitions);

var subscriptions = 
    protoDescriptor.subscriptions;

var t = subscriptions.TestTopicMessage;

var any = new proto.google.protobuf.Any();

var packed = any.pack({str:'Test'}, 'subscriptions.TestTopicMessage');
*/
//var t = new subscriptions.TestTopicMessage();

